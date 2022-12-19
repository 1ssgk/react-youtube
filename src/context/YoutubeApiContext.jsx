import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();
/* youtube api 일일 사용량 제한이 있어서
   목데어터용으로 FakeYoutubeClient 를 사용해서 확인해도 됨. */
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvedier({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
