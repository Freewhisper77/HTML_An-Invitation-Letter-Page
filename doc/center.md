# 如何调整`<div id="container">`这个内容区域的位置到整个页面的正中
- - -
**【分析】** 整个页面的正中 = 水平 & 垂直方向上都要居中

⭐️【通法】重置body的边距值 ——> 清除浏览器对页面元素预设的一些默认边距值
> margin: 0;
> padding: 0;
> 
### 1. 水平居中？
* 设置container这个容器的宽度为100% ——> 横向撑满整个屏幕
> width: 100%;
* 设置其内部的文字居中
> text-align: center;
* 对id加样式，请在id名前加#:
 ![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_Pm4hyg/截屏2022-11-03 11.19.50.png)

### 2. 垂直居中？
**【思路】** 改变container的top属性 ——> 改变其垂直方向的位置

* 【前提1】container具有"绝对定位"的定位方式
> position: relative;
* 【前提2】container的父级（即body）具有"相对定位"的定位方式
> position: absolute;
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_SCDCnG/截屏2022-11-03 13.04.43.png)

* ⚠️【补充】还需将container向上移动，当移动的距离为container内容高度的一半时，就能实现整个区块的垂直居中
  - eg.比如container整体高度为100px(像素)，则只需🔼50px即可。
- - -
BUT（1）不清楚container整体高度的具体数值（2）即使可以在浏览器中测量出来，但container的整体高
度必然是一个不断动态变化的值
- - -
* 设置transform属性 
> transform: translateY(-50%);
> 
> translateY(-50%)表示在y轴方向上移动-50%，即我们想要的🔼移动其整体高度的一半。

![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_37xY6b/截屏2022-11-03 13.17.16.png)
