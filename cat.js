function Cat(){
	this.stomach = [];
	this.name = 'abc';
}
Cat.prototype.eat = function (mouse){
	this.stomach.push(mouse);
}
