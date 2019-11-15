// import './../src/main.js';
// import './../src/projectname.js';
import { fullDate } from './../src/projectname.js';
// import { getDate } from './../src/projectname.js';

describe('Inputs', () => {

  test('should correctly create a date object with three inputs', () => {
    var userDate = new fullDate(28, 7, 1985);
    expect(userDate.day).toEqual(28);
    expect(userDate.month).toEqual(7);
    expect(userDate.year).toEqual(1985);
  });
  test('should correctly create a date string', () => {
    let date1 = new Date("1995, 18, December");
    // let date2 = date1.getDay();
    expect((date1).toString()).toEqual(1);
  });
  // test('should correctly create a number correlating to day of week', () => {
  //   var date1 = new Date('December 17, 1995 03:24:00');
  //   expect(date1.getDay()).toEqual(1);
  // });

});
