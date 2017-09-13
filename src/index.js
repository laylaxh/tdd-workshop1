import Sprite from "./Sprite"

document.body.onload = () => {
  document.getElementById('header').innerHTML = "<h1>Sprite Animation Demo</h1>";

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  const image = new Image();

  image.onload = function() {
    const sprite = new Sprite(context, image);
    sprite.position = { x: 40, y: 550 };
    sprite.velocity = { x: 35, y: -45 };
    sprite.rotation = 35;
    sprite.animate();
  };

  image.src = "rocket.png";
};  

