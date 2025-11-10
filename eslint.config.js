import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import preact from "eslint-config-preact"
import ts from 'typescript-eslint';

export default defineConfig(
	{ignores: ["./dist/**/*"]},
	{
		rules: {
			"sort-imports": ["error", { ignoreCase: true }]
		}
	},
	preact,
	js.configs.recommended,
	ts.configs.recommended,
);
