export const matchingDateIndex = (dateStrings) => {
  const format = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  const now = new Date().toLocaleString('en-US', format);
  dateStrings.findIndex(dateString => {
    const date = new Date(dateString).toLocaleString('en-US', format);
    return date === now;
  });

  return now
}

export function getFormattedDate(nowArg) {
  const now = nowArg ? new Date(nowArg) : new Date();
  const date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  return [`${date}`, `${time}`];
}


export function getDateIndex(times) {

  const now = new Date();
  const searchDate = now.toISOString().slice(0, 13);

  const index = times.findIndex(date => date.slice(0, 13) === searchDate);

  return index;
}

