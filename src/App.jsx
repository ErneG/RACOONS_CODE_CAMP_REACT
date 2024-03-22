import Square from './components/Square';
import { useState } from 'react';

const App = () => {
    //An array of 9 null values. Null represents an empty square.
    const [values, setValues] = useState(
        Array(9).fill(null)
    );

    const [player, setPlayer] = useState(
        Math.random() < 0.5 ? 'X' : 'O' // randomly choose the first player. Math.random() generates a random number between 0 and 1
    );

    // Function to switch the player after each turn
    const changePlayer = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const handleClick = (index) => {
        //Create a copy of the values array.
        const newValues = [...values];
        console.log('newValues:', newValues);

        newValues[index] = player;
        changePlayer();
        setValues(newValues);
    };
    return (
        <main className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-[#050505] text-white">
            <div className="grid grid-cols-3 gap-2">
                {values.map((value, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <Square passedValue={value} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default App;
