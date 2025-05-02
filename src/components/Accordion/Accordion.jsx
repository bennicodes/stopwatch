import AccordionItem from "../AccordionItem/AccordionItem";
import styles from "./Accordion.module.css";

const faqData = [
  {
    id: 1,
    question: "What is BudgetBuddy?",
    answer:
      "BudgetBuddy is a simple expense tracker app designed to help you manage your personal finances by logging expenses, categorizing them, and visualizing your spending.",
  },
  {
    id: 2,
    question: "How do I add a new expense?",
    answer:
      "Click the 'Add Expense' button, fill in the form with the amount, category, and description, then click 'Save' to log the expense.",
  },
  {
    id: 3,
    question: "Can I edit or delete an expense after adding it?",
    answer:
      "Yes! Each expense entry includes edit and delete icons. Click the edit icon to modify the details or the trash icon to remove it.",
  },
  {
    id: 4,
    question: "Does BudgetBuddy support different currencies?",
    answer:
      "By default, all expenses are tracked in NOK. However, you can convert between NOK and USD using the built-in currency converter feature.",
  },
  {
    id: 5,
    question: "Will my data be saved if I refresh the page?",
    answer:
      "Data is stored locally in your browser using localStorage. As long as you don't clear your browser data, your expenses will remain saved.",
  },
];

const Accordion = () => {
  return (
    <ul className={styles.accordionList}>
      {faqData.map((item) => {
        return (
          <AccordionItem
            title={item.question}
            description={item.answer}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
