import{_ as n,o as s,c as a,a as p}from"./app.4409970e.js";var t="/assets/array.c0811358.png",o="/assets/log.9739039c.png",c="/assets/code.71499daf.png";const e={},u=p(`<h1 id="\u4E8C\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u4E8C\u7EF4\u6570\u7EC4</h1><p>JavaScript \u672C\u8EAB\u4E0D\u63D0\u4F9B\u591A\u7EF4\u6570\u7EC4\uFF0C\u4F46\u662F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49\u5143\u7D20\u6570\u7EC4\u6765\u521B\u5EFA\u591A\u7EF4\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5143\u7D20\u4E5F\u662F\u53E6\u4E00\u4E2A\u6570\u7EC4\uFF0C\u51FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C\u53EF\u4EE5\u8BF4 JavaScript \u591A\u7EF4\u6570\u7EC4\u662F\u6570\u7EC4\u7684\u6570\u7EC4\uFF0C\u5373<strong>\u5D4C\u5957\u6570\u7EC4</strong>\u3002\u5B9A\u4E49\u591A\u7EF4\u6570\u7EC4\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u662F\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u8868\u793A\u6CD5\u3002</p><p>\u8981\u5728\u63A7\u5236\u53F0\u4E2D\u663E\u793A\u8FD9\u4E2A\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>console.table()</code> \u65B9\u6CD5\u6E05\u6670\u7684\u5C55\u793A\u5176\u4E8C\u7EF4\u6570\u7EC4\uFF1A</p><p>\u8981\u8BBF\u95EE\u591A\u7EF4\u6570\u7EC4\u7684\u5143\u7D20\uFF0C\u9996\u5148\u4F7F\u7528\u65B9\u62EC\u53F7\u8BBF\u95EE\u8FD4\u56DE\u5185\u90E8\u6570\u7EC4\u7684\u5916\u90E8\u6570\u7EC4\u5143\u7D20\uFF1B\u7136\u540E\u4F7F\u7528\u53E6\u4E00\u4E2A\u65B9\u62EC\u53F7\u8BBF\u95EE\u5185\u90E8\u6570\u7EC4\u7684\u5143\u7D20\u3002\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> months <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u4E00\u6708&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5929\u6C14\u5F88\u70ED&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u4E8C\u6708&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5929\u6C14\u5F88\u70ED&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u4E09\u6708&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5929\u6C14\u5F88\u70ED&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u56DB\u6708&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5929\u6C14\u5F88\u70ED&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u4E94\u6708&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5929\u6C14\u5F88\u70ED&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u516D\u6708&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5929\u6C14\u5F88\u70ED&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>months<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="`+t+`" alt=""></p><p>\u8981\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Array.from</code> \u548C <code>Array</code> \u6784\u9020\u51FD\u6570\u3002</p><h2 id="\u8FED\u4EE3\u591A\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u591A\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u8FED\u4EE3\u591A\u7EF4\u6570\u7EC4</h2><p>\u8981\u8FED\u4EE3\u591A\u7EF4\u6570\u7EC4\uFF0C\u9700\u8981\u4F7F\u7528\u5D4C\u5957\u7684 <code>for</code> \u5FAA\u73AF\uFF0C\u5982\u4E0B\u4F8B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>        <span class="token comment">// \u7B49\u4EF7\u4E8E:  </span>
        <span class="token comment">// let arr = [</span>
        <span class="token comment">//     [6, 7, 8,],</span>
        <span class="token comment">//     [1, 2, 3, 4, 5],</span>
        <span class="token comment">//     [20, 30, 40, 50]</span>
        <span class="token comment">// ]</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
        <span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
            <span class="token comment">//\u4F20\u5165\u7684\u53C2\u6570\u901A\u8FC7...arr\u53D8\u6210\u6570\u7EC4//\u800C\u63A5\u6536\u8FDB\u6765\u7684\u6570\u636E(\u5B9E\u53C2)\u662F3\u4E2A\u6570\u7EC4,\u4ECE\u800C\u53D8\u6210\u4E86\u4E8C\u7EF4\u6570\u7EC4</span>
            <span class="token comment">//...arr\u8868\u793A\u53EF\u53D8\u53C2\u6570\uFF0C\u5373\u4E3A\u4E0D\u786E\u5B9A\u4F20\u5165\u591A\u5C11\u4E2A\u53C2\u6570\uFF0C\u53EF\u4EE5\u7528...\u8868\u793A</span>
            <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u5224\u65AD \u4F20\u5165\u7684\u6BCF\u4E2A\u6570\u636E\u7684\u503C \u5E76\u52A0\u4EE5\u8BA1\u7B97</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//\u5C06\u4F20\u5165\u7684arguments\u6570\u7EC4\u4E2D \u7684\u6BCF\u4E2A\u503C   \u8FDB\u884C\u8BA1\u7B97</span>
                    sum <span class="token operator">=</span> sum <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>   <span class="token comment">//\u8BA1\u7B97\u603B\u548C</span>
                    max <span class="token operator">=</span> max <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">?</span> max <span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>     <span class="token comment">//\u8BA1\u7B97\u6700\u5927\u503C</span>
                    min <span class="token operator">=</span> min <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">?</span> min <span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>     <span class="token comment">//\u8BA1\u7B97\u6700\u5C0F\u503C</span>
                    num<span class="token operator">++</span>   <span class="token comment">//\u8BA1\u7B97\u6570\u636E\u603B\u91CF</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u7D22\u5F15[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// console.log(\`\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4,\u6570\u7EC4\u957F\u5EA6\u662F\${num}\`)</span>
            <span class="token keyword">let</span> avg <span class="token operator">=</span> sum <span class="token operator">/</span> num     <span class="token comment">//\u8BA1\u7B97\u5E73\u5747\u503C</span>
            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">sum</span><span class="token operator">:</span> sum<span class="token punctuation">,</span>
                <span class="token literal-property property">avg</span><span class="token operator">:</span> avg<span class="token punctuation">,</span>
                <span class="token literal-property property">max</span><span class="token operator">:</span> max<span class="token punctuation">,</span>
                <span class="token literal-property property">min</span><span class="token operator">:</span> min
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> result
        <span class="token punctuation">}</span>
</code></pre></div><p><img src="`+o+'" alt=""></p><p><img src="'+c+'" alt=""></p>',12),l=[u];function k(i,r){return s(),a("div",null,l)}var g=n(e,[["render",k],["__file","\u4E8C\u7EF4\u6570\u7EC4.html.vue"]]);export{g as default};
