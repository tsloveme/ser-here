serhere 随启随用的静态文件服务器 + 假数据
==============================

it's a fork of [anywhere](https://github.com/JacksonTian/anywhere)

Running static file server serhere and auto router to ther mock data(ajax). 随时随地将你的当前目录变成一个静态文件服务器的根目录 + mock假数据(ajax)。

## Installation

Install it as a command line tool via `npm -g`.

```sh
npm install serhere -g
```

## Execution

```sh
$ serhere
// or with port
$ serhere -p 8000
// or start it but silent(don't open browser)
$ serhere -s
// or with hostname
$ serhere -h localhost -p 8888
// or with folder
$ serhere -d ~/git/serhere
// or enable html5 history
$ serhere -f /index.html
```

## Help

```sh
$ serhere --help
Usage:
  serhere --help // print help information
  serhere // 8000 as default port, current folder as root
  serhere 8888 // 8888 as port
  serhere -p 8989 // 8989 as port
  serhere -s // don't open browser
  serhere -h localhost // localhost as hostname
  serhere -d /home // /home as root
  serhere -f /index.html  // Enable html5 history,the index is /index.html
```

## Visit

```
http://localhost:8000
```
执行命令后，默认浏览器将为您自动打开主页。

## License
The MIT license.
