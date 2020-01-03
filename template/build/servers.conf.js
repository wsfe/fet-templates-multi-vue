module.exports = {
  dev1: {
    host: '1.1.1.1',
    domain: '//dev1.img.wangsu.com',
    port: 63501,
    local: './', // 默认当前目录
    path: '/usr/local/nginx/{{ name }}',
    sudo: false,
    exclude: ["dev"]
  },
  dev2: {
    host: '1.1.1.2',
    domain: '//dev2.img.wangsu.com',
    port: 63501,
    local: './', // 默认当前目录
    path: '/usr/local/nginx/{{ name }}',
    sudo: false,
    exclude: ["dev"]
  }
};
