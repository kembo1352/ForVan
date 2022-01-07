const countMoneyReducer = (state = 500, action) => {
  switch (action.type) {
    default:
      return state;
    case "Sell Player":
      return state + action.payload;
    case "Buy Player":
      return state - action.payload;
  }
};

export default countMoneyReducer;
