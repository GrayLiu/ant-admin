# 铃声内嵌站
采用flux前端架构思想，redux、react库，gulp、webpack项目管理
站点url http://hd.tongbu.com/ring/

# 环境搭建
## 安装node
采用nodejs开发，点击[教程](https://github.com/joyent/node)进行安装
## nginx配置
```
server {
    listen 80;
    server_name hd.tongbu.com;                                                              
    
    
    location /ring {
      alias /Users/chenkaishi/git/tui-ring/src;
    }      
    location /ring/data {
        alias /Users/chenkaishi/git/tui-ring/data;
        try_files $uri $uri/ /ring/data/index.php?$args;

        if (!-f $request_filename) {
            rewrite ^/ring/data/(.*)$ /ring/data/index.php?$1;                                   
        }    
    }  
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        include fastcgi.conf;
    }
}
```

## 初始化
```
npm i
```
## 开发进程
1. 开发模式
```
npm run-script watch
```
2. 打包生产环境
```
npm run-script build
```