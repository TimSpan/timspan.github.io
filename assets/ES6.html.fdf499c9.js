import{_ as n,o as a,c as s,a as t}from"./app.4409970e.js";const e={},p=t(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><h2 id="\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u6570\u7EC4\u5E38\u7528\u65B9\u6CD5</h2><h3 id="\u6570\u7EC4\u7F6E\u7A7A" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7F6E\u7A7A" aria-hidden="true">#</a> \u6570\u7EC4\u7F6E\u7A7A</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//\u4E0D\u4F1A\u771F\u6B63\u7684\u6E05\u7A7A\u6570\u636E\uFF0C\u53EA\u662F\u5C06\u4E00\u4E2A\u7A7A\u6570\u7EC4\u8D4B\u503C\u5230arr,\u5E76\u4E0D\u4F1A\u6E05\u7A7A\u5185\u5B58\u6570\u636E,\u6570\u636E\u91CF\u591A\u65F6\u4F1A\u5BFC\u81F4\u5185\u5B58\u6EA2\u51FA</span>
arr<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u5F7B\u5E95\u6E05\u7A7Aarr\u6570\u636E\u7684\u5185\u5BB9\uFF0C\u4E4B\u524D\u4F9D\u8D56\u4E8Earr\u7684\u6570\u636E\u4E5F\u4F1A\u6E05\u7A7A</span>
</code></pre></div><h3 id="\u6570\u7EC4\u8FFD\u52A0" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8FFD\u52A0" aria-hidden="true">#</a> \u6570\u7EC4\u8FFD\u52A0</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&#39;\u5934\u90E8\u8FFD\u52A0&#39;</span><span class="token punctuation">)</span>\uFF1B
arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;\u5934\u90E8\u8FFD\u52A0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6570\u636E\u5408\u5E76\u65B9\u6CD5\uFF0C\u6027\u80FD\u66F4\u597D</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C3E\u90E8\u8FFD\u52A0&#39;</span><span class="token punctuation">)</span>
arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;\u5C3E\u90E8\u8FFD\u52A0&#39;</span><span class="token comment">//\u8FD0\u884C\u901F\u5EA6\u6BD4push\u66F4\u5FEB</span>
</code></pre></div><h3 id="\u6570\u7EC4\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5220\u9664" aria-hidden="true">#</a> \u6570\u7EC4\u5220\u9664</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//\u5220\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//\u5220\u9664\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u5220\u9664\u4E2A\u6570<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//new Set() \u53EF\u4EE5\u5C06\u76EE\u6807\u5BF9\u8C61\u91CC\u9762\u7684\u503C\u7ED9\u53D6\u51FA\uFF0C\u5B83\u53D6\u51FA\u7684\u503C\u662F\u552F\u4E00\u7684\uFF0C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0CArray.from()\u6765\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u8F6C\u6362\u4E3A\u6570\u7EC4</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>\u5F80<span class="token keyword">set</span>\u6784\u9020\u51FD\u6570\u4E2D\u6DFB\u52A0\u6570\u636E
<span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token comment">//\u5224\u65AD\u67D0\u4E00\u4E2A\u503C\u662F\u5426\u662Fset\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u6210\u5458\uFF0C\u8BE5\u65B9\u6CD5\u53EA\u662F\u7528\u4E8ESet\u6784\u9020\u51FD\u6570\u4E2D</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>\u6E05\u9664<span class="token keyword">set</span>\u6784\u9020\u51FD\u6570\u4E2D\u6240\u6709\u6570\u636E
<span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>\u5220\u9664\u6307\u5B9A\u6570\u636E
</code></pre></div><h3 id="\u6570\u7EC4\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u6392\u5E8F" aria-hidden="true">#</a> \u6570\u7EC4\u6392\u5E8F</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u82E5sort\u65B9\u6CD5\u4E2D\u4E0D\u5199\u51FD\u6570\uFF0C\u5219\u6309\u7167\u5B57\u6BCD\u5927\u5C0F\u6392\u5E8F\uFF0C\u53EF\u4EE5\u5229\u7528\u51FD\u6570\u6765\u63A7\u5236\u5347\u5E8F\u6216\u8005\u964D\u5E8F a-b:\u5347\u5E8F\uFF0Cb-a:\u964D\u5E8F\uFF0C\u539F\u7406\u7B49\u540C\u4E8E\u5192\u6CE1\u6392\u5E8F</span>
</code></pre></div><h3 id="\u6570\u7EC4\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u590D\u5236" aria-hidden="true">#</a> \u6570\u7EC4\u590D\u5236</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> num<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token comment">//\u5C06arr\u6570\u7EC4\u590D\u5236\u7ED9num</span>
<span class="token keyword">let</span> num<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span>arr<span class="token punctuation">}</span><span class="token comment">//\u4E5F\u53EF\u4EE5\u5C06\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61 \u4F1A\u628A\u6570\u7EC4\u7684\u4E0B\u6807\u5F53\u4F5C\u5BF9\u8C61\u7684key\u503C</span>
</code></pre></div><h3 id="\u6570\u7EC4\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5408\u5E76" aria-hidden="true">#</a> \u6570\u7EC4\u5408\u5E76</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">=</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//12342345</span>

\u82E5\u4E0D\u9700\u8981\u91CD\u590D\u6570\u636E\u7684\u8BDD \u53EF\u5229\u7528 <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF0C\u5229\u7528Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u8F6C\u4E3A\u6570\u7EC4
 Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token operator">...</span>arr1<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//...\u590D\u5236\u6570\u7EC4</span>
