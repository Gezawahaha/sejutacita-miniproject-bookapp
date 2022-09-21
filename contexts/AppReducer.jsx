export const initialState = {
  favArray: [
    // {
    //   id: 11,
    //   title: 'How I Built This',
    //   category_id: 1,
    //   authors: ['Gay Raz'],
    //   cover_url:
    //     'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c3c7efc6-720a-4483-a3d4-f6847343cdc8.jpg',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commo',
    //   sections: [
    //     {
    //       title: 'Intro',
    //       content:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molesti',
    //     },
    //     {
    //       title: 'Identifying frightening',
    //       content:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum',
    //     },
    //     {
    //       title: 'Prior to approaching professional investors',
    //       content:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut',
    //     },
    //     {
    //       title: 'It is preferable',
    //       content:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam',
    //     },
    //     {
    //       title: 'When a company is facing a crisis',
    //       content:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo autem. Veri',
    //     },
    //     {
    //       title: 'Success is even more frightening',
    //       content:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusant',
    //     },
    //     {
    //       title: 'Final notes',
    //       content: 'Lorem ipsum dolor sit amet consectetur ',
    //     },
    //   ],
    //   audio_length: 11,
    // },
  ],
};

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favArray: payload.favArray,
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favArray: payload.favArray,
      };
    default:
      throw new Error('Nothing ');
  }
};

export default AppReducer;
