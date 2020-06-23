//Promises
const doSomethingPromises = () = new Promise((resolve, reject) => {
	setTimeout(function(){
		//did something
		resolve('First data');
	},
	1000);
});
const doOtherThingPromises = () = new Promise((resolve, reject) => {
	setTimeout(function(){
		//did something
		resolve('Second data');
	},
	1000);
});
//Realizando chamada dual function
Promises.all([doSomethingPromises,doSomethingPromises()]).then(() =>{
	console.log(data[0].split(''));
}).catch(err => {
	console.log('error',error);
})
//Tratamento de ERRO
doSomethingPromises()
	.then(data =>{		
	 	console.log(data.split(''));
		return doOtherThingPromises()})
	.then(data2 => console.log(data2.split('')))
	.catch(error => console.log('Ops' , error));

/**Pending - Pendente*/
/**Fulfilled - Caminho*/
/**Rejected - Rejeitado*/

//callbacks
function doSomething(callback){
	setTimeout(function(){
		//did something
		callback('First data');
	},
	1000);
}
function doOtherThing(callback){
	setTimeout(function(){
		did other thing
		callback('Second data');
	},
	1000);
}

function doAll(){
	try{
	doSomething(function(data){
		var processedData = data.split('');
		try{
		doOtherThing(function(data){
			var processedData2 = data2.split('');
			try{
			setTimeout(function(){
				console.log(processedData,processedData2);
			},
			1000);
		}catch(err){
			//handle error
		}
		});
	}catch(err){

}
	});
	}catch(err){
		//handle error
	}
}
doAll();