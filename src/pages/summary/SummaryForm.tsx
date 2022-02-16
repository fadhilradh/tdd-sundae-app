import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
   const [cbChecked, setCbChecked] = useState(false);

   const checkboxLabel = (
      <span>
         I agree to{" "}
         <span style={{ color: "midnightblue" }}>Terms and Conditions</span>
      </span>
   );

   return (
      <Form>
         <Form.Group controlId="terms-and-conditions">
            <Form.Check
               type="checkbox"
               checked={cbChecked}
               label={checkboxLabel}
               onChange={(e) => setCbChecked(e.target.checked)}
            />
         </Form.Group>
         <Button variant="primary" type="submit" disabled={!cbChecked}>
            Confirm Order
         </Button>
      </Form>
   );
}
