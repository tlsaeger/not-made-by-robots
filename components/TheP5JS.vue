<template>
<div>
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
</div>
</template>
<script>
export default{
mounted() {   
 const script = function (p5) {    
  var speed = 2;    
  var posX = 0;

const data = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }];
const options = {
  k: 3,
  maxIter: 4,
  threshold: 0.5,
};
// Initialize the magicFeature
const kmeans = ml5.kmeans(data, options, clustersCalculated);

// When the model is loaded
function clustersCalculated() {
  console.log('Points Clustered!');
  console.log(kmeans.dataset);
}
  // NOTE: Set up is here   
  p5.setup = _ => {    

  var canvas = p5.createCanvas(500, 500)
  canvas.parent("p5Canvas");     
  //  p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);    
  }     
  // NOTE: Draw is here
  p5.draw = _ => {      
  //  p5.background(255);
   const degree = p5.frameCount * 3;      
   const y = p5.sin(p5.radians(degree)) * 50;
    
   p5.push();
    p5.translate(0, p5.height / 2);
    p5.ellipse(posX, y, 50, 50);
   p5.pop();
   posX += speed;
      
   if (posX > p5.width || posX < 0) {    
    speed *= -1;      
   }
  }  
 }   
 // NOTE: Use p5 as an instance mode
 const P5 = require('p5');
 new P5(script)
//  const ml5 = require('ml5');
// new ml5(script)
},
}
</script>