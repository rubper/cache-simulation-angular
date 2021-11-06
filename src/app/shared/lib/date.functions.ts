export class DateFn {
  /**
   * Returns a string with the current date in ISO8601 format
   *
   * @returns {string} the current date in YYYY-MM-DD
   *
   */
  static getCurrentDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${date.getDate()}`;
  }

  /**
   * Returns the hour/minute/second from a date/time format.
   *
   * @remarks
   * This method accepts YYYY-MM-DDTHH:mm and HH:mm:ss formats
   *
   * @param {string} date - The date/time string to extract its hours
   * @param {string} pos - The value to extract: 0=Hours, 1=Minutes, 2=Seconds
   * @returns the hour from the string
   *
   */
  static getTimeValue(date: string, pos: number): number {
    const dateArray = date.split('T');
    if (dateArray.length < 1) {
      console.error('Incorrect date format');
      return 0;
    }
    let time = 0;
    try {
      if (dateArray.length > 1) {
        time = Number(dateArray.pop()?.split(':')[pos]);
      } else {
        let timeArray = dateArray[0].split(':');
        if (timeArray.length < 2) {
          console.error('Incorrect date format');
          return 0;
        }
        time = Number(timeArray[pos]);
      }
    } catch (e: any) {
      console.error('Incorrect date format');
      console.error(e);
    } finally {
      return time;
    }
  }

  /**
   * Returns the minutes from a date/time format.
   *
   * @remarks
   * This method accepts YYYY-MM-DDTHH:mm and HH:mm:ss formats
   *
   * @param {string} date - The date/time string to extract its minutes
   * @returns the minute from the string
   *
   */
  static getMinutes(date: string): number {
    const dateArray = date.split('T');
    let minutes = 0;
    if (dateArray.length > 1) {
      minutes = Number(dateArray.pop()?.split(':')[1]);
    } else {
      minutes = Number(dateArray[0].split(':')[1]);
    }
    return minutes;
  }

  /**
   * Returns the seconds from a date/time format.
   *
   * @remarks
   * This method accepts YYYY-MM-DDTHH:mm and HH:mm:ss formats
   *
   * @param {string} date - The date/time string to extract its seconds
   * @returns the seconds from the string
   *
   */
  static getSeconds(date: string): number {
    const dateArray = date.split('T');
    let seconds = 0;
    if (dateArray.length > 1) {
      seconds = Number(dateArray.pop()?.split(':')[2]);
    } else {
      seconds = Number(dateArray[0].split(':')[2]);
    }
    return seconds;
  }

  /**
   * Returns the difference between the times provided
   *
   * @param {string} startTime - the time value less than the end time
   * @param {string} endTime - the time value greater than the start time
   * @returns {number} the difference of the time in seconds
   *
   */
  static getDifference(startTime: string, endTime: string) {
    let startValue: number = 0;
    let endValue: number = 0;
    for (let i = 0; i < 2; i++) {
      startValue += DateFn.getTimeValue(startTime,i) * ( Math.pow(60, 2 - i)) ;
    }
    for (let j = 0; j < 2; j++) {
      endValue += DateFn.getTimeValue(endTime,j);
    }
    return endValue - startValue;
  }
}
