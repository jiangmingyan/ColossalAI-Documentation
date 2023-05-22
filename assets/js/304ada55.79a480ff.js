"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={},o="Define Your Configuration",l={unversionedId:"basics/define_your_config",id:"basics/define_your_config",title:"Define Your Configuration",description:"Author: Guangyang Lu, Shenggui Li, Siqi Mai",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/basics/define_your_config.md",sourceDirName:"basics",slug:"/basics/define_your_config",permalink:"/docs/basics/define_your_config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/define_your_config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Booster Checkpoint",permalink:"/docs/basics/booster_checkpoint"},next:{title:"Initialize Features",permalink:"/docs/basics/initialize_features"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration Definition",id:"configuration-definition",level:2},{value:"Feature Specification",id:"feature-specification",level:3},{value:"Global Hyper-parameters",id:"global-hyper-parameters",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"define-your-configuration"},"Define Your Configuration"),(0,r.kt)("p",null,"Author: Guangyang Lu, Shenggui Li, Siqi Mai"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/distributed_training"},"Distributed Training")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/colossalai_overview"},"Colossal-AI Overview"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In Colossal-AI, a configuration file is required to specify the features the system will inject into the training process.\nIn this tutorial, we will introduce you how to construct your configuration file and how this config file will be used.\nUsing configuration file has several advantages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can store your feature configuration and training hyper-parameters in different configuration files"),(0,r.kt)("li",{parentName:"ol"},"New features released in the future can be specified in the configuration without code change in the training script")),(0,r.kt)("p",null,"In this tutorial, we will cover how to define your configuration file."),(0,r.kt)("h2",{id:"configuration-definition"},"Configuration Definition"),(0,r.kt)("p",null,"In a configuration file, there are two types of variables. One serves as feature specification and the other serves\nas hyper-parameters. All feature-related variables are reserved keywords. For example, if you want to use mixed precision\ntraining, you need to use the variable name ",(0,r.kt)("inlineCode",{parentName:"p"},"fp16")," in the config file and follow a pre-defined format."),(0,r.kt)("h3",{id:"feature-specification"},"Feature Specification"),(0,r.kt)("p",null,"There is an array of features Colossal-AI provides to speed up training. Each feature is defined by a corresponding field\nin the config file. In this tutorial, we are not giving the config details for all the features, but rather we are providing\nan illustration of how to specify a feature. ",(0,r.kt)("strong",{parentName:"p"},"The details of each feature can be found in its respective tutorial.")),(0,r.kt)("p",null,"To illustrate the use of config file, we use mixed precision training as an example here. In order to do so, you need to\nfollow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"create a configuration file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"config.py"),", the file name can be anything)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"define the mixed precision configuration in the config file. For example, in order to use mixed precision training\nnatively provided by PyTorch, you can just write these lines of code below into your config file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.amp import AMP_TYPE\n\nfp16 = dict(\n  mode=AMP_TYPE.TORCH\n)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tell Colossal-AI where your config file is when launch the distributed environment. For example, the config file is in\nthe current directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import colossalai\n\ncolossalai.launch(config='./config.py', ...)\n")))),(0,r.kt)("p",null,"In this way, Colossal-AI knows what features you want to use and will inject this feature during ",(0,r.kt)("inlineCode",{parentName:"p"},"colossalai.initialize"),"."),(0,r.kt)("h3",{id:"global-hyper-parameters"},"Global Hyper-parameters"),(0,r.kt)("p",null,"Besides feature specification, the config file can also serve as a place to define your training hyper-parameters. This\ncomes handy when you want to perform multiple experiments, each experiment details can be put into a single config file\nto avoid confusion. These parameters will be stored in the global parallel context and can be accessed in the training script."),(0,r.kt)("p",null,"For example, you can specify the batch size in your config file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"BATCH_SIZE = 32\n")),(0,r.kt)("p",null,"After launch, you are able to access your hyper-parameters through global parallel context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import colossalai\nfrom colossalai.core import global_context as gpc\n\ncolossalai.launch(config='./config.py', ...)\n\n# access your parameter\nprint(gpc.config.BATCH_SIZE)\n\n")))}f.isMDXComponent=!0}}]);