export const formatBirthday = (date: string) => {
  const fullDate = new Date(date);
  let month = (fullDate.getMonth() + 1).toString();
  let day = fullDate.getDate().toString();
  let year = fullDate.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
      
  if (day.length < 2) {
    day = '0' + day;
  }

  return [day, month, year].join('-');
}
