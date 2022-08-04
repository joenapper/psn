import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import config from "../../config";

import Card from ".";

const testData = config[0];

describe("Card", () => {
  it("should render a Card component", () => {
    render(<Card testId="card" imgSrc="" {...testData} />);
    const element = screen.getByTestId("card");
    expect(element).toBeInTheDocument();
  });
});
