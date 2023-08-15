// Analyze the below code snippet and advise what will be shown on the screen when the App component is rendered with <App name=”Claire” />?

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}

export default App;