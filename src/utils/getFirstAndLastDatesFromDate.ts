function getFirstAndLastDatesFromDate(date: Date): [Date, Date] {
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return [first, last];
}

export { getFirstAndLastDatesFromDate };
