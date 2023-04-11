import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
// import logo from '../public/graphics/logo.png'
// import groupPhoto from '../public/photos/group_photo.png'

export default function Home() {
  return (
    <section className={styles.home}>
      {/* <Image
        id="object-position-1"
        src={logo}
        alt='logo'
        width='125'
        height='110'
        object-fit='fill'
        object-position='50% 50%'
      /> */}
      <h1>— alternative rock from Helsinki.
      </h1>
      <p>
      Combining the Finnish spirit of love, life and joy with the German sense of humor and the ambitious Spanish work ethic. 
      Rounded up with freedom of self expression of Uzbekistan, this quintet of wannabe high school dropouts is bound to be the next big thing.
      </p>
      {/* <Image
        src={groupPhoto}
        alt='group photo'
        width='500'
        height='auto'
        object-fit='contain'
      /> */}
      <figcaption className={styles.photo_caption}>
        Asalya (vocals), Philip (guitar), Lauri (guitar), Mikko (bass) and Albert (drums)
      </figcaption>
      <p>
        <Link href='mailto:info@honeyjuice.band' aria-label="mailto:info@honeyjuice.band">
          info@honeyjuice.band
        </Link>
      </p>
    </section>
  );
}

