---
title: GauGAN the Landscape painter
date: 2022-01-24T13:01:38.684Z
preview: Conjure up snowy peaks with a mountain brush and refine them with a
  lake brush - Nvidia's GauGAN can do all that. Discover it now!
wissen_link:
  - generative-adversarial-network
  - unsupervised-learning
level:
  - tutorial
  - no-code
  - free
tag:
  - tutorial
  - no-code
  - kostenlos
description: Conjure up snowy peaks with a mountain brush and refine them with a
  lake brush - Nvidia's GauGAN can do all that. With a drawing pen, you can
  paint on a canvas, the special thing about it is that the colours represent
  things like rock, water or clouds. Together, they create a magnificent
  landscape that Bob Ross would have been proud of. Since the end of 2021,
  landscapes can also be created by text.
image: https://res.cloudinary.com/dt5cqs0lv/image/upload/v1644154582/Tutorials/Screenshot_2022-01-18_at_09.38.54_b2qkbj.png
video: https://res.cloudinary.com/dt5cqs0lv/video/upload/v1643031727/Tutorials/GauGAN/GauGAN_xukkni.mp4
---
1. Open the page [](http://gaugan.org/gaugan2/)<http://gaugan.org/gaugan2/> in your browser. We recommend Firefox or Chrome.
2. the website is very large and can sometimes protrude over the edge on small screens. Then simply zoom out a little from the page. In Chrome, this can be done via the menu item "View".
3. the page should look like this:

   ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030296/Tutorials/GauGAN/Screenshot_2022-01-18_at_09.22.24_pjbzck.png)
4. If you are viewing a tutorial, click on the small cross to end it
5. Scroll to the bottom of the page and check the "terms and conditions" box.
6. ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030296/Tutorials/GauGAN/Screenshot_2022-01-18_at_09.23.06_kthdkj.png)
7. Scroll up again, you will see two coloured squares, one turquoise, the other white. The turquoise one is your drawing area, the white one will show the finished picture later. To the left of the turquoise area you will find the "painting colours", they are divided into different categories such as "Building", "Ground", "Landscape" or "Plant". Click on a category and another level of detail should open. Select a "colour".
8. In the bar above the turquoise square, the brush should be highlighted in light grey, otherwise click on it. Now you can draw as you like. Switch between the different brushes.
9. ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030296/Tutorials/GauGAN/Screenshot_2022-01-18_at_09.34.41_upfrei.png)
10. To convert the drawn image into a landscape, click on the right arrow in the toolbar (blue box). Now a realistic looking landscape should appear.
11. ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030296/Tutorials/GauGAN/Screenshot_2022-01-18_at_09.38.54_qtfi0z.png)
12. Try a little bit with it. Change your drawing, add something new. Test what happens when you create "illogical" landscapes. A sky on the ground, or sea where the sky is.
13. Now we want to create landscapes by text input. To do this, under "Input utilisation" deselect "segmentatio" and select "text". Then type in your text, which should be in English, e.g. "a snowy lake in the mountains". Then press the arrow to the right in the toolbar as in step 8 (Attention, do not press Enter, then the page reloads).
14.   ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030296/Tutorials/GauGAN/Screenshot_2022-01-18_at_09.48.45_whh6qp.png)
15. Now you should see the new text-generated image on the right and your old one on the left. To change this, click on the arrow pointing to the left. Now we have the new image over there, but the "painting" also called segmentation is still missing. Click on the puzzle icon in the toolbar.
16. ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030297/Tutorials/GauGAN/Screenshot_2022-01-18_at_09.56.14_n2vzbh.png)
17. Now you can paint on the image as you like. If you want to output the whole thing again, deselect "Text" and if necessary also "Image" under "Input utilisation".
18. By the way, you can also change the style of the image above your result image.
19. Also test strange texts as input from "A city in the sky" or "A penguin eating a sandwich".
20.   ![](https://res.cloudinary.com/dt5cqs0lv/image/upload/v1643030296/Tutorials/GauGAN/gaugan_output__2_yrifpb.png)

    »A penguin eating a sandwich«
21. Here it is noticeable that GauGAN is very good at drawing landscapes, but with everything else he tries to make a landscape out of it somehow.
22. Optional: You can also use Photoshop to create segmentation maps. I created a handy [color palette](https://github.com/tlsaeger/GauGAN-PS-Swatches) with all colors from GauGAN plus additional ones that are not available in the app, but still work. You can find them [here](https://github.com/tlsaeger/GauGAN-PS-Swatches).