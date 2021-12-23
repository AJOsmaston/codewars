require 'snail'

describe 'tests' do
  describe '0x0' do
    it 'calculates for 0x0' do
      expect(snail([[]])).to eq []
    end
  end

end