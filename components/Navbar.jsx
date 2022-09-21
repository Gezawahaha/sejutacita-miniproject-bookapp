import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

// const NavLink = (children) => (
//   <Link
//     px={2}
//     py={1}
//     rounded="md"
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href="#"
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex
          h={20}
          alignItems="center"
          margin="auto"
          justifyContent="space-between"
          maxWidth={1200}
        >
          <Image
            src={`/logo-bg-${colorMode === 'light' ? 'dark' : 'no'}.webp`}
            width={120}
            height={53}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />

          <Flex alignItems="center">
            <Stack direction="row" spacing={1}>
              <Button
                colorScheme="gray"
                variant="ghost"
                className="hover:scale-105 transition"
                onClick={() => router.push('/categori')}
              >
                Baca Booku
              </Button>
              <Button onClick={() => router.push('/bookmark')}>
                <Image src="/icons/bookmarked-light.svg" boxSize={5} />
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? (
                  <MoonIcon />
                ) : (
                  <SunIcon color="yellow" />
                )}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
}
