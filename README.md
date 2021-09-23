# sxzx-qt

## 开始写代码前的准备

### 1. 克隆仓库并进入项目文件夹

```shell
git clone git@github.com:xxih/2021sxzx-qt.git
cd vote-fe
```

### 2. 确保当前分支是dev分支

```shell
git branch          # -> *指向的就是当前分支

# 若不为dev分支
git checkout dev
```

### 3. 安装依赖（后续如果有人安装新模块也要重新install）

```shell
npm install         # -> 可以简写成npm i
```

### 4. 目录结构

```shell
# vote-fe
├─node_modules/   # 模块
├─package.json    # 配置文件
├─package-lock.json # 配置文件
├─public/         # html
└─src/
    ├─assets/           # 图片等静态文件放在这里
    ├─components/       # 公共组件放在这里
    ├─router/IndexRouter.js   # Router文件
    ├─views/            # 页面文件 主要在这里写代码
    ├─setupProxy.js   #开发过程代理配置
    ├─App.css         #全局样式
    ├─App.js
    ├─App.js           # 根组件
    └─index.js           # 入口js文件
```

### 5. 开始写代码

1. 把项目跑起来。

```shell
npm start
```





2. 自己的页面在`src/views`里面创建对应的组件，创建方法为以下二选一：

1. 创建一个文件夹，用来存放你这个页面的所有组件，假设你现在要写首页，那么你可以创建一个`home`文件夹，里面放入`Home.vue`作为页面组件，页面中用的子组件可以放在这个`home`的文件夹中。

   ```shell
   # 目录结构参考
   └─src/
       ├─views/
       └─home/             # 文件夹名用小写开头的驼峰式命名，组件名用大写开头的驼峰式命名。
           ├─Home.vue      # 页面父组件
           ├─Banner.vue    # 子组件
   ```

2. （不推荐）如果你的这个页面只有一个组件，页面内不包含其他子组件，你可以直接创建一个**单文件组件**，即`.vue`文件，以这个组件作为`vue-router`指向的组件。

   ```shell
   # 目录结构参考
   └─src/
       ├─views/
       ├─Home.vue  # 无其他子组件可考虑用此结构
   ```

1. 自己的页面组件创建完，要配置好`vue-router`才能看到页面，从而进行调试。配置文件即[`src/router/index.js`](https://git.100steps.top/100steps/vote-fe/src/branch/master/src/router/index.js)，在文件开头`import`对应的组件，然后把对象添加到`routes`那个数组，这样就可以通过`url`去调试你的组件。

   > 像根目录`/`这种可能在初始化项目的时候，项目模版中帮你写好了，你可以直接修改模版中的组件成你的组件。

### 6. 代码提交

1. add

   ```shell
   # 把所有更改的文件都添加到暂存区
   git add .
       
   # 如果只想把某些文件加入，可以指定对应文件，如：
   git add src/main.js src/App.vue
   ```

2. commit

   ```shell
   # 写清楚你这次更新的内容，如：
   git commit -m "添加了主页面"
   ```

3. push

   ```shell
   # 提交到dev分支
   git push origin dev
   ```

## 风格规范

1. 把组件命名为多个单词，避免元素相冲突。

