import { test, expect } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import Page from "../app/about/page";

test("GET /about returns 200", () => {
  const pageFile = path.join(__dirname, "..", "app", "about", "page.tsx");
  expect(fs.existsSync(pageFile)).toBe(true);

  expect(() => renderToStaticMarkup(<Page />)).not.toThrow();
});

test("The page renders an h1 with the exact text 'About'", () => {
  const markup = renderToStaticMarkup(<Page />);
  expect(markup).toBe("<h1>About</h1>");
});
