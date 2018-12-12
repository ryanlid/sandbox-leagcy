const fs = require('fs');
const marked = require('marked');
const path = require('path');

const src = path.join(process.cwd(), 'src')
const dist = path.join(process.cwd(), 'dist')

/* 读取文件 */
fs.readdir(src, function (err, files) {
  const filenames = files.filter(file => {
    const filenameArr = file.split('.')
    return filenameArr[filenameArr.length - 1] === 'md'
  });

  filenames.map(function (filename) {
    const shortname = filename.split('.').slice(0,-1).join('.')
    fs.readFile(src + '/' + filename, 'utf8', function (err, data) {
      if (err) throw err;
      md2html(shortname, data)
    })
  })
})

/**
 * 转换 markdown 文件为 html
 * @param {*} shortname 文件名称
 * @param {*} data
 */
function md2html(shortname, data) {
  const markedata = marked(data)
  saveFile(shortname, markedata)
}

/**
 * 写入文件
 * @param {*} shortname文件（不含后缀）
 * @param {*} data文件数据
 */
function saveFile(shortname, data) {
  fs.writeFile(dist + '/' + shortname + '.html', data, (err) => {
    if (err) throw err;
    console.log(shortname+'.md' ,'->',shortname+'.html');
  });
}
