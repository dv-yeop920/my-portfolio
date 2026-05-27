import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import RootLayout from "./layout";

describe("RootLayout", () => {
  it("declares smooth-scroll handling for Next route transitions", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <main />
      </RootLayout>,
    );

    expect(markup).toContain('data-scroll-behavior="smooth"');
  });
});
