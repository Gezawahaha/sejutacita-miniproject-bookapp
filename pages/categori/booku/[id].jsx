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
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer, HeadTD, Navbar } from '../../../components';
import useFav from '../../../contexts/AppContext';

const BookuID = ({ detailBuku }) => {
  const router = useRouter();
  const datadetail = detailBuku[0];
  const { colorMode } = useColorMode();
  const [bookmarked, setBookmark] = useState(false);

  const { favArray, addToFavorite, removeFavorite } = useFav();

  useEffect(() => {
    const isBookmarked = favArray.find((fav) => fav.id === datadetail.id);

    if (isBookmarked) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  }, [favArray, datadetail.id]);

  const handleFav = () => {
    const singleJob = {
      id: datadetail.id,
      title: datadetail.title,
      description: datadetail.description,
      cover_url: datadetail.cover_url,
      sections: datadetail.sections,
    };

    if (bookmarked) {
      removeFavorite(singleJob);
    } else {
      addToFavorite(singleJob);
    }
  };

  return (
    <div className="h-screen">
      <HeadTD />
      <Navbar />
      <HeadTD newTitle={datadetail.title} newDesc={datadetail.description} />
      <section className="max-w-[1100px] flex justify-center items-center mx-auto flex-col px-8 gap-5 mt-4 md:mt-10 text-center">
        <div className="flex items-center justify-start gap-2 w-full ">
          <ArrowBackIcon
            w={10}
            h={10}
            onClick={() => router.back()}
            className="hover:scale-110 transition mt-2 cursor-pointer"
          />

          <Text className="text-start flex justify-start font-bold text-3xl md:text-4xl ">
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

          <div className="w-full h-full flex flex-col justify-start text-start gap-6 overflow-auto">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src={`/icons/bookmark${bookmarked ? 'ed' : ''}-${
                    colorMode === 'dark' ? 'dark' : 'light'
                  }.svg`}
                  boxSize={8}
                  className="hover:scale-110 cursor-pointer transition"
                  onClick={handleFav}
                />
                <Heading as="h1">{datadetail.title}</Heading>
              </div>

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
                    <AccordionPanel pb={4}>{section.content}</AccordionPanel>
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
