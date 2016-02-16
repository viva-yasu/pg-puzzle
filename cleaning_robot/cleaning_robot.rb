module Cleaning_robot
  N = 12

  def self.move(log)
    return 1 if log.size == N + 1

    count = 0

    [[0, 1], [0, -1], [1, 0], [-1, 0]].each do |d|
      next_pos = [log[-1][0] + d[0], log[-1][1] + d[1]]

      unless log.include?(next_pos)
        count += move(log + [next_pos])
      end
    end
    count
  end
end

puts move([[0, 0]])
