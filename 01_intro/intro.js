function expect(value) {
	return {
		toBe: exp => {
			if (value === exp) {
				console.log("success");
			}
			else {
				console.error(`Value is ${value}, but exectaion is ${exectaion}`);
			}
		}
	}
}

const sum = (a, b) => a + b

const nativeNull = () => null

module.exports = { sum, nativeNull }

// console.log('sum(41, 1) :>> ', sum(41, 1))

// expect(sum(41, 1)).toBe(42)

//download Jest in devDependencies
//npm i -D jest
