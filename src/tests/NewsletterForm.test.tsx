import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewsletterForm from "../components/NewsletterForm";

describe("<NewsletterForm>", () => {
  // Mock the setSubscription function
  const mockSetSubscription = jest.fn();

  test("renders input and button", () => {
    const { getByPlaceholderText, getByRole } = render(
      <NewsletterForm setSubscription={mockSetSubscription} />
    );
    const input = getByPlaceholderText("email@company.com");
    const button = getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("element has correct style", () => {
    const { getByText } = render(
      <label style={{ display: "none" }}>Valid email required</label>
    );
    const element = getByText("Valid email required");
    expect(element).not.toBeVisible();
  });

  test("handles input correctly", () => {
    const { getByPlaceholderText } = render(
      <NewsletterForm setSubscription={mockSetSubscription} />
    );
    const input = getByPlaceholderText("email@company.com") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input.value).toBe("test@example.com");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input.value).not.toBe("wrongtest@example.com");
  });

  test("input value updated correctly after pressing the button", () => {
    const { getByPlaceholderText, getByRole } = render(
      <NewsletterForm setSubscription={mockSetSubscription} />
    );
    const input = getByPlaceholderText("email@company.com") as HTMLInputElement;
    const button = getByRole("button");

    fireEvent.change(input, { target: { value: "email@company.com" } });
    fireEvent.click(button);
    expect(mockSetSubscription.mock.calls).toHaveLength(1);
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "invalid email" } });
    fireEvent.click(button);
    expect(input.value).not.toBe("");
  });
});
