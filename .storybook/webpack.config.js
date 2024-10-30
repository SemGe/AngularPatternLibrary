module.exports = {
    module: {
      rules: [
        {
          test: /\.mdx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
            '@mdx-js/loader',
          ],
        },
      ],
    },
  };
  