def snail(array)
  return array[0] if array.length == 1

  array[0] + array[1].reverse()
end