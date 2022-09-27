import{_ as p,r as o,o as c,c as r,b as n,d as t,a as e,e as s}from"./app.4409970e.js";var l="/assets/vue3vite.1d53eb58.png";const u={},i=e(`<h1 id="vite-vue3" tabindex="-1"><a class="header-anchor" href="#vite-vue3" aria-hidden="true">#</a> vite+vue3</h1><h2 id="\u6784\u5EFA\u9879\u76EE\u4F7F\u7528create-vue" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u9879\u76EE\u4F7F\u7528create-vue" aria-hidden="true">#</a> \u6784\u5EFA\u9879\u76EE\u4F7F\u7528create-vue</h2><div class="language-text ext-text"><pre class="language-text"><code>npm init vue@3
</code></pre></div>`,3),k={href:"https://github.com/vuejs/create-vue",target:"_blank",rel:"noopener noreferrer"},d=s("github\u5730\u5740"),v=n("p",null,[n("img",{src:l,alt:""})],-1),g=n("h2",{id:"vitejs-plugin-vue-jsx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vitejs-plugin-vue-jsx","aria-hidden":"true"},"#"),s(" @vitejs/plugin-vue-jsx")],-1),f={href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer"},m=s("github\u5730\u5740"),h=e(`<p>\u4F7F\u7528@vitejs/plugin-vue-jsx \u7F16\u5199JSX\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue-jsx&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options are passed on to @vue/babel-plugin-jsx</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// named exports w/ variable declaration: ok</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// named exports referencing variable declaration: ok</span>
<span class="token keyword">const</span> Bar <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Test<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span>

<span class="token comment">// default export call: ok</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Test<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// default export referencing variable declaration: ok</span>
<span class="token keyword">const</span> Baz <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Test<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Baz
</code></pre></div>`,3);function _(x,j){const a=o("ExternalLinkIcon");return c(),r("div",null,[i,n("p",null,[n("a",k,[d,t(a)])]),v,g,n("p",null,[n("a",f,[m,t(a)])]),h])}var w=p(u,[["render",_],["__file","vite+vue3.html.vue"]]);export{w as default};