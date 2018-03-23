/*
Krista Froiseth
Pixel Art Maker - This web app allows users to draw pixel art on a customizable canvas
*/

/**
 *@description  for clearing canvas
 **/
$(document).ready(function() {
	//hide on load until user makes grid
	$('#clearCanvas').hide();
	
	//when user submits grid sizes, add event listener to the button and make it visible
	$('#submit').click(function(){
		const clearBtn = document.getElementById('clearCanvas');
		clearBtn.addEventListener("click", clear);
		$('#clearCanvas').show();
	})
});

	
/**
 *@description call makeGrid function when user input is submitted
 **/
$('#sizePicker').submit(function makeGrid(event){

	//prevent page from reloading when form is submitted
	event.preventDefault();

	//remove previous table data if submit button is clicked
	$('table tr').remove();

	//create variables for # of rows & columns
	const rows = $('#inputHeight').val();
	const cols = $('#inputWidth').val();


	//dynamically generate table from user input
	for(let i = 0; i < rows; i++){
		$('table').append("<tr></tr>");
		for(let j = 0 ; j < cols; j++){
			let cell = document.createElement("td");
			//add event listener to each td element as it is created
			cell.addEventListener("click", colorIn);
			//add the the row
			$('tr:last').append(cell);
		}
	}

});


/**
 *@description change background color of clicked cells
**/
function colorIn(){
	//select color from user input
	let color = $('#colorPicker').val();
	this.style.backgroundColor = color;
}

/**
 *@description clear canvas by making all cells white when clear button is clicked
 **/
function clear(){
	let white = "#ffffff";
	let table = document.getElementById('pixelCanvas');
	let tr = table.getElementsByTagName("tr");
	let td = null;
	
	//iterate through each cell in each row to change background color to white
	for(let x = 0; x < tr.length; x++){
		td = tr[x].getElementsByTagName("td");
		for(let y = 0; y < td.length; y++){
			td[y].style.backgroundColor = white;
		}
	}
}
	
	
