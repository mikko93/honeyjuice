import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/graphics/logo.png'
import groupPhoto from '../public/photos/group_photo.png'

export default function Home() {
  return (
    <section className={styles.home}>
      <Image
        id="object-position-1"
        src={logo}
        alt='logo'
        width='125'
        height='110'
        object-fit='fill'
        object-position='50% 50%'
      />
      <h1>— alternative rock from Helsinki.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat sagittis accumsan.
        Vestibulum a turpis et ipsum interdum posuere. Nulla commodo eros in gravida hendrerit.
        Ut neque arcu, euismod non tincidunt vitae, convallis non ex. Pellentesque lacus eros,
        facilisis sed urna eu, rhoncus aliquet orci. Nam imperdiet libero non gravida semper.
        Quisque ultricies nisi vitae velit mattis, pellentesque elementum urna vehicula. Donec consectetur,
        felis eget eleifend imperdiet, sapien ex blandit erat, quis viverra leo metus porta dui.
        Suspendisse dignissim porttitor purus mollis molestie.
      </p>
      <Image
        src={groupPhoto}
        alt='group photo'
        width='500'
        height='auto'
        object-fit='contain'
      />
      <figcaption className={styles.photo_caption}>
        Asalya (vocals), Philip (guitar), Lauri (guitar), Mikko (bass) and Albert (drums)
      </figcaption>
      <p>
        <Link href='mailto:info@honeyjuice.band'>
          info@honeyjuice.band
        </Link>
      </p>
    </section>
  );
}

