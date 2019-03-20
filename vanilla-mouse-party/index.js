let mousePosition = {
    x: 0,
    y:0
};
let drawId;

const getRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };

  window.addEventListener("mousemove",function (event){
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
    console.log(mousePosition);
  })
  
  function draw () {
      return setInterval(function(){
        let container = document.getElementById("wrap");

        const color = `background:rgb(${getRandomNumber(
            0,
            255
          )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
          const ballSize = getRandomNumber(100, 400);
          const size = `height:${ballSize}px; width:${ballSize}px;`;
          const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
          )}px;`;
          const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
          )}px; `;
          const style = `${left}${top}${color}${size}`;
            


          let ball = document.createElement('div');
          ball.classList.add("ball");
          ball.style = style;

          ball.addEventListener("animationend", function (event){
            event.target.remove();
        })
        container.appendChild(ball)
      },60)
  }


  window.addEventListener("mouseover",function (event){

      drawId = draw();
      
  })

  window.addEventListener("mouseout",function(){
      clearInterval(drawId);
  })