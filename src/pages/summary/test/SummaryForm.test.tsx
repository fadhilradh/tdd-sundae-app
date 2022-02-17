import {
   render,
   screen,
   waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
   userEvent.click(checkbox);
   expect(submitButton).toBeEnabled();

   userEvent.click(checkbox);
   expect(submitButton).toBeDisabled();
});

test("popover responds to hover", async () => {
   // starts out hidden
   render(<SummaryForm />);
   const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
   );
   expect(nullPopover).not.toBeInTheDocument();

   //appears on hover
   const termsAndCond = screen.getByText(/terms and conditions/i);
   userEvent.hover(termsAndCond);

   const popover = screen.getByText(/no ice cream will actually be delivered/i);
   expect(popover).toBeInTheDocument();

   userEvent.unhover(termsAndCond);
   await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
   );
});
