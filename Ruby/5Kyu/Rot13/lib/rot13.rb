def rot13(input)
  13.times do
    input = input.next()
    if input.length > 1
      input = input[1]
    end
  end
  input
end