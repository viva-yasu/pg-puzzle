String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

var ReverseDate = {
    start: function() {
        var reverseDates = [];

        while (true) {
            var date = this.dateFormat(this.targetDate, 'YYYYmmdd');
            if (this.isReverseDate(date)) {
                reverseDates.push(date);
            }
            if (date == 20200724) {
                break;
            }
            this.nextDate();
        }
        console.log(reverseDates);

    },
    targetDate: new Date('1964/10/10'),
    dateFormat: function (date, format) {
        var result = format;
        for (var key in this.fmt)
            result = result.replace(key, this.fmt[key](date));
        return parseInt(result);
    },
    fmt : {
        dd: function (date) {
            return ('0' + date.getDate()).slice(-2);
        },
        YYYY: function (date) {
            return date.getFullYear() + '';
        },
        mm: function (date) {
            return ('0' + (date.getMonth() + 1)).slice(-2);
        }
    },
    nextDate: function () {
        this.targetDate.setDate(this.targetDate.getDate() + 1);
    },
    isReverseDate: function(date) {
        return date == parseInt(date.toString(2).reverse(), 2);
    }
};

ReverseDate.start();
