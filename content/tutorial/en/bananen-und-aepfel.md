---
title: Apples and Bananas
date: 2021-06-14T08:37:02.478Z
preview: Learn how to train your own image recognition with Teachable Machine.
wissen_link:
  - supervised-learning
level:
  - tutorial
  - no-code
  - free
tag:
  - tutorial
  - no-code
  - kostenlos
description: Learn how to train your own image recognition with Teachable
  Machine. Without any coding! We'll build a camera that reacts to gestures, so
  you can tell your friends that they're on mute.
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1623666944/Tutorials/tm_2_fce7lj.png
video: https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644232180/Tutorials/Teachable%20Machine/Screen_Recording_2022-02-07_at_12.01.33_fmbfp8.mp4
---
### **0. Intro**

Techable Machine is a platform developed by Google Creative Lab that allows you to easily train your own neural network. All you need is a computer and, ideally, a webcam.

### **1. Collecting Data**

In our simple example, we want to train an image recogniser that can distinguish apples from bananas. First open the [teachablemachine.withgoogle.com︎](http://teachablemachine.withgoogle.com)[↗︎](http://teachablemachine.withgoogle.com) Click on Get-Started and select the "Image Project". Here you see two classes, we use one for the apple and one for the banana. We can use the pencil to name the classes accordingly. Then click on Webcam, take your fruit and collect images for the apple and images for the banana by holding down the button "Hold to record". Rotate the fruit to take pictures of it from all sides and at all distances from the camera.

![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1623666894/Tutorials/tm_1_cjhlll.png)

### **2. Train**

To train the model now, simply click on the "Train Model" button, keep the browser window open and wait for the training to complete. Tip: If you want to know what's going on under the bonnet, click on "Advanced" → "Under the Hood".

### **3. Test**

Once the training is complete, we can now test the recognition. To do this, hold the fruit of your choice in the camera again, and at the bottom you will see how likely your model thinks it is that you are showing it an apple or a banana. If the apple is classified as a banana, your data may not have been diverse enough. Do the images show the apple from all angles and in many different positions? Add more data, more diverse data to a class and train the model again.

![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1623666944/Tutorials/tm_2_fce7lj.png)

### **4.** What we have learned**?**

In this first very simple example, there are already a lot of basic principles of ML. We use a neural network and the so-called [supervised learning](/wissen/supervised-learning), you can find more information about this on the [theory page](/wissen/supervised-learning).

We also see how important it is to have diverse data, otherwise a yellow part of the apple was sometimes recognised as a banana. Perhaps we could observe that the apple or the banana was not always 100% recognised. This shows that this model is not based on intelligence. It just guesses very well, with a probability of 99% it is an apple.

### **5. And now?**

You can now load your model into more complex code environments such as ml5.js and react to an input there. See the tutorial [»Zoom-Prank«](/tutorial/zoom-prank)