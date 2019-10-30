const initialState = {
  name: "João da Silva",
  photo: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  age: 25,
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload.user;
    default:
      return state;
  }
}

export default currentUser;
