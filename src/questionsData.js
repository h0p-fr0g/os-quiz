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
        question: "Welche Programme dienen auf einem Linux-System zur Prozessverwaltung?",
          options: [
            "kill, top",
            "ps, touch",
            "run, touch",
            "echo, kill",
            "ps, procs",
            "ps, quit",
          ],
          answers: ["kill, top"], // Single-Choice
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
        question: "Welche der folgenden Aussagen treffen auf einen Zombie-Prozess zu? (3 richtige Antworten)",
        options: [
            "Zombies belegen einen Eintrag in der Prozesstabelle.",
            "Der Elternprozess sollte eine Variante von wait(2) aufrufen, um Zombies zu verhindern.",
            "Zombies belegen keinen Eintrag in der Prozesstabelle.",
            "Ein Zombie entsteht, wenn ein Prozess sich beendet und der Elternprozess die Nachricht vom Tode des Kindprozesses nicht entgegennimmt.",
            "Zombies sind beendete Prozesse, die sich aber selbst wieder starten.",
            "Ein Zombie ist ein Prozess, dessen Elternprozess terminiert ist."
        ],
        answers: [
          "Zombies belegen einen Eintrag in der Prozesstabelle.",
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
          "Hauptspeicher",
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
      {
        question: "Eine Festplatte bietet 4096 Zylinder (0-4095), der Schreiblesekopf bewegt sich aufwärts und bearbeitet dann eine Anfrage an Zylinder 2342. Die Warteschlange mit Zugriffsanfragen enthält folgende Einträge: 23, 1000, 2300, 2800, 4000 Die Anfragen werden in folgender Reihenfolge bearbeitet: 2800, 4000, 2300, 1000, 23 Welcher Disk-Scheduling-Algorithmus wurde verwendet?",
        options: [
          "LOOK",
          "C-LOOK",
          "SCAN",
          "C-SCAN",
        ],
        answers: ["LOOK"], // Single-Choice
        image: null,
      },
      {
        question: "Gegeben sei eine dynamische Speicherverwaltung mit folgenden Speicherblöcken: Folgende Speicherplatzanforderungen liegen vor: 50 kB, 350 kB, 20 kB und 70 kB. Welche Speicherlücken stehen zur Verfügung, nachdem alle Anfragen mit First-Fit Strategie abgearbeitet sind? Nach jeder erfolgreichen Speicherallokation wird der Verschnitt freigegeben.",
        options: [
          "10 - 4 - 150 - 50",
          "50 - 130 -10 - 24",
          "30 - 80 - 10 - 24 -70",
          "60 - 70 - 50 - 24 - 10",
        ],
        answers: ["30 - 80 - 10 - 24 -70"], // Single-Choice
        image: "images/first-fit.png",
      },
      {
        question: "Gegeben sei eine dynamische Speicherverwaltung mit folgenden Speicherblöcken: Welche Speicherblöcke werden bei sukzessiver Speicherplatzanforderung von 10, 20, 60 und 40 KB mit Worst-Fit Strategie ausgewählt? Nach jeder erfolgreichen Speicherallokation wird der Verschnitt nicht freigegeben.",
        options: [
          "20 K - 30  K - 60 K - 50 K",
          "130 K - 60  K - 80 K - 50 K",
          "130 K - 60  K - 80 K - 112 K",
          "130 K - 112  K - 80 K - 60 K",
        ],
        answers: ["130 K - 112  K - 80 K - 60 K"], // Single-Choice
        image: "images/worst-fit.png",
      },
      {
        question: "Wie nennt man die Technik, bei der das Betriebssystem eines Computers mehrere Programme gleichzeitig ausführt, bei der es zwischen ihnen hin- und herschaltet?",
        options: [
          "Multitasking",
          "Paging",
          "Multithreading",
          "Partitionierung",
        ],
        answers: ["Multitasking"], // Single-Choice
        image: null,
      },
      {
        question: "In einer Multiprogramming-Umgebung:",
        options: [
          "befindet sich mehr als ein Prozess im Speicher.",
          "müssen mehrere CPUs vorhanden sein.",
          "führt der Prozessor mehr als einen Prozess zur gleichen Zeit aus.",
          "werden die Programme von mehr als einer Person entwickelt.",
        ],
        answers: ["befindet sich mehr als ein Prozess im Speicher."], // Single-Choice
        image: null,
      },
      {
        question: "Sie haben eine Festplatte mit 10 TB zur Verfügung, die Sie mit FAT-Dateisystem formatieren und komplett nutzen wollen. Die Cluster-Größe beträgt 4 kB. Wie viele Bit pro FAT-Eintrag werden benötigt?",
        options: [
          "32 Bit",
          "20 Bit",
          "30 Bit",
          "28 Bit",
        ],
        answers: ["32 Bit"], // Single-Choice
        image: null,
      },
      {
        question: "Eine Magnetfestplatte besitzt folgende Eigenschaften: Sektorgröße: 1024 Byte, Anzahl Spuren pro Oberfläche: 22222, Anzahl Sektoren pro Spur: 256, Anzahl Scheiben(Oberflächen): 16, Welche Kapazität hat die Festplatte?",
        options: [
          "93,21 GB (86,8 GiB)",
          "11,55 GB (10,76 GiB)",
          "436,7 GB (406,7 GiB)",
          "1,90 GB (1,8 GiB)",
        ],
        answers: ["93,21 GB (86,8 GiB)"], // Single-Choice
        image: null,
      },
      {
        question: "Die Dateiberechtigung -w---x-wx die in einem oktalen Ausdruck dargestellt wird, lautet:",
        options: [
          "213",
          "661",
          "774",
          "211",
        ],
        answers: ["213"], // Single-Choice
        image: null,
      },
      {
        question: "Sie haben eine Inode-Datenstruktur implementiert, die 12 direkte Einträge, einen einfach-indirekten und einen zweifach-indirekten Index bietet. Jeder Index ist so groß wie ein Datenblock, jeder Indexeintrag (Adresse) benötigt 8 Bytes. Wie groß kann eine Datei maximal werden, wenn ein Datenblock 4 kB gross ist?",
        options: [
          "1.050.672 kB",
          "1.050.672 B",
          "525336 kB",
          "262.668 kB",
        ],
        answers: ["1.050.672 kB"], // Single-Choice
        image: null,
      },
      {
        question: "Welches sind die drei wichtigsten Prozesszustände?",
        options: [
          "rechnend, rechenbereit, blockiert",
          "rechnend, rechenbereit, abgestürzt",
          "bootend, rechnend, beendet",
        ],
        answers: ["rechnend, rechenbereit, blockiert"], // Single-Choice
        image: null,
      },
      {
        question: "Eine Festplatte dreht sich mit 17000 Umdrehungen pro Minute. Wie lautet die durchschnittliche Latenzzeit (Zeit bis zum Erreichen der gewünschten Position innerhalb des Zylinders)?",
        options: [
          "1,76 ms",
          "10 ms",
          "2 ms",
          "3,7 ms",
        ],
        answers: ["1,76 ms"], // Single-Choice
        image: null,
      },
      {
        question: "Welche der folgenden Aussagen zur Multiprogramming with a fixed number of tasks (MFT) trifft zu?",
        options: [
            "Interne Fragmentierung ist ggf. groß",
            "Es gibt keine externe Fragmentierung.",
            "MFT ist geeignet für Systeme mit wenigen großen Prozessen.",
            "Alle Partitionen müssen die gleiche Größe besitzen.",
            "Um die interne Fragmentierung klein zu halten, wird die Strategie 'Worst Fit' verwendet.",
            "Prozessgröße darf größer sein als die Partitionsgröße."
        ],
        answers: [
          "Interne Fragmentierung ist ggf. groß",
          "Es gibt keine externe Fragmentierung.",
          "MFT ist geeignet für Systeme mit wenigen großen Prozessen.",
        ], // Multiple-Choice
        image: null,
      },
      {
        question: "Welcher Speicher ist i.d.R. ein Bestandteil der CPU?",
        options: [
          "Register",
          "Core Memory",
          "Magnetspeicher",
          "Keine der Möglichkeiten stimmt",
        ],
        answers: ["Register"], // Single-Choice
        image: null,
      },
      {
        question: "Das Kommando  'ls −l autoconf' zeigt Folgendes auf der Konsole: '-rwxr--r-- 1 user01 verwaltung 16704 Nov 22 17:13 autoconf' Wie kann der Benutzer user01 alle Leserechte entfernen?",
        options: [
          "chmod +x autoconf",
          "sudo chmod 744 autoconf",
          "chown g-x autoconf",
          "chmod uog-r autoconf",
        ],
        answers: ["chmod uog-r autoconf"], // Single-Choice
        image: null,
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
      {
        question: "In einem einstufigen Paging-System mit TLB dauert ein Speicherzugriff 40 ns und der Zugriff auf den TLB 1 ns. Ab welcher Trefferrate führt der Einsatz des TLB zu verbesserten durchschnittlichen Zugriffszeiten?",
        options: [
          "2,5%",
          "1%",
          "2%",
          "5%",
        ],
        answers: ["2,5%"], // Single-Choice
        image: null,
      },
      {
        question: "Gegeben ist ein dreistufiges Paging-System mit TLB. Wie lange dauert das Lesen eines Wertes aus dem Hauptspeicher, wenn der TLB einen Eintrag zum Haupspeicher enthält? Ein Speicherzugriff dauert 100 ns und ein TLB-Zugriff 2ns.",
        options: [
          "102 ns",
          "302 ns",
          "402 ns",
          "400 ns",
        ],
        answers: ["102 ns"], // Single-Choice
        image: null,
      },
      {
        question: "In einer Hauptspeicherverwaltung mit mehrstufigem Paging verwendet die CPU 48 Bit für die logischen Adressen. Eine Seite ist 4 kB groß und für jeden Seitentabelleneintrag wird 8 Byte verwendet. Wie viele Stufen werden mindestens benötigt, wenn eine Seitetabelle maximal so groß wie eine Seite sein darf?",
        options: [
          "4 Stufen",
          "3 Stufen",
          "2 Stufen",
          "5 Stufen",
        ],
        answers: ["4 Stufen"], // Single-Choice
        image: null,
      },
      {
        question: "Gegeben ist eine Inode-Datenstruktur mit 12 direkten Einträgen und einfach-, zweifach- und dreifachindirekten Indexblöcken. Ein Indexblock hat die Größe eines Datenblockes und kann 256 Adressen aufnehmen. Ein Datenblock ist 1 kB groß. Wieviele Festplattenzugriffe sind notwendig, um Byte 11 233 einer Datei zu lesen?",
        options: [
          "3",
          "4",
          "10",
          "2",
        ],
        answers: ["2"], // Single-Choice
        image: "images/inode.png",
      },
  ];
  
  export default questionsData;
  