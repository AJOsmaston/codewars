def persistence(num)
  num.to_s.split('').map(&:to_i).inject(:*)
end