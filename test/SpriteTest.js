import { expect } from 'chai';
import Sprite from '../src/Sprite';

describe('Sprite', () => {
  describe('Updating the position based on time and velocity', () => {
    it('Doesn\'t change the position if no time has elapsed', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 };
      expect(sprite.position).to.eql({ x: 0.0, y: 0.0});
      sprite.updatePosition(0.0);
      expect(sprite.position).to.eql({ x: 0.0, y: 0.0});        
    });
    
    it('Correctly increments the position for 1.0 elapsed seconds', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 };
      expect(sprite.position).to.eql({ x: 0.0, y: 0.0});
      sprite.updatePosition(1.0);
      expect(sprite.position).to.eql({ x: 1.0, y: 2.0});        
    });    
    it('Correctly increments the position with negative velocity components', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: -1.5, y: -3.5 };
      expect(sprite.position).to.eql({ x: 0.0, y: 0.0});
      sprite.updatePosition(0.5);
      expect(sprite.position).to.eql({ x: -0.75, y: -1.75});        
    });    
    it('Correctly increments the position with nonzero starting point', () => {
      const sprite = new Sprite();
      sprite.position = { x: 1.0, y: -3.2 };
      sprite.velocity = { x: -1.5, y: -3.5 };
      sprite.updatePosition(0.5);
      expect(sprite.position).to.eql({ x: 0.25, y: -4.95});
    });    
  });

    
  describe('Getting and setting properties', () => {
    it('sets the velocity if the argument is properly formatted', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 };
      expect(sprite.velocity).to.eql({ x: 1.0, y: 2.0 });
    });
    it('doesn\'t set the velocity if the argument contains invalid values', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, z: 2.0 };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });
    });
    it('doesn\'t set the velocity if the arguments are strings', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: "hello", y: "number" };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });      
    });
    
    it('sets the velocity if the argument is properly formatted', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 };
      expect(sprite.velocity).to.eql({ x: 1.0, y: 2.0 });
    });
    it('doesn\'t set the velocity if the argument contains invalid values', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, z: 2.0 };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });
    });
    it('doesn\'t set the velocity if the arguments are strings', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: "hello", y: "number" };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });      
    });    

    it('sets the rotation with valid arg', () => {
      const sprite = new Sprite();
      sprite.rotation = 90;
      expect(sprite.rotation).to.eql(90);            
    });
    it('doesn\'t set the rotation with string arg', () => {
      const sprite = new Sprite();
      sprite.rotation = "right angle";
      expect(sprite.rotation).to.eql(0.0);            
    });
    it('simplifies rotations above 360 degrees', () => {
      const sprite = new Sprite();
      sprite.rotation = 390;
      expect(sprite.rotation).to.eql(30);            
    });
    it('simplifies rotations above 720 degrees', () => {
      const sprite = new Sprite();
      sprite.rotation = 750;
      expect(sprite.rotation).to.eql(30);            
    });    
    it('simplifies rotations below 0 degrees', () => {
      const sprite = new Sprite();
      sprite.rotation = -90;
      expect(sprite.rotation).to.eql(270);            
    });
    it('simplifies rotations below -360 degrees', () => {
      const sprite = new Sprite();
      sprite.rotation = -420;
      expect(sprite.rotation).to.eql(300);            
    });

    
  });
  
  
  describe('Instantiation', () => {
    
    it('has default x and y coordinates', () => {
      const sprite = new Sprite();
      expect(sprite.velocity).to.not.be.undefined;
      expect(sprite.velocity.x).to.eql(0);
      expect(sprite.velocity.y).to.eql(0);      
    });    
    it('has default velocity', () => {
      const sprite = new Sprite();
      expect(sprite.velocity).to.not.be.undefined;
      expect(sprite.velocity.x).to.eql(0);
      expect(sprite.velocity.y).to.eql(0);      
    });
    it('has default rotation', () => {
      const sprite = new Sprite();
      expect(sprite.rotation).to.eql(0);      
    });    
  });
});
