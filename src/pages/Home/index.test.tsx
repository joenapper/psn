import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from ".";

describe("Home", () => {
  it("should render a Home component", () => {
    render(<Home data={[]} />);
    const page = screen.getByTestId("home-page");
    expect(page).toBeInTheDocument();
  });
});
