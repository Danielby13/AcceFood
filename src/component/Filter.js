import React, { useState } from 'react';
import { List } from './List';
import meat from '../icons/meat.png';
import no_meat from '../icons/004-no-meat.png';
import pizza from '../icons/006-pizza-slice.png';
import grocery from '../icons/008-grocery.png';
import milkshake from '../icons/007-milkshake.png';
import icecream from '../icons/003-ice-cream.png';
import beer from '../icons/002-beer.png';

import data from '../data/data.json';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
export const Filter = (props) => {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState(0);
  return (
    <div
      style={{
        float: 'right',
        width: '31%',
        height: '90%',
        marginRight: '10%',
        marginTop: '2%',
      }}
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div style={{ flex: 1, marginTop: 10, marginBottom: 10 }}>
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginRight: 3 }}
        >
          <img src={meat} alt="Meat" />
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginRight: 3 }}
        >
          <img src={no_meat} alt="no_Meat" a href="/" />
        </button>

        <button
          type="button"
          className="btn btn-warning"
          style={{ marginRight: 3 }}
        >
          <img src={pizza} alt="pizza" a href="/" />
        </button>

        <button
          type="button"
          className="btn btn-info"
          style={{ marginRight: 3 }}
        >
          <img src={grocery} alt="grocery" a href="/" />
        </button>

        <button
          type="button"
          className="btn btn-success"
          style={{ marginRight: 3 }}
        >
          <img src={milkshake} alt="milkshake" a href="/" />
        </button>

        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: 3 }}
        >
          <img src={icecream} alt="icecream" a href="/" />
        </button>

        <button
          type="button"
          className="btn btn-dark"
          style={{ marginRight: 3 }}
        >
          <img src={beer} alt="beer" a href="/" />
        </button>
      </div>
      {data.data
        .filter((val) => {
          if (search === '') {
            return val;
          } else if (
            val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((val2, key) => {
          return (
            <div className="user" key={key}>
              <List valp={val2} />
            </div>
          );
        })}
    </div>
  );
};

export default Filter;
