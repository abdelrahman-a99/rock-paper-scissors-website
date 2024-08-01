let player_score = document.querySelector(".player-score")
let computer_score = document.querySelector(".computer-score")
let score = document.querySelector(".score")
let computer_chose = document.querySelector(".computer-chose");
let reset_btn = document.querySelector(".btn")
let items = document.querySelectorAll(".item");

let choices = ["rock", "paper", "scissors"];
let player_score_value = 0;
let computer_score_value = 0;

let game_over = false;

function play(player_choice) {
    if (game_over) return;

    let computer_choice = choices[Math.floor(Math.random() * choices.length)];

    if (player_choice === computer_choice)
        score.textContent = "It's a Tie!";

    else if (
        (player_choice === "rock" && computer_choice === "scissors") ||
        (player_choice === "paper" && computer_choice === "rock") ||
        (player_choice === "scissors" && computer_choice === "paper")
    ) {
        player_score_value++;
        score.textContent = "You Won!";
    }

    else {
        computer_score_value++;
        score.textContent = "You Lost!";
    }

    player_score.textContent = player_score_value;
    computer_score.textContent = computer_score_value;
    computer_chose.textContent = computer_choice;

    if (player_score_value === 3 || computer_score_value === 3) {
        game_over = true;
        display_game_over();
        disable_items();
    }
}

function display_game_over() {
    if (player_score_value === 3)
        score.textContent = "Game Over - You Won!";

    else if (computer_score_value === 3)
        score.textContent = "Game Over - You Lost!";

    reset_btn.style.display = "block";
}

function reset_game() {
    game_over = false;
    
    player_score_value = 0;
    computer_score_value = 0;

    player_score.textContent = player_score_value;
    computer_score.textContent = computer_score_value;
    
    score.textContent = "";
    computer_chose.textContent = "";
    
    reset_btn.style.display = "none";
    
    enable_items();
}

function disable_items() {
    items.forEach(item => {
        item.style.pointerEvents = "none";
        item.style.opacity = "0.5";
    });
}

function enable_items() {
    items.forEach(item => {
        item.style.pointerEvents = "auto";
        item.style.opacity = "1";
    });
}