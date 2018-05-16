import React, {Component} from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import Scroll from './scroll';
import './app.css';

class App extends Component  {
  constructor()  {
    super()
    this.state = {
      robots: [],
      searchfield: ''}
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));

  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends Yo!</h1>
        <SearchBox searchChange = { this.onSearchChange }/>
        <Scroll>
          <CardList robots = { filteredRobots }/>
        </Scroll>
      </div>
    );
  };

}
export default App;
