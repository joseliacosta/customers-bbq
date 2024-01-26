import { describe, expect, it } from "vitest";

import App from "./App";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    expect(screen.getByRole("heading")).toBeInTheDocument("React");
  });
});
