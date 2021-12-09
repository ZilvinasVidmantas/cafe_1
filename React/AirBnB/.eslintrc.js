module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        tabWidth: 2,
        useTabs: true,
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: true,
        arrowParens: 'always',
        jsxSingleQuote: false,
        semi: true,
        singleQuote: true,
        endOfLine: 'lf',
    }
};
