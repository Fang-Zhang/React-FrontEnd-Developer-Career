// Analyze the below code and advise what will be the value of “Count” when the button is clicked:

class App extends React.Component {
    state = { count: 0 };
    handleClick = () => {
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
        }, 0);
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}