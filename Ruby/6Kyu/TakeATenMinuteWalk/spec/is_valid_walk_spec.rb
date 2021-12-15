require 'is_valid_walk'

describe 'example' do
  describe 'returns false' do
    it 'returns false for no walk' do
      expect(is_valid_walk([])).to eq false
    end 
  end
end