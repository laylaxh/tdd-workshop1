import { expect } from 'chai';
import Sprite from '../src/Sprite';

describe('Sprite', () => {
  describe('Setting Attributes', () => {
    it('sets the position', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: 2.0 }
      expect(sprite.position.x).to.eql(1.0);
      expect(sprite.position.y).to.eql(2.0);
    });
    it('sets the velocity', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 }
      expect(sprite.velocity.x).to.eql(1.0);
      expect(sprite.velocity.y).to.eql(2.0);
    });
    it('sets the rotation', () => {
      const sprite = new Sprite();
      sprite.rotation = 3.5;
      expect(sprite.rotation).to.eql(3.5);
    });

  });
});

describe('Sprite', () => {
  describe('Instantiation', () => {
    it('should create a new sprite with x and y coordinates that default to 0', () => {
      const sprite = new Sprite();
      expect(sprite.position.x).to.eql(0);
      expect(sprite.position.y).to.eql(0);
    });
    it('should create a new sprite with x and y velocity that default to 0', () => {
      const sprite = new Sprite();
      expect(sprite.velocity.x).to.eql(0);
      expect(sprite.velocity.y).to.eql(0);
    });
    it('should create a new sprite with rotation 0', () => {
      const sprite = new Sprite();
      expect(sprite.rotation).to.eql(0);
    });
  });
});
