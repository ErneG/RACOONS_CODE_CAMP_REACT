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
