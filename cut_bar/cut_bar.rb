module CutBar
  def self.cut_bar(m, n, current)
    if current >= n
      0
    elsif current < m
      1 + cut_bar(m, n, current * 2)
    else
      1 + cut_bar(m, n, current + m)
    end
  end
end

puts CutBar.cut_bar(3, 20, 1)
puts CutBar.cut_bar(5, 100, 1)