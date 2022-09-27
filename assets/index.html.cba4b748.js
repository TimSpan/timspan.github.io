import{_ as n,o as s,c as a,a as t}from"./app.4409970e.js";const e={},p=t(`<h1 style="text-align:center;color:rgb(133, 255, 133);"> \u5BA2\u5B98\u968F\u4FBF\u770B</h1><p><img src="https://timspan.gitee.io/creative_website/assets/dog.e73586b8.jpg" alt="" style="width:200px;text-align:center;"></p><div class="custom-container tip"><p class="custom-container-title">\u884C\u9AD8\u4EAE</p><p>\u4F60\u53EF\u4EE5\u7528 <code>highlight-next-line</code>\u3001<code>highlight-start</code>\u3001<code>highlight-end</code> \u7B49\u6CE8\u91CA\u6765\u9009\u62E9\u8981\u9AD8\u4EAE\u7684\u884C\u3002</p></div><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">HighlightSomeText</span><span class="token punctuation">(</span><span class="token parameter">highlight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>highlight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// highlight-next-line</span>
    <span class="token keyword">return</span> <span class="token string">&#39;\u8FD9\u884C\u88AB\u9AD8\u4EAE\u4E86\uFF01&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token string">&#39;\u8FD9\u91CC\u4E0D\u4F1A&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">HighlightMoreText</span><span class="token punctuation">(</span><span class="token parameter">highlight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// highlight-start</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>highlight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;\u8FD9\u5757\u88AB\u9AD8\u4EAE\u4E86\uFF01&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// highlight-end</span>

  <span class="token keyword">return</span> <span class="token string">&#39;\u8FD9\u91CC\u4E0D\u4F1A&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
