const questionsData = [
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
      options: [
        "Multitasking ist möglich.",
        "Die Kontextwechselzeiten sind sehr hoch.",
        "E/A-Operationen (I/O-Operationen) benötigen zusätzlichen Pufferspeicher im Betriebssystem.",
        "Swapping und Multitasking sind grundsätzlich nicht vereinbar.",
        "Die Kontextwechselzeiten hängen von der Anzahl der Prozesse ab.",
        "Auf Systemen mit einfacher Speicherzuweisung existiert grundsätzlich nur ein Prozess.",
      ],
      answers: [
        "Multitasking ist möglich.",
        "Die Kontextwechselzeiten sind sehr hoch.",
        "E/A-Operationen (I/O-Operationen) benötigen zusätzlichen Pufferspeicher im Betriebssystem.",
      ], // Multiple-Choice
      image: null,
    },
    {
      question:
        "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
      options: ["0, 9, 5, 6", "0, 9, 5, 1", "9, 5, 0, 6", "0, 6, 9, 2"],
      answers: ["0, 9, 5, 6"], // Single-Choice
      image: "./images/Clock6.jpg",
    },
    {
    question:
          "Was ist der Unterschied zwischen den Kommandos top und ps?",
        options: ["top liefert eine dynamische Echtzeitansicht der Prozesse eines Systems. ps zeigt eine Momentaufnahme der Prozesse.", "ps liefert eine dynamische Echtzeitansicht der Prozesse eines Systems. top zeigt eine Momentaufnahme der  Prozesse.", "top liefert eine Ansicht der Prozesse eines Systems. ps zeigt die Threads eines Systems.", "ps liefert eine Ansicht der Prozesse eines Systems. top zeigt  die Threads eines Systems."],
        answers: ["top liefert eine dynamische Echtzeitansicht der Prozesse eines Systems. ps zeigt eine Momentaufnahme der Prozesse."], // Single-Choice
        image: null,
      },
      {
      question:
          "Ein Speicher mit der Größe 2048 kB soll mit dem Buddy-Algorithmus verwaltet werden. Folgende Speicheranforderungen sind vorhanden: 1000 kB, 120 kB, 500 kB Wie viele Knoten (Splitted, Benutzt und Frei) hat der dazugehörige Binärbaum?",
        options: ["Splitted: 4, Benutzt: 3, Frei: 2", "Splitted: 3, Benutzt: 3, Frei: 2", "Splitted: 2, Benutzt: 3, Frei: 3", "Splitted: 4, Benutzt: 3, Frei: 3"],
        answers: ["Splitted: 4, Benutzt: 3, Frei: 2"], // Single-Choice
        image: null,
      },
      {
        question: "Welche der folgenden Aussagen zur dynamischen Speicherrelocation trifft zu?",
        options: [
          "Dynamische Speicherrelocation eines Prozesses ist nur möglich, wenn die Größe seiner Datenstrukturen vor Beginn der Ausführung bekannt ist.",
          "Dynamische Speicherrelocation erfolgt während der Ausführung des Programms.",
          "Die Umrechnung der Adressen führt zum Schutz des Betriebssystem aber nicht zwischen den Prozessen.",
          "Für die Implementierung wird ein Basis- sowie ein Limitregister verwendet.",
          "Adresssprünge werden bei Laden des Programms an die physische Speicherstelle angepasst.",
          "Ansatz ist relativ langsam, da bei der Ausführung des Programms jede Adresse um den Inhalt des Basisregisters inkrementiert werden muss.",
        ],
        answers: [
          "Dynamische Speicherrelocation erfolgt während der Ausführung des Programms.",
          "Für die Implementierung wird ein Basis- sowie ein Limitregister verwendet.",
          "Ansatz ist relativ langsam, da bei der Ausführung des Programms jede Adresse um den Inhalt des Basisregisters inkrementiert werden muss.",
        ], // Multiple-Choice
        image: null,
      },
      {
        question: "Ein Seitenfehler",
        options: [
          "wird bei einem Zugriff auf eine Seite erzeugt, die sich nicht im Speicher befindet.",
          "ist ein Fehler auf einer bestimmten Seite.",
          "tritt auf, wenn ein Programm auf eine Seite des Speichers zugreift.",
          "ist ein Verweis auf eine Seite, die zu einem anderen Programm gehört.",
        ],
        answers: ["wird bei einem Zugriff auf eine Seite erzeugt, die sich nicht im Speicher befindet."], // Single-Choice
        image: null,
      },
  ];
  
  export default questionsData;
  