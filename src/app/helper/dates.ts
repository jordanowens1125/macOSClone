const getMonthDates = (date) => {
  const startDate = getStartDateOfTheWeekMonthStarts(date);
  const dates = [];
  let today = new Date();
  today.setHours(12, 0, 0, 0);
  let start = startDate;

  for (let i = 0; i < 42; i++) {
    start = new Date(startDate);
    start.setDate(start.getDate() + i);
    dates.push({
      month: start.getMonth(),
      date: start.getDate(),
      year: start.getFullYear(),
      day: start.getDay(),
      today: today.toDateString() === start.toDateString(),
      activeMonth: start.getMonth() === date.getMonth(),
    });
  }
  return dates;
};

const getLastMonthEndDate = (currentDate) => {
  const date = new Date(currentDate);
  date.setDate(0);
  date.setHours(12, 0, 0, 0);
  return date;
};

const getNextMonthDate = (currentDate) => {
  const date = new Date(currentDate);
  date.setMonth(date.getMonth() + 1, 1);
  date.setHours(12, 0, 0, 0);
  return date;
};

const getStartDateOfTheWeekMonthStarts = (currentDate) => {
  let today = new Date(currentDate);
  today.setFullYear(today.getFullYear(), today.getMonth(), 1); // 1 January, 14
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  function startOfWeek(date) {
    // Calculate the difference between the date's day of the month and its day of the week
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

    // Set the date to the start of the week by setting it to the calculated difference
    return new Date(date.setDate(diff));
  }

  return startOfWeek(firstDay);
};

export { getMonthDates, getLastMonthEndDate, getNextMonthDate };

const test = [
  {
    month: 0,
    date: 2,
    year: 0,
  },
];
