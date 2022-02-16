import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial conditions", () => {
   render(<SummaryForm />);
   const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
   });
   expect(checkbox).not.toBeChecked();

   const submitButton = screen.getByRole("button", {
      name: /confirm order/i,
   });
   expect(submitButton).toBeDisabled();
});

test("checking checkbox enables button and vice versa", () => {
   render(<SummaryForm />);
   const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
   });
   const submitButton = screen.getByRole("button", {
      name: /confirm order/i,
   });
   fireEvent.click(checkbox);
   expect(submitButton).toBeEnabled();

   fireEvent.click(checkbox);
   expect(submitButton).toBeDisabled();
});
