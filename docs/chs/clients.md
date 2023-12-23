# Linux

# MacOS
### 允许任何来源程序运行
* 左上角 - `系统偏好设置` - `安全性与隐私` - `安全性` - 勾选`任何来源`
* 如果没有，请在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码
* 在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码
* MacOS ARM也能运行amd64

由于目前开发者贫穷买不起Mac mini编译程序，转译运行的某些代码无法识别系统信息，M系列暂时无法记住密码，请在用户面板踢出设备后登录

# Windows
由于技术原因与未能进行软件签名，本程序可能会被杀毒软件误报，请将本软件添加至杀毒软件信任区或白名单中  
**本程序不含任何恶意代码与功能**，请放心加入白名单

# Docker
* 注意，因为Docker文件系统的特殊性，请仔细阅读以下操作指南后再行使用
* 开发者对用户**因未仔细阅读文档**造成使用不当导致的文件丢失、损坏均不负责


本镜像针对 `unraid`系统做出了特别优化，对于 `unraid`用户，本镜像的默认配置即可避免权限问题。对于其他nas系统用户，请按照各自的系统权限策略设置 `UID` `GID` `UMASK`三个环境变量。

## 7.0.3版本升级后 请删除`config/mdc.ini`后运行

## 与其他客户端一些不同之处
* 失败处理记录文件`failed_list.txt`，存放于容器目录`/config`中
* 目前Docker版本只支持两种影片模式各**一个**刮削目录

## 环境变量

本镜像增加了权限设置功能，你可以通过使用 UID (用户id) GID (组id) 两个环境变量来配置程序运行后所有文件的权限。

