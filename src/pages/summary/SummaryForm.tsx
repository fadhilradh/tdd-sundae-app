import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { OverlayTrigger, Popover } from "react-bootstrap";

export default function SummaryForm() {
   const [cbChecked, setCbChecked] = useState(false);

   const popover = (
      <Popover id="popover-basic">
         <Popover.Body>No ice cream will actually be delivered</Popover.Body>
      </Popover>
   );

   const checkboxLabel = (
      <span>
         I agree to
         <OverlayTrigger placement="right" overlay={popover}>
            <span style={{ color: "midnightblue" }}>Terms and Conditions</span>
         </OverlayTrigger>
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
