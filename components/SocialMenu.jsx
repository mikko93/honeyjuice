import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialMenu.module.scss';
import {
  SiApplemusic,
  SiFacebook,
  SiInstagram,
  SiSpotify,
  SiTidal,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';
import SocialMenuIcon from '@components/SocialMenuIcon';

const SocialMenu = () => {
  return (
    <div className={styles.social}>
      <SocialMenuIcon
        icon={<SiApplemusic />}
        link='https://music.apple.com/us/artist/honey-juice/1743831141'
        tooltip='Apple Music'
        arialabel='Apple Music'
      />
      <SocialMenuIcon
        icon={<SiFacebook />}
        link='https://www.facebook.com/honeyjuiceband'
        tooltip='Facebook'
        arialabel='Facebook'
      />
      <SocialMenuIcon
        icon={<SiInstagram />}
        link='https://www.instagram.com/honeyjuiceband/'
        tooltip='Instagram'
        arialabel='Instagram'
      />
      <SocialMenuIcon
        icon={<SiSpotify />}
        link='https://open.spotify.com/artist/1xbvfTpwf4Y4SM0ekfbvd7'
        tooltip='Spotify'
        arialabel='Spotify'
      />
      <SocialMenuIcon
        icon={<SiTidal />}
        link='https://www.tidal.com'
        tooltip='Tidal'
        arialabel='Tidal'
      />
      <SocialMenuIcon
        icon={<SiTiktok />}
        link='https://www.tiktok.com/@honeyjuiceband'
        tooltip='TikTok'
        arialabel='TikTok'
      />
      <SocialMenuIcon
        icon={<SiYoutube />}
        link='https://www.youtube.com/@HoneyJuice-band'
        tooltip='YouTube'
        arialabel='YouTube'
      />

    </div>
  );
};

export default SocialMenu;
