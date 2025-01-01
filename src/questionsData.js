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
      question: "Welche Programme dienen auf einem Linux-System zur Prozessverwaltung?",
        options: [
          "ps, touch",
          "run, touch",
          "top, ps",
          "echo, kill",
          "ps, procs",
          "ps, quit",
        ],
        answers: ["top, ps"], // Single-Choice
        image: null,
      },
    {
      question:
        "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
      options: ["0, 9, 5, 6", "0, 9, 5, 1", "9, 5, 0, 6", "0, 6, 9, 2"],
      answers: ["0, 9, 5, 6"], // Single-Choice
      image: "images/Clock6.jpg",
    },
    {
      question: "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
        options: ["0, 9, 5, 1", "9, 5, 0, 6", "0, 6, 9, 2", "0, 6, 9, 12"],
        answers: ["0, 6, 9, 12"], // Single-Choice
        image: "images/Clock9.jpg",
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
      {
        question: "Welche Aussage zu Signalen trifft am besten zu?",
        options: [
          "Programme können Signalhandler implementieren, um das vorgegebene Verhalten beim Empfang eines Signals zu ändern. Dies gilt nicht für das Signal SIGKILL.",
          "Programme können Signalhandler implementieren, um das vorgegebene Verhalten beim Empfang eines Signals zu ändern. Dies gilt für alle Signale.",
          "Das Verhalten beim Empfang von Signalen wird durch das Betriebssystem vorgegeben. Programme haben keine Möglichkeit, dort einzugreifen.",
          "Programme, die im kernel space (aber nicht im user space) laufen, können das Verhalten beim Empfang von Signalen beeinflussen.",
        ],
        answers: ["Programme können Signalhandler implementieren, um das vorgegebene Verhalten beim Empfang eines Signals zu ändern. Dies gilt nicht für das Signal SIGKILL."], // Single-Choice
        image: null,
      },
      {
        question: "In einem Betriebssystem mit Paging stehen folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 5, 0, 1, 3, 2, 0, 5, 2. Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Wie viele Seitenfehler treten auf und welche Seiten sind im Speicher vorhanden, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie Optimal verwendet wird?",
        options: [
          "Ein Seitenfehler. Seiten 1, 3 und 5 sind im Speicher vorhanden.",
          "Drei Seitenfehler. Seiten 0, 2 und 5 sind im Speicher vorhanden.",
          "Ein Seitenfehler. Seiten 1, 2 und 5 sind im Speicher vorhanden.",
          "Zwei Seitenfehler. Seiten 1 und 5 sind im Speicher vorhanden.",
        ],
        answers: ["Drei Seitenfehler. Seiten 0, 2 und 5 sind im Speicher vorhanden."], // Single-Choice
        image: null,
      },
      {
        question: "Gegeben ist ein dreistufiges Paging-System mit TLB. Wie lange dauert das Lesen eines Wertes aus dem Hauptspeicher, wenn der TLB einen Eintrag zum Haupspeicher enthält? Ein Speicherzugriff dauert 100 ns und ein TLB-Zugriff 2ns.",
        options: [
          "400 ns",
          "402 ns",
          "302 ns",
          "102 ns",
        ],
        answers: ["102 ns"], // Single-Choice
        image: null,
      },
      {
        question: "Welche Ausgabe erzeugt das Programm?",
        options: [
          "uid: 0 euid: 0",
          "uid: 1000 euid: 0",
          "uid: 1000 euid: 1000",
          "uid: 0 euid: 1000",
        ],
        answers: ["uid: 1000 euid: 1000"], // Single-Choice
        image: "images/uid_euid_1.jpg",
      },
      {
        question: "Welche Kapazität hat die Festplatte? - Eine Magnetfestplatte besitzt folgende Eigenschaften: Sektorgröße: 8192 Byte; Anzahl Zylinder: 4096; Anzahl Sektoren pro Spur: 72; Anzahl Scheiben(Oberflächen): 24",
        options: [
          "57,98 GB (54,0 GiB)",
          "327,5 GB (306,0 GiB)",
          "327,5 MB (312,3 MiB)",
          "655 MB (625 MiB)",
        ],
        answers: ["57,98 GB (54,0 GiB)"], // Single-Choice
        image: null,
      },
      {
        question: "Welchen Inhalt hat die Datei foo nach der Ausführung der folgenden Kommandos?",
        options: [
          "bar",
          "foo",
          "bar bar",
          "foo bar",
        ],
        answers: ["foo"], // Single-Choice
        image: "images/io_redir_3.jpg",
      },
      {
        question: "Sie haben eine Festplatte mit 120 GB zur Verfügung, die Sie mit FAT-Dateisystem formatieren und komplett nutzen wollen. Die Cluster-Größe beträgt 4 kB. Wie viele Bit pro FAT-Eintrag werden benötigt?",
        options: [
          "20 Bit",
          "25 Bit",
          "32 Bit",
          "15 Bit",
        ],
        answers: ["25 Bit"], // Single-Choice
        image: null,
      },
      {
        question: "Welche der folgenden Aussagen treffen auf einen Zombie-Prozess zu? (3 richtige Antworten)",
        options: [
            "Zombies belegen keine Resourcen (Speicher, CPU-Zeit) mehr.",
            "Der Elternprozess sollte eine Variante von wait(2) aufrufen, um Zombies zu verhindern.",
            "Ein Zombie-Prozess gibt seine Prozess-Id frei, eine Verknappung der Prozess-Ids wird so verhindert.",
            "Ein Zombie entsteht, wenn ein Prozess sich beendet und der Elternprozess die Nachricht vom Tode des Kindprozesses nicht entgegennimmt.",
            "Zombies sind beendete Prozesse, die sich aber selbst wieder starten.",
            "Ein Zombie ist ein Prozess, dessen Elternprozess terminiert ist."
        ],
        answers: [
          "Zombies belegen keine Resourcen (Speicher, CPU-Zeit) mehr.",
          "Der Elternprozess sollte eine Variante von wait(2) aufrufen, um Zombies zu verhindern.",
          "Ein Zombie entsteht, wenn ein Prozess sich beendet und der Elternprozess die Nachricht vom Tode des Kindprozesses nicht entgegennimmt.",
        ], // Multiple-Choice
        image: null,
      },
      {
        question: "Welches Speichermedium erlaubt einen wahlfreien Zugriff?",
        options: [
          "Magnetband",
          "Lochkarte",
          "Keine der Möglichkeiten stimmt",
        ],
        answers: ["Hauptspeicher"], // Single-Choice
        image: null,
      },
      {
        question: "Wie lautet folgende Dateiberechtigung im oktalen Ausdruck? --x-wxrwx",
        options: [
          "137",
          "751",
          "447",
          "731",
        ],
        answers: ["137"], // Single-Choice
        image: null,
      },
      {
        question: "Welcher Disk-Scheduling-Algorithmus wurde verwendet?",
        options: [
          "C-LOOK",
          "LOOK",
          "SCAN",
          "C-SCAN",
        ],
        answers: ["LOOK"], // Single-Choice
        image: "images/diskscheduling_4.jpg",
      },
      {
        question: "In einer Hauptspeicherverwaltung mit fünfstufigem Paging verwendet die CPU 63 Bit für die logischen Adressen. Eine Seite ist 8 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Bits werden für jede Stufe verwendet, wenn die Stufen die gleiche Anzahl von Bits verwenden? Wie groß ist eine Seitentabelle?",
        options: [
          "10 Bits, 8 kB",
          "10 Bits, 4096 B",
          "8 Bits, 4096 B",
          "9 Bits, 2048 B",
        ],
        answers: ["10 Bits, 8 kB"], // Single-Choice
        image: null,
      },
  ];
  
  export default questionsData;
  