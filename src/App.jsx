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
