//!Date object

let now = new Date();
console.log(now);

let hours = now.getHours();
console.log(hours);

let minutes = now.getMinutes();
console.log(minutes);

let seconds=now.getSeconds();
console.log(seconds)

let milliseconds=now.getSeconds();
console.log(seconds)

let month=now.getMonth();
console.log(month);//9 --oct means 10 but it start from 0 so it is 9

let day=now.getDay()
console.log(day);//2---tuesday for tuesday 2 it starts from sunday sunday is 0

let year=now.getFullYear();
console.log(year);//2024

let date=now.getDate();
console.log(date)

let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

console.log(days[day]);//tuesday

let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[month]);//october

console.log(now.toLocaleString());//10/1/2024, 12:35:18 PM
console.log(now.toISOString());//2024-10-01T07:05:27.782Z
console.log(now.toJSON());//2024-10-01T07:05:55.403Z

console.log(now.toDateString());//Tue Oct 01 2024
console.log(now.toTimeString());//12:37:03 GMT+0530 (India Standard Time)

console.log(now.toLocaleDateString());//10/1/2024
console.log(now.toLocaleTimeString());//12:37:42 PM

console.log(`today is ${date} ${months[month] }${year} and this is ${days[day]}`);


