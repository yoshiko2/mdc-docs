# 命令行参数与配置文件编辑
## 运行参数
以下所有参数为可选参数
* `file` [单文件模式](#单文件模式) file为文件路径
* `-cli` 打开命令行模式
* `-login u=xxx,p=xxx` 登录，首次输入后续可自动登录
* `-g` 调试模式
* `-z` 名称提取模式
* `-r` 受限模式
* `-C` 本地配置文件覆盖模式，仅限于覆盖客户端本地配置，如输入输出目录配置，多个配置使用`;`分隔，实例如下
```shell
./mdc -cli -C "common:source_folders=['/a/video1'];common:success_folder=/a/output2"
```

## 配置文件
程序首次运行后，会在用户家目录下生成`.mdc/mdc.ini`文件
然后编辑`.mdc/mdc.ini`配置文件

```ini
[common]
language =
sync_time =
source_folders =
success_folder =
source_folders_restricted =
success_folder_restricted =
```
### language
程序语言 默认空为`eng` 可选`chs`简体中文 `cht`繁体中文

### sync_time
同步时间 记录客户端GUI下显示同步时间 CLI无作用 每次运行都会同步用户配置

### source_folders
输入目录 该值请输入为列表 实例如下 请勿重复输入
```ini
[common]
source_folders = ['C:/Users/Administrator/video1']
source_folders = ['/home/test/video1', '/home/test/video2']
```

### success_folder
成功输出目录 直接输入目录路径 实例如下
```ini
[common]
success_folder = /home/test/output
```

### source_folders_restricted
受限电影输入目录 该值请输入为列表 实例如下 请勿重复输入
```ini
[common]
source_folders = ['C:/Users/Administrator/video-other']
source_folders = ['/home/test/video-other', '/home/test/video-other2']
```

### success_folder_restricted
受限电影成功输出目录 直接输入目录路径 实例如下
```ini
[common]
success_folder_restricted = /home/test/output-other
```

### cloud_config_instance
选择一般电影云配置实例，默认为`Default`，如自定义请填写新建配置实例名称  
如果实例名称不存在，则会使用`Default`
```ini
[common]
cloud_config_instance = Default
```

### cloud_config_instance_restricted
选择受限电影云配置实例，默认为`Default`，如自定义请填写新建配置实例名称  
如果实例名称不存在，则会使用`Default`
```ini
[common]
cloud_config_instance_restricted = Default
```

## name_parse
```ini
[name_parse]
switch = 0
```
### 名称提取模式 
* 0关 1开

## user_token
```ini
[user_token]
token =
```
### 用户登录令牌
* 首次登录后生成 用于自动登录 每台设备的令牌都独一无二
* **请勿复制和更改**

## restricted
```ini
[restricted]
switch = 0
```
### 受限模式 
* 0关 1开

## 单文件模式
可拖拽一个影片文件到程序图标运行  
终端中请输入`./Movie_Data_Capture xxxxx.mp4`
若要处理受限影片 请先在GUI中打开受限模式，或在配置文件中打开，或附上`-r`参数