import{_ as i,r as t,o,c as l,a as n,b as c,d as e,e as s}from"./app.68b9d385.js";const d={},p=e(`<h1 id="vuepress\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#vuepress\u6307\u5357" aria-hidden="true">#</a> vuePress\u6307\u5357</h1><h2 id="\u542F\u52A8\u672C\u5730\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u672C\u5730\u670D\u52A1\u5668" aria-hidden="true">#</a> \u542F\u52A8\u672C\u5730\u670D\u52A1\u5668</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run docs<span class="token operator">:</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),r=s("VuePress \u4F1A\u5728 "),u={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},v=s("http://localhost:8080\u5728\u65B0\u7A97\u53E3\u6253\u5F00"),m=s(" \u542F\u52A8\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u5F00\u53D1\u670D\u52A1\u5668\u3002\u5F53\u4F60\u4FEE\u6539\u4F60\u7684 Markdown \u6587\u4EF6\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5185\u5BB9\u4E5F\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002"),b=e(`<h2 id="vuepressbuild" tabindex="-1"><a class="header-anchor" href="#vuepressbuild" aria-hidden="true">#</a> vuepressBuild</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u6784\u5EFA\u547D\u4EE4\uFF1A</strong><code>npm run docs:build</code> or <code>yarn docs:build</code></li><li><strong>\u53D1\u5E03\u76EE\u5F55\uFF1A</strong><code>docs/.vuepress/dist</code></li></ul><h2 id="\u63A8\u9001\u5230\u7801\u4E91gitee" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u5230\u7801\u4E91gitee" aria-hidden="true">#</a> \u63A8\u9001\u5230\u7801\u4E91Gitee</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push -f git@gitee.com:timspan/kblog.git master:gh-pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u8DEF\u5F84</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/kblog/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u9ED8\u8BA4\u8DEF\u5F84</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u90E8\u7F72</h2><p>\u5728\u6587\u4EF6\u4E0B\u65B0\u5EFAdeploy.sh\u6587\u4EF6,\u5185\u5BB9\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:timspan/timspan.github.io.git master</span>
<span class="token function">git</span> push -f git@gitee.com:timspan/kblog.git master:gh-pages

<span class="token comment"># \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728package.json\u8BBE\u7F6E\u5FEB\u6377\u65B9\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run docs:deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14);function g(h,k){const a=t("ExternalLinkIcon");return o(),l("div",null,[p,n("p",null,[r,n("a",u,[v,c(a)]),m]),b])}var _=i(d,[["render",g],["__file","index.html.vue"]]);export{_ as default};