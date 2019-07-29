import React from 'react';

class Bomb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            bombState: "tick"
        }
    }

    updateBombState = (newCount) => {

        let newBombState;

        if (newCount >= 8) {
            newBombState = "BOOM!!!";
            clearInterval(this.interval);
        }
        else if (newCount % 2 === 0) {
            newBombState = "tick";
        }
        else {
            newBombState  = "tock";
        }

        this.setState({
            count: newCount,
            bombState: newBombState
        });

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateBombState(this.state.count+1);
        }, 1000);
    }

    render() {
        return (
            <div>
                <p>{this.state.bombState}</p>
            </div>
        );
    }
}

export default Bomb;