const App = () => {
    const values = ['BOX 1', 'BOX 2']; // An array of values

    return (
        <main className="h-screen w-full">
            <div>
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
