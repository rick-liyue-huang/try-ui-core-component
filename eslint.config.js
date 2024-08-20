import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            'react-refresh/only-export-components': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'no-undef': 'off',
            'unused-imports/no-unused-imports': 'off',
            'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope
            '@typescript-eslint/no-unused-vars': 'off', // Disable the unused variable rule
        },
    }
)
