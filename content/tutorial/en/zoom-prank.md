---
title: Zoom Prank
date: 2022-02-07T11:13:56.945Z
description: "A zoom prank reacts to gestures you make in front of the camera.
  Suddenly a scary monster appears behind you or your screen is broken, no
  problem. "
preview: "Fool your colleagues by playing a zoom prank on them. "
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232718/Tutorials/Zoom-Prank/Screenshot_2021-10-17_at_13.37.03_zyjrjp.png
video: https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644232734/Tutorials/Zoom-Prank/Screen_Recording_2021-10-17_at_13.47.24_rhwpwi.mp4
wissen_link:
  - supervised-learning
level:
  - tutorial
  - low-code
  - free
---
1. Follow the instruction from the linked example "**[apples and bananas](/tutorial/apples-and-bananas)**" until you have generated a link. We need this link in the following. Train a class with your secret gesture, e.g. a hand makes a peace sign etc.. Call this "secret". Train the other class with everything else, such as sitting on your chair or not being there, etc. Call this "empty".
2. We use the p5 web editor to write our code, you can find an introduction to it [here](https://www.youtube.com/watch?v=MXs1cOlidWs&ab_channel=TheCodingTrain). \
   You can also find the complete code at the bottom of the page.
3. We use a library called ml5.js, which allows us to use the model from Teachable Machine and react to your secret gesture. In order to be able to address this, we first have to include this library. To do this, go to the file `index.html` in the p5 web editor. Insert the following line:

```jsx
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
```

1. Once we have done that, we move almost exclusively in the file `sketch.js`, switch back to that. First of all, we want to see ourselves on the screen. To do this, we first address our webcam. Add the following lines to the `setup()` function and set the variable `video` outside the function.

```jsx
let video;
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
}
```

![Screenshot%202021-10-17%20at%2013.30.30.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232719/Tutorials/Zoom-Prank/Screenshot202021-10-1720at2013.30.30_lood7m.png)

1. When we now start the sketch, the browser may ask us if it can access our camera, we accept this and should now be able to see ourselves under the canvas on the screen. To show our image in the canvas we hide it in the setup via `video.hide()` and then draw it in the `draw()` function.

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

1. Now we have our webcam image on the canvas. Next, we load the image that should be displayed when we make our secret gesture. First of all, upload the image into the p5 web editor. (If you don't have an image you can download one below this paragraph) Then we use the function `preload()` this is loaded first and foremost so we can be sure that our image is loaded when we need it. We need a variable to store the image in. We define this with the keyword `let` e.g. `let picture;` outside all functions. In `preload()` we then load the image into the variable `image` with `loadImage('image.jpg');`

[image.jpg](Prank%20Your%20Zoom-Call%206d5875c34a78423bb79520eb9759b6ab/bild.jpg)

```jsx
let picture;
function preload() {
  picture = loadImage("image.jpg");
}
```

1. Now we have loaded the image but it is still not displayed. We therefore add the image to the draw function, similar to what we did with our webcam image in step 5.

```jsx
function draw() {
  background(220);
  image(video, 0, 0);
  image(picture, 0, 0, width, height);
}
```

![Screenshot 2021-10-17 at 13.37.03.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644232718/Tutorials/Zoom-Prank/Screenshot_2021-10-17_at_13.37.03_zyjrjp.png)

1. Our code currently looks like this:

```jsx
let bild;
let video;

function preload() {
  picture = loadImage("image.jpg");
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

1.  We no longer see our video because the loaded image completely covers it. However, we only want to display the image if our secret gesture is recognised. We also want to have this function ready before the rest is loaded. Which is why we write it `preload()`, we need another variable that stores our model, this one we call `classifier` . Where it says MODELURL we put the link we got from TeachableMachine. Make sure that the inverted commas stay where they are.

```jsx
let picture;
let video;
let classifier;

function preload() {
  picture = loadImage("image.jpg");
  classifier = ml5.imageClassifier("MODELURL" + "model.json");
}
```

1. Our model is loaded and we can start to classify our video. Now we create our first own function. You already know functions like `setup()` or `preaload()`. Functions help us to keep the overview by grouping certain instructions, so that they can be executed again and again. For example, in the background, the function draw() is executed 60 times every second. The function we want to create we call `classifyVideo()` because we can classify our video with it. In the function we write only one statement: `classifier.classify(video, gotResult);` So the classifier, which we supplied with our model before, should classify something. We then say what this is in the parenthesis `video`, i.e. our webcam image. The second word `gotResults` is again a function that should be executed when our image has been classified. Here we can then look at the results. So that the function `classifyVideo()` is initially executed once, we also add it to the `setup()` function.

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

1. As mentioned before, there is now the function `gotResults()` which gives us our result. We store the result in the newly defined variable `label` The result is output in a long list, we only want the first element of the list, the first element is a list (also called an array) at position 0. After we have stored the result, we call our `classifyVideo()` function again and everything starts from the beginning. We write:

```jsx
let label;
function gotResult(error, results) {
  label = results[0].label;
  classifyVideo();
}
```

1. We have almost done it. Currently, we draw the picture all the time in our draw function. We have to change that with an if-statement. This means **if** the label is "secret", **then** draw the picture. In the code it looks like this:

```jsx
function draw() {
  image(video, 0, 0);
  if (label == "secret") {
    image(bild, 0, 0);
  }
}
```

![](https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644232734/Tutorials/Zoom-Prank/Screen_Recording_2021-10-17_at_13.47.24_rhwpwi.mp4)

1.  We made it, the picture is only shown when we make our secret gesture. Here is the whole code again:

```jsx
let classifier;
let picture;
let video;
let label;

function preload() {
  classifier = ml5.imageClassifier("MODELURL" + "model.json");
  picture = loadImage("image.jpg");
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
  if (label == "secret") {
    image(picture, 0, 0, width, height);
  }
}
```

1.  The code now runs via the browser. However, so that we can also carry out the prank in Zoom, Teams, Webex or other video calls, we work with a virtual webcam from OBS[](https://www.notion.so/Open-Broadcaster-Software-f0dd94f55c4943e78740b55b45ebe1f2). This simulates a webcam, which we can select in the cam settings of our programme. To do this, we start OBS and add a new video source by pressing the + under "Sources".
2. We now select the "window recording" under the sources. There we search for the open browser window in which our p5.js Sketch is running. Under Filter we add a "Crop/Pad" filter and crop the window so that only the camera section is visible. When we are done, we click on "Close".
3. Finally, we enlarge the image section by dragging the red dots until we fill the whole screen. Then we can start the prankcam under "Start Virtual Camera" and select it in Zoom under the camera settings as "OBS Virtual Camera".