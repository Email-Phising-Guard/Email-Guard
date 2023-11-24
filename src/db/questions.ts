export const questions: Question[] = [
  {
    id: 1,
    question: "What is a red flag indicating a phishing email?",
    options: [
      "The email contains a valid contact number for inquiries",
      "There are spelling and grammar errors in the email",
      "The email asks you to update your info for security reasons",
      "The email includes a link to a well-known website",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "How can you verify the legitimacy of a link in an email?",
    options: [
      "Hover over the link to preview the URL before clicking",
      "Always click on links to ensure they are working properly",
      "Check if the link is in bold or italicized font",
      "Trust the link if it comes from a friend or colleague",
    ],
    answer: 0,
  },
  {
    id: 3,
    question: "Is it a legitimate or phishing email?",
    options: [
      "Legitimate, because it comes from someone I know",
      "Phishing, because the hyperlink and attachment are suspicious",
      "Legitimate, because the hyperlink is from Dropbox",
      "Phishing, because my friend never sends me attachment",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: `You’ve received a new kind of report from the school. Usually their emails come from "example@westmountschool.org". Is it a legitimate or phishing email?`,
    options: [
      "Legitimate, because PDFs are usually safe.",
      "Phishing, because usually the 2023 financial activity is published in 2024.",
      "Legitimate, because the email domain is correct.",
      "Phishing, because PDFs can contain malware or viruses.",
    ],
    answer: 3,
  },
  {
    id: 5,
    question:
      "Which of the following is not a proper way to handle email phishing?",
    options: [
      "Report the phishing attempt to your email provider or IT department",
      "Always click on links to ensure they are working properly",
      "Check if the link is in bold or italicized font",
      "Trust the link if it comes from a friend or colleague",
    ],
    answer: 1,
  },
  {
    id: 6,
    question: "How can you protect yourself from email phishing?",
    options: [
      "Use the same password for multiple accounts for easy memorization",
      "Enable two-factor authentication (2FA) where available",
      "Share your passwords with trusted friends for backup",
      "Trust the link if it comes from a friend or colleague",
    ],
    answer: 1,
  },
  {
    id: 7,
    question:
      "You receive an important email about your tax filing. Is this a phishing email or a legitimate one?",
    options: [
      "Legitimate, because the email has an official footnotes",
      "Legitimate, because the email has an official logo",
      "Phishing, because the link looks unsafe.",
      "Phishing, because the sender's email domain is misspelled as “efacks”.",
    ],
    answer: 3,
  },
];

export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};
