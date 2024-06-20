import React from 'react';

import { fetchCollection } from '../../lib/collection';
import { formatBirthday } from '../../helpers/dateHelper'

import './styles.css';

interface Props {
  info: {
    image: string;
    firstname: string;
    lastname: string;
    birthday: string;
  }
}

const Card = ({ info }: Props) => (
  <div className='container'>
    <div className='photo'>
      <img src={info.image} />
    </div>
    <h1 className='title'>{info.firstname + ' ' + info.lastname}</h1>
    <p className='birthday'>{formatBirthday(info.birthday)}</p>
  </div>
)

const Collection = () => {
  const collection = fetchCollection();
  const card = collection[0];

  return <Card info={card.player} />;
};

export default Collection;