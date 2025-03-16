const questionsData = [
    {
      question: "Welche Arten von Fragmentierung können in einem FAT-basierten Dateisystem auftreten?",
      wrong_options: [
        "Nur interne Fragmentierung",
        "Nur externe Fragmentierung",
        "Es tritt keine Fragmentierung auf",
      ],
      correct_options: ["Interne und externe Fragmentierung"], // Single-Choice
    },
    {
      question: "Welche Aussagen treffen auf ein System mit Swapping und einfacher Speicherzuweisung zu?",
      wrong_options: [
        "Swapping und Multitasking sind grundsätzlich nicht vereinbar.",
        "Die Kontextwechselzeiten hängen von der Anzahl der Prozesse ab.",
        "Auf Systemen mit einfacher Speicherzuweisung existiert grundsätzlich nur ein Prozess.",
      ],
      correct_options: [
        "Multitasking ist möglich.",
        "Die Kontextwechselzeiten sind sehr hoch.",
        "E/A-Operationen (I/O-Operationen) benötigen zusätzlichen Pufferspeicher im Betriebssystem.",
      ], // Multiple-Choice
    },
    {
      question: "Welche Programme dienen auf einem Linux-System zur Prozessverwaltung?",
        wrong_options: [
          "ps, touch",
          "run, touch",
          "echo, kill",
          "ps, procs",
          "ps, quit",
        ],
        correct_options: ["top, ps"], // Single-Choice
      },
      {
        question: "Welche Programme dienen auf einem Linux-System zur Prozessverwaltung?",
          wrong_options: [
            "ps, touch",
            "run, touch",
            "echo, kill",
            "ps, procs",
            "ps, quit",
          ],
          correct_options: ["kill, top"], // Single-Choice
        },
    {
      question:
        "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
      wrong_options: [
        "0, 9, 5, 1", 
        "9, 5, 0, 6", 
        "0, 6, 9, 2"
      ],
      correct_options: ["0, 9, 5, 6"], // Single-Choice
      image: "images/Clock6.jpg",
    },
    {
      question: "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
        wrong_options: [
          "0, 9, 5, 1", 
          "9, 5, 0, 6", 
          "0, 6, 9, 2", 
        ],
        correct_options: ["0, 6, 9, 12"], // Single-Choice
        image: "images/Clock9.jpg",
    },
    {
      question: "Die folgende Abbildung zeigt die Seitenrahmen eines Paging-Systems und die Referenz-Bits. Für die Verwaltung der Seiten wird die Seitenersetzungsstrategie Clock-Algorithmus verwendet. Der Zeiger zeigt auf die Seite 0 und dreht sich im Uhrzeigersinn.",
        wrong_options: [
          "0, 6, 9, 12", 
          "6, 9, 12, 2", 
          "0, 4, 5, 1"
        ],
        correct_options: ["4, 5, 0, 6"], // Single-Choice
        image: "images/Clock4506.jpg",
    },
    {
    question:
          "Was ist der Unterschied zwischen den Kommandos top und ps?",
        wrong_options: [
          "ps liefert eine dynamische Echtzeitansicht der Prozesse eines Systems. top zeigt eine Momentaufnahme der  Prozesse.", 
          "top liefert eine Ansicht der Prozesse eines Systems. ps zeigt die Threads eines Systems.", 
          "ps liefert eine Ansicht der Prozesse eines Systems. top zeigt  die Threads eines Systems."
        ],
        correct_options: ["top liefert eine dynamische Echtzeitansicht der Prozesse eines Systems. ps zeigt eine Momentaufnahme der Prozesse."], // Single-Choice
      },
      {
      question:
          "Ein Speicher mit der Größe 2048 kB soll mit dem Buddy-Algorithmus verwaltet werden. Folgende Speicheranforderungen sind vorhanden: 1000 kB, 120 kB, 500 kB Wie viele Knoten (Splitted, Benutzt und Frei) hat der dazugehörige Binärbaum?",
        wrong_options: [
          "Splitted: 3, Benutzt: 3, Frei: 2", 
          "Splitted: 2, Benutzt: 3, Frei: 3", 
          "Splitted: 4, Benutzt: 3, Frei: 3"
        ],
        correct_options: ["Splitted: 4, Benutzt: 3, Frei: 2"], // Single-Choice
      },
      {
        question: "Welche der folgenden Aussagen zur dynamischen Speicherrelocation trifft zu?",
        wrong_options: [
          "Dynamische Speicherrelocation eines Prozesses ist nur möglich, wenn die Größe seiner Datenstrukturen vor Beginn der Ausführung bekannt ist.",
          "Die Umrechnung der Adressen führt zum Schutz des Betriebssystem aber nicht zwischen den Prozessen.",
          "Adresssprünge werden bei Laden des Programms an die physische Speicherstelle angepasst.",
        ],
        correct_options: [
          "Dynamische Speicherrelocation erfolgt während der Ausführung des Programms.",
          "Für die Implementierung wird ein Basis- sowie ein Limitregister verwendet.",
          "Ansatz ist relativ langsam, da bei der Ausführung des Programms jede Adresse um den Inhalt des Basisregisters inkrementiert werden muss.",
        ], // Multiple-Choice
      },
      {
        question: "Welche der folgenden Aussagen zur statischen Speicherrelocation trifft zu?",
        wrong_options: [
          "Statische Speicherrelocation erfolgt während der Ausführung des Programms.",
          "Für die Implementierung wird ein Basis- sowie ein Limitregister verwendet.",
          "Ansatz ist relativ langsam, da jede adresse um den Inhalt des Basisregisters inkrementiert werden muss.",
        ],
        correct_options: [
          "Statische Speicherrelocation eines Prozesses ist nur möglich, wenn die Größe seiner Datenstrukturen vor Beginn der Ausführung bekannt ist.",
          "Die Umrechnung der Adressen führt zum Schutz des Betriebssystem aber nicht zwischen den Prozessen.",
          "Adresssprünge werden bei Laden des Programms an die physische Speicherstelle angepasst.",
        ], // Multiple-Choice
      },
      {
        question: "Ein Seitenfehler",
        wrong_options: [
          "ist ein Fehler auf einer bestimmten Seite.",
          "tritt auf, wenn ein Programm auf eine Seite des Speichers zugreift.",
          "ist ein Verweis auf eine Seite, die zu einem anderen Programm gehört.",
        ],
        correct_options: ["wird bei einem Zugriff auf eine Seite erzeugt, die sich nicht im Speicher befindet."], // Single-Choice
      },
      {
        question: "Welche Aussage zu Signalen trifft am besten zu?",
        wrong_options: [
          "Programme können Signalhandler implementieren, um das vorgegebene Verhalten beim Empfang eines Signals zu ändern. Dies gilt für alle Signale.",
          "Das Verhalten beim Empfang von Signalen wird durch das Betriebssystem vorgegeben. Programme haben keine Möglichkeit, dort einzugreifen.",
          "Programme, die im kernel space (aber nicht im user space) laufen, können das Verhalten beim Empfang von Signalen beeinflussen.",
        ],
        correct_options: ["Programme können Signalhandler implementieren, um das vorgegebene Verhalten beim Empfang eines Signals zu ändern. Dies gilt nicht für das Signal SIGKILL."], // Single-Choice
      },
      {
        question: "Welche Aussage zu Signalen trifft am besten zu?",
        wrong_options: [
          "Das Programm kill bzw. die Funktion kill(2) kann nur zum Beenden vom Prozessen benutzt werden. Die Funktion signal(2) wird benutzt, um Interprozesskommunikation (IPC) mit Signalen zu implementieren.",
          "Mit Signalen lassen sich Prozesse nur beenden, daher sind Signale zur Interprozesskommunikation (IPC) nur sehr eingeschränkt nutzbar.",
          "Nur Prozesse, die mit root-Rechten laufen, dürfen Signale versenden, daher sind Signale zur Interprozesskommunikation (IPC) nur sehr eingeschränkt nutzbar.",
        ],
        correct_options: ["Signale sind eine Form der Interprozesskommunikation (IPC). Das Programm kill bzw. die Funktion kill(2) kann benutzt werden, um Signale an Prozesse zu senden."], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 5, 0, 1, 3, 2, 0, 5, 2. Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Wie viele Seitenfehler treten auf und welche Seiten sind im Speicher vorhanden, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie Optimal verwendet wird?",
        wrong_options: [
          "Ein Seitenfehler. Seiten 1, 3 und 5 sind im Speicher vorhanden.",
          "Ein Seitenfehler. Seiten 1, 2 und 5 sind im Speicher vorhanden.",
          "Zwei Seitenfehler. Seiten 1 und 5 sind im Speicher vorhanden.",
        ],
        correct_options: ["Drei Seitenfehler. Seiten 0, 2 und 5 sind im Speicher vorhanden."], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 2, 1, 3, 2, 1, 0, 2, 3. Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Wie viele Seitenfehler treten auf und welche Seiten sind im Speicher vorhanden, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie Optimal verwendet wird?",
        wrong_options: [
          "Ein Seitenfehler. Seiten 0, 1 und 2 sind im Speicher vorhanden.",
          "Drei Seitenfehler. Seiten 0, 2 und 4 sind im Speicher vorhanden.",
          "Drei Seitenfehler. Seiten 0, 1 und 2 sind im Speicher vorhanden.",
        ],
        correct_options: ["Zwei Seitenfehler. Seiten 0, 2 und 3 sind im Speicher vorhanden."], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 3, 1, 0, 2, 1, 0, 2, 1. Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Wie viele Seitenfehler treten auf und welche Seiten sind im Speicher vorhanden, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie Optimal verwendet wird?",
        wrong_options: [
          "Ein Seitenfehler. Seiten 0, 1 und 2 sind im Speicher vorhanden.",
          "Zwei Seitenfehler. Seiten 1, 2 und 3 sind im Speicher vorhanden.",
          "Drei Seitenfehler. Seiten 0, 1 und 2 sind im Speicher vorhanden.",
        ],
        correct_options: ["Zwei Seitenfehler. Seiten 0, 1 und 2 sind im Speicher vorhanden."], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 1, 0, 2, 0, 1, 3, 1, 2, 3, 1. Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Die Seiten sind zu den Zeiten 0, 1, und 2 eingefügt und die Zeiten der letzten Zugriffe lautet: 5, 3 und 7. Wie viele Seitenfehler treten auf, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie LRU verwendet wird?",
        wrong_options: [
          "3",
          "5",
          "4",
        ],
        correct_options: ["2"], // Single-Choice
      },
      {
        question: "Gegeben ist ein dreistufiges Paging-System mit TLB. Wie lange dauert das Lesen eines Wertes aus dem Hauptspeicher, wenn der TLB einen Eintrag zum Haupspeicher enthält? Ein Speicherzugriff dauert 100 ns und ein TLB-Zugriff 2ns.",
        wrong_options: [
          "400 ns",
          "402 ns",
          "302 ns",
        ],
        correct_options: ["102 ns"], // Single-Choice
      },
      {
        question: "Welche Ausgabe erzeugt das Programm?",
        wrong_options: [
          "uid: 0 euid: 0",
          "uid: 1000 euid: 0",
          "uid: 0 euid: 1000",
        ],
        correct_options: ["uid: 1000 euid: 1000"], // Single-Choice
        image: "images/uid_euid_1.jpg",
      },
      {
        question: "Welche Kapazität hat die Festplatte? - Eine Magnetfestplatte besitzt folgende Eigenschaften: Sektorgröße: 8192 Byte; Anzahl Zylinder: 4096; Anzahl Sektoren pro Spur: 72; Anzahl Scheiben(Oberflächen): 24",
        wrong_options: [
          "327,5 GB (306,0 GiB)",
          "327,5 MB (312,3 MiB)",
          "655 MB (625 MiB)",
        ],
        correct_options: ["57,98 GB (54,0 GiB)"], // Single-Choice
      },
      {
        question: "Welchen Inhalt hat die Datei foo nach der Ausführung der folgenden Kommandos?",
        wrong_options: [
          "bar",
          "bar bar",
          "foo bar",
        ],
        correct_options: ["foo"], // Single-Choice
        image: "images/io_redir_3.jpg",
      },
      {
        question: "Welchen Inhalt hat die Datei foo nach der Ausführung der folgenden Kommandos?",
        wrong_options: [
          "bar",
          "bar bar",
          "foo bar",
        ],
        correct_options: ["foo"], // Single-Choice
        image: "images/foobar.png",
      },
      {
        question: "Sie haben eine Festplatte mit 120 GB zur Verfügung, die Sie mit FAT-Dateisystem formatieren und komplett nutzen wollen. Die Cluster-Größe beträgt 4 kB. Wie viele Bit pro FAT-Eintrag werden benötigt?",
        wrong_options: [
          "20 Bit",
          "32 Bit",
          "15 Bit",
        ],
        correct_options: ["25 Bit"], // Single-Choice
      },
      {
        question: "Sie haben eine Festplatte mit 100 GB zur Verfügung, die Sie mit FAT-Dateisystem formatieren und komplett nutzen wollen. Die Cluster-Größe beträgt 4 kB. Wie viele Bit pro FAT-Eintrag werden benötigt?",
        wrong_options: [
          "20 Bit",
          "32 Bit",
          "15 Bit",
        ],
        correct_options: ["25 Bit"], // Single-Choice
      },
      {
        question: "Welche der folgenden Aussagen treffen auf einen Zombie-Prozess zu? (3 richtige Antworten)",
        wrong_options: [
            "Ein Zombie-Prozess gibt seine Prozess-Id frei, eine Verknappung der Prozess-Ids wird so verhindert.",
            "Zombies sind beendete Prozesse, die sich aber selbst wieder starten.",
            "Ein Zombie ist ein Prozess, dessen Elternprozess terminiert ist."
        ],
        correct_options: [
          "Zombies belegen keine Resourcen (Speicher, CPU-Zeit) mehr.",
          "Der Elternprozess sollte eine Variante von wait(2) aufrufen, um Zombies zu verhindern.",
          "Ein Zombie entsteht, wenn ein Prozess sich beendet und der Elternprozess die Nachricht vom Tode des Kindprozesses nicht entgegennimmt.",
        ], // Multiple-Choice
      },
      {
        question: "Welche der folgenden Aussagen treffen auf einen Zombie-Prozess zu? (3 richtige Antworten)",
        wrong_options: [
            "Zombies belegen keinen Eintrag in der Prozesstabelle.",
            "Zombies sind beendete Prozesse, die sich aber selbst wieder starten.",
            "Ein Zombie ist ein Prozess, dessen Elternprozess terminiert ist."
        ],
        correct_options: [
          "Zombies belegen einen Eintrag in der Prozesstabelle.",
          "Der Elternprozess sollte eine Variante von wait(2) aufrufen, um Zombies zu verhindern.",
          "Ein Zombie entsteht, wenn ein Prozess sich beendet und der Elternprozess die Nachricht vom Tode des Kindprozesses nicht entgegennimmt.",
        ], // Multiple-Choice
      },
      {
        question: "Welches Speichermedium erlaubt einen wahlfreien Zugriff?",
        wrong_options: [
          "Magnetband",
          "Lochkarte",
          "Keine der Möglichkeiten stimmt",
        ],
        correct_options: ["Hauptspeicher"], // Single-Choice
      },
      {
        question: "Wie lautet folgende Dateiberechtigung im oktalen Ausdruck? --x-wxrwx",
        wrong_options: [
          "751",
          "447",
          "731",
        ],
        correct_options: ["137"], // Single-Choice
      },
      {
        question: "Welcher Disk-Scheduling-Algorithmus wurde verwendet?",
        wrong_options: [
          "C-LOOK",
          "SCAN",
          "C-SCAN",
        ],
        correct_options: ["LOOK"], // Single-Choice
        image: "images/diskscheduling_4.jpg",
      },
      {
        question: "In einer Hauptspeicherverwaltung mit fünfstufigem Paging verwendet die CPU 63 Bit für die logischen Adressen. Eine Seite ist 8 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Bits werden für jede Stufe verwendet, wenn die Stufen die gleiche Anzahl von Bits verwenden? Wie groß ist eine Seitentabelle?",
        wrong_options: [
          "10 Bits, 4096 B",
          "8 Bits, 4096 B",
          "9 Bits, 2048 B",
        ],
        correct_options: ["10 Bits, 8 kB"], // Single-Choice
      },
      {
        question: "Eine Festplatte bietet 4096 Zylinder (0-4095), der Schreiblesekopf bewegt sich aufwärts und bearbeitet dann eine Anfrage an Zylinder 2342. Die Warteschlange mit Zugriffsanfragen enthält folgende Einträge: 23, 1000, 2300, 2800, 4000 Die Anfragen werden in folgender Reihenfolge bearbeitet: 2800, 4000, 2300, 1000, 23 Welcher Disk-Scheduling-Algorithmus wurde verwendet?",
        wrong_options: [
          "C-LOOK",
          "SCAN",
          "C-SCAN",
        ],
        correct_options: ["LOOK"], // Single-Choice
      },
      {
        question: "Eine Festplatte bietet 4096 Zylinder (0-4095), der Schreiblesekopf bewegt sich aufwärts und bearbeitet dann eine Anfrage an Zylinder 2342. Die Warteschlange mit Zugriffsanfragen enthält folgende Einträge: 23, 1000, 2300, 2800, 4000 Die Anfragen werden in folgender Reihenfolge bearbeitet: 2800, 4000, 23, 1000, 2300 Welcher Disk-Scheduling-Algorithmus wurde verwendet?",
        wrong_options: [
          "LOOK",
          "SCAN",
          "C-SCAN",
        ],
        correct_options: ["C-LOOK"], // Single-Choice
      },
      {
        question: "Gegeben sei eine dynamische Speicherverwaltung mit folgenden Speicherblöcken: Folgende Speicherplatzanforderungen liegen vor: 50 kB, 350 kB, 20 kB und 70 kB. Welche Speicherlücken stehen zur Verfügung, nachdem alle Anfragen mit First-Fit Strategie abgearbeitet sind? Nach jeder erfolgreichen Speicherallokation wird der Verschnitt freigegeben.",
        wrong_options: [
          "10 - 4 - 150 - 50",
          "50 - 130 -10 - 24",
          "60 - 70 - 50 - 24 - 10",
        ],
        correct_options: ["30 - 80 - 10 - 24 -70"], // Single-Choice
        image: "images/first-fit.png",
      },
      {
        question: "Gegeben sei eine dynamische Speicherverwaltung mit folgenden Speicherblöcken: Welche Speicherblöcke werden bei sukzessiver Speicherplatzanforderung von 10, 20, 60 und 40 KB mit Worst-Fit Strategie ausgewählt? Nach jeder erfolgreichen Speicherallokation wird der Verschnitt nicht freigegeben.",
        wrong_options: [
          "20 K - 30  K - 60 K - 50 K",
          "130 K - 60  K - 80 K - 50 K",
          "130 K - 60  K - 80 K - 112 K",
        ],
        correct_options: ["130 K - 112  K - 80 K - 60 K"], // Single-Choice
        image: "images/worst-fit.png",
      },
      {
        question: "Gegeben sei eine dynamische Speicherverwaltung mit folgenden Speicherblöcken: Welche Speicherblöcke werden bei sukzessiver Speicherplatzanforderung von 10, 20, 60 und 40 KB mit First-Fit Strategie ausgewählt? Nach jeder erfolgreichen Speicherallokation wird der Verschnitt nicht freigegeben.",
        wrong_options: [
          "20 K - 30  K - 60 K - 50 K",
          "130 K - 60  K - 80 K - 112 K",
          "130 K - 112  K - 80 K - 60 K",
        ],
        correct_options: ["130 K - 60  K - 80 K - 50 K"], // Single-Choice
        image: "images/FirstFit.jpg",
      },
      {
        question: "Wie nennt man die Technik, bei der das Betriebssystem eines Computers mehrere Programme gleichzeitig ausführt, bei der es zwischen ihnen hin- und herschaltet?",
        wrong_options: [
          "Paging",
          "Multithreading",
          "Partitionierung",
        ],
        correct_options: ["Multitasking"], // Single-Choice
      },
      {
        question: "In einer Multiprogramming-Umgebung:",
        wrong_options: [
          "müssen mehrere CPUs vorhanden sein.",
          "führt der Prozessor mehr als einen Prozess zur gleichen Zeit aus.",
          "werden die Programme von mehr als einer Person entwickelt.",
        ],
        correct_options: ["befindet sich mehr als ein Prozess im Speicher."], // Single-Choice
      },
      {
        question: "Sie haben eine Festplatte mit 10 TB zur Verfügung, die Sie mit FAT-Dateisystem formatieren und komplett nutzen wollen. Die Cluster-Größe beträgt 4 kB. Wie viele Bit pro FAT-Eintrag werden benötigt?",
        wrong_options: [
          "20 Bit",
          "30 Bit",
          "28 Bit",
        ],
        correct_options: ["32 Bit"], // Single-Choice
      },
      {
        question: "Eine Magnetfestplatte besitzt folgende Eigenschaften: Sektorgröße: 1024 Byte, Anzahl Spuren pro Oberfläche: 22222, Anzahl Sektoren pro Spur: 256, Anzahl Scheiben(Oberflächen): 16, Welche Kapazität hat die Festplatte?",
        wrong_options: [
          "11,55 GB (10,76 GiB)",
          "436,7 GB (406,7 GiB)",
          "1,90 GB (1,8 GiB)",
        ],
        correct_options: ["93,21 GB (86,8 GiB)"], // Single-Choice
      },
      {
        question: "Eine Magnetfestplatte besitzt folgende Eigenschaften: Sektorgröße: 2048 Byte, Anzahl Spuren pro Oberfläche: 20000, Anzahl Sektoren pro Spur: 64, Anzahl Scheiben(Oberflächen): 32, Welche Kapazität hat die Festplatte?",
        wrong_options: [
          "11,55 GB (10,76 GiB)",
          "436,7 GB (406,7 GiB)",
          "1,90 GB (1,8 GiB)",
        ],
        correct_options: ["83,78 GB (78,13 GiB)"], // Single-Choice
      },
      {
        question: "Die Dateiberechtigung -w---x-wx die in einem oktalen Ausdruck dargestellt wird, lautet:",
        wrong_options: [
          "661",
          "774",
          "211",
        ],
        correct_options: ["213"], // Single-Choice
      },
      {
        question: "Die Dateiberechtigung rwxr-x--x die in einem oktalen Ausdruck dargestellt wird, lautet:",
        wrong_options: [
          "661",
          "774",
          "711",
        ],
        correct_options: ["751"], // Single-Choice
      },
      {
        question: "Sie haben eine Inode-Datenstruktur implementiert, die 12 direkte Einträge, einen einfach-indirekten und einen zweifach-indirekten Index bietet. Jeder Index ist so groß wie ein Datenblock, jeder Indexeintrag (Adresse) benötigt 8 Bytes. Wie groß kann eine Datei maximal werden, wenn ein Datenblock 4 kB gross ist?",
        wrong_options: [
          "1.050.672 B",
          "525336 kB",
          "262.668 kB",
        ],
        correct_options: ["1.050.672 kB"], // Single-Choice
      },
      {
        question: "Sie haben eine Inode-Datenstruktur implementiert, die 64 direkte Einträge, einen einfach-indirekten und einen zweifach-indirekten Index bietet. Jeder Index ist so groß wie ein Datenblock, jeder Indexeintrag (Adresse) benötigt 4 Bytes. Wie groß kann eine Datei maximal werden, wenn ein Datenblock 1 kB gross ist?",
        wrong_options: [
          "525.440 B",
          "131.712 kB",
          "262.720 kB",
        ],
        correct_options: ["65.856 kB"], // Single-Choice
      },
      {
        question: "Welches sind die drei wichtigsten Prozesszustände?",
        wrong_options: [
          "rechnend, rechenbereit, abgestürzt",
          "bootend, rechnend, beendet",
        ],
        correct_options: ["rechnend, rechenbereit, blockiert"], // Single-Choice
      },
      {
        question: "Eine Festplatte dreht sich mit 17000 Umdrehungen pro Minute. Wie lautet die durchschnittliche Latenzzeit (Zeit bis zum Erreichen der gewünschten Position innerhalb des Zylinders)?",
        wrong_options: [
          "10 ms",
          "2 ms",
          "3,7 ms",
        ],
        correct_options: ["1,76 ms"], // Single-Choice
      },
      {
        question: "Eine Festplatte dreht sich mit 7200 Umdrehungen pro Minute. Wie lautet die durchschnittliche Latenzzeit (Zeit bis zum Erreichen der gewünschten Position innerhalb des Zylinders)?",
        wrong_options: [
          "8,33 ms",
          "10 ms",
          "3,7 ms",
        ],
        correct_options: ["4,16 ms"], // Single-Choice
      },
      {
        question: "Welche der folgenden Aussagen zur Multiprogramming with a fixed number of tasks (MFT) trifft zu?",
        wrong_options: [
            "Alle Partitionen müssen die gleiche Größe besitzen.",
            "Um die interne Fragmentierung klein zu halten, wird die Strategie 'Worst Fit' verwendet.",
            "Prozessgröße darf größer sein als die Partitionsgröße."
        ],
        correct_options: [
          "Interne Fragmentierung ist ggf. groß",
          "Es gibt keine externe Fragmentierung.",
          "MFT ist geeignet für Systeme mit wenigen großen Prozessen.",
        ], // Multiple-Choice
      },
      {
        question: "Welche der folgenden Aussagen zur Multiprogramming with a variable number of tasks (MVT) trifft zu?",
        wrong_options: [
          "Für die interne Fragmentierung werden die Stratgien 'Best available fit' und 'Best fit only' eingesetzt.",
          "MVT ist nur für Systeme mit wenigen großen Prozessen geeignet.",
          "Alle Partitionen müssen die gleiche Größe besitzen."
        ],
        correct_options: [
          "Es gibt keine interne Fragmentierung.",
          "Hauptspeicher wird dynamisch und anhand der Größe des Prozesses partitioniert.",
          "Defragmentierung (Memory Compaction) ist zeitaufwendig und wird nicht eingesetzt.",
        ], // Multiple-Choice
      },
      {
        question: "Welcher Speicher ist i.d.R. ein Bestandteil der CPU?",
        wrong_options: [
          "Core Memory",
          "Magnetspeicher",
          "Keine der Möglichkeiten stimmt",
        ],
        correct_options: ["Register"], // Single-Choice
      },
      {
        question: "Welcher Speicher ist i.d.R. ein Bestandteil der CPU?",
        wrong_options: [
          "Hauptspeicher",
          "Optischer Speicher",
          "Keine der Möglichkeiten stimmt",
        ],
        correct_options: ["1. / 2. Level Cache"], // Single-Choice
      },
      {
        question: "Das Kommando  'ls −l autoconf' zeigt Folgendes auf der Konsole: '-rwxr--r-- 1 user01 verwaltung 16704 Nov 22 17:13 autoconf' Wie kann der Benutzer user01 alle Leserechte entfernen?",
        wrong_options: [
          "chmod +x autoconf",
          "sudo chmod 744 autoconf",
          "chown g-x autoconf",
        ],
        correct_options: ["chmod uog-r autoconf"], // Single-Choice
      },
      {
        question: "In einer Hauptspeicherverwaltung mit fünfstufigem Paging verwendet die CPU 63 Bit für die logischen Adressen. Eine Seite ist 8 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Bits werden für jede Stufe verwendet, wenn die Stufen die gleiche Anzahl von Bits verwenden? Wie groß ist eine Seitentabelle?",
        wrong_options: [
          "10 Bits, 4096 B",
          "8 Bits, 4096 B",
          "9 Bits, 2048 B",
        ],
        correct_options: ["10 Bits, 8 kB"], // Single-Choice
      },
      {
        question: "In einer Hauptspeicherverwaltung mit vierstufigem Paging verwendet die CPU 53 Bit für die logischen Adressen. Eine Seite ist 8 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Bits werden für jede Stufe verwendet, wenn die Stufen die gleiche Anzahl von Bits verwenden? Wie groß ist eine Seitentabelle?",
        wrong_options: [
          "10 Bits, 4096 B",
          "8 Bits, 4096 B",
          "9 Bits, 8 kB",
        ],
        correct_options: ["10 Bits, 8 kB"], // Single-Choice
      },
      {
        question: "In einem einstufigen Paging-System mit TLB dauert ein Speicherzugriff 40 ns und der Zugriff auf den TLB 1 ns. Ab welcher Trefferrate führt der Einsatz des TLB zu verbesserten durchschnittlichen Zugriffszeiten?",
        wrong_options: [
          "1%",
          "2%",
          "5%",
        ],
        correct_options: ["2,5%"], // Single-Choice
      },
      {
        question: "In einem dreistufigen Paging-System mit TLB dauert ein Speicherzugriff 20 ns und der Zugriff auf den TLB 1 ns. Bei welcher Trefferrate des TLB führt der Einsatz von TLB zur Halbierung der durchschnittlichen Zugriffszeiten auf die Seiten im Speicher?",
        wrong_options: [
          "77,5%",
          "50%",
          "30%",
        ],
        correct_options: ["68%"], // Single-Choice
      },
      {
        question: "Gegeben ist ein dreistufiges Paging-System mit TLB. Wie lange dauert das Lesen eines Wertes aus dem Hauptspeicher, wenn der TLB einen Eintrag zum Haupspeicher enthält? Ein Speicherzugriff dauert 100 ns und ein TLB-Zugriff 2ns.",
        wrong_options: [
          "302 ns",
          "402 ns",
          "400 ns",
        ],
        correct_options: ["102 ns"], // Single-Choice
      },
      {
        question: "In einer Hauptspeicherverwaltung mit mehrstufigem Paging verwendet die CPU 48 Bit für die logischen Adressen. Eine Seite ist 4 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Stufen werden mindestens benötigt, wenn eine Seitetabelle maximal so groß wie eine Seite sein darf?",
        wrong_options: [
          "3 Stufen",
          "2 Stufen",
          "5 Stufen",
        ],
        correct_options: ["4 Stufen"], // Single-Choice
      },
      {
        question: "In einer Hauptspeicherverwaltung mit mehrstufigem Paging verwendet die CPU 52 Bit für die logischen Adressen. Eine Seite ist 4 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Stufen werden mindestens benötigt, wenn eine Seitetabelle maximal doppelt so groß wie eine Seite sein darf?",
        wrong_options: [
          "3 Stufen",
          "2 Stufen",
          "5 Stufen",
        ],
        correct_options: ["4 Stufen"], // Single-Choice
      },
      {
        question: "Gegeben ist eine Inode-Datenstruktur mit 12 direkten Einträgen und einfach-, zweifach- und dreifachindirekten Indexblöcken. Ein Indexblock hat die Größe eines Datenblockes und kann 256 Adressen aufnehmen. Ein Datenblock ist 1 kB groß. Wieviele Festplattenzugriffe sind notwendig, um Byte 11 233 einer Datei zu lesen?",
        wrong_options: [
          "3",
          "4",
          "10",
        ],
        correct_options: ["2"], // Single-Choice
        image: "images/inode.png",
      },
      {
        question: "Gegeben ist eine Inode-Datenstruktur mit 12 direkten Einträgen und einfach-, zweifach- und dreifachindirekten Indexblöcken. Ein Indexblock hat die Größe eines Datenblockes und kann 256 Adressen aufnehmen. Ein Datenblock ist 1 kB groß. Wieviele Festplattenzugriffe sind notwendig, um Byte 250 000 einer Datei zu lesen?",
        wrong_options: [
          "4",
          "6",
          "8",
        ],
        correct_options: ["3"], // Single-Choice
        image: "images/inode2.png",
      },
      {
        question: "Welches Speichermedium erlaubt einen wahlfreien Zugriff?",
        wrong_options: [
          "Magnetband",
          "Lochkarte",
          "Keine der Möglichkeiten stimmt",
        ],
        correct_options: ["USB-Stick"], // Single-Choice
      },
      {
        question: "Ein Festplatte mit der Kapazität 20 GiB (21,47 GB) und einem Schreib-Lesekopf pro Scheibenoberfläche hat folgende Eigenschaften: - Sektorgröße: 1024 Byte - Anzahl Spuren pro Oberfläche: 1024 - Anzahl Sektoren pro Spur: 1024 Wieviele Schreib-Leseköpfe besitzt die Platte insgesamt?",
        wrong_options: [
          "10",
          "2",
          "100",
        ],
        correct_options: ["20"], // Single-Choice
      },
      {
        question: "Ein Festplatte mit der Kapazität 10 GiB (10.73 GB) und einem Schreib-Lesekopf pro Scheibenoberfläche hat folgende Eigenschaften: - Sektorgröße: 1024 Byte - Anzahl Spuren pro Oberfläche: 1024 - Anzahl Sektoren pro Spur: 1024 Wieviele Schreib-Leseköpfe besitzt die Platte insgesamt?",
        wrong_options: [
          "1",
          "20",
          "100",
        ],
        correct_options: ["10"], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen zum Zeitpunkt t=10 folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 0, 3, 2, 0, 1, 4, 1, 0, 1, 4 Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Die Seiten sind zu den Zeiten 0, 1, und 2 eingefügt und die Zeiten der letzten Zugriffe lautet: 5, 3 und 7. Wie viele Seitenfehler treten auf, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie FIFO verwendet wird?",
        wrong_options: [
          "3",
          "5",
          "2",
        ],
        correct_options: ["4"], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen zum Zeitpunkt t=10 folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 0, 3, 2, 1, 4, 0, 2, 0, 2, 0 Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Die Seiten sind zu den Zeiten 2, 0, und 1 Sekunden eingefügt und die Zeiten der letzten Zugriffe lautet: 5, 3 und 7 Sekunden. Wie viele Seitenfehler treten auf, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie FIFO verwendet wird?",
        wrong_options: [
          "6",
          "3",
          "4",
        ],
        correct_options: ["5"], // Single-Choice
      },
      {
        question: "In einem Betriebssystem mit Paging stehen zum Zeitpunkt t=10 folgende Seiten in der Warteschlange und warten auf die Bearbeitung: 2, 3, 1, 0, 3, 5, 1, 3, 5, 3 Das System verfügt über drei Seitenrahmen, die mit den Seiten 0, 1 und 2 gefüllt sind. Die Seiten sind zu den Zeiten 0, 1, und 2 Sekunden eingefügt und die Zeiten der letzten Zugriffe lautet: 5, 7 und 3. Wie viele Seitenfehler treten auf, nachdem die Warteschlange vollständig abgearbeitet ist und wenn die Seitenersetzungsstrategie LRU verwendet wird?",
        wrong_options: [
          "6",
          "3",
          "5",
        ],
        correct_options: ["4"], // Single-Choice
      },
      {
        question: "Welches Kommando eignet sich am besten, um die zeitliche Entwicklung des Speicherverbrauchs von Prozessen zu beobachten?",
        wrong_options: [
          "ps --repeat",
          "ps aux",
          "ps -ax",
        ],
        correct_options: ["top"], // Single-Choice
      },
      {
        question: "Welches Code-Fragment erzeugt diesen Prozessbaum?",
        wrong_options: [
          "erstes",
          "zweites",
          "drittes",
          "keines"
        ],
        correct_options: ["viertes"], // Single-Choice
        image: "images/baum.png",
      },
      {
        question: "Ordnen Sie die Speicherarten aufsteigend (größte Zugriffszeit zuerst) nach der durchschnittlichen Zugriffszeit.",
        wrong_options: [
          "Optische Laufwerke > Festplatte > 2. Level Cache > Hauptspeicher",
          "Optische Laufwerke > Hauptspeicher > Festplatte > 2. Level Cache",
          "Festplatte > Optische Laufwerke > 2. Level Cache > Hauptspeicher",
          "Festplatte > Optische Laufwerke > Hauptspeicher > 2. Level Cache",
          "Festplatte > Hauptspeicher > 2. Level Cache > Optische Laufwerke",
          "Hauptspeicher > Optische Laufwerke > Festplatte > 2. Level Cache",
          "Hauptspeicher > Festplatte > Optische Laufwerke > 2. Level Cache",
          "2. Level Cache > Festplatte > Optische Laufwerke > Hauptspeicher",
        ],
        correct_options: ["Optische Laufwerke > Festplatte > Hauptspeicher > 2. Level Cache"], // Single-Choice
      }
  ];
  export default questionsData;
  