let buttons_exp_ac_del_equals = document.querySelectorAll(".buttondisplayable");

let buttonsArray = Array.from(buttons_exp_ac_del_equals);

let text = document.querySelector("#text");

let strings = "";

buttonsArray.forEach(function (val) {
	val.addEventListener("click", function () {
		strings = strings.concat(val.innerText);
		text.value = strings;
	});
});

ac = document.querySelector("#AC");
del = document.querySelector("#DEL");

ac.addEventListener("click", function () {
	strings = "";
	text.value = strings;
});

del.addEventListener("click", function () {
	strings = strings.slice(0, strings.length - 1);
	text.value = strings;
});

equals = document.querySelector("#equals");

equals.addEventListener("click", function () {
	result = eval(strings);
	text.value = result;
});
