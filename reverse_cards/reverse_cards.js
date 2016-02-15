var ReverseCards = {
    cards: [],
    initCards: function() {
        var cards = new Array(100);
        for (var i = 0; i < cards.length ; i++) {
            cards[i] = 'back';
        }
        this.cards = cards;
    },
    start: function() {
        this.initCards();
        for (var i = 2; i <= 100; i++) {
            var j = i - 1;
            while (j < this.cards.length) {
                this.cards[j] = this.toggleCard(this.cards[j]);
                j += i;
            }
        }
        var k = 0;
        while (k < this.cards.length) {
            if (this.cards[k] == 'back') {
                console.log(k + 1);
            }
            k++;
        }
    },
    toggleCard: function(card) {
        if (card == 'back') {
            return 'front';
        } else {
            return 'back';
        }
    }
};

ReverseCards.start();
