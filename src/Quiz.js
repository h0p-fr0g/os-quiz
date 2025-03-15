import React, { useState, useEffect } from "react";
import questionsData from "./questionsData";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    shuffledQuestions.forEach((question) => {
      question.all_options = question.correct_options.concat(question.wrong_options).sort(() => Math.random() - 0.5);
    });
    setQuestions(shuffledQuestions);
  }, []);

  const isMultipleChoice =
    questions.length > 0 && questions[currentQuestion].correct_options.length > 1;

  const handleOptionToggle = (option) => {
    if (isMultipleChoice) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(
          selectedOptions.filter((selected) => selected !== option)
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
    }
  };

  const handleSubmit = () => {
    setShowAnswers(true);

    const correctAnswers = questions[currentQuestion].correct_options.sort();
    const selectedSorted = selectedOptions.sort();

    const isCorrect =
      JSON.stringify(correctAnswers) === JSON.stringify(selectedSorted);

    if (isCorrect) {
      setFeedback("Richtig!");
      setScore(score + 1);
    } else {
      setFeedback("Falsch!");
    }
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setFeedback(null);
    setSelectedOptions([]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      {showScore ? (
        <div>
          <h2>Quiz beendet!</h2>
          <p>
            Du hast {score} von {questions.length} Punkten erreicht.
          </p>
        </div>
      ) : (
        questions.length > 0 && (
          <div>
            <h2>{questions[currentQuestion].question}</h2>

            <div
              style={{
                height: "10px",
                width: "80%",
                backgroundColor: "#e0e0e0",
                margin: "20px auto",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: "#4caf50",
                  transition: "width 0.5s ease",
                }}
              />
            </div>

            {questions[currentQuestion].image && (
              <img
                src={questions[currentQuestion].image}
                alt={`Frage ${currentQuestion + 1}`}
                style={{
                  maxWidth: "80%",
                  height: "auto",
                  margin: "20px 0",
                  borderRadius: "8px",
                }}
              />
            )}

            {questions[currentQuestion].all_options.map((option) => (
              <div key={option}>
                <label
                  style={{
                    display: "block",
                    margin: "10px auto",
                    padding: "10px",
                    fontSize: "16px",
                    backgroundColor: showAnswers
                      ? questions[currentQuestion].correct_options.includes(option)
                        ? "#4caf50"
                        : selectedOptions.includes(option)
                        ? "#f44336"
                        : "#e0e0e0"
                      : selectedOptions.includes(option)
                      ? "#4caf50"
                      : "#e0e0e0",
                    color: "#000",
                    cursor: showAnswers ? "default" : "pointer",
                    borderRadius: "5px",
                  }}
                >
                  <input
                    type={isMultipleChoice ? "checkbox" : "radio"}
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionToggle(option)}
                    disabled={showAnswers}
                    style={{ marginRight: "10px" }}
                  />
                  {option}
                </label>
              </div>
            ))}

            {feedback && (
              <p style={{ fontSize: "18px", marginTop: "20px" }}>{feedback}</p>
            )}

            {showAnswers ? (
              <button
                onClick={handleNextQuestion}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Weiter
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!selectedOptions.length}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: selectedOptions.length ? "#007bff" : "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: selectedOptions.length ? "pointer" : "not-allowed",
                }}
              >
                Bestätigen
              </button>
            )}

            <p>
              Frage {currentQuestion + 1} von {questions.length}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
