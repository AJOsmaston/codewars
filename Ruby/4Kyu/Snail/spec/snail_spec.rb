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

  describe '2x2' do
    it 'calculates for 2x2' do
      expect(
        snail([
          [1, 2],
          [3, 4]
        ])
      ).to eq [1, 2, 4, 3]
    end
  end

  describe '3x3' do
    it 'calculates for 3x3' do
      expect(
        snail([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ])
      ).to eq [1, 2, 3, 6, 9, 8, 7, 4, 5]
    end
  end


  describe '4x4' do
    it 'calculates for 4x4' do
      expect(
        snail([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
        ])
      ).to eq [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
    end
  end
end