module CurrencyExchange
  def self.start(target, coins, limit)
    pattern = []
    (2..limit).each do |i|
      coins.repeated_combination(i).each do |coin_set|
        pattern << coin_set if coin_set.inject(:+) == target
      end
    end
    puts pattern.length
    p pattern
  end
end

CurrencyExchange.start(1000, [10, 50, 100, 500], 15)
