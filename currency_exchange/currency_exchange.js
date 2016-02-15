var CurrencyExchange = {
    count: 0,
    start: function() {
        for (var coin500 = 0; coin500 <= 2; coin500++) {
            for (var coin100 = 0; coin100 <= 10; coin100++) {
                for (var coin50 = 0; coin50 <= 15; coin50++) {
                    for (var coin10 = 0; coin10 <= 15; coin10++) {
                        if (coin500 + coin100 + coin50 + coin10 <= 15) {
                            if (coin500 * 500 + coin100 * 100 + coin50 * 50 + coin10 * 10 == 1000) {
                                this.count++;
                            }
                        }
                    }
                }
            }
        }
    }
};

CurrencyExchange.start();
console.log(CurrencyExchange.count);