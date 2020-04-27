export async function fetchMessages(locale) {
	const module = await import(
		/*
			webpackChunkName: "lang/[request]",
			webpackExclude: /index/
		*/
		`@/lang/${locale}`
	)
	return module.default
}
