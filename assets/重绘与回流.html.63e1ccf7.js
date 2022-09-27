import{_ as e,o as i,c as l,a}from"./app.4409970e.js";const r={},o=a('<h1 id="\u91CD\u7ED8\u4E0E\u56DE\u6D41" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7ED8\u4E0E\u56DE\u6D41" aria-hidden="true">#</a> \u91CD\u7ED8\u4E0E\u56DE\u6D41</h1><p>\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u8FDB\u884C\u754C\u9762\u6E32\u67D3\u7684?</p><ol><li>\u89E3\u6790\uFF08Parser\uFF09HTML\uFF0C\u751F\u6210DOM\u6811(DOM Tree)</li><li>\u540C\u65F6\u89E3\u6790\uFF08Parser\uFF09 CSS\uFF0C\u751F\u6210\u6837\u5F0F\u89C4\u5219 (Style Rules)</li><li>\u6839\u636EDOM\u6811\u548C\u6837\u5F0F\u89C4\u5219\uFF0C\u751F\u6210\u6E32\u67D3\u6811(Render Tree)</li><li>\u8FDB\u884C\u5E03\u5C40 Layout(\u56DE\u6D41/\u91CD\u6392):\u6839\u636E\u751F\u6210\u7684\u6E32\u67D3\u6811\uFF0C\u5F97\u5230\u8282\u70B9\u7684\u51E0\u4F55\u4FE1\u606F\uFF08\u4F4D\u7F6E\uFF0C\u5927\u5C0F\uFF09</li><li>\u8FDB\u884C\u7ED8\u5236 Painting(\u91CD\u7ED8): \u6839\u636E\u8BA1\u7B97\u548C\u83B7\u53D6\u7684\u4FE1\u606F\u8FDB\u884C\u6574\u4E2A\u9875\u9762\u7684\u7ED8\u5236</li><li>Display: \u5C55\u793A\u5728\u9875\u9762\u4E0A</li></ol><h2 id="\u56DE\u6D41-\u91CD\u6392" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6D41-\u91CD\u6392" aria-hidden="true">#</a> \u56DE\u6D41(\u91CD\u6392)</h2><p>\u5F53 Render Tree \u4E2D\u90E8\u5206\u6216\u8005\u5168\u90E8\u5143\u7D20\u7684\u5C3A\u5BF8\u3001\u7ED3\u6784\u3001\u5E03\u5C40\u7B49\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\u90E8\u5206\u6216\u5168\u90E8\u6587\u6863\u7684\u8FC7 \u7A0B\u79F0\u4E3A \u56DE\u6D41</p><h2 id="\u91CD\u7ED8" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7ED8" aria-hidden="true">#</a> \u91CD\u7ED8</h2><p>\u7531\u4E8E\u8282\u70B9(\u5143\u7D20)\u7684\u6837\u5F0F\u7684\u6539\u53D8\u5E76\u4E0D\u5F71\u54CD\u5B83\u5728\u6587\u6863\u6D41\u4E2D\u7684\u4F4D\u7F6E\u548C\u6587\u6863\u5E03\u5C40\u65F6(\u6BD4\u5982\uFF1Acolor\u3001background-color\u3001 outline\u7B49), \u79F0\u4E3A\u91CD\u7ED8\u3002</p><blockquote><p>\u91CD\u7ED8\u4E0D\u4E00\u5B9A\u5F15\u8D77\u56DE\u6D41\uFF0C\u800C\u56DE\u6D41\u4E00\u5B9A\u4F1A\u5F15\u8D77\u91CD\u7ED8\u3002</p></blockquote><h2 id="\u4F1A\u5BFC\u81F4\u56DE\u6D41-\u91CD\u6392-\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u5BFC\u81F4\u56DE\u6D41-\u91CD\u6392-\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u4F1A\u5BFC\u81F4\u56DE\u6D41(\u91CD\u6392)\u7684\u64CD\u4F5C</h2><ul><li>\u9875\u9762\u7684\u9996\u6B21\u5237\u65B0</li><li>\u6D4F\u89C8\u5668\u7684\u7A97\u53E3\u5927\u5C0F\u53D1\u751F\u6539\u53D8</li><li>\u5143\u7D20\u7684\u5927\u5C0F\u6216\u4F4D\u7F6E\u53D1\u751F\u6539\u53D8</li><li>\u6539\u53D8\u5B57\u4F53\u7684\u5927\u5C0F</li><li>\u5185\u5BB9\u7684\u53D8\u5316\uFF08\u5982\uFF1Ainput\u6846\u7684\u8F93\u5165\uFF0C\u56FE\u7247\u7684\u5927\u5C0F\uFF09</li><li>\u6FC0\u6D3Bcss\u4F2A\u7C7B \uFF08\u5982\uFF1A:hover\uFF09</li><li>\u811A\u672C\u64CD\u4F5CDOM\uFF08\u6DFB\u52A0\u6216\u8005\u5220\u9664\u53EF\u89C1\u7684DOM\u5143\u7D20\uFF09</li></ul><blockquote><p>\u7B80\u5355\u7406\u89E3\u5F71\u54CD\u5230\u5E03\u5C40\u4E86\uFF0C\u5C31\u4F1A\u6709\u56DE\u6D41</p></blockquote>',11),t=[o];function c(n,d){return i(),l("div",null,t)}var s=e(r,[["render",c],["__file","\u91CD\u7ED8\u4E0E\u56DE\u6D41.html.vue"]]);export{s as default};
