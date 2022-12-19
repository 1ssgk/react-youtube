import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

/* Date 관련 library timeago.js를 사용해서 만든 Function
   default language는 en_US
   lang 값이 있으면 전달 받아 사용
*/
export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
