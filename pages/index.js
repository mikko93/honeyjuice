import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/static/logo.png'
import groupPhoto from '../public/static/group-photo.png'

export default function Home() {
  return (
    <section>
      <br />
      {<Image
        src={logo}
        alt='logo'
        width='356'
        height='auto'
        style={{ objectFit: "contain" }}
      />}
      <br />
      <p>
        Helsinki-based alternative rock quintet of wannabe high school dropouts from obscure parts of the world trying very hard to make their songs the main selling point instead of their drummer's ass and their singer's tits.
      </p>
      <iframe width="95%" border-radius="8px" height="152" loading="eager" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/track/4XBcnwlyRPMb6cT0321Xz9?utm_source=generator"></iframe>
      {<Image
        src={groupPhoto}
        alt='group photo'
        width='475'
        height='auto'
        style={{ objectFit: "contain" }}
      />}
      <figcaption className={styles.photo_caption}>
        Mikko (bass), Albert (drums), Philip (guitar), Asalya (vocals) and Lauri (guitar)
      </figcaption>
      <br />
      <p>
        <Link href='https://docs.google.com/presentation/d/1g3vidFjsCDgPcP5e0iTzCf3fFkSm471ffI4EK1imofg/edit?usp=sharing' aria-label="https://docs.google.com/presentation/d/1g3vidFjsCDgPcP5e0iTzCf3fFkSm471ffI4EK1imofg/edit?usp=sharing">
          EPK
        </Link>
      </p>
      <p>
        <Link href='mailto:info@honeyjuice.band' aria-label="mailto:info@honeyjuice.band">
          info@honeyjuice.band
        </Link>
      </p>
    </section>
  );
}
