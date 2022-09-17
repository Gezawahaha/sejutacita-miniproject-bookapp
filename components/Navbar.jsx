import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';

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
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
        />

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button
              colorScheme="gray"
              variant="ghost"
              className="hover:translate-x-1 transition"
            >
              Baca Buku
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
  );
}
