import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loader from ".";

describe("Loader", () => {
  it("should render a Loader component", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
