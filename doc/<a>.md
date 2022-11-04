## `<a>`
HTML `<a>` 元素（或称锚元素）可以通过它的 **href属性** 创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。

> 超文本引用（hypertext reference）：超链接

`<a>` 中的内容应该应该指明链接的意图。

如果存在 href 属性，当 `<a>` 元素聚焦时按下回车键就会激活它。
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_VI6SuV/截屏2022-11-03 09.01.23.png)
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_u3RHw2/截屏2022-11-03 08.59.41.png)

⭐️现在我们只是直接往`<body>`标签里扔进去了3个元素，
就像往一个空旷的大房间里扔进去3件衣服。

我们应该用一些 **"容器"/"区块"** 来把相应的元素放入不同的内容/功能区域中
> * 比如这些新增的标签`<heaher>、<section>、<aside>、<footer>`
> * 还有`<div>` 这样通用的区块

## `<section>`
HTML `<section>` 元素表示 HTML 文档中一个通用独立章节，它没有更具体的语义元素来表示。 **一般来说会包含一个标题。** 

【用法】再次重申，每个 `<section> `都应该被标识出来，通常是将**标题**（`<h1> (en-US)-<h6> (en-US)`元素）作为 `<section>` 元素的一个子元素。

## `<header>`

HTML `<header>` 元素用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。**它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。**

【用法】`<header>` 元素不是分段内容，因此不会往 *大纲* 中引入新的段落。也就是说，`<header>` 元素通常用于包含周围部分的标题（h1 至 h6 元素），但这**不是必需的**。

* 页面的`<header>`：![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_bsF8sr/截屏2022-11-03 09.21.52.png)
* 文章的`<header>`：![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_7lfVnY/截屏2022-11-03 09.22.03.png)

## `<div>`

【用法】通常都要用**class**或者**id属性**对其归类（方便在CSS中对其增添样式）
>给**id**类型的选择器加CSS样式时，需要用前缀的#来定义

现在回到我们刚刚写的例子,我们给它加上`<div>`
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_AAmss4/截屏2022-11-03 09.29.42.png)
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_aYo5mT/截屏2022-11-03 09.29.25.png)

## `<hr>`

`<hr>`元素通常显示为<strong>水平线</strong>，用于分隔 HTML 页面中的内容（或定义更改）。元素通常显示为水平线，用于分隔 HTML 页面中的内容（或定义更改）。
> 要更改`<hr>`与段落之间的间隙或样式，请使用 CSS。

## `<overflow>`

其设置了元素溢出时所需的行为——即当元素的内容太大而无法适应它的块级格式化上下文时。
> * overflow: visible;<br>
> * overflow: hidden;<br>
> * overflow: scroll;<br>
> * overflow: auto;
> * overflow: clip;

JS 的 Element.scrollTop 属性可用于滚动 HTML 元素，即使当 overflow 设置为 hidden 时。
