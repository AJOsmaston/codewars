def persistence(num)
  count = 0
  loop do
    break if num.to_s.length == 1
    num = num.to_s.split('').map(&:to_i).inject(:*)
    p num
    count += 1
  end
  count
end