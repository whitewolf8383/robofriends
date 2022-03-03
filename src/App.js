import React, { Component } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import './App.css';

class App extends Component() {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      <div className='tc' >
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;