</code></pre></div><h3 id="\u6570\u7EC4\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8FD0\u7B97" aria-hidden="true">#</a> \u6570\u7EC4\u8FD0\u7B97</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">*</span> b<span class="token punctuation">)</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span><span class="token punctuation">[</span>initialValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token literal-property property">callback</span><span class="token operator">:</span>\u51FD\u6570\u4E2D\u5305\u542B\u56DB\u4E2A\u53C2\u6570
<span class="token operator">-</span> previousValue \uFF08\u4E0A\u4E00\u6B21\u8C03\u7528\u56DE\u8C03\u8FD4\u56DE\u7684\u503C\uFF0C\u6216\u8005\u662F\u63D0\u4F9B\u7684\u521D\u59CB\u503C\uFF08initialValue\uFF09\uFF09
<span class="token operator">-</span> currentValue \uFF08\u6570\u7EC4\u4E2D\u5F53\u524D\u88AB\u5904\u7406\u7684\u5143\u7D20\uFF09
<span class="token operator">-</span> index \uFF08\u5F53\u524D\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15<span class="token punctuation">)</span>
<span class="token operator">-</span> array \uFF08\u8C03\u7528\u7684\u6570\u7EC4\uFF09
initialValue \uFF08\u4F5C\u4E3A\u7B2C\u4E00\u6B21\u8C03\u7528 callback \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002\uFF09
</code></pre></div><h3 id="\u6570\u7EC4\u53CD\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53CD\u8F6C" aria-hidden="true">#</a> \u6570\u7EC4\u53CD\u8F6C</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6570\u7EC4find" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4find" aria-hidden="true">#</a> \u6570\u7EC4find</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span>id<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>\uFF1A<span class="token comment">//\u67E5\u627E\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u503C\uFF0C\u67E5\u4E0D\u5230\u8FD4\u56DEundefined</span>
</code></pre></div><h3 id="\u6570\u7EC4findindex" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4findindex" aria-hidden="true">#</a> \u6570\u7EC4findIndex()</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span>id<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>\uFF1A<span class="token comment">//\u7528\u4E8E\u627E\u51FA\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6CA1\u627E\u5230\u8FD4\u56DE-1</span>
</code></pre></div><h3 id="\u6570\u7EC4includes" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4includes" aria-hidden="true">#</a> \u6570\u7EC4includes()</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u8868\u793A\u67D0\u4E2A\u6570\u7EC4\u662F\u5426\u5305\u542B\u7ED9\u5B9A\u7684\u503C\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C</span>
arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>\u7ED9\u5B9A\u503C<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6570\u7EC4\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u89E3\u6784" aria-hidden="true">#</a> \u6570\u7EC4\u89E3\u6784</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u6309\u7167\u5BF9\u5E94\u4F4D\u7F6E\uFF0C\u5BF9\u53D8\u91CF\u8D4B\u503C\uFF0C\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u89E3\u6784</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token comment">//a=1,b=2,c=3</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span><span class="token operator">...</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//a=1,b=[2,3]</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token comment">//a=1,b=undefined</span>
</code></pre></div><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p><a href="https://blog.csdn.net/xiaoliao96530/article/details/123580403">\u8F85\u52A9\u7406\u89E3</a></p><pre><code>let:\u4E0D\u80FD\u91CD\u590D\u58F0\u660E,\u4E0D\u4F1A\u6210\u4E3Awindow\u5C5E\u6027\u7684\u53D8\u91CF\uFF0C\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347(\u5FC5\u987B\u5148\u58F0\u660E\uFF0C\u5728\u4F7F\u7528)\uFF0C\u4E0D\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u4E4B\u5916\u8C03\u7528

const\uFF1A\u58F0\u660E\u5FC5\u987B\u8D4B\u503C,\u4E0D\u80FD\u91CD\u590D\u58F0\u660E,\u4E0D\u4F1A\u6210\u4E3Awindow\u5C5E\u6027\u7684\u53D8\u91CF\uFF0C\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347(\u5FC5\u987B\u5148\u58F0\u660E\uFF0C\u5728\u4F7F\u7528)\uFF0C\u4E0D\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u4E4B\u5916\u8C03\u7528,\u4E00\u65E6\u58F0\u660E\u4E0D\u80FD\u5728\u4FEE\u6539\u503C\uFF1B
\u5982\u679C\u58F0\u660E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u58F0\u660E\u540E\u662F\u4E0D\u80FD\u4FEE\u6539\u7684\uFF0C\u4F46\u662F\u5982\u679C\u58F0\u660E\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u5219\u53EF\u4EE5\u4FEE\u6539\u5176\u5C5E\u6027\u7684\u503C \u4F8B:
	const object = {
	    name: &#39;yanbin&#39;,
	    age: 18
	}
		console.log(object.name);
		object.age = 22;
		console.log(object.age);

