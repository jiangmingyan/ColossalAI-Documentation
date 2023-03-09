"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"get_started/installation",id:"get_started/installation",title:"installation",description:"Requirements:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get_started/installation.md",sourceDirName:"get_started",slug:"/get_started/installation",permalink:"/docs/get_started/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/get_started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Quick Demo",permalink:"/docs/get_started/run_demo"}},s={},u=[{value:"Download From PyPI",id:"download-from-pypi",level:2},{value:"Download From Source",id:"download-from-source",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PyTorch >= 1.11 (PyTorch 2.x in progress)"),(0,o.kt)("li",{parentName:"ul"},"Python >= 3.7"),(0,o.kt)("li",{parentName:"ul"},"CUDA >= 11.0")),(0,o.kt)("p",null,"If you encounter any problem about installation, you may want to raise an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hpcaitech/ColossalAI/issues/new/choose"},"issue")," in this repository."),(0,o.kt)("h2",{id:"download-from-pypi"},"Download From PyPI"),(0,o.kt)("p",null,"You can install Colossal-AI with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip install colossalai\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: only Linux is supported for now")),(0,o.kt)("p",null,"If you want to build PyTorch extensions during installation, you can use the command below. Otherwise, the PyTorch extensions will be built during runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"CUDA_EXT=1 pip install colossalai\n")),(0,o.kt)("h2",{id:"download-from-source"},"Download From Source"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The version of Colossal-AI will be in line with the main branch of the repository. Feel free to raise an issue if you encounter any problem. :)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/hpcaitech/ColossalAI.git\ncd ColossalAI\n\n# install dependency\npip install -r requirements/requirements.txt\n\n# install colossalai\npip install .\n")),(0,o.kt)("p",null,"If you don't want to install and enable CUDA kernel fusion (compulsory installation when using fused optimizer):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"CUDA_EXT=1 pip install .\n")))}d.isMDXComponent=!0}}]);