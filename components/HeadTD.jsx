import React from 'react';
import Head from 'next/head';

const HeadTD = ({ newTitle, newDesc }) => (
  <Head>
    <title>
      {newTitle
        ? `${newTitle} | Sejuta Cita Book's App`
        : `Sejuta Cita Book's App`}
    </title>
    <script
      async
      defer
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
    <meta
      name="description"
      content={
        newDesc
          ? `${newDesc}`
          : `This Official Sejuta Cita Book's App. You can read anything book's just visit this website`
      }
    />
  </Head>
);

export default HeadTD;
