// year             	"numeric"	            2026
// 	                    "2-digit"	            26
// month	            "numeric"	            10
//                  	"2-digit"	            10
//                  	"long"	                October
//                  	"short"                	Oct
//                  	"narrow"	            O
// day	                "numeric"	            2
//                  	"2-digit"	            02
// weekday	            "long"	                Friday
//                  	"short"	                Fri
//                  	"narrow"	            F
// hour	                "numeric"	            8
// 	                    "2-digit"	            08
// minute	            "numeric"	            05
//                  	"2-digit"	            05
// second	            "numeric"	            09
//                  	"2-digit"	            09
// hour12	            true	                8:05 PM
// 	                    false	                20:05
// timeZone	            "UTC"	                17:05
// 	                    "Europe/Athens"	        20:05
// 	                    "America/New_York"	    13:05
// timeZoneName	         "short"	            GMT+3
// 	                    "long"	                Eastern European Summer Time

const zones = ['America/St_Johns', 'Asia/Kolkata', 'UTC', 'Pacific/Auckland'];

function dateFormatter(zone) {
const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: zone,
    //America/St_Johns, Asia/Kolkata, UTC, Pacific/Auckland
    timeZoneName: 'shortOffset'
}).formatToParts(new Date());
return formatter;
}

// zones.forEach(zone => {
//     const offset = dateFormatter(zone).filter(({type}) => type === 'timeZoneName').map(({value}) => value)[0].replace('GMT', '');
//     let offsetHour = offset.split(':')[0];
//     let offsetMin = offset.split(':')[1];
//     offsetMin = offsetMin ? `:${offsetMin}` : '';
//     // console.log(`${offsetHour}${offsetMin}`);
// })



zones.forEach(zone => {
    // const offset = dateFormatter(zone).filter(({type}) => type === 'timeZoneName').map(({value}) => value)[0].split('T')[1];
    const offset = dateFormatter(zone).filter(({type}) => type === 'timeZoneName').map(({value}) => value)[0];
    offset.length
    console.log(offset);
})















// const offset = formatter.find(({type}) => type === 'timeZoneName').value.replace('GMT', '');
// let offsetHour;
// let offsetMin;
// const offset = formatter.filter(({type}) => type === 'timeZoneName').map(({value}) => value)[0].slice(3);

// if (offset.length <= 3) {
//     offsetHour = Number(offset.padStart(2, '0'));
//     offsetHour = offsetHour >= 0 ? `+${offsetHour}` : `${offsetHour}` ;
//     offsetMin = '';
// } else if (offset.length === 5){
//     offsetHour = Number(offset.split(':')[0].padStart(2, '0'));
//     offsetHour = offsetHour >= 0 ? `+${offsetHour}` : `${offsetHour}` ;
//     offsetMin = `:${Number(offset.split(':')[1])}`;
// }
// console.log(`(${offsetHour}${offsetMin})`)








// If you parse the result into numbers later, plan for three shapes: empty (zero offset), whole hours (“+3”), and hours with minutes (“+5:30”). Testing with Asia/Kolkata, UTC, America/St_Johns and Pacific/Auckland covers all of them.

// =========practice============

// const format = new Intl.DateTimeFormat('en-US', {
    //   hour: '2-digit',
    //   minute: '2-digit', 
    //   second: '2-digit',
    //   hour12: 'true'
    // }).format(date);
    

// function dateFormatter (zone) {
//     const now = new Date();

//         const formatterZone = Intl.DateTimeFormat('en-US', {
//             hour: '2-digit', 
//             minute: '2-digit', 
//             second: '2-digit',
//             timeZone: zone,
//             timeZoneName: 'shortOffset'
//         }).formatToParts(now);

//         let timeVl = formatterZone.filter(({type}) => ['hour', 'minute', 'second'].includes(type))
//         .map(({value}) => value)
//         .join(':');

//         let periodVl = formatterZone.find(({type}) => type === 'dayPeriod')?.value;

//         return ({timeVl, periodVl})
// }

// console.log(dateFormatter('America/Rio_Branco').timeVl);

// console:
// [
//   { type: 'hour', value: '11' },
//   { type: 'literal', value: ':' },
//   { type: 'minute', value: '47' },
//   { type: 'literal', value: ':' },
//   { type: 'second', value: '10' },
//   { type: 'literal', value: ' ' },
//   { type: 'dayPeriod', value: 'AM' }
// ]

// hour       = "11"
// separator  = ":"
// minute     = "47" etc. for sec
// space      = " "
// dayPeriod  = "AM"

// const time = parts.filter(({type}) => ['hour', 'minute', 'second']).map(({value}))

// console.log(`time: ${time}`);



