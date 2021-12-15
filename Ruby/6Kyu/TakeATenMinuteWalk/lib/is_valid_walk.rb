def is_valid_walk(directions)
  # guard clause to eliminate some straight away
  return false unless directions.length == 10
  
  scores = { 
    'x' => 0,
    'y' => 0,
  }
  # create copy of scores
  journey_score = scores.dup
  # score each direction
  directions.each do |letter|
    case letter
    when 'n'
      journey_score['y'] += 1
    when 's'
      journey_score['y'] -= 1
    when 'e'
      journey_score['x'] += 1
    when 'w'
      journey_score['x'] -= 1
    end 
  end
  # compare copy with original
  journey_score == scores
end
