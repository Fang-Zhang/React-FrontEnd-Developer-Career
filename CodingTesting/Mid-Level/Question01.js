// Find the issue in the below code when using the index as a key for list items:

import React from 'react';

function App() {
    const items = [
        { id: 1, text: 'apple' },
        { id: 2, text: 'orange' },
    ];
    const listItems = items.map((item, index) => <li key={index}>{item.text}</li>);
    return <ul>{listItems}</ul>;
}

export default App;