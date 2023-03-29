const spanOne = document.querySelector(".one");
const spanTwo = document.querySelector(".two");
const result = document.querySelector(".result");
const convertBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");

const change = () => {
	if (converter.value == "") {
		swap();
	} else if (spanOne.textContent == "°C") {
		swap();
		farToCel();
	} else if (spanOne.textContent == "°F") {
		swap();
		celToFar();
	}
};

const celToFar = () => {
	let fahrenheit = (converter.value * 1.8 + 32).toFixed(1);
	result.textContent = `${converter.value}°C = ${fahrenheit} °F`;
};

const farToCel = () => {
	let celcius = ((converter.value - 32) / 1.8).toFixed(1);
	result.textContent = `${converter.value}°F = ${celcius} °C`;
};

const convert = () => {
	if (spanOne.textContent == "°C") {
		celToFar();
	} else {
		farToCel();
	}
};

const swap = () => {
	if (spanOne.textContent == "°C") {
		spanOne.textContent = "°F";
		spanTwo.textContent = "°C";
	} else {
		spanOne.textContent = "°C";
		spanTwo.textContent = "°F";
	}
};

const resetAll = () => {
	converter.value = "";
	result.textContent = "";
	spanOne.textContent = "°C";
	spanTwo.textContent = "°F";
};

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", resetAll);
changeBtn.addEventListener("click", change);
