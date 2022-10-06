let jokes = [
["Про артиста","Грузинского артиста Геловани, всегда игравшего в кино Сталина, после XX съезда КПСС спросили:<br>— Что ты теперь делать будешь?<br>— Рву на себе волосы, — ответил Геловани.<br>— Хрущёва играть буду."],
["Про импортозамещение","Хрущёв вернулся из США в плохом настроении и жалуется Микояну:<br>— Кеннеди сказал, что у них есть машина, оживляющая мёртвых. Я взамен приврал, что у нас есть допинг, от которого человек бегает быстрее любого автомобиля. Где теперь его взять, этот допинг?<br>Микоян:<br>— Ничего, если они смогут оживить Сталина, ты побежишь быстрее любого автомобиля!"],
["Про будущее","Жена Брежнева вернулась с кладбища и говорит:<br>— До чего же могила Хрущёва загажена!.. Что будет с твоей могилой?<br>— Ничего. К тому времени гадить будет нечем."],
["Про советов","Ленин решил доказать, что государством может управлять любая кухарка.<br>Сталин решил доказать, что государством может управлять только он один.<br>Хрущёв решил доказать, что совершенно всё равно, кто управляет государством.<br>Брежнев решил доказать, что государством можно вообще не управлять."],
["Шаурма","Мужик нашел лампу, потер, пояыился джин. Мужик заказал у алладина, чтоб писька всегда росла. Он её переодически подрезал. Мужик постарел и умер, а писька то продолжила расти. Приходят на могилу в следующем году, а там ПИСЬКА. Решили мужика вниз писькой закопать, ну и закопали. Через пару лет в америке вздыбливается земля и власти открывают тендер на решение проблемы. Тендер выйграли армяне и поставили там шаурмечную."],
["Про время","— Как СССР будет жить без Хрущёва?<br>— По-брежнему."]];
const main = document.querySelector('wrapper');
main.innerHTML = "";
for (let i = 0;i!=jokes.lentgth-1;i++){
	const joke = document.createElement('div');
	joke.classList.add('anekdot');
	main.appendChild(joke);
	joke.innerHTML = `
	<p>${jokes[i][0]}</p>
	<div>${jokes[i][1]}</div>
	`;
}
