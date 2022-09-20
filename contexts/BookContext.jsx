import { createContext, useState, useEffect } from 'react';

const BookContext = createContext();

function getInitialState() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [{ id: 1 }, { id: 2 }];
}

const BookProvider = ({ children }) => {
  const [bookFav, setbookFav] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('bookFav', JSON.stringify(bookFav));
  }, [bookFav]);

  return (
    <BookContext.Provider value={(bookFav, setbookFav)}>
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider, BookContext };

// const BookProvider = ({ childern }) => {
//   const [books, setBook] = useState([]);

//   const refreshBooks = async () => {
//     try {
//       const res = await fetch('api/getBooks');
//       const latestBooks = await res.json();
//       setBook(latestBooks);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const addBooks = async (id) => {
//     try {
//       const res = await fetch('api/createBooks', {
//         method: 'POST',
//         body: JSON.stringify({ id }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const newBooks = await res.json();
//       setBook((prevBooks) => [newBooks, prevBooks]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteBooks = async (id) => {
//     try {
//       await fetch('api/deleteBooks', {
//         method: 'Delete',
//         body: JSON.stringify({ id }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       setBook((prevBooks) => prevBooks.filter((book) => book.id === id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <BookContext.Provider
//       value={{
//         books,
//         setBook,
//         refreshBooks,
//         deleteBooks,
//         addBooks,
//       }}
//     >
//       {childern}
//     </BookContext.Provider>
//   );
// };

// export { BookProvider, BookContext };
