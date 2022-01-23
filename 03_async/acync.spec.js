const Ajax = require('./async')
const axios = require('axios')

describe('Ajax: echo', () => {
	test('should return value async', async () => {
		const result = await Ajax.echo('some data')
		expect(result).toBe('some data')
	})

	test('should return value with promise', () => {
		return Ajax.echo('some data').then(data => {
			expect(data).toBe('some data')
		})
	})

	test('should catch error with promise', () => {
		return Ajax.echo('some data').catch(error => {
			expect(error).toBeInstanceOf(Error)
		})
	})

	test('should catch error with async', () => {
		try {
			await Ajax.echo()
		}
		catch (e) {
			expect(e.message).toBe("error")
		}
	})
})

describe('Ajax get:', () => {
	let responce
	let todos
	beforeEach(() => {
		todos = [
			{ id: 1, title: 'Todo 1', completed: false }
		]
		responce = {
			data: {
				todos
			}
		}
	})
	test('should return data from backend', () => {
		axios.get.mockReturnValue(responce)

		return Ajax.get().then(data => {
			expect(data.todos).toEqual(todos)
		})
	})
});
