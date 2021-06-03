import React from 'react';

import Store from './Store';

export const List = ({ valp }) => {
  return (
    <div>
      <Store elem={valp} />
    </div>
  );
};

export default List;
