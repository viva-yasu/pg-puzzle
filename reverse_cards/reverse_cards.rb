module ReverseCards
  def self.start
    cards = Array.new(100, 'back')

    (2..100).each do |n|
      i = n - 1
      while i < cards.size
        cards[i] = toggle_card(cards[i])
        i += n
      end
    end
    p print_back_cards(cards)
  end

  def self.toggle_card(card_status)
    card_status == 'front' ? 'back' : 'front'
  end

  def self.print_back_cards(cards)
    back_indexes = []
    cards.each_with_index do |card, ind|
      back_indexes << ind + 1 if card == 'back'
    end
    back_indexes
  end
end

ReverseCards.start
