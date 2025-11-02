import React from "react";
import Header from "./Component/Header";
import FeedbackForm from "./Component/FeedbackForm";
import Card from "./Component/Card";

function App() {
  // Sample data for testing Card
  const sample = {
    name: " Advika ",
    course: "React Basics",
    feedback: "Great course, very helpful!",
  };

  return (
    <div>
      <Header />
      <FeedbackForm />
      <Card
        name={sample.name}
        course={sample.course}
        feedback={sample.feedback}
      />
    </div>
  );
}

export default App;
