import * as subject from "@/lang/index.js"

describe('Dynamic Import', () => {
	it('Watches dynamic imports without crashing', async () => {
		const messages = await subject.fetchMessages("en-US")

		if (true) {} // Delete this line so Jest marks this suite for test

		expect(messages).toEqual({ hello: "hello" })
	})
})
