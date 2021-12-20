require 'persistence'

describe 'persistence' do
  it 'calculates for single digits' do
    expect(persistence(5)).to eq 5
  end
end