const { sum } = require('./intro')
//dowload jest types module in devDependencies
//npm i -D @types/jest

describe('Sum function:', () => {
	test('sholud return sum of two values', () => {
		expect(sum(1, 3)).toBe(4)
		expect(sum(1, 3)).toEqual(4)
	})

	test('should return value correctly comparing to other', () => {
		expect(sum(2, 3)).toBeGreaterThan(4)
		expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
		expect(sum(2, 3)).toBeLessThanOrEqual(5)
		expect(sum(2, 3)).toBeLessThanOrEqual(6)
	})

	test('should be sum 2 float values correctly', () => {
		expect(sum(0.1, 0.2)).toBe(0.3)
		//fail because 0.3 in js is 0.300000000000004
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
	})
})

describe('Native null function:', () => {
	test('should return false value when null', () => {
		expect(nativeNull()).toBe(null)
		expect(nativeNull()).toBeNull()
		expect(nativeNull()).toBeFalsy() // undefined, null, 0, ''
		expect(nativeNull()).toBeDefined()
		expect(nativeNull()).not.toBeTruthy()
		expect(nativeNull()).not.toBeUndefined()
	})
})

