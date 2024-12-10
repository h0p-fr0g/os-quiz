import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "Welche Arten von Fragmentierung können in einem FAT-basierten Dateisystem auftreten?",
      options: [
        "Interne und externe Fragmentierung",
        "Nur interne Fragmentierung",
        "Nur externe Fragmentierung",
        "Es tritt keine Fragmentierung auf",
      ],
      answers: ["Interne und externe Fragmentierung"], // Single-Choice
      image: null,
    },
    {
      question: "Welche Aussagen treffen auf ein System mit Swapping und einfacher Speicherzuweisung zu?",
      options: ["Multitasking ist möglich.", "Die Kontextwechselzeiten sind sehr hoch.", "E/A-Operationen (I/O-Operationen) benötigen zusätzlichen Pufferspeicher im Betriebssystem.", "Swapping und Multitasking sind grundsätzlich nicht vereinbar.", "Die Kontextwechselzeiten hängen von der Anzahl der Prozesse ab.", "Auf Systemen mit einfacher Speicherzuweisung existiert grundsätzlich nur ein Prozess."],
      answers: ["Multitasking ist möglich.", "Die Kontextwechselzeiten sind sehr hoch.", "E/A-Operationen (I/O-Operationen) benötigen zusätzlichen Pufferspeicher im Betriebssystem."], // Multiple-Choice
      image: null,
    },
    {
      question: "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
      options: ["0, 9, 5, 6", "0, 9, 5, 1", "9, 5, 0, 6", "0, 6, 9, 2"],
      answers: ["0, 9, 5, 6"], // Single-Choice
      image: "/images/Clock6.jpg",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]); // Aktuell ausgewählte Optionen
  const [feedback, setFeedback] = useState(null); // Feedback (Richtig/Falsch)
  const [showScore, setShowScore] = useState(false);

  const isMultipleChoice = questions[currentQuestion].answers.length > 1;

  const handleOptionToggle = (option) => {
    if (isMultipleChoice) {
      // Multiple-Choice-Logik
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      // Single-Choice-Logik
      setSelectedOptions([option]);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = questions[currentQuestion].answers.sort();
    const selectedSorted = selectedOptions.sort();

    const isCorrect =
      JSON.stringify(correctAnswers) === JSON.stringify(selectedSorted); // Vergleich der Arrays

    setFeedback(isCorrect ? "Richtig!" : "Falsch!");

    if (isCorrect) {
      setScore(score + 1);
    }

    // Zur nächsten Frage nach 1.5 Sekunden
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOptions([]); // Auswahl zurücksetzen
        setFeedback(null); // Feedback zurücksetzen
      } else {
        setShowScore(true);
      }
    }, 1500);
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
        <div>
          <h2>{questions[currentQuestion].question}</h2>

          {/* Fortschrittsbalken */}
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

          {/* Bild der Frage (falls vorhanden) */}
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

          {/* Antwortmöglichkeiten */}
          {questions[currentQuestion].options.map((option) => (
            <div key={option}>
              <label
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "10px",
                  fontSize: "16px",
                  backgroundColor: selectedOptions.includes(option)
                    ? "#4caf50"
                    : "#e0e0e0",
                  color: "#000",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                <input
                  type={isMultipleChoice ? "checkbox" : "radio"} // Checkbox für Multiple-Choice, Radio für Single-Choice
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                  style={{ marginRight: "10px" }}
                />
                {option}
              </label>
            </div>
          ))}

          {/* Feedback anzeigen */}
          {feedback && <p style={{ fontSize: "18px", marginTop: "20px" }}>{feedback}</p>}

          {/* Bestätigen-Button */}
          <button
            onClick={handleSubmit}
            disabled={!selectedOptions.length} // Deaktiviert, wenn keine Auswahl getroffen wurde
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

          <p>
            Frage {currentQuestion + 1} von {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
