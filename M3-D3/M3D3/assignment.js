const image1 = (key) => {
	fetch("http://www.splashbase.co/api/v1/images/search?query=" + key, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((body) => {
			let images = body.images
			let i = 0
			console.log(images)
			
			})
}

window.onload = () => {
	makeModals()
}

const makeModals = () => {
	document.querySelectorAll("#deck .btn-grp").forEach((element) => {
		element.firstChild.setAttribute("data-toggle", "modal")
		element.firstChild.setAttribute("data-target", "#exampleModal")
	})
}

const viewclick = (index) => {
	document.querySelector("#modalImage").src = document.querySelectorAll("#deck .card-img-top")[index].src
	console.log(document.querySelectorAll("#deck .card-img-top")[index].src)
	document.querySelector("#modalImage").style = "width:250px"
}
