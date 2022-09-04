export default function main() {
  //DATES ARE ALWAYS SAVED AND SHOWN BASE ON BROWSERS TIMEZONE, BUT ALWAYS STORED AS UTC

  //log raw date is shown as a UTC ISO String
  console.log(new Date()); //                    2022-09-02T10:39:21.716Z
  console.log(new Date().toISOString()); //      2022-09-02T10:39:21.716Z

  //created in local time
  console.log(new Date(2000, 12, 24, 23, 59, 59, 999)); //                    2001-01-25T05:59:59.999Z
  console.log(new Date(2000, 12, 24, 23, 59, 59, 999).toISOString()); //      2001-01-25T05:59:59.999Z
  console.log(new Date(2000, 12, 24, 23, 59, 59, 999).toUTCString()); //Thu, 25 Jan 2001 05:59:59 GMT

  //toString and toDateString is shown in local time
  console.log(new Date(2000, 12, 24, 23, 59, 59, 999).toString()); //    Wed Jan 24 2001 23:59:59 GMT-0600 (Central Standard Time)
  console.log(new Date(2000, 12, 24, 23, 59, 59, 999).toDateString()); //Wed Jan 24 2001

  //number of milliseconds since January 01, 1970, 00:00:00 UTC
  console.log(new Date(1000000000000)); //2001-09-09T01:46:40.000Z
  console.log(new Date(1500000000000)); //2017-07-14T02:40:00.000Z
  console.log(new Date(1650000000000)); //2022-04-15T05:20:00.000Z
  console.log(new Date(1672531200000)); //2023-01-01T00:00:00.000Z

  //saving without UTC indicator Z - shows as UTC - note 6 hour difference from saved date
  console.log(new Date('2023-01-01T00:00:00.000')); //      2023-01-01T06:00:00.000Z
  console.log(new Date('2023-01-01T00:00:00.000-06:00')); //2023-01-01T06:00:00.000Z
  console.log(new Date('January 1, 2023 00:00:00')); //     2023-01-01T06:00:00.000Z

  //saving with UTC indicator Z
  console.log(new Date('2023-01-01T00:00:00.000Z')); // 2023-01-01T00:00:00.000Z
  console.log(new Date('January 1, 2023 00:00:00Z')); //2023-01-01T00:00:00.000Z

  
}
