---
title: Zoom Prank
date: 2022-02-07T11:13:56.945Z
description: "Ein Zoom-Prank reagiert auf Gesten die du vor der Kamera machst.
  Auf einmal erscheint hinter dir ein gruseliges Monster oder dein Bildschirm
  ist kaputt, alles kein Problem. "
preview: "Lege deine Kolleg:innen rein indem du ihnen einen Zoom-Prank spielst. "
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232718/Tutorials/Zoom-Prank/Screenshot_2021-10-17_at_13.37.03_zyjrjp.png
video: https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644232734/Tutorials/Zoom-Prank/Screen_Recording_2021-10-17_at_13.47.24_rhwpwi.mp4
wissen_link:
  - supervised-learning
level:
  - tutorial
  - low-code
  - kostenlos
---

1. Befolge die Anweisung aus dem verlinkten Beispiel "**[Bananen und Äpfel](/tutorial/bananen-und-aepfel)**" soweit, dass du einen Link generiert hast. Diesen brauchen wir im Folgenden. Trainiere dabei eine Klasse mit deiner geheimen Geste, z.B. eine Hand macht ein Peace-Zeichen etc. Nenne diese »geheim«. Die andere Klasse trainierst du mit allem anderen, wie du gerade auf deinem Stuhl herum sitzt oder auch mal nicht da bist etc. nenne diese »leer«
2. Wir benutzen um unseren Code zu schreiben den p5 Web-Editor, eine Einführung in diesen findest du [hier](https://www.youtube.com/watch?v=MXs1cOlidWs&ab_channel=TheCodingTrain). \
   Den Gesamten Code findest du übrigens auch ganz unten auf der Seite.
3. Wir verwenden eine Bibliothek mit dem Namen ml5.js, die es uns ermöglicht, das Model aus Teachable Machine weiter zu verwenden und auf deine Geheime Geste zu reagieren. Um diese ansprechen zu können, müsse wir diese Bibliothek zu allererst einmal einbinden. Gehe dazu auf die Datei `index.html` im p5 Web-Editor. Füge die folgende Zeile (bunt) ein:

```jsx
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
```

1. Haben wir das geschafft, bewegen wir uns fast ausschließlich in der Datei `sketch.js`, wechsle dahin zurück. Zu allererst wollen wir uns selber auf dem Bildschirm sehen. Dazu sprechen wir ersteinmal unserer Webcam an. Füge die folgenden Zeilen der `setup()` Funktion zu und bestimme die Variable `video` außerhalb der Funktion.

```jsx
let video;
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
}
```

![Screenshot%202021-10-17%20at%2013.30.30.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232719/Tutorials/Zoom-Prank/Screenshot202021-10-1720at2013.30.30_lood7m.png)

1. Wenn wir jetzt den Sketch starten, wird uns der Browser vielleicht fragen ob er auf unserer Kamera zugreifen darf, wir akzeptieren das und sollten uns jetzt unter dem Canvas auf dem Bildschirm sehen können. Damit unser Bild im Canvas gezeigt wird blenden wir es im Setup über `video.hide()` aus und zeichnen es dann in der `draw()` Funktion.

```jsx
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}
function draw() {
  background(220);
  image(video, 0, 0);
}
```

![Screenshot 2021-10-17 at 13.31.33.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232719/Tutorials/Zoom-Prank/Screenshot_2021-10-17_at_13.31.33_wwq3dh.png)

1. Nun haben wir unser Webcam-Bild schon mal auf dem Canvas. Als nächstes laden wir das Bild, welches angezeigt werden soll, wenn wir unsere geheime Geste machen. Lade dafür zu allererst das Bild in den p5 Webeditor hoch. (Wenn du kein Bild hast kannst du unter diesem Absatz eins runterladen) Dann nutzen wir die Funktion `preload()` diese wird als allererstes geladen und wir können so sicher sein, dass unser Bild geladen ist wenn wir es brauchen. Wir brauchen dafür eine Variable in die wir das Bild speichern können. Diese definieren wir mit dem Schlüsselwort `let` z.B. `let bild;` außerhalb aller Funktionen. In `preload()` laden wir dann das Bild in die Variable `bild` und zwar mit `loadImage('bild.jpg');`

[bild.jpg](Prank%20Your%20Zoom-Call%206d5875c34a78423bb79520eb9759b6ab/bild.jpg)

```jsx
let bild;
function preload() {
  bild = loadImage("bild.jpg");
}
```

1. Jetzt haben wir das Bild geladen aber es wird uns noch immer nicht angezeigt. Wir fügen deshalb das Bild der draw Funktion hinzu, ähnlich wie wir im Schritt 5. mit unserem Webcam-Bild gemacht haben.

```jsx
function draw() {
  background(220);
  image(video, 0, 0);
  image(bild, 0, 0, width, height);
}
```

![Screenshot 2021-10-17 at 13.37.03.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232718/Tutorials/Zoom-Prank/Screenshot_2021-10-17_at_13.37.03_zyjrjp.png)

1. Unser Code sieht aktuell wie folgt aus:

```jsx
let bild;
let video;

function preload() {
  bild = loadImage("bild.jpg");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(220);
  image(video, 0, 0);
  image(bild, 0, 0, width, height);
}
```

1. Wir sehen unser Video nicht mehr, weil das geladene Bild dies vollständig überdeck. Das Bild wollen wir aber ja nur anzeigen, wenn unsere geheime Geste erkannt wird. Auch diese Funktion wollen bereit haben bevor der Rest geladen wird. Weshalb wir sie `preload()` schreiben, wir brauchen wieder eine Variable die unser Model speichert, diese nennen wir `classifier` . Da wo MODELURL steht kommt der Link rein, den wir von TeachableMachine bekommen haben. Achte darauf, dass die Anführungszeichen da bleiben, wo sie sind.

```jsx
let bild;
let video;
let classifier;

function preload() {
  bild = loadImage("bild.jpg");
  classifier = ml5.imageClassifier("MODELURL" + "model.json");
}
```

1. Unser Model ist geladen und wir können damit beginnen es unser Video zu klassifizieren. Nun erstellen wir unserer erste eigene Funktion. Du kennst ja schon Funktionen wie `setup()` oder `preaload()`. Funktionen helfen uns dabei den Überblick zu behalten in dem sie bestimmte Anweisungen gruppieren, so können diese z.B. immer wieder ausgeführt werden. Im Hintergrund wird z.B. die Funktion draw() jede Sekunde 60 mal ausgeführt. Die Funktion die wir erstellen wollen nennen wir `classifyVideo()`, weil wir damit unser Video klassifizieren können. In die Funktion schreiben wir nur eine Anweisung: `classifier.classify(video, gotResult);` Also der classifier, den wir vorher mit unserem Model versorgt habe, soll etwas klassifizieren. Was das ist sagen wir dann in der Klammer `video` also unser Webcam-Bild. Das zweite Wort `gotResults` ist wiederum eine Funktion die ausgeführt werden soll, wenn unser Bild klassifiziert wurde. Hier können wir uns dann die Ergebnisse anschauen. Damit die Funktion `classifyVideo()` initial einmal ausgeführt wird fügen wir sie außerdem zur `setup()` Funktion hinzu.

```jsx
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}
```

1. Wie eben schon erwähnt gibt es jetzt die Funktion `gotResults()` welche uns unser Ergebnis ausgibt. Wir speichern das Ergebnis in der neu definierten Variablen `label` Das Ergebnis wird uns in einer langen Liste ausgegeben wir wollen davon nur das erste Element, beim ist das erste Element eine Liste (auch Array gennant) an stelle 0. Nachdem wir das Ergebnis gespeichert haben, rufen wir unserer `classifyVideo()` Funktion wieder auf und alles beginnt von vorne. Wir schreiben:

```jsx
let label;
function gotResult(error, results) {
  label = results[0].label;
  classifyVideo();
}
```

1. Wir haben es fast geschafft. Aktuell zeichnen wir das Bild ja die ganze Zeit in unser Draw Funktion. Das müssen wir ändern und zwar mit einem if-Statment. Das heißt übersetzt soviel, wie **Wenn** das Label »Geheim« ist, **dann** zeichne das Bild. Im Code sieht das wie folgt aus:

```jsx
function draw() {
  image(video, 0, 0);
  if (label == "Geheim") {
    image(bild, 0, 0);
  }
}
```

![](https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644232734/Tutorials/Zoom-Prank/Screen_Recording_2021-10-17_at_13.47.24_rhwpwi.mp4)

1. Wir haben es geschafft, dass Bild wird nur dann gezeigt, wenn wir unsere geheime Geste machen. Hier noch einmal der gesamte Code:

```jsx
let classifier;
let bild;
let video;
let label;

function preload() {
  classifier = ml5.imageClassifier("MODELURL" + "model.json");
  bild = loadImage("bild.jpg");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  label = results[0].label;
  classifyVideo();
}

function draw() {
  image(video, 0, 0);
  if (label == "Geheim") {
    image(bild, 0, 0, width, height);
  }
}
```

1. Der Code läuft nun über den Browser. Damit wir den Prank aber auch in in Zoom, Teams, Webex oder anderen Videocalls durchführen können, arbeiten wir mit einer virtuellen Webcam von [OBS](https://www.notion.so/Open-Broadcaster-Software-f0dd94f55c4943e78740b55b45ebe1f2). Diese simuliert eine Webcam, die wir in den Cameinstellungen von unserem Porgramm auswählen können. Dafür starten wir OBS und fügen eine neue Videoquelle hinzu, indem wir auf das + unter "Quellen" drücken.
2. Wir wählen jetzt unter den Quellen die "Fensteraufnahme" aus. Dort suchen wir das geöffnete Browserfenster, in dem unsere p5.js Sketch läuft. Unter Filter fügen wir einen "Zuschneiden/Pad" Filter hinzu und beschneiden das Fenster so, dass nur noch der Kameraauschnitt zu sehen ist. Wenn wir fertig sind, klicken wir auf "Schließen".
3. Schließlich vergrößern wir den Bildauschnitt durch das Ziehen an den roten Punkten so weit, dass wir den ganzen Bildschirm füllen. Im Anschluss können wir die unter "Virtuelle Kamera starten" die Prankcam starten und in Zoom unter den Kameraeinstellungen als "OBS Virtual Camera" auswählen.
