import { Heading, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import Script from 'next/script';
import { CategoriCard, Footer, HeadTD, Hero, Navbar } from '../components';

export default function Home({ dataCategori }) {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function (m, a, z, e) {
  var s, t;
  try {
    t = m.sessionStorage.getItem('maze-us');
  } catch (err) {}

  if (!t) {
    t = new Date().getTime();
    try {
      m.sessionStorage.setItem('maze-us', t);
    } catch (err) {}
  }

  s = a.createElement('script');
  s.src = z + '?t=' + t + '&apiKey=' + e;
  s.async = true;
  a.getElementsByTagName('head')[0].appendChild(s);
  m.mazeUniversalSnippetApiKey = e;
})(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'd576d76c-a884-4cee-81fd-2bfd6aa718e7');`,
        }}
      />
      <HeadTD />
      <Navbar />
      <main className="max-w-[1100px] flex justify-center items-center mx-auto flex-col">
        <section className="w-full my-10">
          <Hero />
        </section>
        <section className="flex flex-col-reverse md:flex-row gap-4 px-8 my-20 justify-between w-full">
          <div className="flex flex-col gap-2">
            <Heading>
              Beragam Category Buku <br /> Hanya Disini !
            </Heading>
            <Text as="i" className="flex-auto">
              &quot;Makin kita banyak membaca, makin kita banyak berpikir makin
              kita banyak belajar, makin kita sadar bahwa kita tak mengetahui
              apa pun.&quot; -<Text as="b">Voltaire</Text>
            </Text>
          </div>
          <div className="flex gap-2 flex-wrap">
            {dataCategori.map((categori) => (
              <CategoriCard
                key={categori.id}
                id={categori.id}
                name={categori.name}
              />
            ))}
          </div>
        </section>
        <section className=" w-full px-8 my-10">
          <div className="flex gap-5 items-center justify-center flex-col-reverse md:flex-row">
            <div>
              <Image src="/gif/screen-phone1.gif" width={300} height={550} />
            </div>
            <div className="flex gap-4 flex-col ">
              <Heading>Aplikasi No. 1 Mahasiswa & Pelajar</Heading>
              <Text>
                Kunjungi store aplikasi kesayangan kalian, download untuk
                mendapatkan fitur lebih banyak
              </Text>
              <div className="flex gap-5">
                <a
                  href="https://apps.apple.com/us/app/sejutacita/id1534169929"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/appsstore.svg"
                    width={180}
                    height={53}
                    className="cursor-pointer transform transition duration-500 hover:scale-95 m-20 rounded-lg"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=id.sejutacita"
                  target="_blank"
                  className="cursor-pointer"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/playstore.svg"
                    width={180}
                    height={53}
                    className="cursor-pointer transform transition duration-500 hover:scale-95 m-20 rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const categories = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`
  );
  const dataCategori = await categories.json();
  // Pass data to the page via props
  return { props: { dataCategori } };
}
