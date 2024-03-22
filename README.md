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
