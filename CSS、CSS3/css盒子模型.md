# 盒子模型
> 我们目前所用的基本都是标准盒子模型

## 盒子中的区域
一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：
> - width和height：内容的宽度、高度（不是盒子的宽度、高度）
> - padding：内边距
> - border： 边框
> - margin：外边框

## 标准盒子模型
width : content(内容)的宽度  
height : content(内容)的高度

## IE盒子模型
width : content(内容)的宽度 + border + padding  
height : content(内容)的高度 + border + padding

## 一个盒子的真实占有宽度和高度
> 标准盒子模型
真实占有宽度 = 左border + 左padding + width + 右padding + 右border  
真实占有高度 = 上border + 上padding + height + 下padding + 下border
