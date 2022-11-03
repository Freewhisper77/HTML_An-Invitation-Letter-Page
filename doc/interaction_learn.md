# 如何用JS为页面创建交互功能

**为我们的<u>"邀您参加"按钮</u>创建交互功能**

**【❗ 需求】**
* **点击**按钮后
    - 阻止页面发生先前的URL跳转
    - 并将按钮的文字变为"报名成功"
    - 且将按钮的背景色变为绿色

**【💡 思路】**

修改按钮这个`<a>`链接的**点击事件**,在里面加入一些功能代码

**【❓ 思考】**

1. 如何能够使JS找到这个按钮并且控制它的单击？

> **给按钮加一个"名字"/"标记"**
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_zpPYD7/截屏2022-11-03 14.51.05.png)

2. 如何在HTML中引入JS文件？
> **在`<body>标签`中用<u>`<script>标签`的type/src属性</u>**
  - 直接在HTML中属书写JS语句：![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_MqBpVW/截屏2022-11-03 15.02.53.png)
  - 【推荐】引入外部的的JS文件：![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_oubbtj/截屏2022-11-03 15.03.33.png)
- - - 

**【✅ 书写JS语句】**

PS：先在HTML的`<script>标签`下直接写哈
1. **定义一个变量** 来 **对应"邀您参加"按钮**
* 定义变量

* 对应按键元素/如何获取id为enroll所对应的元素？
> ⭐️ document对象的getElementById方法

- - - 
定义一个名为inviteBtn的变量，它对应的是页面文档中id名为enroll的元素（即"邀您参加"按钮）
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_GNir4j/截屏2022-11-03 15.11.25.png)
> PS：可以用alert语句来测试inviteBtn的变量是否成功对应。

2. 修改enroll的onclick事件对应的函数

根据需求，一一找到解决方法：

  - 阻止页面发生先前的URL跳转
> 调用事件的 preventDefault方法 来实现
  - 并将按钮的文字变为"报名成功"
> 修改 enroll元素 的 innerHTML属性 来实现
  - 且将按钮的<u>背景色</u>变为绿色

    PS：原来是白色边框+透明底色
    -  <u>底色</u>
    -  <u>边框色</u>
> 调用 enroll元素 的 style属性，重新对background和borderColor的样式进行设置

![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_oSGNar/截屏2022-11-03 15.32.52.png)
    e: 代表调用函数的onclick事件参数
