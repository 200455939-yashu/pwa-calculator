


	//function that display value
	function dis(val)
	{
	 document.getElementById("result").value+=val
	}

	//function that evaluates the digit and return result
	function solve()
	{
	 let x = document.getElementById("result").value
	 let y = eval(x)
	 document.getElementById("result").value = y
	}

	//function that clear the display
	function clr()
	{
	 document.getElementById("result").value = ""
	}



// const showCoffees = () => {
//   let output = ""
//   coffees.forEach(
// 	({ name, image }) =>
// 	  (output += `
// 		<div class="card">
// 		<img class="card--avatar" src=${image} />
// 		<h1 class="card--title">${name}</h1>
// 		<a class="card--link" href="#">Taste</a>
// 		</div>
// 		`)
//   )
//   container.innerHTML = output
// }

// document.addEventListener("DOMContentLoaded", showCoffees)
