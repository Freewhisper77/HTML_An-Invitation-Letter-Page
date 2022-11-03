# 如何设置一张img为整个页面的背景
1. 我们已经知道：`<body>`标签包含了所有呈现给user的内容信息，
因此只要要给`<body>`创建background样式，就能使图像显示为整个页面的背景。
>  body {
>
>       background:url(img/sea-xinhai.jpg);
>   }

**BUT** 由于图片尺寸较大，远超当前浏览器的显示分辨率。——>
结果不如人意：在浏览器中只显示了图片左上角的一块内容。

2. 下面思考：
* 如何让图片根据浏览器大小进行相应缩放，以确保图片的主体填满浏览器的整个区域？
> background-size:cover;
* 如何让图片能够居中，而非现在这样以左上角为原点显示
> background:url(img/sea-xinhai.jpg) center center;
> 2个center分别是在横向、纵向居中
* 然而，只这样是不行的，因为浏览器默认没有给`<body>`高度属性，为确保图片自适应整屏显示，<u>需要给body&body的父级（即html）设置height属性。</u>
- - - 
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_phXrJa/截屏2022-11-03 11.05.13.png)
