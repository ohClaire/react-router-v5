import React from 'react';
import './image-display.css';
import { NavLink } from 'react-router-dom';

const Creatures = ({ data, name }) => {
  console.log(data, name);
  const creatureImages = data.map((creature) => {
    const { id, image } = creature;
    return (
      <NavLink to={`/${name}/${id}`}>
        <img src={image} key={id} id={id} className="app-img" />
      </NavLink>
    );
  });
  return (
    <>
      <h1>{name}!</h1>
      {creatureImages}
    </>
  );
};

export default Creatures;
