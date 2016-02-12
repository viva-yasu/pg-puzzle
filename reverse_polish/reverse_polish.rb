module ReversePolish
  def self.start
    operator = ["*", ""]
    (1000..9999).each do |n|
      str_num = n.to_s
      operator.each do |i|
        operator.each do |j|
          operator.each do |k|
            str = "#{str_num[0]}#{i}#{str_num[1]}#{j}#{str_num[2]}#{k}#{str_num[3]}"
            next if str =~ /\*0/
            result = eval(str)
            puts "#{str_num} → #{str} = #{result}" if result == str_num.reverse.to_i && str.length > 4
          end
        end
      end
    end
  end
end

ReversePolish.start
