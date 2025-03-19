import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const handleTimeWithTimezone = dayjs;
handleTimeWithTimezone.extend(utc);
handleTimeWithTimezone.extend(timezone);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const delay500ms = () => new Promise((resolve) => setTimeout(resolve, 500));

const delay1s = () => new Promise((resolve) => setTimeout(resolve, 1000));

const handleTime = {
  handleTimeWithTimezone,
  delay,
  delay500ms,
  delay1s,
};

export default handleTime;
