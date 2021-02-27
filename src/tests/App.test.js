import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders app title", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const apptitle = screen.getByText(/Surreal Estate/i);
  expect(apptitle).toBeInTheDocument();
});
