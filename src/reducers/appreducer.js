export default (
    state = { count: 0 },
    action,
  ) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
