"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8584],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={},l="Introduction",c={unversionedId:"Colossal-Auto/get_started/introduction",id:"version-v0.2.2/Colossal-Auto/get_started/introduction",title:"Introduction",description:"In recent years, the deployment of large-scale machine learning models has become increasingly important. However, distributed training systems often require manual parallelization plans, which can be complex and require expert knowledge in system engineering and configuration. This can be a challenge for most AI developers without the necessary skills. The need for manual parallelization can make deploying large-scale machine learning models difficult and expensive.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v0.2.2/Colossal-Auto/get_started/introduction.md",sourceDirName:"Colossal-Auto/get_started",slug:"/Colossal-Auto/get_started/introduction",permalink:"/docs/Colossal-Auto/get_started/introduction",tags:[],version:"v0.2.2",frontMatter:{}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Graph Tracing",id:"graph-tracing",children:[],level:2},{value:"Fine-grained Parallelism Search",id:"fine-grained-parallelism-search",children:[],level:2},{value:"Distributed Tensor and Shape-Consistency System",id:"distributed-tensor-and-shape-consistency-system",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In recent years, the deployment of large-scale machine learning models has become increasingly important. However, distributed training systems often require ",(0,o.kt)("strong",{parentName:"p"},"manual parallelization plans"),", which can be complex and require expert knowledge in system engineering and configuration. This can be a challenge for most AI developers without the necessary skills. The need for manual parallelization can make deploying large-scale machine learning models difficult and expensive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Colossal-Auto")," simplifies the process of deploying large-scale machine learning models for AI developers. Compared to other solutions that require manual configuration of complex parallel policies and model modification, Colossal-Auto only requires one line of code from the user, along with cluster information and model configurations, to enable distributed training. Technically, It seamlessly ",(0,o.kt)("strong",{parentName:"p"},"integrates with popular AI model frameworks like Hugging Face and Timm.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("figure",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/hpcaitech/public_assets/main/colossalai/img/auto_parallel/auto_parallel.png"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# wrap the model using auto_engine\nmodel = autoparallelize(model, meta_input_samples)\n# normal training loop\n...\n")),(0,o.kt)("h2",{id:"graph-tracing"},"Graph Tracing"),(0,o.kt)("p",null,"Colossal-Auto is ",(0,o.kt)("strong",{parentName:"p"},"the first auto-parallelism system")," that uses static graph analysis based on the PyTorch framework. Obtaining a static execution plan for PyTorch, a dynamic graph framework, has long been an area of research in the field of machine learning systems. Colossal-Auto uses ColoTracer, a forked version of the torch.FX Tracer, to guide the search for an optimal parallelization strategy. The meta-information of each tensor, such as tensor shape, dims, dtype, etc., is computed and recorded during the tracing process. This approach has the advantage of better generalization, as it is not tied to specific models or configurations."),(0,o.kt)("h2",{id:"fine-grained-parallelism-search"},"Fine-grained Parallelism Search"),(0,o.kt)("p",null,"Colossal-AI\u2019s auto-parallelism searches for strategies in regard to each operand with the goal of achieving the fastest runtime while meeting memory budget constraints. It ultimately determines the actual training time strategy, including the tensor split strategy for each tensor, the type of communication operators to be inserted between different computing nodes, whether to replace operators, etc. The tensor, data, and hybrid parallelism such as column and row split used by NVIDIA in Megatron-LM and other parallelism systems are all subsets of strategies that can be searched by Colossal-AI. In addition to these parallelisms that can be manually specified, Colossal-AI can specify a unique parallelism method for each operation and, potentially finding a better parallelism strategy than what human experts could provide."),(0,o.kt)("h2",{id:"distributed-tensor-and-shape-consistency-system"},"Distributed Tensor and Shape-Consistency System"),(0,o.kt)("p",null,"The Colossal-AI system uses a device-mesh, similar to PyTorch's latest DTensor release, to manage its cluster. Colossal-AI uses a sharding-spec to annotate the storage status of each tensor and facilitate their distribution across the cluster. The system also employs a shape-consistency manager to automatically transform tensors between different sharding-specs, allowing for seamless slicing and dicing of tensors, while the shape-consistency manager ensures that the output of upstream operands is consistently stored in the cluster, regardless of how the input of downstream operands is stored. This makes Colossal-AI highly versatile and easy to use without users worrying about the storage status of tensors when performing operations on them."),(0,o.kt)("figure",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/hpcaitech/public_assets/main/colossalai/img/auto_parallel/shape_consistency.png"})),(0,o.kt)("p",null,"Here are some key advantages of Colossal-AI compared to PyTorch DTensor:\nColossal-AI's device-mesh uses cluster performance metrics and profiling results to estimate the time consumption of different communication operators. This helps Colossal-AI optimize communication between nodes and improve overall system efficiency.\nColossal-AI's shape-consistency manager uses a greedy search algorithm to find relatively efficient ways to transform tensors between different sharding-specs, rather than simply transforming dimensions one by one. This can lead to more efficient and effective transformations.\nThe integration of all-to-all operations in Colossal-AI increases the scalability of the system by enabling more efficient communication between nodes. This is especially useful for large-scale machine learning tasks that require the transfer of large amounts of data between nodes."))}d.isMDXComponent=!0}}]);