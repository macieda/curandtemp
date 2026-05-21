const express = require('express');
const app = express();
const port = 3000;

app.get('/waluta/:amount/:a/:b', (req, res) => {
	const { amount, a, b } = req.params;
	let bAmount = 0;
	if(a == "PLN" && b == "EUR") {
		bAmount = amount / 4.3;
	} else if(a == "PLN" && b == "USD") {
		bAmount = amount / 4;
	} else {
		res.send("Nieobsługiwana waluta")
		return;
	}
	res.send(`<h1>🪙 Przelicznik walut</h1>
		${amount} ${a} = ${(Math.round(bAmount * 100) / 100)} ${b}
		`);
});

app.get('/temp/:amount/:a', (req, res) => {
	const { amount, a } = req.params;
	let bAmount = 0;
	if(a == "F") {
		bAmount = (amount - 32) / 1.8;
	} else if(a == "C") {
		bAmount = (amount * 1.8) + 32;
	} else {
		res.send("Nieobsługiwana jednostka")
		return;
	}
	res.send(`<h1>🌡️ Przelicznik temperatur</h1>
		${amount}${a} = ${(Math.round(bAmount * 10) / 10)}${a == "C" ? "F" : "C"}
		`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

