def snail(array)
  n = array.length

  #guard statement for 0x0
  top = array[0]
  return top if n == 1

  #guard statement for 1x1
  bottom = array[n-1].reverse()
  return top + bottom if n == 2
  
  #remove bottom, then top row of outer layer of shell
  array.delete_at(n-1)
  array.delete_at(0)

  #store and remove right hand side of outer layer of shell
  right_side = array.map do |inner_array| 
    inner_array[n-1]
    inner_array.delete_at(n-1)
  end

  #store and remove left hand side of outer layer of shell
  left_side = array.map do |inner_array| 
    inner_array[0]
    inner_array.delete_at(0)
  end

  #work way round shell, then work on next layer recursively
  return top + right_side + bottom + left_side + snail(array)
end