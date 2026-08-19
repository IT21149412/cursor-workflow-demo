import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Stock Shelf", () => {
  it("shows in-stock count for the wireless mouse", () => {
    render(<App />);
    expect(screen.getByText("12 in stock")).toBeInTheDocument();
  });
});
