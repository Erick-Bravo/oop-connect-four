window.addEventListener("DOMContentLoaded", () => {

    let game = undefined

    const boardholder = document.getElementById("board-holder");
    const newGame = document.getElementById("new-game");

    const player1Input = document.getElementById("player-1-name");
    const player2Input = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    const ifForInputs = () => {
        let playerOne = player1Input.value;
        let playerTwo = player2Input.value;
        if((playerOne.length !== 0) && (playerTwo.length !== 0)) {

            newGameButton.disabled = false;
        }
     }

     player1Input.addEventListener('keyup', e => {
         ifForInputs();
     })


     player2Input.addEventListener('keyup', e => {
        ifForInputs();
    })




    class Game {
        //manage player names as well as creating the name of the specific game.
    }



})
///   refactored with in ifForInputs function
    // player1Input.addEventListener("keyup", (e) => {
    //     // if((player1Input.value.length !== 0) && (player2Input.value.length !== 0)) {

    //     //     newGameButton.disabled = false;
    //     // }
    // })

    // player2Input.addEventListener("keyup", (e) => {
    //     if((player1Input.value.length !== 0) && (player2Input.value.length !== 0)) {

    //          newGameButton.disabled = false;
    //     }
    // })
