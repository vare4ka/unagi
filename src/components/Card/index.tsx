import React, { useState } from 'react';
import { formatBirthday } from '../../helpers/dateHelper';
import Loader from '../Loader';

import './styles.css';

const IMAGES_URL = 'https://images.fotmob.com/image_resources/playerimages/'

interface Props {
  info: {
    image: string;
    firstname: string;
    lastname: string;
    birthday: string;
  },
  id: number;
}

const Card = ({ info, id }: Props) => {
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
      <h1 className='title'>{info.firstname + ' ' + info.lastname}</h1>
      <p className='birthday'>{formatBirthday(info.birthday)}</p>
    </div>
  )
};

export default Card;