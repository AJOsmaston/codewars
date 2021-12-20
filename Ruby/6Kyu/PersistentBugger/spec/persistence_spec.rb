require 'persistence'

describe 'persistence' do
  describe '0 step' do
    describe 'calculates for single digit' do
      it 'calculates for 5' do
        expect(persistence(5)).to eq 0
      end
  
      it 'calculates for 9' do
        expect(persistence(9)).to eq 0
      end

      it 'calculates for 4' do
        expect(persistence(4)).to eq 0
      end
    end
  end
  
  describe 'single step' do
    describe 'calculates for double digits' do
      it 'calculates for 19' do
        expect(persistence(19)).to eq 1
      end  
  
      it 'calculates for 14' do
        expect(persistence(14)).to eq 1
      end
    end
  end

  describe 'multiple step' do
    it 'calculates for 56' do
      expect(persistence(56)).to eq 2
    end

    it 'calculates for 999' do
      expect(persistence(999)).to eq 4
    end
  end
end
