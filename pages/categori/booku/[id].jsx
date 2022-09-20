import { ArrowBackIcon, CopyIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { startTransition, useEffect, useState } from 'react';
import { CategoriCard, Footer, HeadTD, Navbar } from '../../../components';

const BookuID = ({ detailBuku }) => {
  const router = useRouter();
  const datadetail = detailBuku[0];
  console.log(datadetail);
  return (
    <div className="h-screen">
      <HeadTD />
      <Navbar />
      <HeadTD newTitle={datadetail.title} newDesc={datadetail.description} />
      <section className="max-w-[1100px] flex justify-center items-center mx-auto flex-col px-8 gap-10 mt-4 md:mt-10 text-center">
        <div className="flex items-center justify-start gap-2 w-full ">
          <ArrowBackIcon
            w={10}
            h={10}
            onClick={() => router.back()}
            className="hover:scale-110 transition mt-2 cursor-pointer"
          />

          <Text className="text-start flex justify-start font-bold text-2xl md:text-3xl ">
            Back
          </Text>
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4">
          <Image
            boxSize={[500, null, 650]}
            objectFit="cover"
            src={datadetail.cover_url}
            alt={datadetail.title}
          />

          <div className="w-3/4 h-full flex flex-col justify-start text-start gap-3 overflow-auto">
            <div>
              <Heading as="h1">{datadetail.title}</Heading>
              <Text className="font-semibold">
                {datadetail.authors.join(', ')}
              </Text>
            </div>
            <div>
              <div className="flex justify-start items-center gap-2 font-sans">
                <CopyIcon />
                <Text>{`${datadetail.sections.length} Bab`}</Text>
              </div>
              <div className="flex justify-start items-center gap-2">
                <TimeIcon />
                <Text>{`${Math.trunc(
                  datadetail.audio_length / 60
                )} Menit`}</Text>
              </div>
            </div>
            <div>
              <Text className=" text-xl font-bold">Tentang buku ini ?</Text>
              <Text className="">{datadetail.description}</Text>
            </div>
            <div>
              <Text className=" text-xl font-bold">Apa saja di dalamnya?</Text>
              <Accordion>
                {datadetail.sections.map((section, index) => (
                  <AccordionItem key={section.title}>
                    <AccordionButton>
                      <Box flex={1} textAlign="left">
                        {`${index + 1}. ${section.title}`}
                      </Box>
                    </AccordionButton>
                    <AccordionPanel>{section.content}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default BookuID;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { categori } = context.query;
  const [Cid, Cpage, Csize] = categori.split('&');

  const categories = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${Cid}&page=${Cpage}&size=${Csize}`
  );
  const dataCategories = await categories.json();
  const detailBuku = await dataCategories.flatMap((x) =>
    x.id === id * 1 ? [x] : []
  );
  return { props: { detailBuku } };
}

// function BookuID() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(false);
//   const headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');

//   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//   headers.append('Access-Control-Allow-Credentials', 'true');

//   headers.append('GET', 'POST', 'OPTIONS');

//   useEffect(() => {
//     setLoading(true);
//     fetch(
//       'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&page=0&size=10',
//       {
//         // mode: 'no-cors',
//         credentials: 'include',
//         method: 'POST',
//         headers,
//       }
//     )
//       .then((res) => res.json())
//       .then((Data) => {
//         setData(Data);
//         console.log(Data);
//         setLoading(false);
//       });
//   }, []);

//   // if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>No BookuID data</p>;

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.bio}</p>
//     </div>
//   );
// }

// export default BookuID;
