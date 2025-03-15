# Quiz zur Prüfungsvorbereitung: Betriebssysteme

Dieses Projekt ist ein interaktives Quiz, das speziell zur Prüfungsvorbereitung im Bereich Betriebssysteme entwickelt wurde.

- **Fragen:** Die Fragen umfassen Multiple-Choice- und Single-Choice-Formate.
- **Zufällige Reihenfolge:** Die Reihenfolge der Fragen und Antwortmöglichkeiten wird bei jedem Durchlauf zufällig generiert.
- **Punktestand:** Am Ende des Quiz wird der erreichte Punktestand angezeigt.


## Projektstruktur

- `Quiz.js`: Enthält die Hauptkomponente des Quiz.

- `questionsData.js`: Enthält die Fragen und Antworten in einem separaten Modul, das leicht erweitert oder angepasst werden kann.


## Fragenformat

```javascript
const questionsData = [
  {
    question: "Hier steht die Frage?",
    wrong_options: ["Falsch 1", "Falsch 2", "Falsch 3"], //Falsche Antworten
    correct_options: ["Richtig 1"], // Richtige Antwort(en)
    image: null, // Optional: Pfad zu einem Bild
  },
];

export default questionsData;
```

## Erweiterungsmöglichkeiten

Bearbeite die Datei `questionsData.js`, um Fragen, Antworten oder Bilder hinzuzufügen.


## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](https://choosealicense.com/licenses/mit/).