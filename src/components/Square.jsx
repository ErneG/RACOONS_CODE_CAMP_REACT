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
