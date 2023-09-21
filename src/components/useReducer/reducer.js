export const reducer = (state, action) => {
    if (action.type === "increment") {
      return {
        age: state.age + 1,
      };
    } else if (action.type === "decrement") {
      return {
        age: state.age - 1,
      };
    } else {
      throw Error("Unknown action.");
    }
  };