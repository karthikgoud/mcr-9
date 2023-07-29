import { createContext, useContext, useReducer } from "react";
import { categories } from "../constants/category";
import { videos } from "../constants/videos";

export const DataContext = createContext();

const initialState = {
  categoryData: categories,
  videos: videos,
  searchText: "",
  playList: [{ name: "music", videos: [] }],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_PLAYLIST":
      return { ...state, playList: [...state.playList, action.payload] };

    case "DELETE_NOTE":
      const delNote = state.videos.map((video) =>
        video._id == action.payload.videoId
          ? {
              ...video,
              noteList: video.noteList.filter(
                (note) => note.id !== action.payload.noteId
              ),
            }
          : video
      );
      return { ...state, videos: delNote };

    case "ADD_NOTE":
      const addNote = state.videos.map((video) =>
        video._id == action.payload.id
          ? video.noteList
            ? {
                ...video,
                noteList: [...video.noteList, action.payload.newNote],
              }
            : { ...video, noteList: [action.payload.newNote] }
          : video
      );
      return { ...state, videos: addNote };

    case "FILTER":
      return { ...state, searchText: action.payload };

    case "TOGGLE_WATCHLATER":
      const updateWatch = state.videos.map((video) =>
        video._id == action.payload
          ? video.watchList
            ? { ...video, watchList: false }
            : { ...video, watchList: true }
          : video
      );
      return { ...state, videos: updateWatch };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const getProductBySearch = (products, searchValue) => {
    const sortedProducts = products.filter((product) =>
      searchValue
        ? product.title.toLowerCase().includes(searchValue.toLowerCase())
        : product
    );
    return sortedProducts;
  };

  const filterSearch = getProductBySearch(data.videos, data.searchText);

  return (
    <DataContext.Provider value={{ data, dispatch, filterSearch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
