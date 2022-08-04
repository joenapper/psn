import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MainNav from ".";

describe("MainNav", () => {
  it("should render a MainNav component", () => {
    render(<MainNav />);
    const nav = screen.getByTestId("main-nav");
    expect(nav).toBeInTheDocument();
  });
});
