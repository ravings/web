const axios = {
  post: function() {}
}

// 请求配置
const config = {
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}

function import_excle(e) {
  let files = e.target.files;
  let data = new FormData()
  data.append('files', files[0]);
  axios.post('url', data, {
    // 进度查询
    onUploadProgress: function(progressEvent) {
      //progressEvent.loaded:已上传文件大小
      //progressEvent.total:被上传文件的总大小
      console.log('progressEvent',progressEvent);
      let complete = (progressEvent.loaded / progressEvent.total * 100).toFixed(0);
      _this.theList[i].comp = parseInt(complete);
    }
  }).then(res => {
    console.log(res)
  })
}