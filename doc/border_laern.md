# 边框

* 如何给本案例中的<u>"邀您参加"按钮</u>加一个圆角细线的边框？

> border: 1px solid white;
>
>边框
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_HhxYbv/截屏2022-11-03 13.59.57.png)

> border-radius: 3px;
>
>圆角
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_LLHBlh/截屏2022-11-03 14.03.32.png)

* 进一步 增加内边距
> padding: 10px 100px;
>
> 第一个10： ↑ ↓各留10像素内边距
>
> 第二个100： ← → 各留100像素内边距

* 去掉`<a>`默认的下划线（超链接才使用下划线）
> text-decoration: none;
