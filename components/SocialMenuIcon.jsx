import React from 'react';
import styles from '@styles/SocialMenu.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const SocialMenuIcon = ({ link, icon, tooltip, arialabel }) => {
  return (
    <Tippy content={<span>{tooltip}</span>}>
      
        <div className={styles.social_iconContainer}>
          <a href={link} aria-label={arialabel} target='_blank' rel='noreferrer nofollow'>
            {icon}
          </a>
        </div>
    </Tippy>
  );
};

export default SocialMenuIcon;