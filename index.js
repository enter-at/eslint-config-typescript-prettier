module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
    },
    env: {
        node: true,
        es6: true,
    },
    plugins: [
        "import",
        "prettier",
        "@typescript-eslint"
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    globals: {},
    rules: {
        // prettier
        "prettier/prettier": ["error"],
        // TypeScript
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false,
                },
            },
        ],
        // import
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                mjs: "never",
                ts: "never",
            },
        ],
        indent: ["error", 4],
        "no-useless-constructor": "off",
    },
    overrides: [
        {
            files: ["**/*.spec.ts", "test/**/*.ts"],
            env: {
                jest: true,
            },
            rules: {
                "import/named": "off",
                "import/no-extraneous-dependencies": "off",
                "max-classes-per-files": "off",
                "global-require": "off",
                "@typescript-eslint/no-var-requires": "off",
            },
        },
        {
            files: ["test/**/*.ts"],
            rules: {
                "no-param-reassign": "off",
            },
        },
    ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts", ".json"],
            },
        },
        "import/extensions": [".js", ".ts", ".mjs"],
    },
};
