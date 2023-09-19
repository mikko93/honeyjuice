import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialMenu.module.scss';
import {
  SiFacebook,
  SiInstagram,
  SiSoundcloud,
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
        icon={<SiSoundcloud />}
        link='https://www.soundcloud.com/honeyjuiceband'
        tooltip='SoundCloud'
        arialabel='SoundCloud'
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
