import React, { useEffect, useState } from 'react';

import { fetchCollection } from '../../lib/collection';

import { Card, CardInfo } from '../../components/Card';
import Loader from '../../components/Loader';
import { sortCollectionByCriteria } from '../../helpers/stringHelper';

import './styles.css';

const Cards = ({ collection }) => {
  const [criteria, setCriteria] = useState('firstname');

  const handleChange = ({ target }) => setCriteria(target.value);

  const orderedCollection = sortCollectionByCriteria(collection, criteria);

  return (
    <>
      <fieldset className='sorting' onChange={handleChange}>
        <legend>Order:</legend>
        <div>
          <input type='radio' id='firstname' name='order' value='firstname' defaultChecked />
          <label htmlFor='firstname'>First Name</label>

          <input type='radio' id='lastname' name='order' value='lastname' />
          <label htmlFor='lastname'>Last Name</label>

          <input type='radio' id='birthday' name='order' value='birthday' />
          <label htmlFor='birthday'>Date of Birth</label>
        </div>
      </fieldset>

      {orderedCollection.map((col: CardInfo) => <Card key={col.id} player={col.player} id={col.id} />)}
    </>
  )
}

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  const getCollection = async () => {
    try {
      const response = await fetchCollection() as CardInfo[];
      setCollection(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoaded(true);
    }
  }

  useEffect(() => {
    getCollection();
  }, [])

  const content = collection.length
    ? <Cards collection={collection} />
    : <h1 className='error'>{error || ':( Sorry, no cards found'}</h1>

  return (
    <div className='container'>
      {!loaded ? <Loader /> : content}
    </div>
  );
};

export default Collection;