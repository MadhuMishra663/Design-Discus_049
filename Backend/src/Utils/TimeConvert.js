const { formatInTimeZone } = require ('date-fns-tz')

const IndianTime = (date,format) =>{
    const convert = formatInTimeZone(date, 'Asia/Kolkata', format);
    return convert;
}

module.exports = {IndianTime}