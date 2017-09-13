import { expect } from 'chai';
import Sprite from '../src/Sprite';

describe('Sprite', () => {
  describe('setting attributes', () => {
    it('sets the position when the argument is valid', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: 2.0 }
      expect(sprite.position.x).to.eql(1.0);
      expect(sprite.position.y).to.eql(2.0);
    });
    it('doesn\'t set the position when the argument is a string', () => {
      const sprite = new Sprite();
      sprite.position = "hello";
      expect(sprite.position.x).to.eql(0.0);
      expect(sprite.position.y).to.eql(0.0);
    });
    it('doesn\'t set the position when the argument doesn\'t have the right values', () => {
      const sprite = new Sprite();
      sprite.position = { q: 1, z: 1};
      expect(sprite.position.x).to.eql(0.0);
      expect(sprite.position.y).to.eql(0.0);
    });
    it('sets the velocity when the argument is valid', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 }
      expect(sprite.velocity.x).to.eql(1.0);
      expect(sprite.velocity.y).to.eql(2.0);
    });
    it('doesn\'t set the velocity when the argument is a string', () => {
      const sprite = new Sprite();
      sprite.velocity = "hello";
      expect(sprite.velocity.x).to.eql(0.0);
      expect(sprite.velocity.y).to.eql(0.0);
    });
    it('doesn\'t set the velocity when the argument doesn\'t have the right values', () => {
      const sprite = new Sprite();
      sprite.velocity = { q: 1, z: 1};
      expect(sprite.velocity.x).to.eql(0.0);
      expect(sprite.velocity.y).to.eql(0.0);
    });
    it('doesn\'t set the velocity when the arguments aren\'t number', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1, y: "hello"};
      expect(sprite.velocity.x).to.eql(0.0);
      expect(sprite.velocity.y).to.eql(0.0);
    });
    it('sets the rotation when the argument is valid', () => {
      const sprite = new Sprite();
      sprite.rotation = 3.5;
      expect(sprite.rotation).to.eql(3.5);
    });
    it('doesn\'t set the rotation when the argument is in valid', () => {
      const sprite = new Sprite();
      sprite.rotation = "hello";
      expect(sprite.rotation).to.eql(0.0);
    });
  });

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
