def rot13(input)

  input_array = input.chars
  output_array = []

  input_array.map do |character|
    if character.match?(/[[:alpha:]]/)
      13.times do
        character = character.next()
        if character.length > 1
          character = character[1]
        end
      end
    end
    output_array.push(character)
  end

  output_array.join('')
end