export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const monthNamesShortedLT = {
  0: 'saus.',
  1: 'vasar.',
  2: 'kov.',
  3: 'bal.',
  4: 'geg.',
  5: 'birž.',
  6: 'liep.',
  7: 'rugpj.',
  8: 'rugs.',
  9: 'spal.',
  10: 'lapkr.',
  11: 'gruod.',
}

export const formatDateRange = ([startDate, endDate]) => {
  const startMonthNumber = startDate.getMonth();
  const endtMonthNumber = endDate.getMonth();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  if(startMonthNumber === endtMonthNumber){
    const monthName = monthNamesShortedLT[startMonthNumber];
    return `${monthName} ${startDay}-${endDay}`;
  }
  const startMonthName = monthNamesShortedLT[startMonthNumber];
  const endMonthName = monthNamesShortedLT[endtMonthNumber];
  return `${startMonthName} ${startDay} - ${endMonthName} ${endDay}`;
}