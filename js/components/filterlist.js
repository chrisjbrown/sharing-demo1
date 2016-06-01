import React, { Component, PropTypes } from 'vendor/react';

export default class FilterList extends Component {

    static propTypes = {
        items: PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {

        const listItems = this.props.items.map((fruit, index) => {
            return (
                <li key={ index }>
                    { fruit }
                </li>
            );
        });

        return (
            <div>
                <ul>
                    { listItems }
                </ul>
            </div>
        );
    }
}
