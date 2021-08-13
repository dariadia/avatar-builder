module.exports = {
  '*.ts?(x)': [
    'eslint --ignore-path .formatignore -c .eslintrc.js --fix --ext .ts,.tsx',
  ],
}
