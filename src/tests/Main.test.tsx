import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "../components/Main";

describe("<Main />", () => {
  // Mock the setSubscription function
  const mockSetSubscription = jest.fn();
  const { getByText } = render(<Main setSubscription={mockSetSubscription} />);

  test("renders Stay updated! header", () => {
    const headerElement = getByText(/Stay updated!/i);
    expect(headerElement).toBeDefined();
  });

  test("renders images correctly", () => {
    const { getByAltText } = render(
      <Main setSubscription={mockSetSubscription} />
    );
    const mobileImage = getByAltText("mobile image");
    const desktopImage = getByAltText("desktop image");
    expect(mobileImage).toBeInTheDocument();
    expect(desktopImage).toBeInTheDocument();
  });

  test("renders list items correctly", () => {
    const { getByText } = render(
      <Main setSubscription={mockSetSubscription} />
    );
    const listItem1 = getByText(/Product discovery and building what matters/i);
    const listItem2 = getByText(/Measuring to ensure updates are a success/i);
    const listItem3 = getByText(/And much more!/i);
    expect(listItem1).toBeInTheDocument();
    expect(listItem2).toBeInTheDocument();
    expect(listItem3).toBeInTheDocument();
  });
});
