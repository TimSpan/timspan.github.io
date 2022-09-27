import{_ as p,o,c as e,b as n,t as s,a as t}from"./app.4409970e.js";const c={},l=t(`<h1 id="vue-router3" tabindex="-1"><a class="header-anchor" href="#vue-router3" aria-hidden="true">#</a> Vue-Router3</h1><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><p><strong>\u524D\u7AEF\u8DEF\u7531:</strong></p><p>\u8DEF\u5F84\u548C\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB</p><p><strong>\u7EC4\u4EF6\u5206\u7C7B:</strong></p><p>.vue\u6587\u4EF6\u52062\u7C7B, \u4E00\u4E2A\u662F\u9875\u9762\u7EC4\u4EF6, \u4E00\u4E2A\u662F\u590D\u7528\u7EC4\u4EF6</p><p><strong>\u57FA\u672C\u4F7F\u7528:</strong></p><blockquote><p>\u6CE8\u610F: \u4E00\u5207\u90FD\u8981\u4EE5url\u4E0Ahash\u503C\u4E3A\u51C6</p></blockquote><h3 id="router-link" tabindex="-1"><a class="header-anchor" href="#router-link" aria-hidden="true">#</a> router-link</h3><ol><li>vue-router \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6 <code>router-link</code></li><li>router-link \u5B9E\u8D28\u4E0A\u6700\u7EC8\u4F1A\u6E32\u67D3\u6210a\u94FE\u63A5 to\u5C5E\u6027\u7B49\u4EF7\u4E8E\u63D0\u4F9B href\u5C5E\u6027(to\u65E0\u9700#)</li><li>router-link \u63D0\u4F9B\u4E86\u58F0\u660E\u5F0F\u5BFC\u822A\u9AD8\u4EAE\u7684\u529F\u80FD(\u81EA\u5E26\u7C7B\u540D)</li></ol><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/find<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/find<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u670B\u53CB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u58F0\u660E\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u5BFC\u822A</h3><p><strong>\u5728\u8DF3\u8F6C\u8DEF\u7531\u65F6, \u53EF\u4EE5\u7ED9\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5185\u4F20\u503C</strong></p><p><strong>\u5728router-link\u4E0A\u7684to\u5C5E\u6027\u4F20\u503C, \u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B:</strong></p><ul><li>/path?\u53C2\u6570\u540D=\u503C</li><li>/path/\u503C \u2013 \u9700\u8981\u8DEF\u7531\u5BF9\u8C61\u63D0\u524D\u914D\u7F6E path: \u201C/path/\u53C2\u6570\u540D\u201D</li></ul><p><strong>\u5BF9\u5E94\u9875\u9762\u7EC4\u4EF6\u7684\u63A5\u6536\u4F20\u9012\u8FC7\u6765\u7684\u503C</strong></p>`,16),u=t(`<h3 id="\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u91CD\u5B9A\u5411</h3><p><strong>\u5339\u914Dpath\u540E,\u5F3A\u5236\u8DF3\u8F6Cpath\u8DEF\u5F84</strong></p><p>\u7F51\u9875\u6253\u5F00url\u9ED8\u8BA4hash\u503C\u662F/\u8DEF\u5F84</p><p>redirect\u662F\u8BBE\u7F6E\u8981\u91CD\u5B9A\u5411\u5230\u54EA\u4E2A\u8DEF\u7531\u8DEF\u5F84</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/layout/home&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u91CD\u5B9A\u5411</span>
</code></pre></div><p><strong>404</strong></p><p>\u8DEF\u7531\u6700\u540E, path\u5339\u914D*(\u4EFB\u610F\u8DEF\u5F84) \u2013 \u524D\u9762\u4E0D\u5339\u914D\u5C31\u547D\u4E2D\u6700\u540E\u8FD9\u4E2A</p><h3 id="\u6A21\u5F0F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u8BBE\u7F6E" aria-hidden="true">#</a> \u6A21\u5F0F\u8BBE\u7F6E</h3><ul><li>hash\u8DEF\u7531\u4F8B\u5982: http://localhost:8080/#/home</li><li>history\u8DEF\u7531\u4F8B\u5982: http://localhost:8080/home (\u4EE5\u540E\u4E0A\u7EBF\u9700\u8981\u670D\u52A1\u5668\u7AEF\u652F\u6301, \u5426\u5219\u627E\u7684\u662F\u6587\u4EF6\u5939)</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// \uFF08\u7F29\u5199\uFF09\u76F8\u5F53\u4E8E routes: routes</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&quot;history&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h3><p>\u7528JS\u4EE3\u7801\u6765\u8FDB\u884C\u8DF3\u8F6C</p><p>\u8BED\u6CD5:path\u6216\u8005name\u4EFB\u9009\u4E00\u4E2A</p><h3 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u5D4C\u5957\u8DEF\u7531</h3><p>\u5728\u73B0\u6709\u7684\u4E00\u7EA7\u8DEF\u7531\u4E0B, \u518D\u5D4C\u5957\u4E8C\u7EA7\u8DEF\u7531</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> My <span class="token keyword">from</span> <span class="token string">&#39;./view/My.vue&#39;</span>
<span class="token keyword">import</span> Find <span class="token keyword">from</span> <span class="token string">&#39;./view/Find.vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> Ranking <span class="token keyword">from</span> <span class="token string">&#39;./view/Second/Ranking.vue&#39;</span>
<span class="token keyword">import</span> Recommend <span class="token keyword">from</span> <span class="token string">&#39;./view/Second/Recommend.vue&#39;</span>
<span class="token keyword">import</span> SongList <span class="token keyword">from</span> <span class="token string">&#39;./view/Second/SongList.vue&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token comment">//\u6BCF\u4E2A\u8DEF\u7531\u5E94\u8BE5\u6620\u5C04\u4E00\u4E2A\u7EC4\u4EF6</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> My <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6839\u8DEF\u5F84\u5BF9\u5E94\u7684\u5C31\u662FMy\u7EC4\u4EF6</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/find&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Find<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;ranking&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>Ranking
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;recommend&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>Recommend
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;songlist&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>SongList
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// \u521B\u5EFA router \u5B9E\u4F8B\uFF0C\u7136\u540E\u4F20 \`routes\` \u914D\u7F6E</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// \uFF08\u7F29\u5199\uFF09\u76F8\u5F53\u4E8E routes: routes</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&quot;history&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u8BB0\u5F97\u8981\u901A\u8FC7 router \u914D\u7F6E\u53C2\u6570\u6CE8\u5165\u8DEF\u7531\uFF0C\u4ECE\u800C\u8BA9\u6574\u4E2A\u5E94\u7528\u90FD\u6709\u8DEF\u7531\u529F\u80FD</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div><div class="language-html ext-html"><pre class="language-html"><code>App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u4F7F\u7528 router-link \u7EC4\u4EF6\u6765\u5BFC\u822A. --&gt;</span>
      <span class="token comment">&lt;!-- \u901A\u8FC7\u4F20\u5165 \`to\` \u5C5E\u6027\u6307\u5B9A\u94FE\u63A5. --&gt;</span>
      <span class="token comment">&lt;!-- &lt;router-link&gt; \u9ED8\u8BA4\u4F1A\u88AB\u6E32\u67D3\u6210\u4E00\u4E2A \`&lt;a&gt;\` \u6807\u7B7E --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/find<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u8DEF\u7531\u51FA\u53E3 --&gt;</span>
    <span class="token comment">&lt;!-- \u8DEF\u7531\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u5C06\u6E32\u67D3\u5728\u8FD9\u91CC --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html ext-html"><pre class="language-html"><code>Find.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u53D1\u73B0\u97F3\u4E50\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/find/ranking<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Ranking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/find/recommend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Recommend<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/find/songList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to SongList<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4E8C\u7EA7\u8DEF\u7531 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,19);function r(a,k){return o(),e("div",null,[l,n("ul",null,[n("li",null,s(a.$route.query.\u53C2\u6570\u540D),1),n("li",null,s(a.$route.params.\u53C2\u6570\u540D),1)]),u])}var g=p(c,[["render",r],["__file","Vue-Router.html.vue"]]);export{g as default};
