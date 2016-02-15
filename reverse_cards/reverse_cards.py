def start():
    cards = ['back'] * 100
    for i in range(2, 101):
        j = i - 1

        while j < len(cards):
            cards[j] = toggle_card(cards[j])
            j += i

    print_back_cards(cards)

def print_back_cards(cards):
    for ind, card in enumerate(cards):
        if card == 'back':
            print ind + 1

def toggle_card(card):
    if (card == 'back'):
        return 'front'
    else:
        return 'back'

start()