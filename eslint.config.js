import { defineConfig } from "eslint/config";
import preact from "eslint-config-preact"
import js from "@eslint/js";
import ts from 'typescript-eslint';

export default defineConfig(
	{
		ignores: ["dist/**/*"]
	},
	preact,
	js.configs.recommended,
	ts.configs.recommended,
	
);
