const initialState = {
  profileToSwipe: {
    name: 'João da Silva',
    photo: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 25,
  },
  matches: [
    {
      name: 'Agostinho Carrara',
      photo: 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-922580-imagem-foto-1amazonas.jpg',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      age: 24,
    }, {
      name: 'José da Silva',
      photo: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      age: 23,
    }, {
      name: 'Paulo da Silva',
      photo: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      age: 22,
    }],
  currentSelectedProfile: {
    name: 'Marta da Silva',
    photo: 'http://blogs.correiobraziliense.com.br/elasnoataque/wp-content/uploads/sites/36/2019/06/marta-linda-550x652.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    age: 25,
  },
}
const profiles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_TO_SWIPE':
      return { ...state, profileToSwipe: action.payload.user }
    default:
      return state
  }
}

export default profiles
