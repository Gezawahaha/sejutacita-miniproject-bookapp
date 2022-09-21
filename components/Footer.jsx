import Image from 'next/image';
import { useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <footer className="flex justify-center items-center mx-auto flex-col">
      <a
        href="https://gezamahardika.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-center gap-4"
      >
        <p>WebApp Made by </p>
        <span>
          <Image
            src={`/Logo-gm${colorMode === 'dark' ? '' : '-black'}.svg`}
            width={120}
            height={53}
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
