Audit the selected UI for empty/zero/null bugs.
Look for truthy checks where 0 is valid (stock, index, page, count).
List file + line. Do not edit unless I ask.
Prefer explicit checks: === 0, == null, length === 0.
