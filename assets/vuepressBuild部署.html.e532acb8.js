import{_ as e,r as o,o as p,c,b as n,d as l,a,e as s}from"./app.4409970e.js";const r={},i=a(`<h1 id="\u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668\u6765\u5F00\u53D1\u4F60\u7684\u6587\u6863\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668\u6765\u5F00\u53D1\u4F60\u7684\u6587\u6863\u7F51\u7AD9" aria-hidden="true">#</a> \u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668\u6765\u5F00\u53D1\u4F60\u7684\u6587\u6863\u7F51\u7AD9</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code>npm run docs<span class="token operator">:</span>dev
</code></pre></div>`,2),u=s("VuePress \u4F1A\u5728 "),d={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},k=s("http://localhost:8080\u5728\u65B0\u7A97\u53E3\u6253\u5F00"),g=s(" \u542F\u52A8\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u5F00\u53D1\u670D\u52A1\u5668\u3002\u5F53\u4F60\u4FEE\u6539\u4F60\u7684 Markdown \u6587\u4EF6\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5185\u5BB9\u4E5F\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002"),h=a(`<h1 id="vuepressbuild" tabindex="-1"><a class="header-anchor" href="#vuepressbuild" aria-hidden="true">#</a> vuepressBuild</h1><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>\u6784\u5EFA\u547D\u4EE4\uFF1A</strong><code>npm run docs:build</code> or <code>yarn docs:build</code></li><li><strong>\u53D1\u5E03\u76EE\u5F55\uFF1A</strong><code>docs/.vuepress/dist</code></li></ul><h1 id="\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u90E8\u7F72</h1><p>\u5728\u6587\u4EF6\u4E0B\u65B0\u5EFAdeploy.sh\u6587\u4EF6,\u5185\u5BB9\u5982\u4E0B:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

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
<span class="token function">git</span> push -f git@github.com:timspan/ti.github.io.git master

<span class="token comment"># \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre></div><p>\u6211\u4EEC\u5728package.json\u8BBE\u7F6E\u5FEB\u6377\u65B9\u5F0F</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>   
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u8FD0\u884C\u4EE3\u7801</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:deploy
</code></pre></div>`,10);function m(v,b){const t=o("ExternalLinkIcon");return p(),c("div",null,[i,n("p",null,[u,n("a",d,[k,l(t)]),g]),h])}var q=e(r,[["render",m],["__file","vuepressBuild\u90E8\u7F72.html.vue"]]);export{q as default};
