const initialState = {
  currentPage: "ProfileScreen",
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return { currentPage: action.payload.newPage }
    default:
      return state;
  }
}
