export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      // Set the payload data to local storage
      try {
        const serializedData = JSON.stringify(action.payload);
        // console.log(serializedData);

        localStorage.setItem("user", serializedData);
      } catch (error) {
        // Handle error
        console.log(error);
      }
      return action.payload;
    case "LOGOUT":
      localStorage.clear("user");
      return action.payload;

    case "REFRESH":
      return action.payload;

    default:
      return state;
  }
};
