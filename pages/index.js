import styles from '@styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/graphics/logo.png'
import groupPhoto from '../public/photos/group_photo.png'

export default function Home() {
  return (
    <section className={styles.home}>
      <Image
        src={logo}
        alt='logo'
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
        />
        <br />
        <figcaption className={styles.photo__caption}>
          Asalya (vocals), Philip (guitar), Lauri (guitar), Mikko (bass) and Albert (drums)
        </figcaption>
      <p>
        Nullam rutrum sem in porttitor finibus. Proin in dui luctus, ultrices arcu ac, dapibus libero.
        Integer consequat est in nulla malesuada ultrices. Fusce ultrices nisi orci, et efficitur nibh ullamcorper sit amet.
        Donec a purus molestie, vehicula metus at, bibendum leo. Phasellus luctus finibus risus, at tincidunt ligula aliquam vitae.
        Nunc ornare elit diam, nec interdum libero condimentum in. Vestibulum felis ipsum, pretium vitae nunc vitae,
        blandit finibus sapien. Fusce accumsan pulvinar nibh vitae semper.
      </p>
      <p>
        <br />
        <Link href='mailto:info@honeyjuice.band'>
          info@honeyjuice.band
          
        </Link>
      </p>
    </section>
  );
}

