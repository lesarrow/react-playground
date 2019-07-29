import React from 'react';

class Accordion extends React.Component {

    static defaultProps = {
        sections: []
    }

    state = {
        currentButton: -1
    }


    handleClick(index) {

        this.setState({
            currentButton: index
        })
    }


    getButtonText(index) {

        let retval = "";
        if (index === this.state.currentButton) {
            retval = this.props.sections[index].content
        }

        return retval;

    }

    buildButtons(sections) {
        const retval = sections.map((section, index) => 
            <li><button key={index} onClick={() => this.handleClick(index)}>{section.title}</button>
                <p>{!!sections.length && this.getButtonText(index)}</p>
            </li>
        )

        return retval;
    }

    render() {

        return (
            <ul>
                {this.buildButtons(this.props.sections)}
            </ul>
        );
    }
}

export default Accordion;