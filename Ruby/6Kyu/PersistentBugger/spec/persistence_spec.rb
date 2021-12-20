require 'persistence'

describe 'persistence' do
  it 'calculates for single digit' do
    expect(persistence(5)).to eq 5
  end

  it 'calculates for double digits' do
    expect(persistence(19)).to eq 9
  end

end