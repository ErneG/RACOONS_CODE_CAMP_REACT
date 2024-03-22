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
