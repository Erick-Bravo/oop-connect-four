import { Game } from './game.js';

window.addEventListener("DOMContentLoaded", () => {

    let game = undefined

    // class Game {
        //     //manage player names as well as creating the name of the specific game.
        // }


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

    newGameButton.addEventListener('click', e => {
        game = new Game (player1Input.value, player2Input.value);
        player1Input.value = '';
        player2Input.value = '';
        newGameButton.disabled = true;
         updateUI();

    });

    const clickTargets = document.getElementById("click-targets");
    function updateUI(){
        const boardHolder = document.getElementById('board-holder');
        const gameName = document.getElementById("game-name")
        if(game === undefined){
            boardHolder.classList.add('is-invisible');
        }else{
            boardHolder.classList.remove('is-invisible');
            gameName.innerHTML = game.getName();
            const currentPlayer = game.currentPlayer;
            // clickTargets.addEventListener("click", () => {
                if(currentPlayer === 1) {
                    clickTargets.classList.add("black")
                    clickTargets.classList.remove("red")
                } else {
                    clickTargets.classList.add("red")
                    clickTargets.classList.remove("black")
                }
            // })
        }
    }

    clickTargets.addEventListener("click", (e) => {
        const target = e.target.id;
        game.playInColumn()
        updateUI()
    })





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
