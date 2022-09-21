import { Heading, Image } from '@chakra-ui/react';
import { CategoriCard, Footer, HeadTD, Navbar } from '../../components';

const index = ({ dataCategories }) => (
  <div className="h-screen">
    <HeadTD />
    <Navbar />
    <section className="max-w-[1100px] flex justify-between items-center mx-auto flex-col px-4 h-[90%]">
      <div>
        <Image src="/images/buku5.svg" boxSize={400} className="ghost-2" />
      </div>
      <div>
        <Heading className="w-full mt-2">Pilih Categori </Heading>
        <div className="w-full flex justify-start gap-5 mt-5 flex-wrap">
          {dataCategories.map((data) => (
            <div key={data.id}>
              <CategoriCard id={data.id} name={data.name} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  </div>
);

export default index;

export async function getServerSideProps() {
  // Fetch data from external API
  const categories = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`
  );
  const dataCategories = await categories.json();
  // Pass data to the page via props
  return { props: { dataCategories } };
}
