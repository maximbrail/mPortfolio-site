import React, { useState } from "react";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");

  const BOT_TOKEN = "7762873639:AAG5G6PUz4m8o7ySvU7TxydZZVH8aI3zyXQ";
  const CHAT_ID = "-4673911276";

  const handleSubmit = async () => {
    const message = `New message from mPortfolio:\n\nName: ${name}\nAge: ${age}\nComment: ${comment}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        alert("Сообщение отправлено в Telegram!");
        setName("");
        setAge("");
        setComment("");
      } else {
        alert("Ошибка при отправке в Telegram.");
        console.error("Ошибка:", await response.text());
      }
    } catch (error) {
      alert("Ошибка сети при отправке.");
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className="contacts-div">
      <h1 className="contacts-title">Contact</h1>
      <input
        className="contact-input"
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="contact-input"
        type="number"
        placeholder="Type your age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="contact-input"
        type="text"
        placeholder="Type your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="contact-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contacts;
