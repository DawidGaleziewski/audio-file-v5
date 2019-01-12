	let table = document.querySelector("table")
	let tableRowsArray = [];
	let buttonBluePrint = table.querySelector("button");

	function addTableRows(numberOfCopies){
		for(let i = 0; i < numberOfCopies; i++){
			addSingleRow(i);
		}
	}

	function addSingleRow(x){
		x = x + 2;
		table.insertRow(x);
		let row = table.querySelectorAll("tr")[x];
		row.insertCell(0);
		row.insertCell(1);
		row.insertCell(2);
		let playRow = row.querySelectorAll("td")[2];
		let clone = buttonBluePrint.cloneNode(true);
		playRow.appendChild(clone)
	}

	addTableRows(Number(localStorage.getItem("rememberCheckedValueLocalStorage")) -1);