import React, { useState } from 'react';
import disabled from '../icons/disabled.png';
import blind from '../icons/009-blind.png';
import ear from '../icons/010-ear.png';
import meat from '../icons/meat.png';
import no_meat from '../icons/004-no-meat.png';
import pizza from '../icons/006-pizza-slice.png';
import grocery from '../icons/008-grocery.png';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

export default function Store({ elem }) {
  const restType = () => {
    switch (elem.type) {
      case 'בשרי':
        return <img src={meat} height="40" alt="meat" />;
      case 'חלבי/פרווה':
        return <img src={no_meat} height="40" alt="no_meat" />;
      case 'פיצה':
        return <img src={pizza} height="40" alt="pizza" />;
      case 'סופר/מכולת':
        return <img src={grocery} height="40" alt="grocery" />;

      default:
        return '';
    }
  };
  const [value, setValue] = useState(0);
  return (
    <div
      className="card"
      style={{
        //border: '1px solid black',
        flex: 1,
        textAlign: 'center',
        fontSize: '24px',
        marginTop: '10px',
        marginRight: '10px',
      }}
    >
      <div className="card-body" style={{ fontWeight: 'bold' }}>
        <h2>{elem.name}</h2>
      </div>
      <h4 className="card-subtitle mb-2 text-muted">
        שעות פתיחה: {elem.Opening_Hours}
      </h4>
      <h4 className="card-text">
        סוג המסעדה:
        {restType()} {elem.type}
      </h4>

      <div style={{ marginBottom: '10px' }}>
        {elem.accessibility.disabled ? (
          <img src={disabled} alt="disabled" />
        ) : (
          ''
        )}
        {elem.accessibility.blind ? <img src={blind} alt="blind" /> : ''}
        {elem.accessibility.ear ? <img src={ear} alt="ear" /> : ''}
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
    </div>
  );
}
