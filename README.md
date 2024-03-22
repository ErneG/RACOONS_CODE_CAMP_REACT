# The Raccoons Code Camp 6 - Javascript and React

## This project was created in collaboration with @mihaildanilov

## Check dependencies

```bash
node -v  // Check Node.js installation
npm -v   // Check Node.js installation
git -v   // Check Node.js installation
```

> [!NOTE] Create a box. This is just the return statement

```jsx
return (
    <main className="h-screen w-full">
        <div>
            {values.map((value, index) => (
                <div
                    key={index} // Necessary for React to keep track of the elements
                    className="inline-flex transform items-center justify-center rounded-lg
 border-2 border-solid border-gray-700 p-2 transition hover:scale-105"
                >
                    BOX 1
                </div>
            ))}
        </div>
    </main>
);
```

> [!NOTE] Generate boxes dynamically

```jsx
const App = () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // An array of values

    return (
        <main className="h-screen w-full">
            <div className="grid grid-cols-3 gap-2">
                {values.map((value, index) => (
                    <div
                        key={index} // Necessary for React to keep track of the elements
                        className="inline-flex transform items-center justify-center rounded-lg border-2 border-solid border-gray-700 p-2 transition hover:scale-105"
                    >
                        {value}
                    </div>
                ))}
            </div>
        </main>
    );
};
export default App;
```

> [!NOTE] Numbers as values. Here the numbers represent
> their index in the array.

```jsx
const App = () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // An array of values

    return (
        <main className="h-screen w-full">
            <div className="grid grid-cols-3 gap-2">
                {values.map((value, index) => (
                    <div
                        key={index} // Necessary for React to keep track of the elements
                        className="inline-flex transform items-center justify-center rounded-lg border-2 border-solid border-gray-700 p-2 transition hover:scale-105"
                    >
                        {value}
                    </div>
                ))}
            </div>
        </main>
    );
};
export default App;
```

> [!NOTE] App component with Square component and the Square
> component itself.

```jsx
import Square from './components/Square';
const App = () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // An array of values

    return (
        <main className="h-screen w-full">
            <div className="grid grid-cols-3 gap-2">
                {values.map((value, index) => (
                    <Square
                        key={index}
                        passedValue={value}
                    />
                ))}
            </div>
        </main>
    );
};

export default App;
```

```jsx
export default function Square({ passedValue }) {
    return (
        <div
            className="inline-flex transform items-center justify-center rounded-lg
            border-2 border-solid border-gray-700 p-2 transition hover:scale-105"
        >
            {passedValue}
        </div>
    );
}
```

> [!NOTE] className for the main tag.

```jsx
<main className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-[#050505] text-white">
```

> [!NOTE] The whole updated Square component and the value
> array. Square component should be placed at
> `src/components/Squares.jsx`

```jsx
import { FaRegCircle } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

export default function Square({ passedValue }) {
    const Icon = () => {
        if (passedValue === 'O') {
            return <FaRegCircle className="h-12 w-12" />;
        }
        if (passedValue === 'X') {
            return <IoClose className="h-12 w-12" />;
        } else {
            return (
                <div className="h-12 w-12">
                    {passedValue}
                </div>
            );
        }
    };

    return (
        <div
            className="inline-flex transform items-center justify-center rounded-lg
            border-2 border-solid border-gray-700 p-2 transition hover:scale-105"
        >
            <Icon />
        </div>
    );
}
```

```jsx
const values = [
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X'
]; // An array of values
```

> [!NOTE] App.jsx component with clicking

```jsx
import Square from './components/Square';
import { useState } from 'react';

const App = () => {
    //An array of 9 null values. Null represents an empty square.
    const [values, setValues] = useState(
        Array(9).fill(null)
    );

    const handleClick = (index) => {
        //Create a copy of the values array.
        const newValues = [...values];
        console.log('newValues:', newValues);

        newValues[index] = 'X';
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
```

> [!NOTE] App.jsx. Switching players. Should be placed just
> below values useState hook.

```jsx
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
```

> [!NOTE] Solve the overriding problem

```jsx
const handleClick = (index) => {
    //Create a copy of the values array.
    const newValues = [...values];
    console.log('newValues:', newValues);

    if (newValues[index] !== null) return; // if the square is already filled, do nothing

    newValues[index] = player;
    changePlayer();
    setValues(newValues);
};
```

> [!NOTE] Creating SquareGrid.

#### SquareGrid.jsx should be placed at `src/components/SquareGrid.jsx`.

```jsx
import Square from './Square';

export default function SquareGrid({
    passedValues,
    passedFunction: handleClick //renaming the passedFunction prop to handleClick to keep the original code intact
}) {
    return (
        <div className="grid grid-cols-3 gap-2">
            {passedValues.map((value, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                >
                    <Square passedValue={value} />
                </div>
            ))}
        </div>
    );
}
```

#### Import statement at the top of App.jsx

```jsx
import SquareGrid from './components/SquareGrid';
```

#### Return statement at App.jsx.

```jsx
return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-[#050505] text-white">
        <h1 className="text-4xl">Tic Tac Toe</h1>
        <h2 className="text-2xl">Player: {player}</h2>
        <SquareGrid
            passedValues={values}
            passedFunction={handleClick}
        />
    </main>
);
```

> [!NOTE] Create the checkWinner helper function.

#### checkWinner.jsx should be placed at `src/utils/checkWinner.jsx`.

```jsx
/**
 * Check if there is a winner
 */
export default function checkWinner(values) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns

        [0, 4, 8],
        [2, 4, 6] // diagonals
    ];
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            values[a] &&
            values[a] === values[b] &&
            values[a] === values[c]
        ) {
            return values[a];
        }
    }
    return null;
}
```
