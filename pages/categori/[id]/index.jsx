import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Footer, HeadTD, Navbar } from '../../../components';

const CategoriID = ({ dataCategories, Cid }) => {
  // const [page, setPage] = useState(Cpage);
  const [size, setSize] = useState(10);
  const [booku, setBooku] = useState(dataCategories);
  const [searchLoading, setsearchLoading] = useState(false);
  const [search, setsearch] = useState('');

  const router = useRouter();

  // const [isLoaded, setIsLoaded] = useState(false);

  // const [id, setBook ] = router.query;
  // const pagesizeOhnchange = async () => {
  //   try {
  //     const res = await fetch(
  //       'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&page=0&size=10'
  //     );
  //     const newBooks = await res.status(200).json();
  //     setBooku(newBooks);
  //   } catch (error) {
  //     console.log('masuk eror', error);
  //   }
  // };

  // useEffect(() => {
  //   pagesizeOhnchange();
  // }, [page, size]);
  // console.log(booku);

  //   useEffect(async () => {
  //     try {
  //       const res = await fetch(
  //         `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${
  //           router.query.id
  //         }&page=${0}&size=${10}`
  //       );
  //       const newBooks = await res.json();
  //       setBooku(newBooks);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     console.log(page);
  //   }, [page, size]);

  const handleSearch = async (e) => {
    setsearch(e.target.value);
    setTimeout(() => {
      setsearchLoading(false);
    }, 1000);
    const newBooku = booku.filter((books) =>
      books.title.toLowerCase().includes(search.toLowerCase())
    );
    if (e.target.value === '') {
      await setBooku(dataCategories);
    } else {
      await setBooku(newBooku);
    }
  };
  // if (search == '') return setBooku(dataCategories);

  return (
    <div>
      <Navbar />
      <HeadTD
        newTitle={router.query.name}
        newDesc={`Kumpulan Booku Categori ${router.query.name}. Booku adalah 200+ ringkasan non-fiksi untuk perluas wawasanmu di mana pun, kapan pun. Ada versi audio & teks, dalam 2 bahasa!`}
      />
      <section className="max-w-[1100px] flex justify-center items-center mx-auto flex-col px-8 gap-5 mt-4 md:mt-10 text-center">
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
            {router.query.name}
          </Heading>
        </div>
        <div className="w-full flex gap-1">
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
          <Button onClick={() => console.log(search)}>Klik</Button>
        </div>
        <SimpleGrid columns={[2, null, 3]} w="100%" gap={[2, null, 5]}>
          {booku.map((i) => (
            <Skeleton key={i.id} isLoaded={!searchLoading}>
              <GridItem
                key={i.id}
                w="100%"
                h={[250, null, 400]}
                borderRadius="md"
                className=" flex flex-col gap-2 items-center hover:scale-105 hover:shadow-lg  transition cursor-pointer"
                onClick={() =>
                  // console.log(i )
                  router.push({
                    pathname: `/categori/booku/${i.id}`,
                    query: {
                      categori: router.query.id,
                    },
                  })
                }
              >
                <Image src={i.cover_url} boxSize="75%" />
                <div className=" w-full text-start px-6">
                  <Heading as="h3" size={['sm', null, 'md']} className="">
                    {i.title}
                  </Heading>
                  <Text noOfLines={[1, null, 2]}>{i.description}</Text>
                </div>
              </GridItem>
            </Skeleton>
          ))}
        </SimpleGrid>
        <div className="flex w-full">
          <div className="flex justify-center gap-2 items-center w-40">
            <Text>Book&apos;s</Text>
            <NumberInput
              placeholder="10"
              min={10}
              max={20}
              value={size}
              onChange={(e) => {
                setSize(e);
                router.push(
                  {
                    pathname: `/categori/${Cid}&0&${e}`,
                    query: { name: router.query.name },
                  },
                  `/categori/${Cid}&0&${e}`
                );
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="flex justify-center gap-2 items-center w-40" />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default CategoriID;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const [Cid, Cpage, Csize] = id.split('&');
  const categories = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${Cid}&page=${Cpage}&size=${Csize}`
  );
  const categoriAll = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
  );
  const dataCategories = await categories.json();
  const AllData = await categoriAll.json();
  const lenghtAllData = AllData.length;
  // Pass data to the page via props
  return { props: { dataCategories, lenghtAllData, Cid, Cpage, Csize } };
}
