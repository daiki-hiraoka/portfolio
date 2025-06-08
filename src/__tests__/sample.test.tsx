import { render, screen } from "@testing-library/react";
import React from "react";

describe("Sample test", () => {
  it("renders text", () => {
    render(<div>Hello Jest!</div>);
    expect(screen.getByText("Hello Jest!")).not.toBeNull();
  });
});
