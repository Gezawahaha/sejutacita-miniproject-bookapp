import { Heading } from '@chakra-ui/react';
import { CategoriCard, Footer, HeadTD, Navbar } from '../../components';

const index = ({ dataCategories }) => (
  <div className="h-screen">
    <HeadTD />
    <Navbar />
    <section className="max-w-[1100px] flex justify-between bg-red-50 items-center mx-auto flex-col px-8 h-[90%]">
      <div>
        <Heading className="w-full mt-10">Pilih Categori </Heading>
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
