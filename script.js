let userScore = 0;
        let compScore = 0; 


        let score1 =  document.getElementById("user-score");
        let score2 = document.getElementById("comp-score");
        const choices = document.querySelectorAll(".components");
        const msg = document.querySelector("#msg-box");
        // choices.forEach((choice)=>{
        //     choice.addEventListener("click",()=>{
        //         const userChoice = choice.getAttribute("id");
        //         playGame(userChoice);
        //     })
        // });

        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                const userChoice = choice.children[0].getAttribute("id");
                playGame(userChoice);
            });
        });

        const drawGame = ()=>{
            msg.innerHTML = "Its a draw. Play again!";
            msg.style.backgroundColor = "#081b31";
        }


        const showWinner =(userWin,userChoice,compChoice) =>{
            if(userWin){
                userScore++;
                score1.innerText = userScore;
                msg.innerText = 'You win! Your '+userChoice +' beats ' + compChoice;
                msg.style.backgroundColor = "green";
            }
            else{
                compScore++;
                score2.innerText = compScore;
                msg.innerText = 'You lost ' +compChoice +' beats your ' + userChoice;
                msg.style.backgroundColor = "red";
            }
        }

        const compChoice = ()=>{
            let options = ["rock","paper","scissor"];
            let choice =options[Math.floor(Math.random() * 3)];
            return choice;

        }
        const playGame = (userChoice)=>{
            const computerChoice = compChoice();
            let userWin = 0;
            if(userChoice === computerChoice){
                drawGame();
            }
            else{
                if(userChoice === "rock"){
                    userWin = computerChoice === "paper" ? 0 : 1;
                }
                else if(userChoice === "paper"){
                    userWin = computerChoice === "scissor" ? 0: 1;
                }
                else if( userChoice === "scissor"){
                    userWin = computerChoice === "rock" ? 0: 1;
                }
                showWinner(userWin,userChoice,computerChoice);
            }
        };


