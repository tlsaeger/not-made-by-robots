---
title: NoseNet with PoseNet
date: 2022-02-07T10:27:02.108Z
preview: "You dream of having a digital clown nose. With this guide, it becomes
  a reality. "
wissen_link:
  - supervised-learning
level:
  - tutorial
  - low-code
  - free
tag:
  - tutorial
  - low-code
  - kostenlos
description: "You dream of having a digital clown nose. With this guide, it
  becomes a reality. PoseNet is trained to recognise bodies and classify
  individual areas. We take advantage of this and give ourselves a red clown
  nose. "
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644229899/Tutorials/PoseNet%20NoseNet/Screenshot_2022-02-07_at_11.29.25_pcz10f.jpg
video: https://res.cloudinary.com/dt5cqs0lv/video/upload/v1644229910/Tutorials/PoseNet%20NoseNet/Screen_20Recording_202021-11-15_20at_2017.17.57_g6brm5.mp4
---
2. We use the p5 web editor to write our code, you can find an introduction to it [here](https://www.youtube.com/watch?v=MXs1cOlidWs&ab_channel=TheCodingTrain). \
      You can also find the complete code at the bottom of the page.
3. We use a library called ml5.js, which enables us to use PoseNet. In order to be able to access this library, we must first of all include it. To do this, go to the file `index.html` in the p5 web editor. Insert the following line:

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

1. Now it's time to load our PoseNet model. We'll go through the steps together in a moment, you can also find all the information in the documentation of [ml5.js](https://learn.ml5js.org/#/reference/posenet) <https://learn.ml5js.org/#/reference/posenet>.
      We start by loading the PoseNet model into a variable. To do this we create the variable poseNet via `let poseNet;` Then we initialise the `ml5.posenet` in `Setup()`, the model wants to know two more things from us, which video should be classified and what should happen when the model is loaded. For the video we use our variable `video` and when the model is loaded our function `modelLoaded` should be executed. The function then tells us via console.log("Model Loaded") when the model is loaded:

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

1. Next, we define that whenever the model has detected a new pose, it executes the function `gotResults()`. The function is called `poseNet.on("pose", gotResult);`

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

1. We want to save our poses again and create the variable poses, because we don't get a value out of PoseNet, but a list of values, we have to initialise the variable as a so-called array. We write: `let poses = [];` Then we can create the function `gotResults()`, which is used to store the results of PoseNet in the variable we just created:

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

1. Now we want to draw the points that PoseNet recognised in our video on our bodies. For a better overview we create a function called `drawKeypoints()` As already mentioned in the previous step, PoseNet returns a long list with our 17 points, the whole for up to 5 persons. Here is a small excerpt of the data we get back:

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

1. We see many data points structured like a folder. The top folder (blue) has data about the entire pose, including a score of how sure PoseNet is that a person has been recognised. Under the keyword `"key points"` the next folder opens, which again contains three elements. These again have a `"score"` as well as a `"part"`, i.e. a name, e.g. `"nose"`, and most importantly the `"x"` and `"y"` `"position"`. Where our nose is located. This is also available for the left and right eye and all the other 14 points of the model.
2. First of all, we want to draw all the points that the model returns. For this we work with a `for-loop` which repeats a given task as often as we want. We define the `for-loop` with `for (let i = 0; i < poses.length; i++)`. This means create a variable `let i = 0` as long as i is smaller than the number of poses (`i < poses.length;`) execute what we are about to write and then increase i by one (`i++`). In our Logic folder we now want to access all the people that PoseNet recognises. For this we store each person in a new variable `let pose = poses[i].pose` (blue). Then we repeat the whole thing for all points that are recognised by looping through this new array `for (let j = 0; j < pose.keypoints.length; j++)`, in which we again pick out the keypoints and draw a green circle at their X- and Y-positions.\
      `fill(0, 255, 0); noStroke(); ellipse(keypoint.position.x, keypoint.position.y, 10, 10);` Our function then looks like this:

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

1. Eery function we write we have to call somewhere, otherwise we don't see. We do this in the `draw()` function so that our keypoints are redrawn 60 times a second.

```jsx
function draw() {
  background(220);
  image(video, 0, 0);
  drawKeypoints();
}
```

![Screenshot 2021-11-15 at 16.50.38.png](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644238344/Tutorials/PoseNet%20NoseNet/Screenshot_2021-11-15_at_16.50.38_bmyrim.png)

12. Now we just want to identify the nose and then give it a red circle as a clown nose. In the excerpt from PoseNet's answer, we saw that the nose was the first object. We can now adjust the code accordingly. Instead of looping through all the points, we still need to address the first point. We replace the second loop with `let keypoint = pose.keypoints[0];` the first element of an array is not addressed with 1 but with 0, hence the 0 in the square bracket. The rest remains unchanged. (Don't forget to delete the closing bracket of the second for-loop).

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

1. The last thing we have to do is make the nose red and a little bigger. `fill(255, 0, 0);` `ellipse(keypoint.position.x, keypoint.position.y,50, 50);`
   The complete code then looks like this:

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