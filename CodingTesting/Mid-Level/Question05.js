// What is the issue in the below code regarding useMemo hook:

import React, { useMemo} from 'react';

function App() {
    const number = [1, 2, 3, 4, 5];
    const doubleNumber = useMemo(() => number.map(num => num * 2), []);

    return (
        <div>
            {doubleNumber.map((num) => (
                <p key={num}>{num}</p>
            ))}
        </div>
    )
}