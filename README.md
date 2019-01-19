# my-app

### 目录结构

- public ## 没用
- **src  ## 程序源文件**
  - assets ## 静态文件，图片等
  - **components  ## 组件，相对独立单元，供view调用**
  - plugins  ## vue的第三组件，这里是使用了 iview 和 axios 库。
  - **views  ## 界面view，组合component生成独立界面，配合router进行路由调整，切换界面**
  - App.vue  ## 界面容器
  - main.js  ## 程序入口文件
  - **router.js  ## 路由配置**
  - **store.js   ## 组件间共享数据配置和操作。**
- package.json  ## npm依赖配置文件
- **vue.config.js  ## vue 配置文件**

**PS：Vue 3.0 的目录结构有比较大的变化，目录结构更加的简洁。**


### 软件依赖和系统需求
1. Vue 3.0+
2. 第三方库 iView, axios
3. Node 8.0+

### 调用关系
![restful 前端 vue 调用.png](https://i.loli.net/2019/01/19/5c431d588378f.png)


## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
