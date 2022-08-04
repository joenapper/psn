import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from ".";

describe("Button", () => {
  it("should render a Button component", () => {
    render(<Button id="submit">Submit</Button>);
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeInTheDocument();
  });
});
