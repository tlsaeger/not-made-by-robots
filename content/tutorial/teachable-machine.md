---
title: Zoom Background 3000
date: 2021-06-14T08:37:02.478Z
description: "Lerne mit Teachable Machine, wie du deine eigene Bilderkennung
  trainieren kannst. Ganz ohne Coding! "
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1625677056/Tutorials/videocall_gesture_rnxkal.gif
---
### **0. Intro**

Techable Machine ist ein vom Google Creative Lab entwickelte Plattform, die es dir ermöglicht ganz einfach dein eigenes Neuronales Netzwerk zu trainieren. Alles was du dafür brauchst, ist ein Computer und im besten Fall eine Webcam. Suspendisse maximus leo libero. Nunc viverra lacus id lacus suscipit fermentum. Pellentesque sollicitudin eros quam, sit amet ullamcorper velit tempor et. Nunc vel quam imperdiet, posuere mi a, aliquam libero. Vestibulum venenatis rhoncus augue quam.

### **1. Daten sammeln** 

In unserem simplen Beispiel, wollen wir eine Bildeerkennung trainieren, die Äpfel von Bananen unterscheiden kann. Öffne dazu zu erst die [teachablemachine.withgoogle.com↗︎](http://teachablemachine.withgoogle.com) Klicke auf Get-Stared und wähle das »Image Project«. Hier siehst du jetzt zwei Klassen, in einer Sammeln wir die Daten für den Apfel in der anderen für die Banane. Über den Stift können wir die Klassen entsprechend benennen. Klick dann auf Webcam nimm dein Obst zu Hand und sammle Bilder für den Apfel und Bilder für die Bananen indem du den Knopf »Hold to record« gedrückt hältst. Drehe das Obst dabei um es von allen Seiten und mit allen Entfernungen zur Kamera abzulichten.

![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1623666894/Tutorials/tm_1_cjhlll.png)

### **2. Trainieren**

Um das Model jetzt zu trainieren, klicke einfach auf den Knopf »Train Model«, behalte das Browserfenster offen und warte ab bis das Training abgeschlossen ist. Tipp: Wenn du Wissen willst, was unter der Haube los ist, klick auf »Advanced« → »Under the Hood« 

### **3. Testen** 

Ist das Training abgeschlossen, können wir nun die Erkennung testen. Halte dazu wieder die Frucht deiner Wahl in die Kamera, unten bekommst du angezeigt wie wahrscheinlich es dein Model findet, dass du diesem einen Apfel oder eine Banane zeigst. Wird der Apfel als Banane klassifiziert, kann es sein, dass deine Daten nicht divers genug waren. Zeigen sie den Apfel aus allen Winkeln und in vielen verschiedenen Positionen? Füge einer Klasse weitere Daten, diversere Daten hinzu und trainiere das Model erneut. 

![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1623666944/Tutorials/tm_2_fce7lj.png)

### **4. Was haben wir gelernt?**

In diesem erstem sehr einfachen Beispiel stecken schon eine Menge an Grundlegenden Prinzipen des ML's Wir nutzen hier ein Neuronales Netzwerk und das so genannte [Supervised Learning](/wissen/supervised-learning), weitere Infos dazu findest du auf der nächsten Seite oder auf loremaipsum.design 

Außerdem sehen wir wie wichtig es ist diverse Daten zu haben, da sonst eine gelbe Stelle das Apfels manchmal als Banane erkannt wurde. Vielleicht konnten wir beobachten, dass der Apfel oder die Bananen nicht immer zu 100% erkannt wurde. Hier zeigt sich, dass diese Model keine Intelligenz zu Grunde liegt. Es rät einfach nur sehr gut, mit einer Wahrscheinlichkeit von 99% ist das ein Apfel. 

### **5. Weitere Ideen**

Font-Classifier, Integration in ml5.js