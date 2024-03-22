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
