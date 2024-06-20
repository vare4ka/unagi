import React, { useEffect, useState } from 'react';

import { fetchCollection } from '../../lib/collection';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

import './styles.css';

const Collection = () => {
  const [card, setCard] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const collection = fetchCollection();
    setCard(collection[0]);
    setLoaded(true);
  }, [])

  const content = card
    ? <Card info={card.player} id={card.id} />
    : <h1 className='error'>:( Sorry, no cards found</h1>

  return (
    <div className='container'>
      {!loaded ? <Loader /> : content}
    </div>
  );
};

export default Collection;