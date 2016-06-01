import React, { Component } from 'react';
import FilterList from 'base/components/filterlist';
import { fruits } from 'base/data/fruits';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="body">
                <h1>
                    Sharing of the knowledges
                </h1>
                <FilterList items={ fruits }/>
            </div>
        );
    }
}
