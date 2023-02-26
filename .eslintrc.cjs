module.exports = {
  globals: {
    module: true,
  },
  extends: [
    // add more generic rule sets here, such as:
    'eslint:recommended',
    'plugin:svelte/recommended',
    // 'plugin:astro/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    //    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  plugins: ['@typescript-eslint'],
  root: true,
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    /* {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Enable this plugin
      plugins: ['astro'],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      rules: {
        // Enable recommended rules
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    }, */
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'svelte/rule-name': 'error'
  },
}
