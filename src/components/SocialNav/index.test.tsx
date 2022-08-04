import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SocialNav from ".";

describe("SocialNav", () => {
  it("should render a SocialNav component", () => {
    render(<SocialNav />);
    const nav = screen.getByTestId("social-nav");
    expect(nav).toBeInTheDocument();
  });
});
