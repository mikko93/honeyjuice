import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/static/logo.png'
 import groupPhoto from '../public/static/group-photo.jpg'

export default function Home() {
  return (
    <section className={styles.home}>
      { <Image
        src={logo}
        alt='logo'
        width='160'
        height='160'
        style={{objectFit:"contain"}}
      /> }
      <h1>— alternative rock from Helsinki.
      </h1>
      <br></br>
      <p>
      Combining the Finnish spirit of love, life and joy with the German sense of humor and the ambitious Spanish work ethic 
      and promoting the freedom of self-expression that lyricist Asalya is used to from her home country Uzbekistan, this quintet of wannabe high school dropouts is bound to be the next big thing.
      </p>
      { <Image
        src={groupPhoto}
        alt='group photo'
        width='500'
        height='auto'
        style={{objectFit:"contain"}}
      /> }
      <figcaption className={styles.photo_caption}>
        Asalya (vocals), Philip (guitar), Mikko (bass), Albert (drums) and Lauri (guitar)
      </figcaption>
      <br></br>
      <p>
        <Link href='mailto:info@honeyjuice.band' aria-label="mailto:info@honeyjuice.band">
          info@honeyjuice.band
        </Link>
      </p>
    </section>
  );
}

