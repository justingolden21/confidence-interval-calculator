
const calcCI = (z, s, n) =>  z*s/Math.sqrt(n);

window.onload = ()=> {
	document.getElementById('calc').onclick = ()=> {
		// validation
		const x = getVal('x');
		const z = getVal('z');
		const s = getVal('s');
		const n = getVal('n', true);

		const ans = calcCI(z, s, n);

		// round with toFixed
		document.getElementById('CI').innerText = `
			${z*100}% confidence interval: ${x} \u00B1 ${ans.toFixed(4)}
			(${(x-ans).toFixed(4)}, ${(x+ans).toFixed(4)})

			With ${z*100}% confidence, the mean is between ${(x-ans).toFixed(4)} and ${(x+ans).toFixed(4)} based on ${n} samples
		`;
	};
	document.getElementById('calc').click();
};

const getVal =(name, isInt=false)=> {
	let elm = document.getElementById(name);
	let val = isInt ? parseInt(elm.value) : parseFloat(elm.value);
	val = verify(val, elm.min, elm.max, elm.min, isInt);
	elm.value = val;
	return val;
};

const verify = (num, min, max, defaultVal, isInt)=> {
	num = isInt ? parseInt(num) : parseFloat(num);
	num = Math.max(Math.min(num,max),min);
	return isNaN(num) ? defaultVal : num;
};
