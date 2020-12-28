export const getDatesBetweenDates = (
  startDate: Date,
  endDate: Date,
): Date[] => {
  let dates = []
  //to avoid modifying the original date
  const theDate = new Date(startDate)
  while (theDate <= endDate) {
    dates = [...dates, new Date(theDate)]
    theDate.setDate(theDate.getDate() + 1)
  }
  return dates
}

export function range(start: number, end: number): number[] {
  return Array(end - start + 1)
    .fill(1)
    .map((_, idx) => start + idx)
}
