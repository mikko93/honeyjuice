import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SocialMenu from '@components/SocialMenu'

export default function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState('none');

  useEffect(() => {
    setActive(router.pathname);
  });

  return (
      <SocialMenu />
  );
}
