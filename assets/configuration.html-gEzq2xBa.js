import{_ as d,o as t,c as e,e as r}from"./app-v3rVIYVY.js";const o={},c=r('<h1 id="云配置" tabindex="-1"><a class="header-anchor" href="#云配置" aria-hidden="true">#</a> 云配置</h1><h1 id="主运行模式" tabindex="-1"><a class="header-anchor" href="#主运行模式" aria-hidden="true">#</a> 主运行模式</h1><ul><li><p>1.整理和生成NFO文件并下载图片<br> 将会移动影片文件到目标目录，在目标目录下生成NFO文件，并下载两张封面图片，并重命名影片文件为<code>影片名称.年份.后缀名</code></p></li><li><p>保留原文件命名的模式1<br> 将会移动影片文件到目标目录，在目标目录下生成NFO文件，并下载两张封面图片，不重命名影片</p></li><li><p>2.仅通过位置规则整理文件<br> 仅通过位置规则，将影片文件移动到目标目录中</p></li><li><p>3.更新现有NFO和图片<br> 根据云配置中<code>更新模式NFO文件有效期(天)</code>更新目标目录中现有的NFO文件和图片，有效期从NFO文件和图片的创建时间起计算</p></li><li><p>4.原地刮削<br> 在影片所在文件夹下直接生成NFO文件，并下载两张封面图片</p></li><li><p>5.原地刮削并重命名<br> 在影片所在文件夹下直接生成NFO文件，并下载两张封面图片，并重命名影片文件为<code>影片名称.年份.后缀名</code></p></li></ul><h2 id="tmdb-api-key" tabindex="-1"><a class="header-anchor" href="#tmdb-api-key" aria-hidden="true">#</a> TMDB API KEY</h2><ul><li>可选填项</li></ul><p>填写长度32位的TMDB API KEY, 填入后可获得更为详细的刮削信息<br> 申请教程可谷歌搜索<code>TMDB API KEY申请</code></p><h2 id="命名规则设置" tabindex="-1"><a class="header-anchor" href="#命名规则设置" aria-hidden="true">#</a> 命名规则设置</h2><table><thead><tr><th>变量</th><th>解释</th></tr></thead><tbody><tr><td><code>title</code></td><td>片名</td></tr><tr><td><code>original_title</code></td><td>原生片名（未翻译片名）</td></tr><tr><td><code>actor</code></td><td>演员</td></tr><tr><td><code>studio</code></td><td>公司</td></tr><tr><td><code>director</code></td><td>导演</td></tr><tr><td><code>release</code></td><td>发售日</td></tr><tr><td><code>year</code></td><td>发行年份</td></tr><tr><td><code>number</code></td><td>影片号码/F号</td></tr><tr><td><code>cover</code></td><td>封面链接</td></tr><tr><td><code>tag</code></td><td>类型</td></tr><tr><td><code>outline</code></td><td>简介</td></tr><tr><td><code>runtime</code></td><td>时长</td></tr><tr><td><code>series</code></td><td>系列</td></tr></tbody></table><p>上面的参数以下都称之为<strong>变量</strong></p><h3 id="自定义规则方法" tabindex="-1"><a class="header-anchor" href="#自定义规则方法" aria-hidden="true">#</a> 自定义规则方法</h3><p>有两种元素，变量和字符，无论是任何一种元素之间连接必须要用加号 <code>+</code><br> 比如：<code>&#39;[&#39;+number+&#39;]-&#39;+title</code>，其中冒号 <code>&#39;&#39;</code> 内的文字是字符，没有冒号包含的文字是变量，元素之间连接必须要用加号 <code>+</code><br> 请勿使用<code>%</code> <code>$</code> <code>&amp;</code>等字符</p><ul><li><code>genres+&#39;/&#39;+title</code></li><li><code>&#39;#&#39;+genres+&#39;/&#39;+title</code></li><li><code>actor+&#39;/&#39;+number</code></li><li><code>&#39;#&#39;+actor+&#39;/&#39;+number</code></li></ul><h3 id="元数据文件标题命名规则" tabindex="-1"><a class="header-anchor" href="#元数据文件标题命名规则" aria-hidden="true">#</a> 元数据文件标题命名规则</h3><p>这是NFO文件内<code>&lt;title&gt;</code>字段命名规则，与文件名和文件夹名无关，用于在Emby, Jellyfin, Plex中显示标题</p>',14),a=[c];function i(l,h){return t(),e("div",null,a)}const s=d(o,[["render",i],["__file","configuration.html.vue"]]);export{s as default};