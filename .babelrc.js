module.exports = api => {
  api.cache(() => process.env.NODE_ENV === "production");

  return {
    presets: [
      ['@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: {
            version: '3',
            proposals: true
          },
          modules: 'cjs'
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime'
    ]
  }
};
