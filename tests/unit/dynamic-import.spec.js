import * as subject from "@/lang/index.js"

describe('Dynamic Import', () => {
	it('Watches dynamic imports without crashing', async () => {
		const messages = await subject.fetchMessages("en-US")

		expect(messages).toEqual({ hello: "hello" })
	})
})
