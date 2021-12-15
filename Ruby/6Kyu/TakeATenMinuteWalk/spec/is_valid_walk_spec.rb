require 'is_valid_walk'

describe 'example' do
  describe 'returns false' do
    it 'returns false for no walk' do
      expect(is_valid_walk([])).to eq false
    end
  end

  describe 'returns true' do
    it 'returns true for back and forth' do
      expect(is_valid_walk(['n','s','n','s','n','s','n','s','n','s'])).to eq true
    end
  end
end