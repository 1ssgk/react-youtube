API 정리

키워드 검색
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]

핫트렌드 비디오들
https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY]

연관된 비디오 검색
https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=[YOUR_API_KEY]

채널 상세내용
https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]



#useQuery 사용법
useQuery(고유 키, 함수)
키값은 배열로 다양하게 할당이 가능.
ex) useQuery(["videos", keyword], () => youtube.search(keyword));