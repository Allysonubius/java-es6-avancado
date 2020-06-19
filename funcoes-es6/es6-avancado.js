var soma = function(a, b) {
    return a + b;
};

console.log(soma(5, 5))

// Arrow functions 

var sum  = (a,b) => a + b
console.log('SOMA:'+soma(2,2))

// Funcao construtora

function Car(){
	this.foo = 'bar';
}

console.log(new Car());

// Conjunto e objetos

var obj = {
	showContext: function(){
		console.log(this);
	},
	log: function log(value){
		console.log(value);
	}
};

console.log(obj.showContext())