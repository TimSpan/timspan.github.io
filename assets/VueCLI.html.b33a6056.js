import{_ as c,r as o,o as t,c as d,b as e,d as n,e as a,a as r}from"./app.4409970e.js";const i={},l={id:"vuecli",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#vuecli","aria-hidden":"true"},"#",-1),p=a(),u={href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"},v=a("VueCLI"),g=r(`<h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2><p>CLI (<code>@vue/cli</code>) \u662F\u4E00\u4E2A<strong>\u5168\u5C40\u5B89\u88C5</strong>\u7684 npm \u5305\uFF0C\u63D0\u4F9B\u4E86\u7EC8\u7AEF\u91CC\u7684 <code>vue</code> \u547D\u4EE4\u3002\u5B83\u53EF\u4EE5\u901A\u8FC7 <code>vue create</code> \u5FEB\u901F\u642D\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u6216\u8005\u76F4\u63A5\u901A\u8FC7 <code>vue serve</code> \u6784\u5EFA\u65B0\u60F3\u6CD5\u7684\u539F\u578B\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>vue ui</code> \u901A\u8FC7\u4E00\u5957\u56FE\u5F62\u5316\u754C\u9762\u7BA1\u7406\u4F60\u7684\u6240\u6709\u9879\u76EE</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># OR</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
</code></pre></div><p>\u5B89\u88C5\u4E4B\u540E\uFF0C\u4F60\u5C31\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u8BBF\u95EE <code>vue</code> \u547D\u4EE4\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u8FD0\u884C <code>vue</code>\uFF0C\u770B\u770B\u662F\u5426\u5C55\u793A\u51FA\u4E86\u4E00\u4EFD\u6240\u6709\u53EF\u7528\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF0C\u6765\u9A8C\u8BC1\u5B83\u662F\u5426\u5B89\u88C5\u6210\u529F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>vue --version
</code></pre></div><h3 id="\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7" aria-hidden="true">#</a> \u5347\u7EA7</h3><p>\u5982\u9700\u5347\u7EA7\u5168\u5C40\u7684 Vue CLI \u5305\uFF0C\u8BF7\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> update -g @vue/cli
</code></pre></div><h3 id="\u5347\u7EA7\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7\u63D2\u4EF6" aria-hidden="true">#</a> \u5347\u7EA7\u63D2\u4EF6</h3><p>\u5982\u9700\u5347\u7EA7\u9879\u76EE\u4E2D\u7684 Vue CLI \u76F8\u5173\u6A21\u5757\uFF08\u4EE5 <code>@vue/cli-plugin-</code> \u6216 <code>vue-cli-plugin-</code> \u5F00\u5934\uFF09\uFF0C\u8BF7\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u8FD0\u884C <code>vue upgrade</code>\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u7528\u6CD5\uFF1A upgrade [options] [plugin-name]
  --all                 \u5347\u7EA7\u6240\u6709\u7684\u63D2\u4EF6
</code></pre></div><h3 id="\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u9879\u76EE</h3><h3 id="vue-create" tabindex="-1"><a class="header-anchor" href="#vue-create" aria-hidden="true">#</a> vue create</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>vue create my-project
</code></pre></div><h3 id="\u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762" aria-hidden="true">#</a> \u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>vue ui
</code></pre></div><h3 id="\u63D2\u4EF6\u548C-preset" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u548C-preset" aria-hidden="true">#</a> \u63D2\u4EF6\u548C Preset</h3><p>Vue CLI \u4F7F\u7528\u4E86\u4E00\u5957\u57FA\u4E8E\u63D2\u4EF6\u7684\u67B6\u6784\u3002\u5982\u679C\u4F60\u67E5\u9605\u4E00\u4E2A\u65B0\u521B\u5EFA\u9879\u76EE\u7684 <code>package.json</code>\uFF0C\u5C31\u4F1A\u53D1\u73B0\u4F9D\u8D56\u90FD\u662F\u4EE5 <code>@vue/cli-plugin-</code> \u5F00\u5934\u7684\u3002\u63D2\u4EF6\u53EF\u4EE5\u4FEE\u6539 webpack \u7684\u5185\u90E8\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5411 <code>vue-cli-service</code> \u6CE8\u5165\u547D\u4EE4\u3002\u5728\u9879\u76EE\u521B\u5EFA\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7EDD\u5927\u90E8\u5206\u5217\u51FA\u7684\u7279\u6027\u90FD\u662F\u901A\u8FC7\u63D2\u4EF6\u6765\u5B9E\u73B0\u7684\u3002</p><h3 id="cli\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#cli\u670D\u52A1" aria-hidden="true">#</a> CLI\u670D\u52A1</h3><p>\u5728\u4E00\u4E2A Vue CLI \u9879\u76EE\u4E2D\uFF0C<code>@vue/cli-service</code> \u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3A <code>vue-cli-service</code> \u7684\u547D\u4EE4\u3002\u4F60\u53EF\u4EE5\u5728 npm scripts \u4E2D\u4EE5 <code>vue-cli-service</code>\u3001\u6216\u8005\u4ECE\u7EC8\u7AEF\u4E2D\u4EE5 <code>./node_modules/.bin/vue-cli-service</code> \u8BBF\u95EE\u8FD9\u4E2A\u547D\u4EE4\u3002</p><p>\u8FD9\u662F\u4F60\u4F7F\u7528\u9ED8\u8BA4 preset \u7684\u9879\u76EE\u7684 <code>package.json</code>\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 npm \u8C03\u7528\u8FD9\u4E9B script\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre></div><h3 id="vue-cli-service-build" tabindex="-1"><a class="header-anchor" href="#vue-cli-service-build" aria-hidden="true">#</a> vue-cli-service build</h3><p><code>vue-cli-service build</code> \u4F1A\u5728 <code>dist/</code> \u76EE\u5F55\u4EA7\u751F\u4E00\u4E2A\u53EF\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u5305\uFF0C\u5E26\u6709 JS/CSS/HTML \u7684\u538B\u7F29\uFF0C\u548C\u4E3A\u66F4\u597D\u7684\u7F13\u5B58\u800C\u505A\u7684\u81EA\u52A8\u7684 vendor chunk splitting\u3002\u5B83\u7684 chunk manifest \u4F1A\u5185\u8054\u5728 HTML \u91CC\u3002</p><h2 id="\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a> \u5F00\u53D1</h2><h3 id="html-\u548C\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#html-\u548C\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> HTML \u548C\u9759\u6001\u8D44\u6E90</h3><h4 id="index-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#index-\u6587\u4EF6" aria-hidden="true">#</a> Index \u6587\u4EF6</h4>`,30),_=e("code",null,"public/index.html",-1),b=a(" \u6587\u4EF6\u662F\u4E00\u4E2A\u4F1A\u88AB "),x={href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},f=a("html-webpack-plugin"),k=a(" \u5904\u7406\u7684\u6A21\u677F\u3002\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u8D44\u6E90\u94FE\u63A5\u4F1A\u88AB\u81EA\u52A8\u6CE8\u5165\u3002\u53E6\u5916\uFF0CVue CLI \u4E5F\u4F1A\u81EA\u52A8\u6CE8\u5165 resource hint ("),m=e("code",null,"preload/prefetch",-1),L=a("\u3001manifest \u548C\u56FE\u6807\u94FE\u63A5 (\u5F53\u7528\u5230 PWA \u63D2\u4EF6\u65F6) \u4EE5\u53CA\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u5904\u7406\u7684 JavaScript \u548C CSS \u6587\u4EF6\u7684\u8D44\u6E90\u94FE\u63A5\u3002");function C(I,V){const s=o("ExternalLinkIcon");return t(),d("div",null,[e("h1",l,[h,p,e("a",u,[v,n(s)])]),g,e("p",null,[_,b,e("a",x,[f,n(s)]),k,m,L])])}var j=c(i,[["render",C],["__file","VueCLI.html.vue"]]);export{j as default};
