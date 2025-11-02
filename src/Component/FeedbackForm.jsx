import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, course, feedback });
    // Optionally clear the fields
    setName("");
    setCourse("");
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />
      <textarea
        placeholder="Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
