import React, { useEffect, useState } from 'react';

import { fetchCollection } from '../../lib/collection';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

import './styles.css';

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  const fetchCall = async () => {
    try {
      const response = await fetchCollection();
      setCollection(response);
    } catch (err) {
      setError(err.message);
    }

    setLoaded(true);
  }

  useEffect(() => {
    fetchCall();
  }, [])

  const content = collection.length
    ? collection.map((col) => <Card key={col.id} info={col.player} id={col.id} />)
    : <h1 className='error'>{error || ':( Sorry, no cards found'}</h1>

  return (
    <div className='container'>
      {!loaded ? <Loader /> : content}
    </div>
  );
};

export default Collection;