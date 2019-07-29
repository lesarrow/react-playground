import React from 'react';

class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
    };

    constructor(props) {
        super(props);
        this.timeout = null;
        this.bulletNum = props.bulletInChamber;
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            status: "you're safe!!"
        }
    }

    spinTheChamber = () => {

        let value = Math.ceil(Math.random() * 8);
        let newStatus;

        if (value === this.bulletNum) {
            newStatus = "BANG!!!!";
        }
        else {
            newStatus = "you're safe!!";
        }

        this.setState({
            chamber: value,
            spinningTheChamber: false,
            status: newStatus
        });
    }

    handleTriggerPull = () => {

        this.setState({
            spinningTheChamber: true,
            status: "spinning the chamber and pulling the trigger! ...."
        });

        this.timeout = setTimeout(this.spinTheChamber, 2000);
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={this.handleTriggerPull}>Pull the trigger!</button>
                    {this.state.status}
                </p>
            </div>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

}

export default RouletteGun;