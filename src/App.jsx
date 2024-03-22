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
