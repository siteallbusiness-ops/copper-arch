export const HOURS_ROWS = [
  ['Monday', 'Closed'],
  ['Tuesday–Wednesday', '11:00–22:00'],
  ['Thursday–Saturday', '11:00–23:00'],
  ['Sunday', '10:00–21:00'],
];

export const HOURS_NOTE =
  'Last kitchen fire goes out thirty minutes before close. Reservations after 18:00 on weekends.';

export function isTodayHoursRow(dayLabel) {
  const today = new Date().getDay();
  const dayMap = {
    Monday: [1],
    'Tuesday–Wednesday': [2, 3],
    'Thursday–Saturday': [4, 5, 6],
    Sunday: [0],
  };
  return dayMap[dayLabel]?.includes(today) ?? false;
}
