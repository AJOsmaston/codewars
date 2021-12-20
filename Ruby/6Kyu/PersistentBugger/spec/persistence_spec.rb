require 'persistence'

describe 'persistence' do
  describe 'single step' do
    describe 'calculates for single digit' do
      it 'calculates for 5' do
        expect(persistence(5)).to eq 5
      end
  
      it 'calculates for 9' do
        expect(persistence(9)).to eq 9
      end
    end
  
    describe 'calculates for double digits' do
      it 'calculates for 19' do
        expect(persistence(19)).to eq 9
      end  
  
      it 'calculates for 14' do
        expect(persistence(14)).to eq 4
      end
    end
  end
  

end