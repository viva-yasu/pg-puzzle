require 'date'

module ReverseDate
  def self.start(from, to)
    reverse_dates = []
    target_dates = make_and_process_date(from, to)
    target_dates.each do |d|
      next if d.to_s[-1].to_i % 2 == 0
      reverse_dates << d if reverse_date?(d)
    end
    p reverse_dates
  end

  def self.make_and_process_date(from, to)
    date = Date.parse(from)..Date.parse(to)
    date = date.map{ |d| d.strftime('%Y%m%d').to_i}
  end

  def self.reverse_date?(target)
    target == target.to_s(2).reverse.to_i(2)
  end
end

ReverseDate.start('19641010', '20200724')
