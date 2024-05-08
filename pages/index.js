import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/static/logo.png'
import groupPhoto from '../public/static/group-photo.png'

export default function Home() {
  return (
    <section>
      <br />
      <h3>HONEY JUICE
      </h3>
      <br />
      <p>
        Helsinki-based alternative rock quintet of wannabe high school dropouts from obscure parts of the world trying very hard to make their songs the main selling point instead of their drummer's ass and their singer's tits.
      </p>
      <iframe width="95%" border-radius="8px" height="166" loading="eager" frameBorder="0" allowFullScreen="true" clipboard-write="true" encrypted-media="true" picture-in-picture="true" allow="autoplay" src="https://open.spotify.com/embed/track/4PZxR5GC6uwNqaq7hT5EmT?utm_source=generator"></iframe>
      {<Image
        src={groupPhoto}
        alt='group photo'
        width='475'
        height='auto'
        style={{ objectFit: "contain" }}
      />}
      <figcaption className={styles.photo_caption}>
        Mikko (bass), Albert (drums), Philip (guitar), Asalya (vocals), and Lauri (guitar)
      </figcaption>
      <br />
      <p>
        <Link href='mailto:info@honeyjuice.band' aria-label="mailto:info@honeyjuice.band">
          info@honeyjuice.band
        </Link>
      </p>
    </section>
  );
}
