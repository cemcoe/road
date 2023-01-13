import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function utcFormat(utcString: string, format = "YYYY-MM-DD HH:mm:ss") {
  // "2022-12-21T03:42:40.365Z" => 2022-12-21 11:42:40
  return dayjs.utc(utcString).utcOffset(8).format(format);
}
