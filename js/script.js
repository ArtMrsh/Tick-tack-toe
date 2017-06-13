window.onload = function () {

   for(let i = 0; i < 9; i++) {
      document.querySelector(".game").innerHTML += '<div class="box"></div>'
   }

   let step = 0;

   document.querySelector('.game').onclick = function (e) {
      if(event.target.className === "box") {
         if(step % 2 == 0) {
            event.target.innerHTML = "X";
         } else {
            event.target.innerHTML = "O";
         }
         step++;
         checkWinner()
      }
   }


   function checkWinner() {
      let allBoxes = document.querySelectorAll(".box");

      // Крестики
      if(allBoxes[0].innerHTML === "X" && allBoxes[1].innerHTML === "X" && allBoxes[2].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[3].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[5].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[6].innerHTML === "X" && allBoxes[7].innerHTML === "X" && allBoxes[8].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[0].innerHTML === "X" && allBoxes[3].innerHTML === "X" && allBoxes[6].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[1].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[7].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[2].innerHTML === "X" && allBoxes[5].innerHTML === "X" && allBoxes[8].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[0].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[8].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[2].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[6].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[0].innerHTML === "X" && allBoxes[1].innerHTML === "X" && allBoxes[2].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[3].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[5].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[6].innerHTML === "X" && allBoxes[7].innerHTML === "X" && allBoxes[8].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[0].innerHTML === "X" && allBoxes[3].innerHTML === "X" && allBoxes[6].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[1].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[7].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[2].innerHTML === "X" && allBoxes[5].innerHTML === "X" && allBoxes[8].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[0].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[8].innerHTML === "X") {
         alert("Победили крестики")
      }
      if(allBoxes[2].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[6].innerHTML === "X") {
         alert("Победили крестики")
      }

      // Нолики
      if(allBoxes[0].innerHTML === "O" && allBoxes[1].innerHTML === "O" && allBoxes[2].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[3].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[5].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[6].innerHTML === "O" && allBoxes[7].innerHTML === "O" && allBoxes[8].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[0].innerHTML === "O" && allBoxes[3].innerHTML === "O" && allBoxes[6].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[1].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[7].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[2].innerHTML === "O" && allBoxes[5].innerHTML === "O" && allBoxes[8].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[0].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[8].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[2].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[6].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[0].innerHTML === "O" && allBoxes[1].innerHTML === "O" && allBoxes[2].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[3].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[5].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[6].innerHTML === "O" && allBoxes[7].innerHTML === "O" && allBoxes[8].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[0].innerHTML === "O" && allBoxes[3].innerHTML === "O" && allBoxes[6].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[1].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[7].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[2].innerHTML === "O" && allBoxes[5].innerHTML === "O" && allBoxes[8].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[0].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[8].innerHTML === "O") {
         alert("Победили нолики")
      }
      if(allBoxes[2].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[6].innerHTML === "O") {
         alert("Победили нолики")
      }
      // reset button
      document.querySelector(".reset").onclick = function () {
         for(let i of allBoxes) {
            i.innerHTML = " ";
         }
      }

   }

}
