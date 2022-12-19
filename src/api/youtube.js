export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  /* youtube videos 검색 */
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  /* channel 의 ImageURL 가져오기 */
  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  /* 해당 video와 연관된 videos 가져오기 */
  async relatedVideos(id){
    return this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        relatedToVideoId: id,
      },
    }).then((res)=> res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  /* keyword 를 이용한 videos 검색*/
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  /* 현재 인기있는 videos 검색 */
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
