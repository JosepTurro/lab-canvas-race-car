
// window.onload = () => {

//     document.getElementById('start-button').onclick = () => {
//       startGame();
//     };

//     // EQUIVALENTE A:
//     // const botonInicio = document.getElementById('start-button');
//     // botonInicio.addEventListener("click", ()=>{
//     //   startGame();
//     // });

//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     const imgFondo = document.createElement("img");
//     // imgFondo.src = "images/road.png";
//     imgFondo.setAttribute("src", "images/road.png");
//     const imgCoche = document.createElement("img");
//     imgCoche.setAttribute("src", "images/car.png");
//     let x_coche = (canvas.getAttribute("width") - 60)/2;
//     // let y_coche = (canvas.getAttribute("height")-110/2);
    
    
//     //obstaculo:
//     // let width_max_obstaculo = canvas.getAttribute("width") - 150;
//     // let width_obstaculo = Math.floor(Math.random() * width_max_obstaculo);
//     // let x_obstaculo = Math.floor(Math.random() * (canvas.getAttribute("width") - width_obstaculo));
//     // let y_obstaculo = -30;
//     let frames = 0;
//     const obstaculos = [];

//     document.body.addEventListener("keydown", (e)=>{
//       if(e.key == "ArrowLeft") {
//         //if(x_coche > 0) x_coche -= 10;  //otra opcion
        
//         x_coche -= 10;
//         if(x_coche < 0) x_coche = 0;
        
//       } else if(e.key == "ArrowRight") {
//         // if(x_coche < (canvas.getAttribute("width") - 60)) x_coche += 10;
//         x_coche += 10;
//         if(x_coche > (canvas.getAttribute("width") - 60)) x_coche = canvas.getAttribute("width") - 60; //otra opcion
//       }
    
//     });
//     let interval;

//     function startGame() {
       
//       interval = setInterval(update, 20);
//     }
//     function update() {
//       frames ++;
//       obstaculos.forEach((obstacul)=>{
//         choca (obstacul);
//       })
      

//       //limpiar
//       ctx.clearRect(0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"));

//       //recalcular
//         //posición obstaculos
//         // y_obstaculo += 5;
//           //recorrer array de obstaculos y recalcular y
//           obstaculos.forEach((obstaculo)=>{
//             obstaculo.y += 5;
//             // comoprobamos si obstaculo a xocado con obstaculo.
//           })
//         // if(frames % 200 == 0) {
//           if (frames == 100) {
//             frames = 0;
//             //crear obstaculo
//             let obstaculo = new Obstaculo();
//             obstaculos.push(obstaculo);

//           } 

//           // comprobar obstaculos

//         // }
//         // if(frames == 200) frames = 0;
//       //repintar
//         //fondo
//         // ctx.drawImage(imgFondo, 0, 0, 500, 700);
//         ctx.drawImage(imgFondo, 0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"));
//         ctx.drawImage(imgCoche, x_coche, 550, 60, 110);
        
//         //coche
//         //obstaculos
//           //recorrer array de obstaculos y pintar cada uno.
//           obstaculos.forEach(obstaculo => {
//             // ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.width, obstaculo.height);
//             obstaculo.pintar();
//             // obstaculo.x
//           })
//     }

    

//     class Obstaculo {
//       constructor() {
//         let width_max_obstaculo = canvas.getAttribute("width") - 150;
        
//         this.width = Math.floor(Math.random() * width_max_obstaculo);
//         this.height = 30;
//         this.x = Math.floor(Math.random() * (canvas.getAttribute("width") - this.width));
//         this.y = -30;
//       }
//       pintar() {
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//       }
//       choca (){

//         if (!(((x_coche + 60) < this.x) || (550 > (this.y + this.height)) || (x_coche > (this.x + this.width)) || ((550 + 110) < this.y))) {

//           clearInterval(interval);
//         }
        

//       }
//     }
//   };

//REFET MOLT MES NET


window.onload = () => { 
  document.getElementById('start-button').onclick = () => { 
    startGame();
  };

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d"); 

  const imgFondo = document.createElement("img"); 
  imgFondo.src = "images/road.png"; 

  const imgCoche = document.createElement("img"); 
  imgCoche.src = "images/car.png"; 

  let x_coche = ((canvas.width - 60) / 2);
  let y_coche = 565;

 
  let frames = 0;
  let score = 0;

  const obstaculos = []; // ARRAY QUE ALMACENA LOS OBSTACULOS.

  let interval;
  let intervalScore;


  function startGame() {
    interval = setInterval(update, 20);
  }

  function update() { 
    frames++;
    score += 0.2;
    //NATEJAR
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //RECALCULAR
      
      obstaculos.forEach((obstaculo) => {
        obstaculo.y += 5; // velocitat obstacle
      })

    if (frames % 100 == 0){ // aqui fas que quan acbi la arry de obstacles retorni
      //crear obstaculo
      let obstaculo = new Obstaculo();
      obstaculos.push(obstaculo);
    }


    //REPINTAR
    //fondo
    ctx.drawImage(imgFondo, 0, 0, canvas.width, canvas.height);
    //cotxe
    ctx.drawImage(imgCoche, x_coche, y_coche, 60, 125);
    //obstacles
    obstaculos.forEach((obstaculo) => {
      obstaculo.pintar();
      obstaculo.choca();
      // obstaculo.score();
    })
  }

  
  document.body.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
      if(x_coche > 0) x_coche -= 10;

    } else if (e.key == "ArrowRight"){
      if (x_coche < (canvas.width - imgCoche.width*0.43)) x_coche += 10;
    }
  })

  class Obstaculo {
    constructor(){
      let width_max_obstaculo = canvas.width-150;

      this.width = Math.floor(Math.random()*width_max_obstaculo);
      this.height = 30;
      this.x = Math.floor(Math.random() * (canvas.width - this.width))
      this.y = -30;
    }

    pintar() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    choca(){

      if (!(((x_coche + 60) < this.x) || (565 > (this.y + this.height)) || (x_coche > (this.x + this.width)) || ((565 + 125) < this.y))) {
        clearInterval(interval);
        clearInterval(intervalScore)
      }
    }

    score() {
      console.log("Score: " + score)
    }
  }
}

  



