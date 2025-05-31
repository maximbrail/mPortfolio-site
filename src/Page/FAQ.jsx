import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Какой стек ты используешь?",
      answer: "React, Tailwind, Node.js и немного Three.js.",
    },
    {
      question: "Где ты учишься?",
      answer: "Самостоятельно, в интернете и через проекты.",
    },
    {
      question: "Как можно с тобой связаться?",
      answer: "Через форму feedback или Telegram.",
    },
  ];

  return (
    <section style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ fontSize: "1.5rem", color: "#1ae0f4", marginBottom: "20px" }}>FAQ</h2>
      {faqData.map((item, idx) => (
        <div key={idx} style={{ borderBottom: "1px solid #444", padding: "10px 0" }}>
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              background: "none",
              color: "#1ae0f4",
              fontSize: "1.1rem",
              width: "100%",
              textAlign: "left",
              border: "none",
              cursor: "pointer",
              padding: "10px 0",
            }}
          >
            {item.question}
          </button>
          <div
            style={{
              maxHeight: openIndex === idx ? "100px" : "0",
              overflow: "hidden",
              color: "#ccc",
              transition: "max-height 0.3s ease",
            }}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
