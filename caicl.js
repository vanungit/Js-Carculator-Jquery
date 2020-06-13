
var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    clearButs = document.querySelectorAll('.clear-btn'),
    decimelBtn = document.getElementById('decimel'),
    resultBt = document.getElementById('result'),
    howWorkBtn = document.getElementById('howWorkBtn'),
    display = document.getElementById('display'),
    memoryCurrentNUmber = 0,
    memoryNewNumber = false,
    memoryPandingOperation = '';

for (var i = 0; i < numbers.length; i++){
	var numberBut = numbers[i];
    numberBut.addEventListener('click', function(e){
    	numberPress(e.target.defaultValue);
    });	
} 
for (var i = 0; i < operations.length; i++){
	var operationBut = operations[i];
    operationBut.addEventListener('click', function(e){
         operation(e.target.defaultValue);
    });	
}  
for (var i = 0; i < clearButs.length; i++){
	var clearBut = clearButs[i];
    clearBut.addEventListener('click', function(e){
    	clear(e.srcElement.id);
    });	
}
   decimelBtn.addEventListener('click', decimal);

   resultBt.addEventListener('click', result);

   howWorkBtn.addEventListener('click', howWork);



function numberPress(cifra){
	if (memoryNewNumber) {
         display.value = cifra;
         memoryNewNumber = false;
	}else {
		if (display.value === '0') {
		display.value = cifra;
	}else {
			display.value += cifra;

	};
	};
	
    
};
function operation(op){
	var localOperationMemory = display.value;
     if (memoryNewNumber && memoryPandingOperation !== '=') {
     	display.value = memoryCurrentNUmber;
     }else {
     	memoryNewNumber = true;
     	if (memoryPandingOperation === '+') {
     		memoryCurrentNUmber += parseFloat( localOperationMemory);
     	}else if (memoryPandingOperation === '-') {
     		     		memoryCurrentNUmber -=  parseFloat(localOperationMemory);

     	}else if (memoryPandingOperation === '*') {
     		     		memoryCurrentNUmber *= parseFloat( localOperationMemory);

     	}else if (memoryPandingOperation === '/') {
     		     		memoryCurrentNUmber /= parseFloat( localOperationMemory);

     	}else {
     		memoryCurrentNUmber = parseFloat(localOperationMemory);
     	};
     	display.value = memoryCurrentNUmber;
     	memoryPandingOperation = op;
     };
     
};
function decimal(argument){
	var localDecimalMemory = display.value;
	if (memoryNewNumber) {
		localDecimalMemory = '0.';
		memoryNewNumber = false;
	}else {
		if (localDecimalMemory.indexOf('.') === -1) {
			localDecimalMemory += '.';
		};
	};
		display.value = localDecimalMemory;
};
function clear(id){
    if (true) {
       display.value = '0';
       memoryNewNumber = true;
    }else {
        display.value = '0';
       memoryNewNumber = true;
       memoryCurrentNUmber = 0,
        memoryPandingOperation = '';
    }
    console.log('clear knopka' +' ' + id + '');
};



function howWork(){
    console.log('mi najali na kak eto rabotayet');
};
