import React from 'react';

class HelloWorld extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            who: 'world!'
        };
    }


    handleWorldButton = () => {

        this.setState({
            who:'world!'
        })
    }


    handleFriendButton = () => {

        this.setState({
            who:'friend!'
        })
    }


    handleReactButton = () => {

        this.setState({
            who:'React!'
        })
    }


    render() {

        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleWorldButton}>World</button>
                <button onClick={this.handleFriendButton}>Friend</button>
                <button onClick={this.handleReactButton}>React</button>
            </div>
        );
    }
}

export default HelloWorld;