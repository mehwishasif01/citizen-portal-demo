import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  { question: "How to register?", answer: "Click on the Register button..." },
  {
    question: "How to contact support?",
    answer: "Email us at support@xyz.com",
  },
];

const FAQsPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search FAQs"
        fullWidth
        style={{ marginBottom: "1rem" }}
      />
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQsPage;
