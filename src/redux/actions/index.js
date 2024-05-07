export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const MainSearch = (query) => {
  return async (dispatch, getState) => {
    console.log("QUESTO E IL GET STATE", getState());
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ ADD_TO_FAVOURITE, payload: { data } });
      } else {
        console.log("error");
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
