# COVID-19

https://github.com/GomaGoma676/covid-dashboard
https://github.com/GomaGoma676/covid-dashboard-api

```
$ npx create-react-app . --template redux-typescript --use-npm
$ npm i axios @material-ui/core chart.js react-chartjs-2 react-countup react-icons --legacy-peer-deps



```

import と register を追加 (chart.js からの要素を登録する)

https://qiita.com/daimyo404/items/af1ee3687200dcb4d2bf

https://react-chartjs-2.netlify.app/examples/pie-chart

```
キャッシュファイルを削除する
npm cache clean --force
rm -rf node_modules package-lock.json
```

```
デプロイ
$ firebase login
$ npm run build
$ cd build

ローカルサーバで確認
$ npm install -g serve
$ serve -s build
```
