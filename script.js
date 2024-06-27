let endOfThePage = 0;
let preloading = false;
let showPreloader = () => {
	let preloader = document.getElementById('preloader');
	console.log(`showPreloader()`);
	preloader.style.display = 'block';
};
let hidePreloader = () => {
	let preloader = document.getElementById('preloader');
	console.log(`hidePreloader()`);
	preloader.style.display = 'none';
};
const getData = () => {
	if (!preloading) {
		preloading = true;
		fetch(' https://akademia108.pl/api/ajax/get-users.php')
			.then((response) => response.json())
			.then((data) => {
				let body = document.body;
				let hr = document.createElement('hr');
				body.appendChild(hr);

				for (const user of data) {
					let pId = document.createElement('p');
					let pName = document.createElement('p');
					let pWebsite = document.createElement('p');

					pId.innerText = `User ID ${user.id}`;
					pName.innerText = `User Name ${user.name}`;
					pWebsite.innerText = `User url ${user.website}`;

					body.appendChild(pId);
					body.appendChild(pName);
					body.appendChild(pWebsite);
				}
				preloading = false;
				hidePreloader();
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}
};

const scrollToEndPage = () => {
	let d = document.documentElement;
	let scrollHeight = d.scrollHeight;
	let scrollTop = d.scrollTop;
	let clientHeight = d.clientHeight;
	let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);
	console.log(`scrollHeight ${scrollHeight}`);
	console.log(`scrollTop ${scrollTop}`);
	console.log(`clientHeight ${clientHeight}`);

	console.log(`sumScrollTopClientHeight ${sumScrollTopClientHeight}`);

	if (sumScrollTopClientHeight >= scrollHeight) {
		endOfThePage += 1;
		console.log(`Scroled to the end od page ${endOfThePage}`);
		showPreloader();
		getData();
	}
};

window.addEventListener('scroll', scrollToEndPage);
