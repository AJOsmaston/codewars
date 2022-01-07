require 'rot13'

describe 'rot 13' do
  it 'works for a single character a' do
    expect(rot13('a')).to eq 'n'
  end

  it 'works for a single character z' do
    expect(rot13('z')).to eq 'm'
  end
end