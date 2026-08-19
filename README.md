# Stock Shelf — Cursor workflow demo

Tiny Vite + React + TypeScript app for a 12-minute Cursor demo. Marvel code is not used here.

**Planted bug:** `{item.stock && …}` hides `stock: 0`. The USB-C Cable row looks empty. Tests still pass because they only assert the happy path (`12 in stock`).

## Run it

```bash
cd cursor-workflow-demo
npm install
npm run dev
```

Open the app. The USB-C Cable stock cell is blank. That is expected on `main`.

```bash
npm run typecheck
npm test
```

Both should pass **with the bug still present**.

## Live demo (about 12 minutes)

Open this folder in Cursor. Create a branch: `fix/zero-stock`. Then walk the loop in order.

### 1. Understand — `/explain` or Plan Mode (2 min)

```
/explain Why does the USB-C cable row show no stock badge? Walk through the render path. Do not edit files.
```

Or Plan Mode (`Shift+Tab`):

```
Plan a fix so stock 0 shows "Out of stock", empty/null still shows "Unknown", and positive numbers stay as "N in stock". Match existing styles. Do not implement yet.
```

### 2. Current docs — Context7 (1 min)

This repo includes `.cursor/mcp.json` for [Context7](https://github.com/upstash/context7). In **Cursor Settings → MCP**, enable `context7` and wait until it is connected (green). You should see tools like `resolve-library-id` and `query-docs`. Restart Cursor if it stays disconnected.

Then prompt:

```
Use Context7 MCP tools only (resolve-library-id then query-docs). Do not web search. Confirm the current Vitest + React Testing Library pattern for rendering a component and asserting text. We will add a test for stock 0.
```

Success looks like MCP tool calls, not "Search web: Context7…". If it searches the web, Skip that and check MCP is connected.

### 3. Agent implements (2 min)

```
Implement the plan. Add a vitest case for stock 0 → "Out of stock". Do not change the mock data; the USB-C cable must stay at 0.
```

### 4. Verify until green — Run Mode (2 min)

In **Settings → Agents → Run Mode**, use Allowlist or Auto-review. Allow `tsc`, `vitest`, `npm test`, `mkdir`. Do not use Run Everything.

```
Run npm run typecheck and npm test. Keep fixing until both pass. Do not stop on the first error.
```

### 5. Browser (2 min)

With `npm run dev` running:

```
@browser Open the app, find the USB-C cable row, screenshot it. Confirm the stock cell says "Out of stock", not blank. Also check a row with stock 12.
```

### 6. Review the diff vs main (2 min)

Source Control → **Find Issues**, or:

```
/agent-review Compare this branch to main. Look for remaining falsy checks on numbers, missed empty states, and tests that only cover the happy path.
```

Then show `git diff main`.

## One sentence for the team

We did not sprinkle six Cursor tricks. We planned the change, pulled current test docs, implemented, let the agent run typecheck and tests until green, verified the zero UI in the browser, then reviewed the diff against main before push.
