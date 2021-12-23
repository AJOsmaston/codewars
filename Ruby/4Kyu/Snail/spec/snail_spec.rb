require 'snail'

describe 'tests' do
  describe '0x0' do
    it 'calculates for 0x0' do
      expect(snail([[]])).to eq []
    end
  end

  describe '1x1' do
    it 'calculates for 1x1' do
      expect(snail([[1]])).to eq [1]
    end
  end

end