const dateUtil = {
    formatDate(inputFormat, separator) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        const d = new Date(inputFormat);
        if(inputFormat){
            return [ pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear() ].join(separator);        
        }
        else{
            return null;
        }
    },
    
    postDateFormat(inputFormat, separator) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        const d = new Date(inputFormat);
        if(inputFormat){
            return [ d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate()) ].join(separator);        
        }
        else{
            return null;
        }
    },
    getLocalTime(seconds){
        const dateWithUTC = new Date(seconds * 1000);
        return Date.UTC(
            dateWithUTC.getFullYear(),
            dateWithUTC.getMonth(), 
            dateWithUTC.getDate(),
            dateWithUTC.getHours(),
            dateWithUTC.getMinutes(),
            dateWithUTC.getSeconds());
    },
    isValidDate(date){
        const datePattern = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
        if(datePattern.test(date)){
            return true;
        } else {            
            return false;
        }
    }
};
export default dateUtil;

// var d = new Date(inputFormat);
// return [d.toLocaleDateString()].join(separator);