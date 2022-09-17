import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import HeroBookLogo from './HeroBookLogo';

const Hero = () => (
  <div className="flex justify-between h-3/4 flex-col md:flex-row gap-2">
    <div className="flex-none">
      <HeroBookLogo />
    </div>
    <div className="flex flex-col justify-start m-auto px-8">
      <Heading as="h1">
        Sudah Kah Membaca <br /> Hari ini ?
      </Heading>
      <Text as="i">
        &quot;Buku adalah pembawa peradaban. Tanpa buku, sejarah itu sunyi,
        sastra itu bodoh, sains lumpuh, pemikiran dan spekulasi terhenti. Buku
        adalah mesin perubahan, jendela di dunia, mercusuar yang didirikan di
        lautan waktu.&quot; - <Text as="b">Barbara W. Tuchman</Text>
      </Text>
    </div>
  </div>
);

export default Hero;
