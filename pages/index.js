import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/static/logo.png'
import groupPhoto from '../public/static/group-photo.jpg'

export default function Home() {
  return (
    <section>
      { <Image
        src={logo}
        alt='logo'
        width='125'
        height='125'
        style={{objectFit:"contain"}}
      /> }
      <br />
      <br />
      <h1>— alternative rock from Helsinki.
      </h1>
      <br />
      <iframe width="95%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1555438846&color=%23ffd506&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <p>
      Combining the Finnish spirit of love, life and joy with the German sense of humor and the ambitious Spanish work ethic 
      and promoting the freedom of self-expression that lyricist Asalya is used to from her home country Uzbekistan, this quintet of wannabe high school dropouts is bound to be the next big thing.
      </p>
      { <Image
        src={groupPhoto}
        alt='group photo'
        width='475'
        height='auto'
        style={{objectFit:"contain"}}
      /> }
      <figcaption className={styles.photo_caption}>
        Asalya (vocals), Philip (guitar), Mikko (bass), Albert (drums) and Lauri (guitar)
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
