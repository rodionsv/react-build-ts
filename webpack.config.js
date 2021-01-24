const fs = require('fs');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const Paths = {
  SRC: path.join(__dirname, './src'),
  DIST: path.join(__dirname, './dist'),
  BUILD: path.join(__dirname, './build'),
  PUBLIC: path.join(__dirname, './public/'),
  NODE_MODULES: path.join(__dirname, './node_modules'),
};

const config = {
  entry: {
    main: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: Paths.BUILD,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    modules: [Paths.SRC, Paths.NODE_MODULES],
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@utils': path.resolve(__dirname, 'src/shared/utils/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React webpack 5 build',
      template: `${Paths.PUBLIC}index.html`,
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = (env, argv) => {
  config.mode = argv.mode || 'development';

  const isDev = config.mode === 'development';
  const isServe = argv?.env?.WEBPACK_SERVE || false;

  if (isDev) {
    config.target = 'web';
    config.devServer = {
      contentBase: Paths.DIST,
      port: 3000,
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
    };
    config.devtool = 'source-map';
  }

  if (isServe) {
    config.output.path = Paths.DIST;
  }

  if (!isServe) {
    new CopyWebpackPlugin({
      patterns: [
        {
          from: Paths.PUBLIC,
          globOptions: {
            ignore: '*/index.html',
          },
          to: '',
        },
      ],
    });
  }

  if (!isDev) {
    // internet explorer 11 support
    config.target = 'es5';
  }

  if (env && env.cert) {
    config.devServer.https = true;
    fs.readFile(path.join(__dirname, 'key.pem'), (err, data) => {
      if (err) throw new Error('Please create key.pem file');
      config.devServer.key = data;
    });
    fs.readFile(path.join(__dirname, 'cert.pem'), (err, data) => {
      if (err) throw new Error('Please create cert.pem file');
      config.devServer.cert = data;
    });
  }

  return config;
};
