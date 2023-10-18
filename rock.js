const computerdisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const cresult = document.getElementById('cresult');
const winner = document.getElementById('win');
const loser = document.getElementById('lose');
const tier = document.getElementById('tie');
const gameOver = document.getElementById('gameOver');
const won = document.getElementById('won');
const Results = document.getElementById('Results');
const btn3 = document.getElementById('btn3');
const winScore = document.getElementById('winScore');
const loseScore = document.getElementById('loseScore');


const score = {
  wins: 0,
  losses: 0,
  ties: 0,
}

let final = {
  winner: 0,
  loser: 0,
} 

winScore.innerHTML = final.winner
loseScore.innerHTML = final.loser
 
// you can also use (!final) instead of (final === null)
 
  finals = { 
    winner: 0,
    loser: 0
    
  }
  
 
            




 
  
  function rock() {
    
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    let computerMove = '';

    if (randomNumber === 1) {
       computerMove = 'rock ✊';
       document.getElementById('computer-choice').innerHTML = computerMove
       document.getElementById('user-choice').innerHTML = "rock ✊"
    } else if (randomNumber === 2) {
       computerMove = 'paper ✋';
       document.getElementById('computer-choice').innerHTML = computerMove
       document.getElementById('user-choice').innerHTML = "rock ✊"
    } else if (randomNumber === 3) {
      computerMove = 'scissors ✌️';
      document.getElementById('computer-choice').innerHTML = computerMove
      document.getElementById('user-choice').innerHTML = "rock ✊"
    }

     
      let result = '';
      

            if (computerMove === 'rock ✊') {
              result = 'its a draw';
               resultDisplay.innerHTML = `${result} &#128533 &#128530 &#129396`;

            } else if (computerMove === 'paper ✋') {
              result = 'you lose';
              resultDisplay.innerHTML = `${result} &#129397 &#128557 &#128545`;

            } else if (computerMove === 'scissors ✌️') {
              result = 'you win';
              resultDisplay.innerHTML = `${result} &#128521 &#128525 &#128536`;
             }

             if (result === 'you win') {
              score.wins +=1
              winner.innerHTML = score.wins
             } else if (result === 'you lose') {
              score.losses +=1
              loser.innerHTML = score.losses
             } else if (result === 'its a draw') {
              score.ties +=1
              tier.innerHTML = score.ties
             }
            
            if (score.wins === 5) {
              
              
              Results.style.display = 'none'
              gameOver.style.display = 'block'
              gameOver.innerHTML = 'game over'
              won.innerHTML = 'you won the game &#128525';
              btn3.style.display = 'block'
              reset()
            } else if (score.losses === 5) {
             
              
              
              Results.style.display = 'none'
              gameOver.style.display = 'block'
              gameOver.innerHTML = 'game over'
              won.innerHTML = 'you lose the game &#128557';
              btn3.style.display = 'block'
              
              reset()
              
            } 
           
           

          }
          

          function restartBtn() {
            window.location.reload();
          }

          
            
          function reset() {
              score.wins = 0;
              score.losses = 0;
              score.ties = 0;
              winner.innerHTML = score.wins
              loser.innerHTML = score.losses
              tier.innerHTML = score.ties
              
            } 

           
          


          function Paper() {
            const randomNumber = Math.floor(Math.random() * 3) + 1;
        
            let computerMove = '';
        
            if (randomNumber === 1) {
               computerMove = 'rock ✊';
               document.getElementById('computer-choice').innerHTML = computerMove
               document.getElementById('user-choice').innerHTML = "paper ✋";
            } else if (randomNumber === 2) {
               computerMove = 'paper ✋';
               document.getElementById('computer-choice').innerHTML = computerMove
               document.getElementById('user-choice').innerHTML = "paper ✋";
            } else if (randomNumber === 3) {
              computerMove = 'scissors ✌️';
              document.getElementById('computer-choice').innerHTML = computerMove
              document.getElementById('user-choice').innerHTML = "paper ✋";
            }
        
            let result = '';


        if (computerMove === 'rock ✊') {
          result = 'you win';
          resultDisplay.innerHTML =`${result} &#128521 &#128525 &#128536`;
        } else if (computerMove === 'paper ✋') {
          result = 'its a draw';
          resultDisplay.innerHTML = `${result} &#128533 &#128530 &#129396`;
        } else if (computerMove === 'scissors ✌️') {
          result = 'you lose';
          resultDisplay.innerHTML = `${result} &#129397 &#128557 &#128545`;
        }

        if (result === 'you win') {
          
          score.wins +=1
          winner.innerHTML = score.wins
         } else if (result === 'you lose') {
          score.losses +=1
          loser.innerHTML = score.losses
         } else if (result === 'its a draw') {
          score.ties +=1
          tier.innerHTML = score.ties
         }

         if (score.wins === 5) {
          
          Results.style.display = 'none'
          gameOver.style.display = 'block'
          gameOver.innerHTML = 'game over'
          won.innerHTML = 'you won the game &#128525';
          btn3.style.display = 'block'
          reset()
        } else if (score.losses === 5) {
          
          Results.style.display = 'none'
          gameOver.style.display = 'block'
          gameOver.innerHTML = 'game over'
          won.innerHTML = 'you lose the game &#128557';
          btn3.style.display = 'block'
          
          reset()
        } 
        
      }
      
      

      function Scissors() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
    
        let computerMove = '';
    
        if (randomNumber === 1) {
           computerMove = 'rock ✊';
           document.getElementById('computer-choice').innerHTML = computerMove
           document.getElementById('user-choice').innerHTML = "scissors ✌️";
        } else if (randomNumber === 2) {
           computerMove = 'paper ✋';
           document.getElementById('computer-choice').innerHTML = computerMove

           document.getElementById('user-choice').innerHTML = "scissors ✌️";

        } else if (randomNumber === 3) {
          computerMove = 'scissors✌️';
          document.getElementById('computer-choice').innerHTML = computerMove

          document.getElementById('user-choice').innerHTML = "scissors ✌️";
        }
    
  let result = '';

        if (computerMove === 'rock ✊') {
          result = 'you lose';
            resultDisplay.innerHTML = result;
          document.getElementById('result').innerHTML = `${result} &#129397 &#128557 &#128545`
        } else if (computerMove === 'paper ✋') {
          result = 'you win';
          resultDisplay.innerHTML = `${result} &#128521 &#128525 &#128536`;
        } else if (computerMove === 'scissors✌️') {
          result = 'its a draw';
          resultDisplay.innerHTML = `${result} &#128533 &#128530 &#129396` ;
        }

        if (result === 'you win') {
          score.wins +=1
          winner.innerHTML = score.wins
         } else if (result === 'you lose') {
          score.losses +=1
          loser.innerHTML = score.losses
         } else if (result === 'its a draw') {
          score.ties +=1
          tier.innerHTML = score.ties
         }

         if (score.wins === 5) {
         
          Results.style.display = 'none'
          gameOver.style.display = 'block'
          gameOver.innerHTML = 'game over'
          won.innerHTML = 'you won the game &#128525';
          btn3.style.display = 'block'
          reset()
        } else if (score.losses === 5) {
          
          Results.style.display = 'none'
          gameOver.style.display = 'block'
          gameOver.innerHTML = 'game over'
          won.innerHTML = 'you lose the game &#128557';
          btn3.style.display = 'block'
          
          reset()
        } 
        
        
        

      }

      

       




      
    
       

    