import { describe, expect, it } from "vitest";

import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
