import checkWinner from './utils/checkWinner';
import SquareGrid from './components/SquareGrid';
import { useState } from 'react';

const App = () => {
    //An array of 9 null values. Null represents an empty square.
    const [values, setValues] = useState(
        Array(9).fill(null)
    );

    const [player, setPlayer] = useState(
        Math.random() < 0.5 ? 'X' : 'O' // randomly choose the first player. Math.random() generates a random number between 0 and 1
    );
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Function to switch the player after each turn
    const changePlayer = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const checkDraw = (values, winner) => {
        const noNullValues = !values.includes(null);
        const noWinner = winner === null;
        const isDraw = noNullValues && noWinner;
        return isDraw;
    };

    const handleClick = (index) => {
        //Create a copy of the values array.
        const newValues = [...values];
        console.log('newValues:', newValues);

        if (newValues[index] !== null) return; // if the square is already filled, do nothing

        newValues[index] = player;
        changePlayer();
        setValues(newValues);

        const winner = checkWinner(newValues);
        if (winner !== null) {
            setGameOver(true);
            setWinner(winner);
        }
        if (checkDraw(newValues, winner)) {
            setWinner('Draw');
            setGameOver(true);
        }
    };

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-[#050505] text-white">
            <h1 className="text-4xl">Tic Tac Toe</h1>
            <h2 className="text-2xl">Player: {player}</h2>
            <h2 className="text-2xl">Winner: {winner}</h2>
            <SquareGrid
                passedValues={values}
                passedFunction={handleClick}
            />
        </main>
    );
};

export default App;
