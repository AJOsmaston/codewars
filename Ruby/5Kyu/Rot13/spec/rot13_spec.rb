require 'rot13'

describe 'rot 13' do
  describe 'single character' do
    it 'works for a single character a' do
      expect(rot13('a')).to eq 'n'
    end
  
    it 'works for a single character z' do
      expect(rot13('z')).to eq 'm'
    end

    it 'works for a single uppercase character A' do
      expect(rot13('A')).to eq 'N'
    end

    it 'works for a single uppercase character A' do
      expect(rot13('Z')).to eq 'M'
    end
  end
  
  describe 'multiple characters' do
    it 'works for double character a' do
      expect(rot13('aa')).to eq 'nn'
    end
  end
end