import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import {
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer, HeadTD, Navbar } from '../components';
import useFav from '../contexts/AppContext';

const Bookmark = () => {
  const { favArray } = useFav();

  // const [Curpage, setCurPage] = useState(0);
  const [booku, setBooku] = useState(favArray);
  // const [size, setSize] = useState(10);
  const [searchLoading, setsearchLoading] = useState(false);
  const [search, setsearch] = useState('');
  // const [totalPage, settotalPage] = useState(favArray.slice(0, Math.ceil(favArray.length / size)));

  // const { colorMode } = useColorMode();
  useEffect(() => {
    setBooku(favArray);
  }, [favArray]);
  const router = useRouter();

  const handleSearch = async (e) => {
    setsearch(e.target.value);
    setTimeout(() => {
      setsearchLoading(false);
    }, 1000);
    const newBooku = booku.filter((books) =>
      books.title.toLowerCase().includes(search.toLowerCase())
    );
    if (e.target.value === '') {
      await setBooku(favArray);
    } else {
      await setBooku(newBooku);
    }
  };

  //   const handleSize = (e) => {
  //     router.replace({
  //       pathname: `/categori/${1}&0&${e}`,
  //       query: { name: router.query.name },
  //     });
  //   };

  //   const handlePage = (e) => {
  //     router.replace({
  //       pathname: `/categori/${1}&${e}&${1}`,
  //       query: { name: router.query.name },
  //     });
  //   };

  return (
    <div>
      <Navbar />
      <HeadTD
        newTitle={router.query.name}
        newDesc={`Kumpulan Booku Categori ${router.query.name}. Booku adalah 200+ ringkasan non-fiksi untuk perluas wawasanmu di mana pun, kapan pun. Ada versi audio & teks, dalam 2 bahasa!`}
      />
      <section className="max-w-[1100px]  flex justify-center items-center mx-auto flex-col px-8 gap-5 mt-4 md:mt-10 text-center">
        <div className="flex items-center justify-start gap-2 w-full h-full">
          <ArrowBackIcon
            w={10}
            h={10}
            onClick={() => router.back()}
            className="hover:scale-110 transition mt-2 cursor-pointer"
          />

          <Heading
            as="h1"
            size={['md', null, '2xl']}
            className="text-start flex justify-start"
          >
            Back
          </Heading>
        </div>
        <div>
          {booku ? (
            <div>
              <div className="w-full flex gap-1 mb-4">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <IconButton
                      variant="ghost"
                      isLoading={searchLoading}
                      icon={<SearchIcon />}
                    />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Cari Buku di page ini"
                    onChange={(e) => {
                      setsearchLoading(true);
                      handleSearch(e);
                    }}
                  />
                </InputGroup>
              </div>
              <SimpleGrid columns={[2, null, 3]} w="100%" gap={[4, null, 5]}>
                {booku.map((i) => (
                  <Skeleton key={i.id} isLoaded={!searchLoading}>
                    <GridItem
                      key={i.id}
                      w="100%"
                      h={[220, null, 400]}
                      borderRadius="md"
                      className=" flex flex-col gap-2 items-center hover:scale-105 hover:shadow-lg  transition cursor-pointer"
                      onClick={
                        () => alert('detail buku sedang di mantainance')
                        // router.push({
                        //   pathname: `/categori/booku/${i.id}`,
                        //   query: {
                        //     categori: router.query.id,
                        //   },
                        // })
                      }
                    >
                      <Image src={i.cover_url} boxSize="75%" />
                      <div className=" w-full text-start px-2">
                        <Heading
                          as="h3"
                          size={['xs', null, 'md']}
                          noOfLines={[2, null, 2]}
                          className=""
                        >
                          {i.title}
                        </Heading>
                        <Text className="text-xs" noOfLines={[1, null, 2]}>
                          {i.description}
                        </Text>
                      </div>
                    </GridItem>
                  </Skeleton>
                ))}
              </SimpleGrid>
              {/* <div className="flex flex-col w-full md:flex-row gap-2">
                <div className="flex w-full justify-center gap-2 items-center">
                  <div className="flex-none">
                    <Select
                      defaultValue={size}
                      onChange={(e) => {
                        handleSize(e.target.value);
                      }}
                    >
                      <option>10</option>
                      <option>15</option>
                      <option>20</option>
                      <option>25</option>
                    </Select>
                  </div>
                  <Text className="w-full text-start">Book&apos;s /page</Text>
                </div>
                <div className="flex justify-center gap-2 items-center w-4/5 md:w-1/2">
                  <nav
                    className="isolate inline-flex overflow-auto -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    {totalPage.map((page, index) => (
                      <Button
                        key={page}
                        variant="ghost"
                        colorScheme={`${
                          Curpage === `${index}`
                            ? `${colorMode === 'dark' ? 'teal' : 'blue'}`
                            : 'gray'
                        }`}
                        value={index}
                        onClick={(e) => {
                          setCurPage(e.target.value);
                          handlePage(e.target.value);
                        }}
                      >
                        {index}
                      </Button>
                    ))}
                  </nav>
                </div>
              </div> */}
            </div>
          ) : (
            <Heading className="h-[70vh]">Anda Tidak Memiliki Favorite</Heading>
          )}
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Bookmark;
