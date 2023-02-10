"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8938],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9300:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],l={},c="\u547d\u4ee4\u884c\u5de5\u5177",s={unversionedId:"basics/command_line_tool",id:"version-v0.2.2/basics/command_line_tool",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"\u4f5c\u8005: Shenggui Li",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v0.2.2/basics/command_line_tool.md",sourceDirName:"basics",slug:"/basics/command_line_tool",permalink:"/zh-Hans/docs/basics/command_line_tool",tags:[],version:"v0.2.2",frontMatter:{}},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"\u5b89\u88c5\u68c0\u67e5",id:"\u5b89\u88c5\u68c0\u67e5",children:[],level:2},{value:"\u542f\u52a8\u5206\u5e03\u5f0f\u8bad\u7ec3",id:"\u542f\u52a8\u5206\u5e03\u5f0f\u8bad\u7ec3",children:[],level:2},{value:"\u5f20\u91cf\u5e76\u884c\u57fa\u51c6\u6d4b\u8bd5",id:"\u5f20\u91cf\u5e76\u884c\u57fa\u51c6\u6d4b\u8bd5",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,o.kt)("p",null,"\u4f5c\u8005: Shenggui Li"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9884\u5907\u77e5\u8bc6:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-Hans/docs/concepts/distributed_training"},"Distributed Training")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-Hans/docs/concepts/colossalai_overview"},"Colossal-AI Overview"))),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"Colossal-AI\u7ed9\u7528\u6237\u63d0\u4f9b\u4e86\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u76ee\u524d\u547d\u4ee4\u884c\u5de5\u5177\u53ef\u4ee5\u7528\u6765\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u68c0\u67e5Colossal-AI\u662f\u5426\u5b89\u88c5\u6b63\u786e"),(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5206\u5e03\u5f0f\u8bad\u7ec3"),(0,o.kt)("li",{parentName:"ul"},"\u5f20\u91cf\u5e76\u884c\u57fa\u51c6\u6d4b\u8bd5")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u68c0\u67e5"},"\u5b89\u88c5\u68c0\u67e5"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"colossalai check -i"),"\u8fd9\u4e2a\u547d\u4ee4\u6765\u68c0\u67e5\u76ee\u524d\u73af\u5883\u91cc\u7684\u7248\u672c\u517c\u5bb9\u6027\u4ee5\u53caCUDA Extension\u7684\u72b6\u6001\u3002"),(0,o.kt)("figure",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://s2.loli.net/2022/05/04/KJmcVknyPHpBofa.png"}),(0,o.kt)("figcaption",null,"Check Installation Demo")),(0,o.kt)("h2",{id:"\u542f\u52a8\u5206\u5e03\u5f0f\u8bad\u7ec3"},"\u542f\u52a8\u5206\u5e03\u5f0f\u8bad\u7ec3"),(0,o.kt)("p",null,"\u5728\u5206\u5e03\u5f0f\u8bad\u7ec3\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"colossalai run"),"\u6765\u542f\u52a8\u5355\u8282\u70b9\u6216\u8005\u591a\u8282\u70b9\u7684\u591a\u8fdb\u7a0b\uff0c\u8be6\u7ec6\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh-Hans/docs/basics/launch_colossalai"},"\u542f\u52a8 Colossal-AI"),"\u3002"),(0,o.kt)("h2",{id:"\u5f20\u91cf\u5e76\u884c\u57fa\u51c6\u6d4b\u8bd5"},"\u5f20\u91cf\u5e76\u884c\u57fa\u51c6\u6d4b\u8bd5"),(0,o.kt)("p",null,"Colossal-AI\u63d0\u4f9b\u4e86\u591a\u79cd\u5f20\u91cf\u5e76\u884c\uff0c\u60f3\u8981\u5145\u5206\u7406\u89e3\u8fd9\u4e9b\u65b9\u6cd5\u9700\u8981\u4e00\u5b9a\u7684\u5b66\u4e60\u6210\u672c\uff0c\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u5f88\u96be\u9760\u7ecf\u9a8c\u9009\u62e9\u4e00\u4e2a\u5e76\u884c\u65b9\u5f0f\u3002\n\u6240\u4ee5\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u51c6\u6d4b\u8bd5\uff0c\u80fd\u591f\u8ba9\u7528\u6237\u5728\u81ea\u5df1\u7684\u673a\u5668\u4e0a\u6d4b\u8bd5\u4e0d\u540c\u5f20\u91cf\u5e76\u884c\u7684\u6027\u80fd\u3002\u8fd9\u4e2a\u57fa\u51c6\u6d4b\u8bd5\u8dd1\u4e00\u4e2a\u5e76\u884c\u7684MLP\u6a21\u578b\uff0c\n\u8f93\u5165\u6570\u636e\u7684\u7ef4\u5ea6\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"\uff08\u6279\u5927\u5c0f\uff0c\u5e8f\u5217\u957f\u5ea6\uff0c\u9690\u85cf\u5c42\u7ef4\u5ea6\uff09"),"\u3002\u901a\u8fc7\u6307\u5b9aGPU\u7684\u6570\u91cf\uff0cColossal-AI\u4f1a\u641c\u7d22\u6240\u6709\u53ef\u884c\u7684\u5e76\u884c\u914d\u7f6e\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"colossalai benchmark --help"),"\u6765\u81ea\u5b9a\u4e49\u76f8\u5173\u7684\u6d4b\u8bd5\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u75284\u4e2aGPU\ncolossalai benchmark --gpus 4\n\n# \u4f7f\u75288\u4e2aGPU\ncolossalai benchmark --gpus 8\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u26a0\ufe0f"),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u76ee\u524d\u4ec5\u652f\u6301\u5355\u8282\u70b9\u7684\u57fa\u51c6\u6d4b\u8bd5\u3002"))))}m.isMDXComponent=!0}}]);