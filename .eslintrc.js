module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 9,
    project: "./tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "react-hooks", "sort-imports-es6-autofix"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        // 通常のsort-importsではautofixが効かないパターンが多いため
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "React.FunctionComponent": {
            message: "Use React.FC instead",
            fixWith: "React.FC",
          },
          Array: null,
          Object: "Use {} instead",
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    node: {
      tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "react/self-closing-comp": 2,

        "react/react-in-jsx-scope": 0,
        "prefer-object-spread": "error",

        "@typescript-eslint/interface-name-prefix": [2, "never"],
        "no-console": 0,

        "no-case-declarations": 2,
        "react/no-unescaped-entities": 2,
        "no-undef": "off",
        "node/no-unsupported-features/es-syntax": 0,

        "no-dupe-class-members": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,

        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/prefer-namespace-keyword": 2,

        "@typescript-eslint/no-require-imports": 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/consistent-type-assertions": 2,
        "@typescript-eslint/no-unnecessary-type-assertion": 2,
        "@typescript-eslint/restrict-plus-operands": 2,

        // react-hooks
        "react-hooks/rules-of-hooks": "error",
        /**
         * @see https://overreacted.io/a-complete-guide-to-useeffect/
         * @see https://github.com/facebook/react/issues/14920#issuecomment-472018817
         */
        "react-hooks/exhaustive-deps": "warn",

        // react typescript
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": "off",
      },
    },
    {
      files: ["**/__tests__/**", "**/*.test.tsx", "**/*.test.ts"],
      env: {
        jest: true,
      },
      rules: {
        "no-invalid-this": 0,
      },
    },
  ],
};
