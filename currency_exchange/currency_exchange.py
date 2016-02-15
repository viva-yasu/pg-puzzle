def currency_exchange():
    count = 0
    for coin500 in range(0, 3):
        for coin100 in range(0, 11):
            for coin50 in range(0, 16):
                for coin10 in range(0, 16):
                    if coin500 + coin100 + coin50 + coin10 <= 15:
                        if coin500 * 500 + coin100 * 100 + coin50 * 50 + coin10 * 10 == 1000:
                            count += 1
    print count

currency_exchange()