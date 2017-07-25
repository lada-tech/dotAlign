
import { expect } from 'chai';
import { Duck, DuckMission, mission } from '../ducks.js';


describe('Duck', function() {
  describe('getCoords', function() {
    it('should return current coordinates and heading', function() {
      let duck = new Duck('0 0 N');
      expect(duck.getCoords()).to.equal('0 0 N');
    });
  });
});
describe('DuckMission', function() {

  describe('makePTurn method', function() {
    it('should set correct duck heading', function() {
      const newMission = new DuckMission('3 3', '0 0 N');
      newMission.makePTurn();
      expect(newMission.duck.heading).to.equal('W');
    });
  });
  describe('moveOneStep method', function() {

    it('should change coordinate according to duck heading', function() {
      const newMission = new DuckMission('5 5', '0 0 N');
      newMission.moveOneStep();
      expect(newMission.duck.y).to.equal(1);
    });

  });
  describe('moveTheDuck method', function() {
    it('should change coordinates and heading according to instructions', function() {
      const newMission = new DuckMission('3 3', '0 0 N');
      expect(newMission.moveTheDuck('FFP')).to.equal('0 2 W');
    });
  });
});
describe('mission', function() {

  it('should return correct coordinates and heading for both ducks', function() {
      expect(mission('2 2', '0 0 N', 'FF', '1 1 E', 'FF')).to.equal('0 2 N\n3 1 E');
    });
});
