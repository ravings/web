const axios = {
  post: function () { }
}

// 请求配置
const config = {
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  responseType: 'blob'
}

function export_excel(url, params) {
  axios.post(url, params).then(res => {
    let link = document.createElement('a');
    let blob = new Blob([res]);
    link.href = URL.createObjectURL(blob); // 创建下载的链接
    link.download = 'name.xls';
    document.body.appendChild(link);
    link.style.display = 'none';
    link.click();
    URL.revokeObjectURL(blob); // 释放掉blob对象
    document.body.removeChild(link);
  })
}