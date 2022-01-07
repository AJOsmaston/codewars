require 'rot13'

describe 'rot 13' do
  it 'runs the test' do
    expect(rot13('a')).to eq 'n'
  end
end