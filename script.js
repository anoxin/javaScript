const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let dayIndex = new Date().getDay() + 6;
if (dayIndex > 6) {
  dayIndex = dayIndex - 7;
}

  week[5] = '<i>' + week[5] + '</i>';
  week[6] = '<i>' + week[6] + '</i>';
  week[dayIndex] = '<strong>' + week[dayIndex] + '</strong>';


let elem = document.getElementById('days');
elem.innerHTML = week.join('<br>');
