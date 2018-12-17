"use strict";

/**
 * 显示 GitHub 丝带
 * https://blog.github.com/2008-12-19-github-ribbons/
 *
 * @param {string} url
 */
function githubRibbons(url) {
  var aEl = document.createElement('a');
  var imgUrl = 'https://static.lidong.me/upload/images/clmCTIwMi.png';

  if (url.indexOf('http') !== 0) {
    url = 'https://gist.github.com/' + url;
  }

  aEl.setAttribute('href', url); // aEl.innerHTML = '<img style="position: absolute; top: 0; right: 0; border: 0;" src="' + imgUrl + '?rf=' + url + '" alt="Fork me on GitHub">'

  aEl.innerHTML = '<img style="position: absolute; top: 0; right: 0; border: 0;" src="' + imgUrl + '" alt="Fork me on GitHub">';
  document.body.append(aEl);
}
/**
 * 显示相关链接
 *
 * @param {*} arr
 * @param {string} [link='link']
 * @param {string} [word='word']
 */


function showReferenceLink(arr) {
  var link = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'link';
  var word = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'word';

  if (!Array.isArray(arr)) {
    throw Error('arguments should be array');
  } // TODO: 添加高度样式控制，防止内容过多，占据屏幕太多高度


  var LinkEl = document.createElement('div');
  var LinkElHtml = [];
  LinkElHtml.push('<div style="position:fixed;bottom: 10px;left: 10px;">相关链接：<ol>');

  for (var i = 0; i < arr.length; i++) {
    LinkElHtml.push("<li><a href=\" ".concat(arr[i][link], "\">").concat(arr[i][word] !== undefined ? arr[i][word] : arr[i][link], "</a></li>"));
  }

  LinkElHtml.push('</ol></div>');
  LinkEl.innerHTML = LinkElHtml.join('');
  document.body.append(LinkEl);
}