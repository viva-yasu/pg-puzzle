var CustomCollatz = {
    collatzNumbers: [],
    start: function () {
        var i = 2;
        while (i <= 10000) {
            if (this.isReturnCollatz(i)) {
                this.collatzNumbers.push(i);
            }
            i += 2;
        }
        console.log(this.collatzNumbers.length);
    },
    isReturnCollatz: function (num) {
        var routes = [num];
        routes.push(this.firstCal(routes[routes.length - 1]));
        while (true) {
            var last_index = routes.length - 1;
            if (routes[last_index] == 1) {
                break;
            }
            routes.push(this.calCollatz(routes[last_index]));
        }
        routes.shift();
        return (routes.indexOf(num) != -1);
    },
    firstCal: function (num) {
        return num * 3 + 1;
    },
    calCollatz: function (num) {
        return (num % 2 == 0) ? num / 2 : num * 3 + 1;
    }
};

CustomCollatz.start();
