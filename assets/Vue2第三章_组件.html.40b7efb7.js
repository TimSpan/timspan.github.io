import{_ as n,o as a,c as s,a as t}from"./app.4409970e.js";const p={},e=t(`<h1 id="vue2\u7B2C\u4E09\u7AE0-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue2\u7B2C\u4E09\u7AE0-\u7EC4\u4EF6" aria-hidden="true">#</a> Vue2\u7B2C\u4E09\u7AE0_\u7EC4\u4EF6</h1><p>.vue\u5355\u7EC4\u4EF6\u6587\u4EF6</p><h2 id="esm\u6A21\u5757\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#esm\u6A21\u5757\u7CFB\u7EDF" aria-hidden="true">#</a> ESM\u6A21\u5757\u7CFB\u7EDF</h2><h2 id="\u5728esm\u4E2D\u5168\u5C40\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5728esm\u4E2D\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a> \u5728ESM\u4E2D\u5168\u5C40\u6CE8\u518C</h2><div class="language-vue ext-vue"><pre class="language-vue"><code>App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4F7F\u7528\u7EC4\u4EF6:\u7EC4\u4EF6\u540D\u5F53\u505A\u6807\u7B7E\u4F7F\u7528 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pannel</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7EC4\u4EF6\u5168\u5C40\u6CE8\u518C\u8BED\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>main<span class="token punctuation">.</span>js

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> pannel <span class="token keyword">from</span> <span class="token string">&#39;./components/pannel.vue&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;pannel&quot;</span><span class="token punctuation">,</span>pannel<span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div><div class="custom-container tip"><p class="custom-container-title">scoped</p><p><strong>\u6CE8\u518C\u7684\u7EC4\u4EF6 pannel.vue \u91CCstyle\u6807\u7B7E \u5FC5\u987B\u52A0\u4E0A scoped\u5C5E\u6027</strong></p></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BB0\u4F4F<strong>\u5168\u5C40\u6CE8\u518C\u7684\u884C\u4E3A\u5FC5\u987B\u5728\u6839 Vue \u5B9E\u4F8B (\u901A\u8FC7 <code>new Vue</code>) \u521B\u5EFA\u4E4B\u524D\u53D1\u751F</strong>\u3002</p></div><h2 id="\u5728esm\u4E2D\u5C40\u90E8\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5728esm\u4E2D\u5C40\u90E8\u6CE8\u518C" aria-hidden="true">#</a> \u5728ESM\u4E2D\u5C40\u90E8\u6CE8\u518C</h2><div class="language-vue ext-vue"><pre class="language-vue"><code>App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pannel</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> pannel <span class="token keyword">from</span> <span class="token string">&#39;./components/pannel.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;pannel&quot;</span><span class="token operator">:</span> pannel
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>\u4F7F\u7528\u7EC4\u4EF6</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5355\u53CC\u6807\u7B7E\u90FD\u4E00\u6837 --&gt;</span>
<span class="token comment">&lt;!-- \u7EC4\u4EF6\u540D\u5F53\u505A\u6807\u7B7E\u4F7F\u7528 --&gt;</span>
<span class="token comment">&lt;!-- &lt;\u7EC4\u4EF6\u540D /&gt; --&gt;</span>
<span class="token comment">&lt;!-- &lt;\u7EC4\u4EF6\u540D&gt;&lt;/\u7EC4\u4EF6\u540D&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pannel</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pannel</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pannel</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7EC4\u4EF6\u5C40\u90E8\u6CE8\u518C\u8BED\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> \u7EC4\u4EF6\u5BF9\u8C61 <span class="token keyword">from</span> <span class="token string">&#39;vue\u6587\u4EF6\u8DEF\u5F84&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;\u7EC4\u4EF6\u540D&quot;</span><span class="token operator">:</span> \u7EC4\u4EF6\u5BF9\u8C61
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">scoped</p><p><strong>\u6CE8\u518C\u7684\u7EC4\u4EF6 pannel.vue \u91CCstyle\u6807\u7B7E \u5FC5\u987B\u52A0\u4E0A scoped\u5C5E\u6027</strong></p></div><h3 id="\u7B80\u5199\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u5F62\u5F0F" aria-hidden="true">#</a> \u7B80\u5199\u5F62\u5F0F</h3><blockquote><p>key \u548C value \u76F8\u540C \u53EF\u4EE5\u7B80\u5199</p></blockquote><div class="language-vue ext-vue"><pre class="language-vue"><code>App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pannel</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;pannel&gt;&lt;/pannel&gt; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> pannel <span class="token keyword">from</span> <span class="token string">&#39;./components/pannel.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    pannel
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,19),o=[e];function c(l,u){return a(),s("div",null,o)}var i=n(p,[["render",c],["__file","Vue2\u7B2C\u4E09\u7AE0_\u7EC4\u4EF6.html.vue"]]);export{i as default};
