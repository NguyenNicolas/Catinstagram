const container = document.querySelector(".image-container");
let miaou = 12;
const DogContainer = document.querySelector(".dog-container");
let wouaf = 12;

window.addEventListener("scroll", () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

	if (clientHeight + scrollTop >= scrollHeight - 20) {
		addStuff(3);
	}
});

function addStuff(nb) {
	for (let i = 0; i < nb; i++) {
		miaou++;
		const newItem = document.createElement("div");
		newItem.className = "cat";
		const newImg = document.createElement("img");
		newImg.src = `https://loremflickr.com/320/240?random=${miaou}`;
		newItem.appendChild(newImg);
		container.appendChild(newItem);
	}

	for (let l = 0; l < nb; l++) {
		wouaf++;
		const newItemDog = document.createElement("div");
		newItemDog.className = "dog";
		const newImgDog = document.createElement("img");
		newImgDog.src = `https://loremflickr.com/320/240/dog?random=${wouaf}`;
		newItemDog.appendChild(newImgDog);
		DogContainer.appendChild(newItemDog);
	}
}

// Onglets //

const onglets = document.querySelectorAll(".onglets");
let index = 0;

onglets.forEach(onglet => {
	onglet.addEventListener("click", () => {
		if (onglet.classList.contains("active")) {
			return;
		} else {
			onglet.classList.add("active");
			DogContainer.classList.toggle("visible");
			container.classList.toggle("hidden");
		}

		index = onglet.getAttribute("data-anim");

		for (i = 0; i < onglets.length; i++) {
			if (onglets[i].getAttribute("data-anim") != index) {
				onglets[i].classList.remove("active");
			}
		}
	});
});
