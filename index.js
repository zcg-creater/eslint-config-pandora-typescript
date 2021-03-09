/*
 * http://eslint.org/docs/rules/
 */
module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'jsx-control-statements', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        'jsx-control-statements/jsx-control-statements': true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        project: './tsconfig.json',
    },
    rules: {
        "prettier/prettier": 1,
        "no-console": ["warn", { allow: ['warn', 'error'] }],
        "eqeqeq": ["warn", "always"],
        "radix": 0,
        "prefer-const": ["error", { "destructuring": "all", "ignoreReadBeforeAssign": true }],
        "no-underscore-dangle": 0,
        "no-plusplus": 0,
        "no-continue": 0,
        "no-useless-escape": 0,
        "no-lonely-if": 0,
        "consistent-return": 0,
        "class-methods-use-this": 0,
        "import/no-named-default": 0,
        "import/no-named-as-default": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        // 使用prettier缩进
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-triple-slash-reference": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/triple-slash-reference": ["error", { "path": "always", "types": "never", "lib": "never" }],
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/naming-convention": 0,
        // React相关校验规则
        "react/jsx-indent": [2, 4],
        "react/jsx-no-undef": [2, { allowGlobals: true }],
        "react/prop-types": 0,
        "react/jsx-no-target-blank": 0,
        "react/static-property-placement": 0,
        "react/require-default-props": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prefer-stateless-function": 0,
        "react/destructuring-assignment": 0,
        "react/no-array-index-key": 0,
        "react/forbid-prop-types": 0,
        "react/no-access-state-in-setstate": 0,
        "jsx-control-statements/jsx-use-if-tag": 0,
        "jsx-control-statements/jsx-jcs-no-undef": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/anchor-has-content": 0,

        // 暂时先关闭
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "func-names": 0,
        "no-param-reassign": 0,
        "max-classes-per-file": 0,
    }
};
