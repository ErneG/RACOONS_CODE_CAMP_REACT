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
