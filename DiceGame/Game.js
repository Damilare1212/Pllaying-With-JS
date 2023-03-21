
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const Score1 = document.querySelector('#score--0');
const Score2 = document.getElementById('score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');

const dice1 = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new ');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');

let scores;
let CurrentScores;
let activePlayer;
let ISplaying;

const Initialize  = function() 
{
    scores = [0,0];
    CurrentScores = 0;
    activePlayer = 0;
    ISplaying = true;

    Score1.textContent = 0;
    Score2.textContent= 0;
    current1.textContent = 0;
    current2.textContent = 0;

    dice1.classList.add('hidden');

    player1.classList.add('player--active');
    player1.classList.remove('player--winner');

    player2.classList.remove('player--active');
    player2.classList.remove('player--winner');

}
Initialize();

const SwitchPlayer = function()
{
   document.getElementById(`current--${activePlayer}`).textContent=0;
   CurrentScores = 0;

   activePlayer = activePlayer === 0 ? 1 : 0;
   player1.classList.toggle  ('player--active');
   player2.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function()
{
    if (ISplaying)
    {
        const dice  = Math.trunc(Math.random() * 6) + 1;

        
    dice1.classList.remove('hidden');
    dice1.src = `dice-${dice}.png`;
    

    if (dice !== 1)
    {
        CurrentScores = CurrentScores + dice;
        document.getElementById(`current--${activePlayer}`).textContent = CurrentScores;
    }
    else
    {
        SwitchPlayer();
    }
    }
});

holdBtn.addEventListener('click', function()
{
    if (ISplaying)
    {
        scores[activePlayer] += CurrentScores;

        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer]

        if (scores[activePlayer] >= 100)
        {
            ISplaying = false;
            dice1.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else
        {
            SwitchPlayer();
        }
    }
});

newBtn.addEventListener('click', Initialize);

