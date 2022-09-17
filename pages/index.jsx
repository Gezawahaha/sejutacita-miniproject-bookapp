import { Heading } from '@chakra-ui/layout';
import Image from 'next/image';
import { HeadTD, Hero, Navbar } from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <HeadTD />
      <Navbar />
      <main className="max-w-[1100px] flex justify-center items-center m-auto">
        <section className="w-full">
          <Hero />
        </section>
      </main>
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading>Hello, Chakra UI & Tailwindcss</Heading>

          <section>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              repellendus esse debitis unde exercitationem fuga minima quis quod
              facilis illum nam, atque deserunt maiores accusantium totam magni
              laborum ab consectetur ratione rerum optio quam blanditiis.
              Consectetur accusantium aliquid blanditiis ipsa ad ab eos ducimus
              eius commodi sapiente? Maxime quis commodi eligendi sit earum amet
              omnis enim asperiores dolorem, facilis excepturi atque nobis
              explicabo a ad adipisci, at maiores vero assumenda placeat minima
              cum fuga magnam expedita! Necessitatibus recusandae excepturi
              facilis modi quaerat, ullam molestias qui provident, porro quasi
              non, ratione reprehenderit a incidunt similique dolores? Voluptas
              perspiciatis consectetur perferendis sint?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              repellendus esse debitis unde exercitationem fuga minima quis quod
              facilis illum nam, atque deserunt maiores accusantium totam magni
              laborum ab consectetur ratione rerum optio quam blanditiis.
              Consectetur accusantium aliquid blanditiis ipsa ad ab eos ducimus
              eius commodi sapiente? Maxime quis commodi eligendi sit earum amet
              omnis enim asperiores dolorem, facilis excepturi atque nobis
              explicabo a ad adipisci, at maiores vero assumenda placeat minima
              cum fuga magnam expedita! Necessitatibus recusandae excepturi
              facilis modi quaerat, ullam molestias qui provident, porro quasi
              non, ratione reprehenderit a incidunt similique dolores? Voluptas
              perspiciatis consectetur perferendis sint?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              repellendus esse debitis unde exercitationem fuga minima quis quod
              facilis illum nam, atque deserunt maiores accusantium totam magni
              laborum ab consectetur ratione rerum optio quam blanditiis.
              Consectetur accusantium aliquid blanditiis ipsa ad ab eos ducimus
              eius commodi sapiente? Maxime quis commodi eligendi sit earum amet
              omnis enim asperiores dolorem, facilis excepturi atque nobis
              explicabo a ad adipisci, at maiores vero assumenda placeat minima
              cum fuga magnam expedita! Necessitatibus recusandae excepturi
              facilis modi quaerat, ullam molestias qui provident, porro quasi
              non, ratione reprehenderit a incidunt similique dolores? Voluptas
              perspiciatis consectetur perferendis sint?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              repellendus esse debitis unde exercitationem fuga minima quis quod
              facilis illum nam, atque deserunt maiores accusantium totam magni
              laborum ab consectetur ratione rerum optio quam blanditiis.
              Consectetur accusantium aliquid blanditiis ipsa ad ab eos ducimus
              eius commodi sapiente? Maxime quis commodi eligendi sit earum amet
              omnis enim asperiores dolorem, facilis excepturi atque nobis
              explicabo a ad adipisci, at maiores vero assumenda placeat minima
              cum fuga magnam expedita! Necessitatibus recusandae excepturi
              facilis modi quaerat, ullam molestias qui provident, porro quasi
              non, ratione reprehenderit a incidunt similique dolores? Voluptas
              perspiciatis consectetur perferendis sint?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              repellendus esse debitis unde exercitationem fuga minima quis quod
              facilis illum nam, atque deserunt maiores accusantium totam magni
              laborum ab consectetur ratione rerum optio quam blanditiis.
              Consectetur accusantium aliquid blanditiis ipsa ad ab eos ducimus
              eius commodi sapiente? Maxime quis commodi eligendi sit earum amet
              omnis enim asperiores dolorem, facilis excepturi atque nobis
              explicabo a ad adipisci, at maiores vero assumenda placeat minima
              cum fuga magnam expedita! Necessitatibus recusandae excepturi
              facilis modi quaerat, ullam molestias qui provident, porro quasi
              non, ratione reprehenderit a incidunt similique dolores? Voluptas
              perspiciatis consectetur perferendis sint?
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
