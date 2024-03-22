import checkWinner from './utils/checkWinner';
import SquareGrid from './components/SquareGrid';
import { useState, useEffect } from 'react';

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
    };

    /**
     * Function to check if there is a winner after each turn
     * useEffect is a hook that allows us to perform side effects in function components
     * that just means that every time the `values` array changes, the function inside useEffect will run
     */
    useEffect(() => {
        const winner = checkWinner(values);
        setWinner(winner);

        const isDraw = checkDraw(values, winner);

        if (winner || isDraw) {
            // if there is a winner or the game is a draw, set the game over
            setGameOver(true);
        }
    }, [values]);

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
