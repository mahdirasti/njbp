import { render, screen } from "@testing-library/react";
import HomePage from "../page";

describe("Home Tests", () => {
  it("renders all sections", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
