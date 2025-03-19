import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

const handleTimeWithTimezone = dayjs;
handleTimeWithTimezone.extend(utc);
handleTimeWithTimezone.extend(timezone);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const delay500ms = () => new Promise((resolve) => setTimeout(resolve, 500));

const delay1s = () => new Promise((resolve) => setTimeout(resolve, 1000));

function convertTimestampToDateTime(timestamp: string) {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JavaScript bắt đầu từ 0
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
}

function convertTimestampToDateTimeWithTimezone(
  timestamp: string | number,
  timeZone: string,
): string {
  return dayjs(Number(timestamp)).tz(timeZone).format('HH:mm DD/MM/YYYY');
}

const handleTime = {
  handleTimeWithTimezone,
  delay,
  delay500ms,
  delay1s,
  convertTimestampToDateTime,
  convertTimestampToDateTimeWithTimezone,
};

export default handleTime;
