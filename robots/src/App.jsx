import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import 'tachyons';
import { robots } from './robots';
import './index.css';
import './App.css'

const App = () => {
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const filteredRobots = robots.filter(robot =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList robots={filteredRobots} />
        </div>
    );
};

export default App;
