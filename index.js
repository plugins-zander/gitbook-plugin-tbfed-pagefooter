var moment = require('moment');
module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {
      var _label = 'File Modify: ',
          _format = 'YYYY-MM-DD HH:mm:ss',
          _copy = 'Powered By Gitbook'
      var _js = '<script async src="//cdn.jsdelivr.net/gh/ZanderZhao/cdn/js/busuanzi.pure.mini.js"></script>'

      if(this.options.pluginsConfig['tbfed-pagefooter']) {
        _label = this.options.pluginsConfig['tbfed-pagefooter']['modify_label'] || _label;
        _bszlabel = this.options.pluginsConfig['tbfed-pagefooter']['modify_bszlabel'] || _bszlabel;
        _format = this.options.pluginsConfig['tbfed-pagefooter']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['tbfed-pagefooter']['copyright'];
        _copy = _c ? _c + ' All Right Reserved; ' + _copy : _copy;
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
      var str = ' \n\n<footer class="page-footer">' + _copy +
        '<span class="footer-modification">' +
        _bszlabel + '; ' + _label + 
        '\n{{file.mtime | date("' + _format +
        '")}}\n</span></footer>'

      page.content = page.content + str + _js;

      return page;
    }
  },
  filters: {
    date: function(d, format) {
      return moment(d).format(format)
    }
  }
};
