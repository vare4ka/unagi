import React, { useState } from 'react';
import { formatBirthday } from '../../helpers/dateHelper';
import Loader from '../Loader';

import './styles.css';

const IMAGES_URL = 'https://images.fotmob.com/image_resources/playerimages/';

export interface CardInfo {
  player: {
    image: string;
    firstname: string;
    lastname: string;
    birthday: string;
  },
  id: number;
}

export const Card = ({ player, id }: CardInfo) => {
  const [loaded, setLoaded] = useState(false);

  const imageStyle = loaded ? {} : { display: 'none' };

  return (
    <div className='card'>
      <div className='photo'>
        {!loaded && <Loader/> }
        <img
          src={`${IMAGES_URL}${id}.png`}
          style={imageStyle}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <h1 className='title'>{player.firstname + ' ' + player.lastname}</h1>
      <p className='birthday'>{formatBirthday(player.birthday)}</p>
    </div>
  );
};
