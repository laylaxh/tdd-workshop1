import { expect } from 'chai';
import Sprite from '../src/Sprite';

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
