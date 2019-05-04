function Dog(name){
	this.stomach = [];
	this.name = name;
}

Dog.prototype.eat = fucntion(cat){
	this.stomach.push(cat);
};
Dog.prototype.sayHi = function(){
	console.log('Hi! I am  a dog. My name is '+ chalk.blue(this.name));
};

module.exports = Dog;