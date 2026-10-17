//const meeting = Temporal.ZonedDateTime.from({
//   year: 2026,
//   month: 1,                 // January = 1, not 0
//   day: 15,
//   hour: 9,
//   minute: 30,
//   timeZone: "Europe/Athens",
// });

// console.log(meeting.toString());


// 2026-01-15T09:30:00+02:00[Europe/Athens]
// const meeting = Temporal.ZonedDateTime.from(
//   "2026-01-15T09:30+02:00[Europe/Athens]"
// );

// console.log(meeting.hour);       // 9
// console.log(meeting.month);      // 1
// console.log(meeting.timeZoneId); // Europe/Athens

// // Get the exact moment in UTC:
// console.log(meeting.toInstant().toString());
// // 2026-01-15T07:30:00Z

// // View that same moment in another time zone:
// const tokyo = meeting.withTimeZone("Asia/Tokyo");

// console.log(tokyo.toString());
// // 2026-01-15T16:30:00+09:00[Asia/Tokyo]

// // Create a later value:
// const later = meeting.add({ minutes: 45 });
// console.log(later.hour, later.minute); // 10 15

// ============Exercise=================

// Create July 10, 2026, at 18:45 in Athens, using an object.
// Given "2026-01-15T12:00[Europe/Athens]", predict its UTC time.
// Fix this input: "2026-01-15T09:30+02:00".
// Create January 15, 2026, in UTC without time fields. What will .hour return?
// If b = a.add({ hours: 2 }), does a change?

const meeting = Temporal.ZonedDateTime.from({
    year: 2026, 
    month: 7,
    day: 10,
    hour: 18, 
    minute: 45,
    timeZone: 'Europe/Athens'
});

console.log(meeting.toString()) //2026-07-10T18:45:00+03:00[Europe/Athens]

const tokyo = meeting.withTimeZone('Asia/Tokyo');
console.log(tokyo.toString());