\u6682\u65F6\u6027\u6B7B\u533A:\u662F\u6307\u5728\u4E00\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\uFF0C\u5B58\u5728\u4E00\u4E2A\u6B7B\u533A\uFF0C\u5F00\u59CB\u4E8E\u51FD\u6570\u7684\u5F00\u5934\uFF0C\u7ED3\u675F\u4E8E\u53D8\u91CF\u58F0\u660E\u7684\u90A3\u4E00\u884C\uFF0C\u5728\u8FD9\u4E2A\u6B7B\u533A\u5185\uFF0C\u65E0\u6CD5\u8BBF\u95EElet\u6216const\u58F0\u660E\u7684\u53D8\u91CF\u3002
</code></pre><h3 id="\u65B0\u589E\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E\u7C7B\u578B</h3><pre><code>Symbol\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5B83\u7684\u5B9E\u4F8B\u662F\u552F\u4E00\u4E14\u4E0D\u53EF\u6539\u53D8\u7684\u3002
</code></pre><h2 id="\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32</h2><pre><code>\u9700\u8981\u5229\u7528\u53CD\u5F15\u53F7\u5305\u542B\u5185\u5BB9\`\`
console.log(\`\u5E74\u9F84\${age}\`)
</code></pre><h2 id="\u9690\u5F0F\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u8F6C\u6362" aria-hidden="true">#</a> \u9690\u5F0F\u8F6C\u6362</h2><p>consloe.log(+&quot;123&quot;);//\u8F93\u51FA\u7684\u662F\u6570\u5B57\u578Bnumber</p><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h2><pre><code>Objct.freeze(\u5BF9\u8C61\u540D):\u51BB\u7ED3\u4E00\u4E2A\u5BF9\u8C61.\u518D\u4E5F\u4E0D\u80FD\u88AB\u4FEE\u6539\uFF1B\u4E0D\u80FD\u5411\u8FD9\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539
</code></pre><h2 id="\u9762\u5411\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61</h2><h3 id="\u521B\u5EFA\u7C7B-class\u548C\u751F\u6210\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7C7B-class\u548C\u751F\u6210\u5B9E\u4F8B" aria-hidden="true">#</a> \u521B\u5EFA\u7C7B class\u548C\u751F\u6210\u5B9E\u4F8B</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Star</span><span class="token punctuation">{</span> <span class="token comment">//\u521B\u5EFA\u5BF9\u8C61\uFF0C\u7C7B\u540D\u9996\u5B57\u6BCD\u5927\u5199</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">uname</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u7528\u4E8E\u63A5\u6536\u4F20\u9012\u7684\u53C2\u6570</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>uname<span class="token operator">=</span>uname<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">sing</span><span class="token punctuation">(</span><span class="token parameter">song</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u7C7B\u4E2D\u7684\u65B9\u6CD5\u4E0D\u9700\u8981function</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span>song<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//constructor()\u65B9\u6CD5\u662F\u7C7B\u7684\u6784\u9020\u51FD\u6570(\u9ED8\u8BA4\u65B9\u6CD5)\uFF0C\u7528\u4E8E\u4F20\u9012\u53C2\u6570\uFF0C\u8FD4\u56DE\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u901A\u8FC7new\u547D\u4EE4\u751F\u6210\u5BF9\u8C61\u5B9E\u4F8B\u65F6\uFF0C\u81EA\u52A8\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002\u5982\u679C\u6CA1\u6709\u663E\u793A\u5B9A\u4E49\uFF0C\u7C7B\u5185\u90E8\u4F1A\u81EA\u52A8\u7ED9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2Aconstructor();</span>

<span class="token keyword">var</span> user<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;\u5218\u5FB7\u534E&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8C03\u7528\u5BF9\u8C61</span>
	user<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5229\u7528\u5C5E\u6027.\u65B9\u6CD5\u540D</span>
</code></pre></div><h3 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">\u5173\u952E\u5B57</span><span class="token operator">:</span><span class="token keyword">extends</span>
<span class="token class-name">class</span> Father<span class="token punctuation">{</span><span class="token comment">//\u7236\u7C7B</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span>x<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">=</span>y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
	
	<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span><span class="token comment">//\u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span>x<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">=</span>y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> son<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	son<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u62A5\u9519:\u4E0D\u80FD\u591F\u5229\u7528\u5B50\u7C7B\u7684\u53C2\u6570\u52A0\u5165\u7236\u7C7B\u8BA1\u7B97</span>

\u82E5\u9700\u8981\u5229\u7528\u5B50\u7C7B\u7684\u53C2\u6570\u52A0\u5165\u7236\u7C7B\u8BA1\u7B97\u5219\u9700\u8981\u7528\u5230 <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>\u8C03\u7528\u7236\u7C7B\u4E2D\u7684\u6784\u9020\u51FD\u6570

<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8C03\u7528\u7236\u7C7B\u4E2D\u7684\u6784\u9020\u51FD\u6570</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

\u7279\u6027\uFF1A\u7EE7\u627F\u4E2D\uFF0C\u5982\u679C\u5B9E\u4F8B\u5316\u5B50\u7C7B\u8F93\u51FA\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5148\u770B\u5B50\u7C7B\u6709\u6CA1\u6709\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5728\u770B\u7236\u7C7B
<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>\u53EF\u4EE5\u5728\u5B50\u7C7B\u4E2D\u8C03\u7528\u7236\u7C7B\u4E2D\u7684\u6784\u9020\u51FD\u6570 \u548C\u65B9\u6CD5\uFF0C\u5FC5\u987B\u5728\u5B50\u7C7B<span class="token keyword">this</span>\u4E4B\u524D\u8C03\u7528\uFF1B
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\u65B9\u6CD5
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>\u9ED8\u8BA4\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570
</code></pre></div><h3 id="\u7C7B\u91CC\u9762this\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u91CC\u9762this\u6307\u5411" aria-hidden="true">#</a> \u7C7B\u91CC\u9762this\u6307\u5411</h3><pre><code>constructor\u91CC\u9762\u7684this\u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u65B9\u6CD5\u91CC\u9762\u7684this\u6307\u5411\u8FD9\u4E2A\u65B9\u6CD5\u8C03\u7528\u8005
</code></pre><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><pre><code>insertAdjacentHTML(&#39;\u63D2\u5165\u4F4D\u7F6E&#39;,&#39;\u63D2\u5165\u5185\u5BB9&#39;):
	beforeBegin:\u63D2\u5165\u5230\u6807\u7B7E\u5F00\u59CB\u524D
	afterBegin:\u63D2\u5165\u5230\u6807\u7B7E\u5F00\u59CB\u6807\u8BB0\u4E4B\u540E
	beforeEnd:\u63D2\u5165\u5230\u6807\u7B7E\u7ED3\u675F\u6807\u8BB0\u524D
	afterEnd:\u63D2\u5165\u5230\u6807\u7B7E\u7ED3\u675F\u6807\u8BB0\u540E

insertAdjacentText:\u53EA\u80FD\u63D2\u5165\u7EAF\u6587\u672C

\u8FD9\u4E24\u79CD\u65B9\u6CD5\u5FC5\u987B\u5728\u6574\u4E2A\u6587\u6863\u88C5\u8F7D\u5B8C\u6210\u4E4B\u540E\u624D\u80FD\u4F7F\u7528\uFF0C\u5426\u5219\u5C06\u51FA\u9519\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6BD4\u8F83\u7075\u6D3B\u53EF\u4EE5\u9009\u62E9\u4F4D\u7F6E\u63D2\u5165
e.stopPropagation:\u963B\u6B62\u5192\u6CE1\u4E8B\u4EF6

input.select():\u53EF\u4EE5\u9009\u4E2D\u5168\u90E8\u6587\u5B57
</code></pre><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h3><p>\u7F3A\u70B9\uFF1A\u5185\u5B58\u6D6A\u8D39\u7684\u95EE\u9898\uFF0C\u6BCF\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5185\u5B58\u8FDB\u884C\u5B58\u50A8</p><pre><code>1.\u5B9E\u4F8B\u6210\u5458\u5C31\u662F\u6784\u9020\u51FD\u6570\u5185\u90E8\u901A\u8FC7this\u6DFB\u52A0\u7684\u6210\u5458\uFF0C\u53EA\u80FD\u901A\u8FC7\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u8BBF\u95EE
2.\u9759\u6001\u6210\u5458\u5728\u6784\u9020\u51FD\u6570\u672C\u8EAB\u4E0A\u6DFB\u52A0\u7684\u6210\u5458\uFF0C\u662F\u4E0D\u80FD\u591F\u901A\u8FC7\u5B9E\u4F8B\u5316\u5BF9\u8C61\u8BBF\u95EE
</code></pre><h4 id="\u6784\u9020\u51FD\u6570\u539F\u578B-prototype" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u539F\u578B-prototype" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u539F\u578B prototype</h4><pre><code>\u6BCF\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61
prototype\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u88AB\u6784\u9020\u51FD\u6570\u6240\u62E5\u6709
\u53EF\u4EE5\u628A\u4E0D\u53D8\u7684\u65B9\u6CD5\uFF0C\u5B9A\u4E49\u5728prototype\u5BF9\u8C61\u4E0A\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5BF9\u8C61\u7684\u5B9E\u4F8B\u90FD\u53EF\u4EE5\u5171\u4EAB\u8FD9\u4E9B\u65B9\u6CD5
\u6784\u9020\u51FD\u6570\u540D.prototype.\u65B9\u6CD5\u540D=function(){}
\u53EF\u5229\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F\u6DFB\u52A0\u591A\u4E2A\u65B9\u6CD5\uFF0C\u4F46\u662F\u9700\u8981\u624B\u52A8\u6DFB\u52A0constructor(\u6784\u9020\u51FD\u6570)\u5C5E\u6027 \u6307\u56DE\u539F\u6765\u7684\u6784\u9020\u51FD\u6570
\u6784\u9020\u51FD\u6570\u540D.prototype={
	constructor:\u6784\u9020\u51FD\u6570\u540D\uFF0C
	\u65B9\u6CD5\u540D:function(){},
	\u65B9\u6CD5\u540D:function(){}
}
</code></pre><h3 id="\u5BF9\u8C61\u539F\u578B-proto" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u539F\u578B-proto" aria-hidden="true">#</a> \u5BF9\u8C61\u539F\u578B <strong>proto</strong></h3><pre><code>\u5BF9\u8C61\u90FD\u4F1A\u6709\u4E00\u4E2A\u5C5E\u6027__proto__\u6307\u5411\u6784\u9020\u51FD\u6570\u7684prototype\u539F\u578B\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528prototype\u5B9A\u4E49\u7684\u65B9\u6CD5

prototype\uFF08\u6784\u9020\u51FD\u6570\u539F\u578B\uFF09\u548C __proto__\uFF08\u5BF9\u8C61\u539F\u578B\u4E2D\uFF09\u90FD\u5B58\u5728constructor\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528\u662F\u6307\u5411\u539F\u6784\u9020\u51FD\u6570\uFF0C\u82E5\u4F7F\u7528\u6784\u9020\u51FD\u6570\u539F\u578B\u5229\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F\u6DFB\u52A0\u591A\u4E2A\u65B9\u6CD5\uFF0C\u5219\u9700\u8981\u624B\u52A8\u6DFB\u52A0constructor\u5C5E\u6027\u6307\u5411\u539F\u6784\u9020\u51FD\u6570\uFF0C\u624D\u80FD\u591F\u5229\u7528\u5BF9\u8C61\u8C03\u7528\u5230\u65B9\u6CD5
</code></pre><h4 id="instanceof\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#instanceof\u5173\u952E\u5B57" aria-hidden="true">#</a> instanceof\u5173\u952E\u5B57</h4><pre><code>\u7528\u6765\u5224\u65AD\u53F3\u8FB9\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61,\u662F\u5426\u5728\u5DE6\u8FB9\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A
</code></pre><h3 id="\u539F\u578B\u5BF9\u8C61this\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u5BF9\u8C61this\u6307\u5411" aria-hidden="true">#</a> \u539F\u578B\u5BF9\u8C61this\u6307\u5411</h3><pre><code>1.\u5728\u6784\u9020\u51FD\u6570\u4E2D\uFF0Cthis\u6307\u5411\u7684\u662F\u5BF9\u8C61\u5B9E\u4F8B
2.\u539F\u578B\u5BF9\u8C61\u51FD\u6570\u91CC\u9762\u7684this\uFF0C\u6307\u5411\u7684\u4E5F\u662F\u5B9E\u4F8B\u5BF9\u8C61
	\u4E00\u822C\u60C5\u51B5\u4E0Bthis\u6307\u5411\u662F\u8C03\u7528\u8005
</code></pre><h3 id="\u539F\u578B\u5BF9\u8C61\u6269\u5C55\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u5BF9\u8C61\u6269\u5C55\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> \u539F\u578B\u5BF9\u8C61\u6269\u5C55\u5185\u7F6E\u5BF9\u8C61</h3><pre><code>\u53EF\u5229\u7528\u539F\u578B\u5BF9\u8C61\u7ED9\u539F\u672C\u6570\u7EC4\u6CA1\u6709\u7684\u65B9\u6CD5\u6DFB\u52A0\u5185\u7F6E\u65B9\u6CD5
Array.prototype.sum=function(){
	let sum=0;
	for(let i=0;i&lt;this.length;i++){
		sum+=this[i];		
	}
	return sum;
}

let arr=[1,2,3];
console.log(arr.sum());
\u5982\u679C\u8981\u6DFB\u52A0\u591A\u4E2A\u5185\u7F6E\u65B9\u6CD5 \u4E0D\u80FD\u591F\u4F7F\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F\u6DFB\u52A0\uFF0C\u4E0D\u7136\u4F1A\u628A\u4E4B\u524D\u6240\u5305\u542B\u7684\u5185\u7F6E\u65B9\u6CD5\u7ED9\u8986\u76D6
</code></pre><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call()</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u7279\u70B9\uFF1A\u53EF\u4EE5\u8C03\u7528\u51FD\u6570<span class="token punctuation">,</span>\u53EF\u4EE5\u6539\u53D8\u51FD\u6570<span class="token keyword">this</span>\u6307\u5411 
<span class="token function">\u65B9\u6CD5\u540D</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">\u65B9\u6CD5\u540D</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span>\u6307\u5411\u5BF9\u8C61<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">Father</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> user<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7236\u7C7B\u4E2D\u7684this\u662F\u6307\u5411Son\u7684</span>

\u82E5\u5B50\u7C7B\u9700\u8981\u4F7F\u7528\u7236\u7C7B\u4E2D\u539F\u578B\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u5219\u9700\u8981\u5C06\u7236\u7C7B\u7684\u5B9E\u4F8B\u8D4B\u503C\u7ED9\u5B50\u7C7B\u7684\u539F\u578B\u5BF9\u8C61<span class="token punctuation">,</span><span class="token class-name">\u8FD9\u65F6\u5B50\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u662F\u6307\u5411\u7236\u7C7B\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u5B50\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u91CD\u65B0\u6307\u5411\u56DE\u5B50\u7C7BSon</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token operator">=</span>Son<span class="token punctuation">;</span>
</code></pre></div><h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply()</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>\u6570\u7EC4<span class="token punctuation">)</span>
\u4E3B\u8981\u4F5C\u7528\uFF1AMath<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>\uFF1A\u8C03\u7528max\u65B9\u6CD5 \u627E\u51FA\u6570\u7EC4\u4E2D\u6700\u5927\u503C\u6700\u5C0F\u503C
</code></pre></div><h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind()</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u4E0D\u4F1A\u8C03\u7528\u539F\u6765\u7684\u51FD\u6570 \u53EF\u4EE5\u6539\u53D8\u539F\u6765\u51FD\u6570\u5185\u90E8\u7684<span class="token keyword">this</span>\u6307\u5411
\u8FD4\u56DE\u7684\u662F\u539F\u51FD\u6570\u6539\u53D8<span class="token keyword">this</span>\u4E4B\u540E\u4EA7\u751F\u7684\u65B0\u51FD\u6570
<span class="token keyword">let</span> f<span class="token operator">=</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span>\u6307\u5411<span class="token punctuation">,</span>\u5B9E\u53C2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> btn<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    btn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u5C06btn\u7684this\u6307\u5411\u5230\u5B9A\u65F6\u5668\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C</span>
        <span class="token number">2000</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="call-\u3001apply-\u3001bind-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#call-\u3001apply-\u3001bind-\u603B\u7ED3" aria-hidden="true">#</a> call()\u3001apply()\u3001bind() \u603B\u7ED3</h3><h4 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h4><pre><code>1.call\u548Capply\u4F1A\u8C03\u7528\u51FD\u6570\uFF0C\u5E76\u4E14\u6539\u53D8\u51FD\u6570\u5185\u90E8this\u6307\u5411
2.call\u548Capply\u4F20\u9012\u7684\u53C2\u6570\u4E0D\u4E00\u6837\uFF0Ccall\u4F20\u9012\u53C2\u6570aru1,aru2..\u5F62\u5F0F\uFF0Capply\u5FC5\u987B\u6570\u7EC4\u5F62\u5F0F[ary]
3.bind\u4E0D\u4F1A\u8C03\u7528\u51FD\u6570\uFF0C\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u5185\u90E8this\u6307\u5411
</code></pre><h4 id="\u4E3B\u8981\u5F15\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u5F15\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E3B\u8981\u5F15\u7528\u573A\u666F</h4><pre><code>1.call\u7ECF\u5E38\u505A\u7EE7\u627F
2.apply\u7ECF\u5E38\u8DDF\u6570\u7EC4\u6709\u5173\u7CFB\uFF0C\u6BD4\u5982\u501F\u52A9\u6570\u5B66\u5BF9\u8C61\u5B9E\u73B0\u6570\u7EC4\u4E2D\u6700\u5927\u503C\uFF0C\u6700\u5C0F\u503C
3.bind \u4E0D\u8C03\u7528\u51FD\u6570\uFF0C\u4F46\u662F\u8FD8\u662F\u60F3\u6539\u53D8this\u6307\u5411\uFF0C\u6BD4\u5982\u6539\u53D8\u5B9A\u65F6\u5668\u5185\u90E8\u7684this\u6307\u5411
</code></pre><h4 id="foreach\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#foreach\u5FAA\u73AF" aria-hidden="true">#</a> forEach\u5FAA\u73AF</h4><pre><code>\u6570\u7EC4.forEach(function(value,inde,array){
//value:\u6570\u7EC4\u503C\uFF0Cindex\uFF1A\u4E0B\u6807,array:\u6570\u7EC4\u672C\u8EAB
})

return\u4E0D\u4F1A\u7EC8\u6B62\u5FAA\u73AF
</code></pre><h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h4><pre><code>\u6570\u7EC4.filter(function(currentValue,inde,array))
1.\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u65B0\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u662F\u901A\u8FC7\u68C0\u67E5\u6307\u5B9A\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u6240\u6709\u5143\u7D20\uFF0C\u4E3B\u8981\u7528\u4E8E\u7B5B\u9009\u6570\u7EC4
2.\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u6570\u7EC4
3.currenValue:\u6570\u7EC4\u5F53\u524D\u9879\u7684\u503C
4.index:\u6570\u7EC4\u5F53\u524D\u9879\u7684\u7D22\u5F15
5.arr:\u6570\u7EC4\u5BF9\u8C61\u672C\u8EAB

var newArray=arr.filter(function(value,index,array){
	retuen value&gt;=20
	//\u7B5B\u9009\u51FA\u6570\u7EC4\u4E2D\u5927\u4E8E20\u7684\u6570\u6DFB\u52A0\u5230newArray\u65B0\u6570\u7EC4\u4E2D
})
return\u4E0D\u4F1A\u7EC8\u6B62\u5FAA\u73AF
</code></pre><h4 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some()</h4><pre><code>\u6570\u7EC4.some(function(currentValue,index,array)){
	return value&gt;=20
}
\u4E3B\u8981\u7528\u4E8E\u68C0\u6D4B\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u662F\u5426\u6EE1\u8DB3\u6307\u5B9A\u6761\u4EF6
\u5982\u679C\u627E\u5230\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u5143\u7D20\uFF0C\u5219\u7EC8\u6B62\u5FAA\u73AF\uFF0C\u4E0D\u5728\u7EE7\u7EED\u67E5\u627E
\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3Abool,\u6761\u4EF6\u6EE1\u8DB3\u4E3Atrue,\u4E0D\u6EE1\u8DB3\u4E3Afalse
</code></pre><p>####every\uFF08\uFF09 #### \u53EA\u8981\u6709\u4E00\u4E2A\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u5C31\u8FD4\u56DEfalse</p><h3 id="includes\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#includes\u5C5E\u6027" aria-hidden="true">#</a> includes\u5C5E\u6027</h3><pre><code>\u5305\u542B\uFF0C\u53EF\u7528\u4E8E\u6A21\u7CCA\u67E5\u8BE2,\u53EA\u9002\u7528\u4E8E\u5B57\u7B26\u4E32
</code></pre><h4 id="\u7ACB\u5373\u6267\u884C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u51FD\u6570" aria-hidden="true">#</a> \u7ACB\u5373\u6267\u884C\u51FD\u6570</h4><pre><code>(function(){

})(\u8D77\u5230\u8C03\u7528\u51FD\u6570\u7684\u4F5C\u7528);

(function(){}())
</code></pre><h4 id="object\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#object\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a> Object\u5BF9\u8C61\u65B9\u6CD5</h4><pre><code>Object.keys(obj);//\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u6240\u6709\u7684\u5C5E\u6027\uFF0C\u8FD4\u56DE\u7531\u6570\u7EC4\u540D\u7EC4\u6210\u7684\u6570\u7EC4

Object.defineProperty(\u76EE\u6807\u5BF9\u8C61\uFF0C\u9700\u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u540D\u5B57\uFF0C\u76EE\u6807\u5C5E\u6027\u6240\u62E5\u6709\u7684\u7279\u6027)\uFF1A\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u65B0\u5C5E\u6027\u6216\u4FEE\u6539\u539F\u6709\u7684\u5C5E\u6027
Object.defineProperty(obj,&#39;\u5C5E\u6027\u540D&#39;,{
	value:\u8BBE\u7F6E\u5C5E\u6027\u7684\u503C\uFF0C\u9ED8\u8BA4undefined
	writable:\u8BBE\u7F6E\u503C\u662F\u5426\u53EF\u4EE5\u91CD\u5199\uFF0Ctrue|false, \u9ED8\u8BA4\u4E3Afalse
	enumerable:\u76EE\u6807\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u679A\u4E3E\uFF0Ctrue|false \u9ED8\u8BA4\u4E3Afalse,\u4E0D\u5141\u8BB8\u53D1\u751F\u904D\u5386
	configurable:\u76EE\u6807\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u5220\u9664\u6216\u8005\u662F\u5426\u53EF\u4EE5\u518D\u6B21\u4FEE\u6539\u7279\u6027 true|false \u9ED8\u8BA4\u4E3Afalse
})
Object.values(obj)//\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u5C5E\u6027\u503C\uFF0C\u8FD4\u56DE\u6570\u7EC4
Object.assign(\u9700\u62F7\u8D1D\u5BF9\u8C61,\u76EE\u6807\u5BF9\u8C61)\uFF1A\u62F7\u8D1D\u5BF9\u8C61
</code></pre><h4 id="\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012" aria-hidden="true">#</a> \u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012</h4><h4 id="\u503C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u503C\u4F20\u9012" aria-hidden="true">#</a> \u503C\u4F20\u9012</h4><pre><code>\u6309\u503C\u4F20\u9012\u610F\u5473\u7740\u5B9E\u9645\u53C2\u6570\u503C\u7684\u526F\u672C\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\uFF0C
\u5373\u5B8C\u6210\u4E86\u65B0\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5E76\u4E14\u6240\u6709\u66F4\u6539\u90FD\u5728\u8BE5\u65B0\u503C\u4E2D\u8FDB\u884C\uFF08\u5373\u590D\u5236\u7684\u503C\uFF09\u3002
\u539F\u59CB\u503C\u548C\u590D\u5236\u503C\u5F7C\u6B64\u72EC\u7ACB\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5728\u5185\u5B58\u4E2D\u7684\u7A7A\u95F4\u4E0D\u540C\uFF0C
\u5373\u5728\u66F4\u6539\u51FD\u6570\u5185\u90E8\u7684\u503C\u65F6\uFF0C\u51FD\u6570\u5916\u90E8\u7684\u53D8\u91CF\u4E0D\u53D7\u5F71\u54CD\u3002
\u5B58\u653E\u4E8E\u6808
</code></pre><h4 id="\u5F15\u7528\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u4F20\u9012" aria-hidden="true">#</a> \u5F15\u7528\u4F20\u9012</h4><pre><code>\u5F15\u7528\u4F20\u9012\u4E0D\u4F1A\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u65B0\u7A7A\u95F4\uFF0C\u800C\u662F\u4F20\u9012\u5B9E\u9645\u53C2\u6570\u7684\u5F15\u7528/\u5730\u5740\uFF0C
\u8FD9\u610F\u5473\u7740\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u53D8\u91CF\u7684\u539F\u59CB\u503C\u3002
\u56E0\u6B64\uFF0C\u5982\u679C\u6211\u4EEC\u6539\u53D8\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u7684\u503C\uFF0C\u90A3\u4E48\u539F\u59CB\u503C\u4E5F\u4F1A\u6539\u53D8\u3002
\u5730\u5740\u5B58\u653E\u4E8E\u6808\uFF0C\u5BF9\u8C61\u5B58\u653E\u4E8E\u5806
</code></pre><h4 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h4><pre><code>&#39;use strict&#39;
1.\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\u4E4B\u540E\uFF0C\u53D8\u91CF\u5FC5\u987B\u5148\u58F0\u660E\u5728\u4F7F\u7528
2.\u4E0D\u5141\u8BB8\u5220\u9664\u5DF2\u7ECF\u58F0\u660E\u597D\u7684\u53D8\u91CF
3.\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u51FD\u6570\u4E2D\u7684this\u662Fundefined
4.\u6784\u9020\u51FD\u6570\u4E0D\u52A0new\u8C03\u7528\uFF0Cthis\u4F1A\u62A5\u9519
5.\u51FD\u6570\u91CC\u9762\u7684\u53C2\u6570\u4E0D\u5141\u8BB8\u91CD\u540D
6.\u4E0D\u5141\u8BB8\u5728\u975E\u51FD\u6570\u7684\u4EE3\u7801\u5757\u5185\u58F0\u660E\u51FD\u6570
</code></pre><h4 id="\u9AD8\u9636\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a> \u9AD8\u9636\u51FD\u6570</h4><pre><code>\u9AD8\u9636\u51FD\u6570\u662F\u5BF9\u5176\u4ED6\u51FD\u6570\u8FDB\u884C\u64CD\u4F5C\u7684\u51FD\u6570\uFF0C\u5B83\u63A5\u6536\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u6216\u5C06\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8F93\u51FA

 function fn(a, b, car) {
    console.log(a + b);
    car &amp;&amp; car();//\u8C03\u7528\u51FD\u6570
  }
  fn(2, 3, function () {
    console.log(&quot;\u6211\u662F\u9AD8\u9636\u51FD\u6570&quot;);
  });
</code></pre><h4 id="javascript\u4E3A\u4F55\u662F\u4E00\u7B49\u516C\u6C11" tabindex="-1"><a class="header-anchor" href="#javascript\u4E3A\u4F55\u662F\u4E00\u7B49\u516C\u6C11" aria-hidden="true">#</a> JavaScript\u4E3A\u4F55\u662F\u4E00\u7B49\u516C\u6C11</h4><pre><code>\u4E00\u7B49\u516C\u6C11\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u4E5F\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002
</code></pre><h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><h3 id="\u4EC0\u4E48\u662F\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u95ED\u5305" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u95ED\u5305</h3><pre><code>\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u51FD\u6570
\u4E3B\u8981\u4F5C\u7528:\u5EF6\u7533\u4E86\u53D8\u91CF\u7684\u4F5C\u7528\u8303\u56F4
\u4F8B:
 &lt;ul&gt;
  &lt;li&gt;\u8DB3\u7403&lt;/li&gt;
  &lt;li&gt;\u84DD\u7403&lt;/li&gt;
  &lt;li&gt;\u7FBD\u6BDB\u7403&lt;/li&gt;
  &lt;li&gt;\u4E52\u4E53\u7403&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
  const lis = document.querySelector(&quot;ul&quot;).querySelectorAll(&quot;li&quot;);
  for (var i = 0; i &lt;lis.length; i++) {
    lis[i].addEventListener(&quot;click&quot;, function () {
      console.log(i);
    });
  }
 &lt;/script&gt;
\u70B9\u51FB\u4EFB\u610F\u4E00\u4E2Ali\u6253\u5370\u7684i\u90FD\u4E3A4\uFF0C\u56E0\u4E3A\u901A\u8FC7var\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u5728for\u5FAA\u73AF\u4E2D\u7684i\u662F\u5168\u5C40\u7684\uFF0C\u53D8\u91CF\u63D0\u5347\u3001\u6B21\u5FAA\u73AF\u8FC7\u540E\uFF0Ci=4\uFF0C\u56E0\u4E3A\u70B9\u51FB\u6BCF\u4E2A\u90FD\u76F8\u5F53\u4E8E\u70B9\u51FB\u6700\u540E\u4E00\u4E2A\u3002
\u53EF\u4EE5\u5229\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570(\u5C0F\u95ED\u5305)\u89E3\u51B3\u5F53\u524D\u95EE\u9898
 for (var i = 0; i &lt;lis.length; i++) {
	(function(i){
		lis[i].addEventListener(&quot;click&quot;, function () {
      	console.log(i);
  		 });
	})(i)
    
  }
\u95ED\u5305\u53EF\u80FD\u4F1A\u5F15\u8D77\u5185\u5B58\u6CC4\u9732\u7684\u95EE\u9898
</code></pre><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><pre><code>\u4EC0\u4E48\u662F\u9012\u5F52\uFF1F
	1.\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5728\u5185\u90E8\u53EF\u4EE5\u8C03\u7528\u5176\u672C\u8EAB\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u662F\u9012\u5F52\u51FD\u6570
	2.\u5728\u4F7F\u7528\u9012\u5F52\u5F88\u5BB9\u6613\u53D1\u751F&quot;\u6808\u6EA2\u51FA&quot;,\u6240\u4EE5\u5FC5\u987B\u8981\u52A0\u9000\u51FA\u6761\u4EF6return

\u9012\u5F52\u8C03\u7528\u51FD\u6570\u65F6\u901A\u8FC7console.log()\u6253\u5370\u6709\u503C\uFF0C\u4F46\u662F\u5728\u83B7\u53D6\u7684\u65F6\u5019\u662Fundefined\uFF0C\u539F\u56E0\u662F\u5728\u9012\u5F52\u51FD\u6570\u5185\u90E8\u6CA1\u6709\u5BF9\u9012\u5F52\u51FD\u6570\u8FDB\u884Creturn\uFF0C\u5426\u5219\u5916\u5C42\u51FD\u6570\u65E0\u6CD5\u63A5\u6536\u5230\u8FD4\u56DE\u503C
	
\u9012\u5F52\u7B97\u6CD5\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u8BA1\u7B97\u516C\u5F0F\uFF1A
\u9012\u5F52\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6 = \u9012\u5F52\u7684\u6B21\u6570 * \u6BCF\u6B21\u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u3002
\u7A7A\u95F4\u590D\u6742\u5EA6\u7684\u8BA1\u7B97\u516C\u5F0F\uFF1A
\u9012\u5F52\u7B97\u6CD5\u7684\u7A7A\u95F4\u590D\u6742\u5EA6 = \u9012\u5F52\u7684\u6DF1\u5EA6 * \u6BCF\u6B21\u9012\u5F52\u7684\u7A7A\u95F4\u590D\u6742\u5EA6\u3002
</code></pre><p>##\u6B63\u5219\u8868\u8FBE\u5F0F##</p><h3 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h3><pre><code>let regexp=new RegExp(/\u8868\u8FBE\u5F0F/);
let regexp=/\u8868\u8FBE\u5F0F/;
</code></pre><h3 id="\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B" aria-hidden="true">#</a> \u68C0\u6D4B</h3><pre><code>regexobj.test(\u68C0\u6D4B\u6587\u672C),regexobj:\u6B63\u5219\u8868\u8FBE\u5F0F\u53D8\u91CF
</code></pre><h3 id="\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u7B26\u53F7" aria-hidden="true">#</a> \u7B26\u53F7</h3><pre><code>^:\u8868\u793A\u5339\u914D\u884C\u9996\u7684\u6587\u5B57(\u4EE5\u8C01\u5F00\u59CB)
$:\u8868\u793A\u5339\u914D\u884C\u5C3E\u7684\u6587\u672C(\u4EE5\u7761\u7ED3\u675F)	
/\u8868\u8FBE\u5F0F/\uFF1A\u53EA\u8981\u5305\u542B\u8868\u8FBE\u5F0F\u7684\u90FD\u4E3Atrue
[ ]:\u8868\u793A\u6709\u4E00\u7CFB\u5217\u5B57\u7B26\u53EF\u4F9B\u9009\u62E9\uFF0C\u53EA\u8981\u5339\u914D\u5176\u4E2D\u4E00\u4E2A\u5C31\u53EF\u4EE5\u4E86
/^[abc]$/\uFF1A\u4E09\u9009\u4E00\u53EA\u6709abc\u8FD9\u4E09\u4E2A\u5B57\u6BCD\u624D\u8FD4\u56DEtrue
-:\u8303\u56F4\u7B26\uFF08/^[a-z]$/\uFF09
[^a-z]:[]\u5F53\u4E2D\u7684^\u8868\u793A\u53D6\u53CD
*\uFF1A\u91CF\u8BCD\u7B26
+\uFF1A\u6700\u5C11\u51FA\u73B0\u4E00\u6B21
\uFF1F\uFF1A\u5141\u8BB8\u51FA\u73B0\u4E00\u6B21\u6216\u80050\u6B21
{3,6}\uFF1A\u5141\u8BB8\u51FA\u73B0 \u5927\u4E8E\u7B49\u4E8E3 \u5E76\u4E14 \u5C0F\u4E8E\u7B49\u4E8E6\uFF0C\u6CE8\u610F\u4E0D\u8981\u6709\u7A7A\u683C
():\u8868\u793A\u4F18\u5148\u7EA7
|\uFF1A\u6216\u8005\uFF0C\u53EF\u4EE5\u5199\u591A\u79CD\u60C5\u51B5
</code></pre><h3 id="\u9884\u5B9A\u4E49\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9884\u5B9A\u4E49\u7C7B" aria-hidden="true">#</a> \u9884\u5B9A\u4E49\u7C7B</h3><pre><code>\\d \u5339\u914D0-9\u4E4B\u95F4\u7684\u4EFB\u610F\u6570\u7EC4\uFF0C\u76F8\u5F53\u4E8E[0-9]
\\D \u5339\u914D0-9\u4EE5\u5916\u7684\u5B57\u7B26\uFF0C\u76F8\u5F53\u4E8E[^0-9]
\\w \u5339\u914D\u4EFB\u610F\u7684\u5B57\u6BCD\uFF0C\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\uFF0C\u76F8\u5F53\u4E8E[A-Za-z0-9]
\\W \u9664\u6240\u6709\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\uFF0C\u76F8\u5F53\u4E8E[^A-Za-z0-9]
\\s \u5339\u914D\u7A7A\u683C(\u5305\u62EC\u6362\u884C\u7B26\uFF0C\u5236\u8868\u7B26\uFF0C\u7A7A\u683C\u7B26\u7B49)\uFF0C\u76F8\u5F53\u4E8E[\\t\\r\\n\\v\\f]
\\S \u5339\u914D\u975E\u7A7A\u683C\u7684\u5B57\u7B26\uFF0C\u76F8\u5F53\u4E8E[^\\t\\r\\n\\v\\f]
</code></pre><h3 id="\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362" aria-hidden="true">#</a> \u66FF\u6362</h3><pre><code>replace:(\u6B63\u5219\u8868\u8FBE\u5F0F/\u9700\u8981\u66FF\u6362\u7684\u5B57\u7B26,&#39;\u66FF\u6362\u503C&#39;)\uFF1A\u5F53\u6709\u591A\u4E2A\u503C\u7684\u65F6\u5019\uFF0C\u53EA\u4F1A\u66FF\u6362\u7B2C\u4E00\u4E2A
/\u8868\u8FBE\u5F0F/[switch]
	switch(\u4E5F\u6210\u4E3A\u4FEE\u9970\u7B26)\u6309\u7167\u4EC0\u4E48\u6837\u7684\u6A21\u5F0F\u5339\u914D\uFF0C\u6709\u4E09\u79CD\u503C\uFF1A
		g:\u5168\u5C40\u5339\u914D
		i:\u5FFD\u7565\u5927\u5C0F\u5199
		gi:\u5168\u5C40\u5339\u914D+\u5FFD\u7565\u5927\u5C0F\u5199
replace:(/jq/g,&#39;**&#39;)\u66FF\u6362\u6240\u6709\u5339\u914D\u7684\u5B57\u7B26
</code></pre><h3 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h3><pre><code>match\u65B9\u6CD5\u53EF\u4EE5\u5728\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u6307\u5B9A\u7684\u503C,\u5982\u679C\u627E\u5230\u8FD4\u56DE\u8BE5\u503C\uFF0C\u672A\u627E\u5230\u8FD4\u56DEnull
</code></pre><h2 id="\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D</h2><pre><code>\u6D45\u62F7\u8D1D\u548C\u6DF1\u62F7\u8D1D\u53EA\u9488\u5BF9\u5F15\u7528\u7C7B\u578B
</code></pre><h3 id="\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D</h3><pre><code>\u6D45\u62F7\u8D1D\uFF1A\u62F7\u8D1D\u7684\u662F\u5730\u5740
\u5E38\u7528\u65B9\u6CD5\uFF1A
1. \u62F7\u8D1D\u5BF9\u8C61\uFF1AObject.assgin() / \u5C55\u5F00\u8FD0\u7B97\u7B26 {...obj} \u62F7\u8D1D\u5BF9\u8C61
2.\u62F7\u8D1D\u6570\u7EC4\uFF1AArray.prototype.concat() \u6216\u8005 [...arr]

\u62F7\u8D1D\u5BF9\u8C61\u4E4B\u540E\uFF0C\u91CC\u9762\u7684\u5C5E\u6027\u503C\u662F\u7B80\u5355\u6570\u636E\u7C7B\u578B\u76F4\u63A5\u62F7\u8D1D\u503C
\u5982\u679C\u5C5E\u6027\u503C\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u5219\u62F7\u8D1D\u7684\u662F\u5730\u5740
</code></pre><h3 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h3><pre><code>\u6DF1\u62F7\u8D1D\uFF1A\u62F7\u8D1D\u7684\u662F\u5BF9\u8C61\uFF0C\u4E0D\u662F\u5730\u5740

\u5E38\u7528\u65B9\u6CD5\uFF1A
1. \u901A\u8FC7\u9012\u5F52\u5B9E\u73B0\u6DF1\u62F7\u8D1D
2. lodash/cloneDeep
3. \u901A\u8FC7JSON.stringify()\u5B9E\u73B0
</code></pre><h4 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h4><pre><code>\u4F5C\u7528\u57DF\u94FE\u672C\u8D28\u662F\u5E95\u5C42\u7684\u53D8\u91CF\u67E5\u627E\u673A\u5236
</code></pre><h4 id="js\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#js\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a> JS\u5783\u573E\u56DE\u6536\u673A\u5236</h4><pre><code>\u4EC0\u4E48\u662F\u5783\u573E\u56DE\u6536\u673A\u5236\uFF1F
	JS\u79CD\u5185\u5B58\u7684\u5206\u914D\u548C\u56DE\u6536\u662F\u81EA\u52A8\u5B8C\u6210\u7684\uFF0C\u5185\u5B58\u5728\u4E0D\u4F7F\u7528\u7684\u65F6\u5019\u4F1A\u88AB\u5783\u573E\u56DE\u6536\u5668\u81EA\u52A8\u56DE\u6536\uFF0C\u4E0D\u5728\u7528\u5230\u7684\u5185\u5B58\uFF0C\u6CA1\u6709\u53CA\u65F6\u91CA\u653E\uFF0C\u53EB\u505A\u5185\u5B58\u6CC4\u9732

\u5185\u5B58\u7684\u751F\u547D\u5468\u671F\uFF1A
	1.\u5185\u5B58\u5206\u914D\uFF1A\u53D8\u91CF\u3001\u51FD\u6570\u3001\u5BF9\u8C61\u58F0\u660E\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u4E3A\u4ED6\u4EEC\u5206\u914D\u5185\u5B58
	2.\u5185\u5B58\u4F7F\u7528\uFF1A\u5373\u8BFB\u5199\u5185\u5B58\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u53D8\u91CF\u3001\u51FD\u6570\u7B49
	3.\u5185\u5B58\u56DE\u6536\uFF1A\u4F7F\u7528\u5B8C\u6BD5\uFF0C\u7531\u5783\u573E\u56DE\u6536\u81EA\u52A8\u56DE\u6536\u4E0D\u518D\u4F7F\u7528\u7684\u5185\u5B58
	
	\u5168\u5C40\u53D8\u91CF\u4E00\u822C\u4E0D\u4F1A\u56DE\u6536\uFF08\u9875\u9762\u5173\u95ED\u56DE\u6536\uFF09
	\u4E00\u822C\u60C5\u51B5\u4E0B\u5C40\u90E8\u53D8\u91CF\u7684\u503C\uFF0C\u4E0D\u7528\u4E86\uFF0C\u4F1A\u88AB\u81EA\u52A8\u56DE\u6536\u6389
\u5F15\u7528\u8BA1\u6570\u6CD5: \u82E5\u8BE5\u503C\u88AB\u5F15\u7528\u5219\u4F1A+1\uFF0C\u82E5\u51CF\u5C11\u5F15\u7528\u5219\u4F1A-1\uFF0C\u82E5\u5F15\u7528\u6570\u4E3A0\u5219\u88AB\u56DE\u6536\uFF0C\u5185\u5B58\u91CA\u653E
\u6807\u8BB0\u6E05\u695A\u53D1:\u4ECE\u6839\u90E8\u51FA\u53D1\u82E5\u6709\u5F15\u7528\u6807\u8BB0\u4E3A\u53EF\u8FBE\uFF0C\u672A\u5F15\u7528\u6807\u8BB0\u4E3A\u4E0D\u53EF\u8FBE\uFF0C\u5B9A\u65F6\u6E05\u7406\u4E0D\u53EF\u8FBE\u6570\u636E
</code></pre><h2 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h2><pre><code>const fn=(n1,n2)=&gt;n1+n2:\u82E5\u51FD\u6570\u4F53\u4E2D\u53EA\u6709\u4E00\u53E5\u4EE3\u7801\uFF0C\u53EF\u4EE5\u7701\u7565\u5927\u62EC\u53F7\u548Creturn

\u7BAD\u5934\u51FD\u6570\u4E0D\u7ED1\u5B9Athis\u5173\u952E\u5B57\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\uFF0C\u6307\u5411\u7684\u662F\u51FD\u6570\u5B9A\u4E49\u4F4D\u7F6E\u7684\u4E0A\u4E0B\u6587this

\u4F8B\uFF1A
	let obj={
		age:20,
		say:()=&gt;{
			alert(this.age)
		}
	}
	obj.say();//undefined
	\u5BF9\u8C61\u662F\u4E0D\u5B58\u5728\u4F5C\u7528\u57DF\uFF0Cthis\u6307\u5411\u7684\u662Fwindow,this.age\u8868\u793A\u5168\u5C40\u4F5C\u7528\u57DF\u7684age\u53D8\u91CF
</code></pre><h2 id="string-\u6269\u5C55\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#string-\u6269\u5C55\u65B9\u6CD5" aria-hidden="true">#</a> String \u6269\u5C55\u65B9\u6CD5</h2><pre><code>startsWith():\u8868\u793A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u539F\u5B57\u7B26\u4E32\u7684\u5934\u90E8\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C

endsWith()\uFF1A\u8868\u793A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u539F\u5B57\u7B26\u4E32\u7684\u5C3E\u90E8\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C

repeat():repeat\u65B9\u6CD5\u8868\u793A\u8BB2\u539F\u5B57\u7B26\u4E32\u91CD\u590Dn\u6B21\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5B57\u7B26\u4E32
</code></pre><p>\u200B \u200B</p>`,129),o=[p];function c(r,l){return a(),s("div",null,o)}var i=n(e,[["render",c],["__file","ES6.html.vue"]]);export{i as default};
