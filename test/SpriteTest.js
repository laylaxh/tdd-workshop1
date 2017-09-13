import { expect } from 'chai';
import Sprite from '../src/Sprite';

describe('Sprite', () => {
  describe('updating position', () => {
    it('doesn\'t change position if velocity is zero', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: 2.0 }
      sprite.velocity = { x: 0.0, y: 0.0 }
      sprite.updateSelf(1.0);
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });
      expect(sprite.position).to.eql({ x: 1.0, y: 2.0 });
    });
    it('doesn\'t change position if we don\'t pass an argument', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: 2.0 }
      sprite.velocity = { x: 0.0, y: 0.0 }
      sprite.updateSelf();
      expect(sprite.position).to.eql({ x: 1.0, y: 2.0 });
    });
    it('changes the position correctly for 1 second of time', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: 2.0 }
      sprite.velocity = { x: 1.0, y: 1.0 }
      sprite.updateSelf(1.0);
      expect(sprite.position).to.eql({ x: 2.0, y: 3.0 });
    });
    it('changes the position correctly for 0.5 seconds of time', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: 2.0 }
      sprite.velocity = { x: 1.0, y: 1.0 }
      sprite.updateSelf(0.5);
      expect(sprite.position).to.eql({ x: 1.5, y: 2.5 });
    });
    it('changes the position correctly for 0.5 seconds of time when velocities are negative', () => {
      const sprite = new Sprite();
      sprite.position = { x: 10.0, y: 15.0 }
      sprite.velocity = { x: -1.0, y: -2.0 }
      sprite.updateSelf(0.5);
      expect(sprite.position).to.eql({ x: 9.5, y: 14.0 });
    });
  });

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
