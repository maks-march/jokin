let jokes = [
["haha","HiHi"],
["haha","HiHi"]];
const main = document.querySelector('main');
main.innerHTML = '';
for (let i = 0;i!=jokes.lentgth-1;i++){
	const joke = document.createElement('div');
	joke.classList.add('joke');
	main.appendChild(joke);
	joke.innerHTML = `
	<p>${jokes[i][0]}</p>
	<div>${jokes[i][1]}</div>
	`;
}