| 字段名            | 值语义                        | 预设值        |
|:---------------|:---------------------------|:-----------|
| UID            | uid                        | 99         |
| GID            | gid                        | 100        |
| UMASK          | source, output目录的umask     | 002        |
| NAME           | 网页端显示的设备名称                 | MDC-Docker |
| ARGS           | [运行参数](/chs/cli.html#运行参数) | 无          |
| cloud_username | 网页端的用户名                    | 无          |
| cloud_password | 网页端的密码                     | 无          |

## 卷
| Docker卷      | 解释 |
|:-------------| :----|
| /source      | 一般影片刮削目录 |
| /output      | 一般影片输出目录 |
| /source-o    | 其他影片刮削目录 |
| /output-o    | 其他影片输出目录 |
| /config/.mdc |  配置文件目录 |

* 如果刮削或整理**一般**影片，则在下文可无需设置`/source-o` `/output-o` 参数
* 如果刮削或整理**其他**影片，则在`ARGS`添加[运行参数](/chs/cli.html#运行参数)`-o`，在下文可无需设置`/source` `/output` 参数

## 教程：DSM（图形界面） ↓

<details>

### 简要流程
* 打开`Container Manager`下载`mvdctop/mdc`映像
* 创建容器，只需给环境变量`ARGS`设置一个空格即可，不勾选完成后运行此容器
* 在容器页面中，右键详情，设置卷和环境变量
* 编辑卷
* 连接SSH，输入`id`命令获取当前用户 `UID` `GID`，填入环境变量
* 编辑环境变量：填写`cloud_username`和`cloud_password`，可根据需要填写`ARGS`[运行参数](/chs/cli.html#运行参数)
* 保存后运行，第一次运行会在`config`目录下生成`mdc.ini`文件，可证据需要配置，如配置代理
* 第二次运行后，查看日志后如果正常，则可在运行结束后移除环境变量`cloud_username`和`cloud_password`

### 图文流程
* 打开`Container Manager`下载`mvdctop/mdc`映像
![](/images/docker/1.jpg)
![](/images/docker/2.jpg)
![](/images/docker/3.jpg)
![](/images/docker/4.jpg)
* 创建容器，只需给环境变量`ARGS`设置一个空格即可，不勾选完成后运行此容器
![](/images/docker/5.jpg)
![](/images/docker/6.jpg)
* 在容器页面中，右键详情，设置卷和环境变量
![](/images/docker/7.jpg)
![](/images/docker/8.jpg)
* 连接SSH，输入`id`命令获取当前用户 `UID` `GID`，填入环境变量
![](/images/docker/id.jpg)
* 编辑环境变量：填写`cloud_username`和`cloud_password`，可根据需要填写`ARGS`[运行参数](/chs/cli.html#运行参数)
![](/images/docker/9.jpg)
* 保存后运行，第一次运行会在`config`目录下生成`mdc.ini`文件，可证据需要配置，如配置代理
![](/images/docker/10.jpg)
* 第二次运行后，查看日志后如果正常，则可在运行结束后移除环境变量`cloud_username`和`cloud_password`
![](/images/docker/11.jpg)


</details>

## 教程：Linux Shell ↓

<details>


## 首次运行
建议先将当前用户添加至Docker用户组中，具体请谷歌，免去sudo运行造成的目录权限问题

### 拉取Docker镜像
```sh
docker pull mvdctop/mdc
mkdir test output
```

### 放置测试影片，也可以用真实影片文件
该命令为创建空白测试文件
```sh
touch ./test/生化危机.2002.mp4
```

### 第一次运行，在当前`config`目录下注入默认配置文件
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/config:/config/.mdc \
  mvdctop/mdc
```

此时，当前目录下的config文件夹出现mdc.ini文件，可根据自身需求，参考[配置文件](https://docs.mvdc.top/chs/cli.html)进行编辑，请勿修改mdc.ini中的**目录配置**和**token**

### 运行容器
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/test:/source \
  -v ${PWD}/output:/output \
  -v ${PWD}/test-o:/source-o \
  -v ${PWD}/output-o:/output-o \
  -v ${PWD}/config:/config/.mdc \
  -e UID=$(stat -c %u test) \
  -e GID=$(stat -c %g test) \
  -e ARGS="" \
  -e NAME=MDC-Docker
  -e cloud_username=USERNAME \
  -e cloud_password=PASSWORD \
  mvdctop/mdc
```


## 后续运行
* 非首次运行，可以删除`cloud_username`和`cloud_password`，登录凭据已被写入配置
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/test:/source \
  -v ${PWD}/output:/output \  
  -v ${PWD}/test-o:/source-o \
  -v ${PWD}/output-o:/output-o \
  -v ${PWD}/config:/config/.mdc \
  -e UID=$(stat -c %u test) \
  -e GID=$(stat -c %g test) \
  -e ARGS="" \
  mvdctop/mdc
```

* 如显示被踢出，则需再次输入`cloud_username`和`cloud_password`环境变量
* 如需要改名，则需要删除容器再次进行上一步的拉取，进行首次运行操作

然后你会看到如下输出，如果输出如下证明工作正常

```sh
---Setup Timezone to Asia/Shanghai---
---Checking if UID: 1000 matches user---
---Checking if GID: 1000 matches user---
usermod: no changes
---Setting umask to 002---
---Taking ownership of data...---
Checking if config file exist
Starting...
---------------------------------------------------------
                      Login Success
---------------------------------------------------------
                 Expire Date: 2XXX-01-01
---------------------------------------------------------
[*]================= Movie Data Capture =================
[*]                        7.0.3
[*]======================================================
[*] - Linux-6.2.0-1016-kvm-x86_64-with-glibc2.37
[*] - x86_64 - Python-3.11.4
[*]======================================================
[*] Current Cloud Config Instance: Default
[*]======================================================
[+] Start at 2023-XX-XX XX:XX:XX
[+] Main Working mode - 1 - Scraping
[+] Find  1  movies
[*]======================================================
[!]                - 100.% [1/1] -             XX:XX:XX
[!] [生化危机] As Name Processing for '生化危机.2002.mp4'
[+]Image Downloaded! thumb.jpg
[+]Image Downloaded! backdrop.jpg
[*]======================================================
[+]Running time 0:00:08.148  End at 2023-XX-XX XX:XX:XX
[+]All finished!!!
- Log file '/config/.mdc/logs/mdc_2023xxxxTxxxxxx.txt' saved
```

</details>

