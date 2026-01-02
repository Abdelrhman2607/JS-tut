let score = (JSON.parse(localStorage.getItem('score'))) || {'wins': 0, 'losses': 0, 'ties': 0};
    updateScoreElement();

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Current score:<br>Wins:${score.wins}<br>Losses:${score.losses}<br>Ties:${score.ties}`;
    }

    function getResult(player){
        const compmove = pickMove();
        let result = '';
        if (player === 'Rock'){
            if (compmove === 'Rock'){
                result = 'Tie';
            }
            else if (compmove === 'Scissors'){
                result = 'You win';
            }
            else{
                result = 'You lose';
            }
        }
        else if (player === 'Paper'){
            if (compmove === 'Paper'){
                result = 'Tie';
            }
            else if (compmove === 'Rock'){
                result = 'You win';
            }
            else{
                result = 'You lose';
            }
        }
        else{
            if (compmove === 'Scissors'){
                result = 'Tie';
            }
            else if (compmove === 'Paper'){
                result = 'You win';
            }
            else{
                result = 'You lose';
            }
        }
        if (result === 'You win'){
            score.wins++;
        }
        else if (result === 'You lose'){
            score.losses++;
        }
        else{
            score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();
        document.querySelector('.js-result').innerHTML = `${result}`;
        document.querySelector('.js-moves').innerHTML = `You: <img class = 'move' src = "${player.toLowerCase()}-emoji.png"> <img class = 'move' src = "${compmove.toLowerCase()}-emoji.png"> :Comp`;

        return result;
    }

    function pickMove(){
        const randomNum = Math.random();
        let choice = '';

        if (randomNum >= 0.6){
            choice = 'Scissors';
        }
        else if(randomNum >= 0.3){
            choice = 'Rock';
        }
        else{
            choice = 'Paper';
        }
        
        console.log(choice);
        return choice;
      }