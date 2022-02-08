---
title: Supervised Learning
date: 2021-06-21T12:58:39.377Z
description: Supervised Learning ist eine Art & Weise wie ML-Modelle lernen. Die
  Modelle werden dabei mit gelabelten Daten gefüttert…
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1627895537/Wissen/Supervised_Learning_fjq4z6.png
tutorial_link:
  - bananen-und-aepfel
  - nosenet-mit-posenet
  - zoom-prank
  - ""
level:
  - wissen
  - kostenlos
---

Supervised Learning lässt sich am Besten an einem Beispiel erklären: Es liegen 100 Hundebilder und 100 Katzenbilder vor. Jeder dieser Datensätzen besteht aus einem Bild und einem Label, entweder Katze oder Hund. 80% dieser Daten werden verwendet um das Neuronale Netzwerk zu »trainieren«. Ist das Netzwerk trainiert können die restlichen 20% der Daten verwendet werden, um das Training zu validieren. Hier wird das Bild ohne Label gezeigt, woraufhin, wie schon erwähnt, die Maschine das Label ausgibt. Ist die Genauigkeit des Outputs noch nicht optimal, kann mit weiteren und/oder besseren Daten nachtrainiert werden. Ein konkretes Beispiel wäre hier das Erkennen eines Tumors auf einem Röntgenbild, mit genügend Trainingsdaten, also Bildern und Labeln. So ließe sich beispielsweise unterscheiden, ob es sich bei dem entdeckten Tumor, um einen bösartigen oder gutartigen Tumor handelt. Radiolog:innen könnte so in ihrer Arbeit unterstützt werden, da die Maschine bereits eine Vorauswahl mit potentiellen bösartigen Tumoren trifft. Denkbar wäre auch, dass dieser Prozess irgendwann vollends von einer Maschine übernommen werden kann. Eine solche Art des ML eignet sich besonders wenn das Ziel ist »menschliche« Erkennung nachzubilden, Hunde von Katzen unterscheiden, Sprach verstehen etc.
