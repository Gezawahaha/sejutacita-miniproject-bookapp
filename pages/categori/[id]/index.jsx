import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer, HeadTD, Navbar } from '../../../components';

const CategoriID = ({ dataCategories, lenghtAllData }) => {
  // const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [booku, setBooku] = useState(dataCategories);

  // const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();
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

  return (
    <div>
      <Navbar />
      <HeadTD
        newTitle={router.query.name}
        newDesc={`Kumpulan Booku Categori ${router.query.name}. Booku adalah 200+ ringkasan non-fiksi untuk perluas wawasanmu di mana pun, kapan pun. Ada versi audio & teks, dalam 2 bahasa!`}
      />
      <section className="max-w-[1100px] flex justify-center items-center mx-auto flex-col px-8 gap-10 mt-10 text-center">
        <div className="flex items-center justify-start gap-2 w-full h-full">
          <ArrowBackIcon
            w={10}
            h={10}
            onClick={() => router.back()}
            className="hover:scale-110 transition mt-2 cursor-pointer"
          />

          <Heading
            as="h1"
            size={['lg', null, '2xl']}
            className="text-start flex justify-start"
          >
            {router.query.name}
          </Heading>
        </div>
        <SimpleGrid columns={[2, null, 3]} w="100%" gap={[2, null, 5]}>
          {booku.map((i) => (
            <GridItem
              key={i.id}
              w="100%"
              h={[250, null, 400]}
              borderRadius="md"
              className=" flex flex-col gap-2 items-center hover:scale-105 hover:shadow-lg  transition cursor-pointer"
              onClick={() => console.log(`/${router.query.id}`)}
            >
              <Image src={i.cover_url} boxSize="75%" />
              <div className=" w-full text-start px-6">
                <Heading as="h3" size={['sm', null, 'md']} className="">
                  {i.title}
                </Heading>
                <Text noOfLines={[1, null, 2]}>{i.description}</Text>
              </div>
            </GridItem>
          ))}
        </SimpleGrid>
        <div className="flex w-full">
          <div className="flex justify-center gap-2 items-center w-40">
            <Text>Book&apos;s</Text>
            <NumberInput
              defaultValue={10}
              min={10}
              max={20}
              value={size}
              onChange={(e) => {
                setSize(e);
                // console.log(`/categori/${id}&0&${e}`);
                // router.push({
                //   pathname: `/categori/${id}&0&${e}`,
                //   query: { name: router.query.name },
                // });
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
  const [Cid, page, size] = id.split('&');
  const categories = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${Cid}&page=${page}&size=${size}`
  );
  const categoriAll = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
  );
  const dataCategories = await categories.json();
  const AllData = await categoriAll.json();
  const lenghtAllData = AllData.length;
  // Pass data to the page via props
  return { props: { dataCategories, lenghtAllData } };
}
