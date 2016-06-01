import React, { Component, PropTypes } from 'vendor/react';

export default class FilterList extends Component {

    static propTypes = {
        items: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            refinedItems: this.props.items
        }
    }

    doSearch(event) {

        const queryResult = [];

        this.props.items.forEach( (item) => {

            if (item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
                queryResult.push(item);
            }

        });

        this.setState({
            searchQuery: event.target.value,
            refinedItems: queryResult
        });
    }

    render() {

        const listItems = this.state.refinedItems.map((fruit, index) => {
            return (
                <li key={ index }>
                    { fruit }
                </li>
            );
        });

        return (
            <div>
                <input type="text" onChange={ this.doSearch.bind(this) }/>
                <ul>
                    { listItems }
                </ul>
            </div>
        );
    }
}
