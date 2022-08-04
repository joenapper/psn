import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Page from ".";

describe("Page", () => {
  it("should render a Page component", () => {
    render(<Page hasError={false} />);
    const page = screen.getByTestId("page-content");
    expect(page).toBeInTheDocument();
  });

  it("should render an error message if error occurs", () => {
    render(<Page hasError={true} />);
    const page = screen.getByTestId("error");
    expect(page).toBeInTheDocument();
  });
});
