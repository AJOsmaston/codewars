def is_valid_walk(directions)
  return false unless directions.length == 10

  scores = { 
    'x' => 0,
    'y' => 0,
  }

  directions.each do |letter|
    case letter
    when 'n'
      scores['y'] += 1
    when 's'
      scores['y'] -= 1
    when 'e'
      scores['x'] += 1
    when 'w'
      scores['x'] -= 1
    end 
  end

  scores['x'] == 0 && scores['y'] == 0 ? true : false

end
