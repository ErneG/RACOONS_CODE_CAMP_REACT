import Square from './components/Square';
const App = () => {
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

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-[#050505] text-white">
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
