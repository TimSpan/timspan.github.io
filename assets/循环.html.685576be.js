import{_ as n,o as s,c as a,a as p}from"./app.4409970e.js";const t={},o=p(`<h1 id="\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a> \u5FAA\u73AF</h1><h2 id="while\u5FAA\u73AF\u4E09\u8981\u7D20" tabindex="-1"><a class="header-anchor" href="#while\u5FAA\u73AF\u4E09\u8981\u7D20" aria-hidden="true">#</a> while\u5FAA\u73AF\u4E09\u8981\u7D20</h2><ol><li>\u53D8\u91CF\u8D77\u59CB\u503C</li><li>\u7EC8\u6B62\u6761\u4EF6(\u6CA1\u6709\u7EC8\u6B62\u6761\u4EF6\uFF0C\u5FAA\u73AF\u4F1A\u4E00\u76F4\u81EA\u884C\uFF0C\u9020\u6210\u6B7B\u5FAA\u73AF)</li><li>\u53D8\u91CF\u53D8\u5316\u91CF\uFF08\u81EA\u589E\u6216\u81EA\u51CF)</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>\u5FAA\u73AF\u6761\u4EF6<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token literal-property property">\u5FAA\u73AF\u4F53</span><span class="token operator">:</span>\u8981\u91CD\u590D\u6267\u884C\u7684\u4EE3\u7801
<span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5F53\u5FAA\u73AF\u6761\u4EF6\u4E3Atrue\u65F6,\u76F4\u63A5\u6267\u884C\u5FAA\u73AF\u4F53</span>
	<span class="token literal-property property">\u5FAA\u73AF\u4F53</span><span class="token operator">:</span>\u8981\u91CD\u590D\u6267\u884C\u7684\u4EE3\u7801
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a> for\u5FAA\u73AF</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>\u53D8\u91CF\u8D77\u59CB\u503C<span class="token punctuation">;</span> \u7EC8\u6B62\u6761\u4EF6<span class="token punctuation">;</span> \u53D8\u91CF\u53D8\u5316\u91CF<span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6253\u5F00\u65AD\u70B9\u8C03\u8BD5\u53EF\u4EE5\u6E05\u6670\u770B\u5230\u5FAA\u73AF\u8FC7\u7A0B\u4EE5\u53CA\u53D8\u91CFvalue\u503C\u7684\u53D8\u5316</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6C42\u5076\u6570\u548C</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">%</span><span class="token number">2</span><span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum <span class="token operator">=</span> sum <span class="token operator">+</span> i
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
</code></pre></div><h2 id="for\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u76844\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#for\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u76844\u79CD\u5199\u6CD5" aria-hidden="true">#</a> for\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u76844\u79CD\u5199\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u904D\u5386\u6570\u7EC4\u76844 \u79CD\u5199\u6CD5</span>
<span class="token comment">// length \u662FArray\u7684\u5B9E\u4F8B\u5C5E\u6027,\u8FD4\u56DE\u6216\u8BBE\u7F6E\u4E00\u4E2A\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u4E2A\u6570</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u9A6C\u8D85&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8D75\u4E91&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u98DE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5173\u7FBD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9EC4\u5FE0&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u9A6C\u8D85&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8D75\u4E91&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u98DE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5173\u7FBD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9EC4\u5FE0&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u9A6C\u8D85&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8D75\u4E91&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u98DE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5173\u7FBD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9EC4\u5FE0&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u9A6C\u8D85&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8D75\u4E91&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u98DE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5173\u7FBD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9EC4\u5FE0&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for\u5FAA\u73AF\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#for\u5FAA\u73AF\u5D4C\u5957" aria-hidden="true">#</a> for\u5FAA\u73AF\u5D4C\u5957</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> hang <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u884C&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> lie <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5217&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> hang<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;br&gt;\u7B2C</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5929&lt;br&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// \u91CC\u5C42\u5FAA\u73AF\u6253\u5370 \u7B2C\u51E0\u4E2A\u5355\u8BCD</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> lie<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u2B50</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6253\u5F00\u65AD\u70B9\u8C03\u8BD5\u53EF\u4EE5\u6E05\u6670\u770B\u5230\u5FAA\u73AF\u8FC7\u7A0B\u4EE5\u53CA\u53D8\u91CFvalue\u503C\u7684\u53D8\u5316</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6253\u5370\u76F4\u89D2\u4E09\u89D2\u5F62</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u2B50</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7528\u6237\u767B\u5F55\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u767B\u5F55\u9A8C\u8BC1" aria-hidden="true">#</a> \u7528\u6237\u767B\u5F55\u9A8C\u8BC1</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u63A5\u6536\u7528\u6237\u8F93\u5165\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C</span>
<span class="token comment">// \u82E5\u7528\u6237\u540D\u4E3A \u201Cadmin\u201D ,\u4E14\u5BC6\u7801\u4E3A \u201C123456\u201D ,\u5219\u63D0\u793A\u7528\u6237\u767B\u5F55\u6210\u529F!  </span>
<span class="token comment">// \u5426\u5219\uFF0C\u8BA9\u7528\u6237\u4E00\u76F4\u8F93\u5165</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D\u5B57\uFF1A&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> password <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801\uFF1A&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">===</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> password <span class="token operator">==</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u767B\u5F55\u6210\u529F&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,14),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","\u5FAA\u73AF.html.vue"]]);export{i as default};
