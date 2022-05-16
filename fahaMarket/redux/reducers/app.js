const INITAL_STATE = {
   user:null
};

const app = (state, { type, payload }) => {
    if (typeof state === "undefined") {
      return { ...INITAL_STATE };
    }
    switch (type) {
        case "SET_USER":
            return {
                ...state,
                user: payload
            };
       
        default:
            return state;
    }
};

export default app;
