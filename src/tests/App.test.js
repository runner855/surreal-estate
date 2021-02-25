import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders app title", () => {
  render(<App />);
  const apptitle = screen.getByText(/Surreal Estate/i);
  expect(apptitle).toBeInTheDocument();
});
