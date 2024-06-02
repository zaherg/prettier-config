import { Config } from 'prettier';

/**
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md
 */

const config: Config = {
	trailingComma: 'all',
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSameLine: true,
	importOrder: [
		'^next.*$',
		'^hono.*$',
		'^@prisma/(.*)$',
		'<THIRD_PARTY_MODULES>',
		'^@src/(.*)$',
		'^@/src/(.*)$',
		'^@app/(.*)$',
		'^@/app/(.*)$',
		'^[./]',
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
	importOrderCaseInsensitive: false,
	htmlWhitespaceSensitivity: 'ignore',
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-prisma',
		'prettier-plugin-toml',
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: ['**/*.html'],
			options: {
				singleQuote: true,
			},
		},
	],
	tailwindConfig: './tailwind.config.js',
};

export = config;
