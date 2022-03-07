---
title: Generative Adversarial Network
date: 2021-08-01T13:22:38.454Z
description: Generative adversarial networks are networks that can generate
  "new" images, among other things. They consist of two networks that fight with
  each other....
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1627824313/Wissen/GAN.png
tutorial_link:
  - gaugan-the-landscape-painter
level:
  - wissen
  - free
---
Generative Adversarial Networks, GAN for short, are able to generate new images. Some machine learning models are very good at recognising cats or distinguishing them from dogs, they can recognise cancer or identify songs. So they can classify very well, but what they can't do at all is create new things based on their knowledge. They can recognise a dog when they see one, but they can't draw a new dog.

![](https://thispersondoesnotexist.com/image "thispersondoesnotexist.com")

This is where the GANs come into play, they are able to create new images. If you feed them a huge data set of faces, for example, the model learns what constitutes a face and from a certain point can create its own faces that look amazingly real to the human eye. (See above)

How do these models do it? The mechanism behind this is very interesting and can best be illustrated with an example from the art world. One model takes on the role of the art forger (af), another that of the art connoisseur (ac). The ac knows all the pictures in the world, or all the pictures that we have entered as a data set. The af knows nothing at all and starts with a wild pile of pixels.

![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644320917/Wissen/fakes000000_2_auz1f6.png)

e shows this to the ac, who says that 99.99% of the time it is a forgery. The af tries again and again until at some point the ac says ok maybe 95% sure that this is a forgery. The af builds on this until at some point it generates an image that the ac can no longer distinguish from the original data set.

Now the trained parameters can be used to create an infinite number of new images, be it poodles, cars or street lamps. Everything is possible.

![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644321145/Wissen/real_1_evnokf.png)