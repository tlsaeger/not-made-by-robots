---
title: NoseNet mit PoseNet
date: 2022-02-07T10:27:02.108Z
preview: "Du träumst davon eine digitale Clownsnase zu haben. Mit dieser
  Anleitung wird es Wirklichkeit. "
wissen_link: Supervised-Learning
level:
  - tutorial
  - low-code
  - kostenlos
tag:
  - tutorial
  - low-code
  - kostenlos
description: "Du träumst davon eine digitale Clownsnase zu haben. Mit dieser
  Anleitung wird es Wirklichkeit. PoseNet ist darauf trainiert, Körper zu
  erkennen und einzelne Bereiche zu klassifizieren. Wir machen uns dies zu Nutze
  und verpassen uns eine rote Clownsnase. "
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644229899/Tutorials/PoseNet%20NoseNet/Screenshot_2022-02-07_at_11.29.25_pcz10f.jpg
video: https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644229910/Tutorials/PoseNet%20NoseNet/Screen_20Recording_202021-11-15_20at_2017.17.57_g6brm5.mp4
---
2. Wir benutzen um unseren Code zu schreiben den p5 Web-Editor, eine Einführung in diesen findest du [hier](https://www.youtube.com/watch?v=MXs1cOlidWs&ab_channel=TheCodingTrain). \
   Den Gesamten Code findest du übrigens auch ganz unten auf der Seite.
3. Wir verwenden eine Bibliothek mit dem Namen ml5.js, die es uns ermöglicht PoseNet zu verwenden. Um diese ansprechen zu können, müsse wir diese Bibliothek zu allererst einmal einbinden. Gehe dazu auf die Datei `index.html` im p5 Web-Editor. Füge die folgende Zeile ein:

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

1. Jetzt ist es Zeit unser PoseNet Model zu laden. Wir gehen die Schritte gleich gemeinsam durch, du findest auch alle Informationen in der Dokumentation von [ml5.js](https://learn.ml5js.org/#/reference/posenet) <https://learn.ml5js.org/#/reference/posenet>
   Wir beginnen damit das PoseNet Model in eine Variable zu laden. Dazu erstellen wir die Variable poseNet über `let poseNet;` Dann initialisieren wir das `ml5.posenet` im `Setup()`, das Modell will von uns noch zwei weitere Sachen wissen, welches Video soll denn klassifiziert werden und was soll passieren wenn das Modell geladen ist. Als Video nutzen wir unserer Variable `video` und wenn das Model geladen ist soll unsere Funktion `modelLoaded` ausgeführt werden. Die Funktion gibt uns dann über console.log("Model Loaded") zu wissen wann das Model geladen ist:

```jsx
let video;
let poseNet;
const poseNet = ml5.poseNet(video, modelLoaded);

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
}
function draw() {
  background(220);
  image(video, 0, 0);
}

function modelLoaded() {
  console.log("Model Loaded");
}
```

1. Als nächstes definieren wir, dass immer dann wenn das Model eine neue Pose erkannt hat es die Funktion `gotResults()` ausführt. Die Funktion dazu heißt `poseNet.on("pose", gotResult);`

```jsx
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResults);
}
```

1. Unserer Posen wollen wir uns wieder speichern und erstellen dazu die Variable poses, da wir aus PoseNet nicht einen Wert herausbekommen, sondern eine Liste an Werten müssen wir die Variable als sogennates Array initialisieren. Wir schreiben: `let poses = [];` Dann können wir die Funktion `gotResults()` erstellen, sie dient dazu die Resultate von PoseNet in der eben erstellten Variablen zu speichern:

```jsx
let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResults);
}
function draw() {
  background(220);
  image(video, 0, 0);
}

function modelLoaded() {
  console.log("Model Loaded");
}
function gotResults(results) {
  poses = results;
}
```

1. Nun wollen wir die Punkte die PoseNet in unserem Video erkannt hat auch auf unserer Körper zeichnen. Zur besseren Übersicht erstellen wir uns eine Funktion mit dem Namen `drawKeypoints()` Wie bereits im vorangegangenen Schritt erwähnt, gibt uns PoseNet eine lange Liste zurück darin unsere 17 Punkte, das ganze für bis zu 5 Personen. Hier mal ein kleiner Ausschnitt aus den Daten, die wir zurückbekommen:

```jsx
[
  {
    "pose": {
      "score": 0.499634271597161,
      "keypoints": [
        {
          "score": 0.9998874664306641,
          "part": "nose",
          "position": {
            "x": 345.9535733827821,
            "y": 208.09132379316634
          }
        },
        {
          "score": 0.9998072981834412,
          "part": "leftEye",
          "position": {
            "x": 369.9835121956317,
            "y": 179.41038495371777
          }
        },
        {
          "score": 0.9996201992034912,
          "part": "rightEye",
          "position": {
            "x": 323.2964883054741,
            "y": 180.8167002637099
          }
        }
…
… }
]
```

1. Wir sehen ganz viele Datenpunkt die ähnlich von einem Ordner strukturiert sind. Der oberste Ordner (blau) hat Daten über die gesamte Pose, inklusive eines `"score"` wie sicher sich PoseNet ist, dass da überhaupt eine Person erkannt wurde. Unter dem Schlüsselwort `"key points"` geht dann der nächste Ordner auf, dieser beinhaltet wiederum drei Elemente. Diese haben wieder einen `"score"` sowie einen `"part"` also ein Name z.B. `"nose"` und besonders wichtig die `"x"` und `"y"` `"position"`. Wo sich also unsere Nase befindet. Das ganze gibt es dann auch noch für das linke und rechte Auge und alle restlichen 14 Punkte des Modells.
2. Zu allererst wollen wir jetzt einmal alle Punkte zeichnen, die uns das Model zurückgibt. Dafür arbeiten wir mit einem `for-loop` dieser wiederholt eine gegeben Aufgabe so oft wir eben wollen. Wir definieren den `for-loop` mit `for (let i = 0; i < poses.length; i++)`. Auf deutsch heißt das erstelle eine Variable `let i = 0` solange i kleine ist als die Anzahl der Posen (`i < poses.length;`) führe den das aus was wir gleich schreiben und dann erhöhe i um eins (`i++`). In unser Ordner Logik sind wollen wir jetzt erstmal auf alle Personen zugreifen die PoseNet erkennt. Dafür speichern wir jede Person in einer neuen Variable `let pose = poses[i].pose` (blau). Dann wiederholen wir das ganze für alle Punkte die erkannt werden in dem wir durch dieses neue Array loopen `for (let j = 0; j < pose.keypoints.length; j++)`, darin wiederum picken wir uns die Keypoints raus und zeichnen an deren X- und Y-Position ein grünen Kreis.\
   `fill(0, 255, 0); noStroke(); ellipse(keypoint.position.x, keypoint.position.y, 10, 10);` Unsere Funktion sieht dann so aus:

```jsx
function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
    }
  }
}
```

1. Jede Funktion die wir schreiben müssen wir auch irgendwo aufrufen, sonst sehen wir nicht. Das tun wir in der `draw()` Funktion, sodass unsere Keypoints 60 mal die Sekunde neu gezeichnet werden.

```jsx
function draw() {
  background(220);
  image(video, 0, 0);
  drawKeypoints();
}
```

![Screenshot 2021-11-15 at 16.50.38.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644238344/Tutorials/PoseNet%20NoseNet/Screenshot_2021-11-15_at_16.50.38_bmyrim.png)

12. Nun wollen wir nur noch die Nase identifizieren und dieser dann einen roten Kreis als Clownsnase geben. In dem Auszug aus der Antwort von PoseNet haben wir gesehen, dass die Nase das erste Objekt war. Dahingehend können wir nun den Code anpassen. Anstatt durch alle Punkte zu loopen, brauchen wir noch den ersten Punkt anzusprechen. Wir ersetzen den zweiten Loop mit `let keypoint = pose.keypoints[0];` das erstes Element eines Arrays spricht man nicht etwa mit 1 an sonder mit 0, deshalb die 0 in der eckigen Klammer. Der Rest bleibt unverändert. (Vergiss nicht die schließende Klammer des zweiten for-loops auch zu löschen.)

```jsx
function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let keypoint = pose.keypoints[0];
    fill(0, 255, 0);
    noStroke();
    ellipse(keypoint.position.x, keypoint.position.y, 50, 50);
  }
}
```

1. Als letztes müssen wir die Nase nur noch rot und etwas größer machen. `fill(255, 0, 0);` `ellipse(keypoint.position.x, keypoint.position.y,50, 50);`
   Der vollständige Code sieht dann so aus:

```jsx
let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResults);
}
function draw() {
  background(220);
  image(video, 0, 0);
  drawKeypoints();
}

function modelLoaded() {
  console.log("Model Loaded");
}

function gotResults(results) {
  poses = results;
}

function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let keypoint = pose.keypoints[0];
    fill(255, 0, 0);
    noStroke();
    ellipse(keypoint.position.x, keypoint.position.y, 50, 50);
  }
}
```

![Screenshot 2021-11-15 at 17.15.25.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644238349/Tutorials/PoseNet%20NoseNet/Screenshot_2021-11-15_at_17.15.25_lbflmi.png)