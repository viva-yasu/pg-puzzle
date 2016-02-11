module PalindromeNum
  def self.start
    num = 11
    loop do
      break if num.to_s == num.to_s.reverse && num.to_s(2) == num.to_s(2).reverse && num.to_s(8) == num.to_s(8).reverse
          num += 2
    end
    puts num
  end
end

PalindromeNum.start