import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import 'tachyons';
import './index.css';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

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
            {robots.length === 0 ? <h1>Loading</h1> : <CardList robots={filteredRobots} />}
        </div>
    );
};

export default App;
