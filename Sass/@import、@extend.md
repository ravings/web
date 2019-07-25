#### @import
文件的拓展名是 .scss 或 .sass，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 .scss 或 .sass 的文件并将其导入
```css
@import "index.sass"
```
或
```css
@import "index"
```
Sass 允许同时导入多个文件，例如同时导入` header.sass` 与 `content.sass` 两个文件
```css
@import "header", "content"
```

#### 嵌套@import
假设 example.sass 文件包含以下样式：
```css
.example {
  color: red;
}
```
然后导入到 #main 样式内
```css
.main {
  @import "example.sass";
}
```
#### @extend

```html
<ul class="ul">
  <li class="li_1">111111</li>
  <li class="li_2">2222222</li>
  <li class="li_3">33333333</li>
  <li class="li_4">4444444444</li>
</ul>
```
```css
.li {
  border: 1px solid green;
  padding: 5px 0;
}
.li_1 {
  @extend .li;
  color: blue;;
}
.li_2 {
  @extend .li;
  color: salmon;
}
```