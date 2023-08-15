// Find the issue in the below code snippet after rendering the list of names

import React from 'react';

function Question02() {
    const names = ['John', 'Paul', 'George', 'Ringo'];
    const listItems = names.map((name) => <li>{name}</li>);

    return <ul>{listItems}</ul>;
}

export default Question02;