const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.html',  // Entry를 index.html로 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'  // Output 파일 이름 설정
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']  // CSS 로더 설정
      },
      {
        test: /\.html$/,
        loader: 'html-loader'  // HTML 로더 설정 추가
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'  // 템플릿으로 index.html을 사용
    })
  ]
};
