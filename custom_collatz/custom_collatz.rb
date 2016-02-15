module CustomCollatz
  def self.start()
    return_numbers = []
    i = 2
    while i <= 10000
      return_numbers << i if return_collatz?(i)
      i += 2
    end

    puts return_numbers.length
  end

  def self.return_collatz?(num)
    routes = [num]
    routes << first_cal(num)
    while routes[-1] != 1
      routes << cal_collatz_num(routes[-1])
    end
    routes.shift
    routes.include?(num)
  end

  def self.first_cal(num)
    num * 3 + 1
  end

  def self.cal_collatz_num(num)
    if num % 2 == 0
      even(num)
    else
      odd(num)
    end
  end

  def self.odd(num)
    num * 3 + 1
  end

  def self.even(num)
    num / 2
  end
end

CustomCollatz.start