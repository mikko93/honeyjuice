import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialMenu.module.scss';
import {
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
    </div>
  );
};

export default SocialMenu;
