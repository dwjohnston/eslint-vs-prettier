module.exports = {
    env: {
        browser: true,
        es2021: true,
    },

    //extends: ['airbnb-base', 'prettier'],
      extends: ['airbnb-base'],

    plugins: ['prettier'],

    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        //'prettier/prettier': 'warn',
         'prettier/prettier': 'off',
    },
};
