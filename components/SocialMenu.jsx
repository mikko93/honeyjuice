import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialMenu.module.scss';
import {
  SiBandcamp,
  SiInstagram,
  SiSpotify,
  SiYoutube,
} from 'react-icons/si';
import SocialMenuIcon from '@components/SocialMenuIcon';

const SocialMenu = () => {
  return (
    <div className={styles.social}>

      <SocialMenuIcon
        icon={<SiBandcamp />}
        link='https://bandcamp.com/'
        tooltip='BandCamp'
      />
            <SocialMenuIcon
        icon={<SiInstagram />}
        link='https://www.instagram.com/'
        tooltip='Instagram'
      />
      <SocialMenuIcon
        icon={<SiSpotify />}
        link='https://open.spotify.com/artist/'
        tooltip='Spotify'
      />
      <SocialMenuIcon
        icon={<SiYoutube />}
        link='https://music.youtube.com/channel/'
        tooltip='YouTube'
      />
    </div>
  );
};

export default SocialMenu;
