// (金额转大写)Capitalization
function Capitalization(n) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
    return '';
  }
  // 1234.56
  var unit = '仟佰拾亿仟佰拾万仟佰拾圆角分',
    str = '';
  n += '00';
  var p = n.indexOf('.');
  if (p >= 0) n = n.substring(0, p) + n.substr(p + 1, 2);
  //n = 123456
  unit = unit.substr(unit.length - n.length);
  // 拾万仟佰拾圆角分
  for (var i = 0; i < n.length; i++) str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
  console.log(str)
  console.log(str.replace(/零(仟|佰|拾|角)/g, '零'))
  console.log(str.replace(/零(仟|佰|拾|角)/g, '零').replace(/(零)+/g, '零'))
  console.log(str.replace(/零(仟|佰|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/^圆零?|零分/g, ''))
  console.log(str.replace(/零(仟|佰|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/^圆零?|零分/g, '').replace(/圆$/g, '圆整'))
  return str
    .replace(/零(仟|佰|拾|角)/g, '零')
    .replace(/(零)+/g, '零')
    .replace(/零(万|亿|圆)/g, '$1')
    .replace(/(亿)万|壹(拾)/g, '$1$2')
    .replace(/^圆零?|零分/g, '')
    .replace(/圆$/g, '圆整');
}

console.log(Capitalization(0))