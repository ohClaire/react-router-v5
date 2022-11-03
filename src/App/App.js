import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import CreatureDetails from '../Creatures/CreatureDetails';
import { Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">
            Puppies
          </NavLink>
          <NavLink exact to="/" className="nav">
            Home
          </NavLink>
          <NavLink to="/sharks" className="nav">
            Sharks
          </NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/puppies/:id"
          render={({ match }) => {
            console.log(match, 'match line 44');
            const creatureToRender = puppies.find(
              (creature) => creature.id === parseInt(match.params.id)
            );
            console.log(creatureToRender);
            return <CreatureDetails {...creatureToRender} />;
          }}
        />
        <Route
          path="/:animals"
          render={({ match }) => {
            const animalType = match.params.animals;
            const creatureData = animalType === 'sharks' ? sharks : puppies;
            return <Creatures data={creatureData} name={animalType} />;
          }}
        />
      </main>
    );
  }
}
