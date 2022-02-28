/*
 Create a Grub class, in pseudoclassical style, with:
      an age property that is set to 0
      a color property that is set to pink
      a food property that is set to jelly
      an eat method
*/

var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  console.log(this.food);
};