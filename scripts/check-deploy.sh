#!/usr/bin/env bash
# =============================================================================
# scripts/check-deploy.sh — post-deploy smoke test against a real, public
# HTTP endpoint (default: the live Railway domain), run as a plain
# unauthenticated GET with no JS execution — exactly what a crawler does.
#
# Region list + expected content come from scripts/list-regions.js (the same
# app/js/data/*.js files server.js itself discovers from), so a newly added
# region is covered automatically — nothing here is a manually maintained
# list of slugs.
#
# Usage:
#   ./scripts/check-deploy.sh [base-url]
#   BASE_URL=https://your-domain ./scripts/check-deploy.sh
#
# Exits non-zero (and prints which check failed) the moment any page is
# unreachable or missing its expected content.
# =============================================================================
set -euo pipefail

BASE_URL="${1:-${BASE_URL:-https://hy2market-case-studies.up.railway.app}}"
BASE_URL="${BASE_URL%/}"

check_page () {
  local url="$1" expected="$2"
  echo "checking: $url"

  local body
  if ! body="$(curl -fsSL --max-time 20 "$url")"; then
    echo "FAIL: could not fetch $url" >&2
    return 1
  fi

  if [ -z "$body" ]; then
    echo "FAIL: $url returned an empty body" >&2
    return 1
  fi

  if ! printf '%s' "$body" | grep -qF "$expected"; then
    echo "FAIL: $url response is missing expected content: \"$expected\"" >&2
    return 1
  fi

  echo "  ok — contains \"$expected\""
}

check_redirect () {
  local url="$1" expected_location="$2"
  echo "checking redirect: $url"

  local status location
  status="$(curl -s -o /dev/null -w '%{http_code}' "$url")"
  location="$(curl -s -o /dev/null -D - "$url" | tr -d '\r' | awk -F': ' 'tolower($1)=="location"{print $2}')"

  if [ "$status" != "301" ] && [ "$status" != "302" ]; then
    echo "FAIL: $url expected a 301/302 redirect, got $status" >&2
    return 1
  fi
  if [ "$location" != "$expected_location" ]; then
    echo "FAIL: $url redirected to \"$location\", expected \"$expected_location\"" >&2
    return 1
  fi

  echo "  ok — ${status} -> ${location}"
}

fail=0

while IFS=$'\t' read -r slug expect; do
  [ -z "$slug" ] && continue
  check_page "$BASE_URL/case-studies/$slug/" "$expect" || fail=1
  check_redirect "$BASE_URL/case-study.html?region=$slug" "/case-studies/$slug/" || fail=1
done < <(node "$(dirname "$0")/list-regions.js")

check_page "$BASE_URL/" "Hy2Market" || fail=1
check_page "$BASE_URL/robots.txt" "Sitemap:" || fail=1
check_page "$BASE_URL/sitemap.xml" "<urlset" || fail=1

if [ "$fail" -ne 0 ]; then
  echo "One or more checks FAILED." >&2
  exit 1
fi

echo "All deploy checks passed against $BASE_URL"
