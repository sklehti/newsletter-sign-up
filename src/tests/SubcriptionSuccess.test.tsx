import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SubcriptionSuccess from "../components/SubcriptionSuccess";

describe("<SubcriptionSuccess />", () => {
  // Mock the setSubscription function
  const mockSetSubscription = jest.fn();
  const { getByText } = render(
    <SubcriptionSuccess setSubscription={mockSetSubscription} />
  );

  test("renders Stay updated! header", () => {
    const headerElement = getByText(
      /A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription./i
    );
    expect(headerElement).toBeDefined();
  });

  test("renders images correctly", () => {
    const { getByAltText } = render(
      <SubcriptionSuccess setSubscription={mockSetSubscription} />
    );
    const successIcon = getByAltText("success icon");
    expect(successIcon).toBeInTheDocument();
  });

  test("test button pressing", () => {
    const { getByRole } = render(
      <SubcriptionSuccess setSubscription={mockSetSubscription} />
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(mockSetSubscription.mock.calls).toHaveLength(1);
    expect(mockSetSubscription.mock.calls).not.toHaveLength(2);
  });
});
