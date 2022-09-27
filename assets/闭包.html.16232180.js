import{_ as n,o as s,c as a,a as t}from"./app.4409970e.js";const p={},o=t(`<h1 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h1><p>\u4E00\u4E2A\u51FD\u6570\u5BF9\u5468\u56F4\u72B6\u6001\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\uFF0C\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF</p><p>\u7B80\u5355\u7406\u89E3\uFF1A\u95ED\u5305 = \u5185\u5C42\u51FD\u6570 + \u5916\u5C42\u51FD\u6570\u7684\u53D8\u91CF</p><p>\u95ED\u5305\u4F5C\u7528\uFF1A\u5C01\u95ED\u6570\u636E\uFF0C\u63D0\u4F9B\u64CD\u4F5C\uFF0C\u5916\u90E8\u4E5F\u53EF\u4EE5\u8BBF\u95EE\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u95ED\u5305\u7684\u57FA\u672C\u683C\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">outer</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span>  i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fn
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fun <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u95ED\u5305\u5E94\u7528\uFF1A\u5B9E\u73B0\u6570\u636E\u7684\u79C1\u6709</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    count<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u51FD\u6570\u88AB\u8C03\u7528</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u6B21</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5168\u5C40\u53D8\u91CFcount\u5BB9\u6613\u88AB\u4FEE\u6539</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">function</span> <span class="token function">fun</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u51FD\u6570\u88AB\u8C03\u7528</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u6B21</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fun
<span class="token punctuation">}</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u95ED\u5305\u5B9E\u73B0\u6570\u636E\u79C1\u6709\u5316</span>
</code></pre></div>`,8),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","\u95ED\u5305.html.vue"]]);export{k as default};
