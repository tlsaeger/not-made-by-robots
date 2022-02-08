---
title: Generative Adversarial Network
date: 2021-08-01T13:22:38.454Z
description: Generative Adersverial Networks, sind Netzwerke, die u.a. »neue«
  Bilder generieren können. Sie bestehen aus zwei Netzwerken die miteinander
  kämpfen…
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1627824313/Wissen/GAN.png
tutorial_link:
  - gaugan-der-landschaftsmaler
level:
  - wissen
  - kostenlos
---
Generative Adversarial Networks, kurz GAN, sind in der Lage neue Bilder zu generieren. Einige Machine Learning Modelle sind sehr gut darin Katzen zu erkennen oder von Hunden zu unterscheiden, sie können Krebs erkennen oder Songs identifizieren. Sie können also sehr gut klassifizieren, was sie aber überhaupt nicht können ist neue Dinge auf Grund ihres Wissen erstellen. Sie können zwar einen Hund erkennen, wenn sie einen sehen, nicht aber einen neuen Hund zeichnen. 

![](https://thispersondoesnotexist.com/image)

Hier kommen die GANs ins Spiel, diese sind in der Lage neue Bilder zu erschaffen. Füttert man sie z.B. mit einem riesigen Datenset von Gesichtern, lernt das Modell was ein Gesicht ausmacht und kann ab einen bestimmten Punkt eigene Gesichter erstellen die für das menschliche Auge verblüffend Real aussehen. (Siehe oben)

Wie machen diese Modelle das? Der Mechanismus dahinter ist sehr interessant und lässt sich am besten mit einem Beispiel aus der Kunstwelt veranschaulichen. Ein Modell übernimmt die Rolle der Kunstfälscher:in (KF) ein anderes das der Kunstkenner:in (KK). Der KK kennt alle Bilder der Welt, bzw. alle Bilder die wir als Datenset reingegeben haben. Der KF weiß gar nichts und beginnt mit einem wilden Pixelhaufen. Zeigt dies dem KK, der sagt zu 99,99% ist das eine Fälschung. Der KF versucht es wieder und wieder, bis irgendwann der KK sagt ok vielleicht zu 95% sicher, dass das eine Fälschung ist. Der KF baut darauf auf, bis er irgendwann ein Bild generiert, dass der KK nicht mehr von original Datensatz unterscheiden kann. 

Nun können die trainieren Parameter verwendet werden um eine unendliche Anzahl an neuen Bildern zu schaffen, seien es Pudel, Autos oder Straßenlaternen. Alles ist möglich.