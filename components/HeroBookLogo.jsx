import { Image } from '@chakra-ui/react';
import React from 'react';

const HeroBookLogo = () => (
  <div className="text-center items-center h-2/6">
    <Image
      className="flex relative"
      boxSize={400}
      src="/images/buku1.svg"
      alt="logo buku sejuta cita"
    />
    <Image
      className="absolute top-20 ghost-2"
      boxSize={400}
      src="/images/buku2.svg"
      alt="logo buku sejuta cita"
    />
    <Image
      className="absolute top-36 ghost-1"
      boxSize={400}
      src="/images/buku3.svg"
      alt="logo buku sejuta cita"
    />
    <Image
      className="absolute top-16 ghost-3"
      boxSize={400}
      src="/images/buku4.svg"
      alt="logo buku sejuta cita"
    />
  </div>
);

export default HeroBookLogo;
