{
    "plugins": [
        "typescript"
    ],
    "categories": {
        "correctness": "error",
        "suspicious": "warn",
        "perf": "warn"
    },
    "options": {
        "typeAware": true,
        "reportUnusedDisableDirectives": "warn",
    },
    "rules": {
        "no-console": "off",
        "consistent-return": "error",
        "eqeqeq": "error",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/ts-config-error": "warn",
        "no-alert": "error",
        "oxc/approx-constant": "error",
        "no-unused-vars": "error",
        "typescript/no-floating-promises": "error",
        "typescript/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                "allowWithDecorator": true
            }
        ],
        "typescript/no-unsafe-type-assertion": "warn",
        "typescript/consistent-return": "warn", // Change to error later
        "typescript/no-unnecessary-type-conversion": "warn", // Change to error later
        "typescript/no-useless-default-assignment": "warn", // Change to error later
        "typescript/no-unnecessary-type-parameters": "warn", // Change to error later
        "typescript/no-extraneous-class": [
            "error",
            {
                "allowWithDecorator": true
            },
        ],
        "eslint/no-console": "off",
        "eslint/no-debugger": "error",
        "eslint/no-unused-vars": "error",
        "eslint/eqeqeq": [
            "error",
            "always"
        ],
        "eslint/no-var": "error",
        "eslint/prefer-const": "error",
        "eslint/no-duplicate-imports": "error",
        "eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "unicorn/filename-case": [
            "error",
            {
                "case": "kebabCase",
                "ignore": [
                    "^README\\.md$",
                    "^CHANGELOG\\.md$",
                    "^LICENSE(\\.md)?$",
                    "^AGENTS\\.md$",
                    "^CLAUDE\\.md$"
                ]
            }
        ],
        "typescript/no-unnecessary-condition": "warn"
    },
    "ignorePatterns": [
        "node_modules",
        "dist",
        "_backup",
        ".nx",
        ".angular",
        ".github",
        "@prisma-types",
        "**/mockServiceWorker.js"
    ],
    "jsPlugins": [
        "@angular-eslint/eslint-plugin"
    ],
    "overrides": [{
        "files": [
            "*.spec.ts",
            "**/__mocks__/**/*.*",
            "*.spec.SKIP.ts",
            "*.stories.ts"
        ],
        "rules": {
            "typescript/no-floating-promises": "warn",
            "typescript/no-unsafe-type-assertion": "warn",
            "typescript/no-unsafe-assignment": "warn",
            "no-shadow": "warn"
        }
    }]
}
