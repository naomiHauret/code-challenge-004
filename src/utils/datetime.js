import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
export function formatDatetime(datetime) {
  return dayjs().to(dayjs(datetime))
}
