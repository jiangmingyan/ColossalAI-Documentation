"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7427],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],l={},s="Integrate Mixture-of-Experts Into Your Model",p={unversionedId:"advanced_tutorials/integrate_mixture_of_experts_into_your_model",id:"version-v0.2.2/advanced_tutorials/integrate_mixture_of_experts_into_your_model",title:"Integrate Mixture-of-Experts Into Your Model",description:"Author: Haichen Huang",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v0.2.2/advanced_tutorials/integrate_mixture_of_experts_into_your_model.md",sourceDirName:"advanced_tutorials",slug:"/advanced_tutorials/integrate_mixture_of_experts_into_your_model",permalink:"/docs/advanced_tutorials/integrate_mixture_of_experts_into_your_model",tags:[],version:"v0.2.2",frontMatter:{}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Content",id:"table-of-content",children:[],level:2},{value:"Set up MoE running environment",id:"set-up-moe-running-environment",children:[],level:2},{value:"Create MoE layer",id:"create-moe-layer",children:[],level:2},{value:"Train Your Model",id:"train-your-model",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-mixture-of-experts-into-your-model"},"Integrate Mixture-of-Experts Into Your Model"),(0,a.kt)("p",null,"Author: Haichen Huang"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Code")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hpcaitech/ColossalAI-Examples/tree/main/image/widenet"},"ColossalAI-Examples WideNet"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Related Paper")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2101.03961"},"Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2107.11817"},"Go Wider Instead of Deeper"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Since the advent of Switch Transformer, the AI community has found Mixture of Experts (MoE) a useful technique to enlarge the capacity of deep learning models."),(0,a.kt)("p",null,"Colossal-AI provides an early access version of parallelism specifically designed for MoE models.\nThe most prominent advantage of MoE in Colossal-AI is convenience.\nWe aim to help our users to easily combine MoE with model parallelism and data parallelism."),(0,a.kt)("p",null,"However, the current implementation has two main drawbacks now.\nThe first drawback is its poor efficiency in large batch size and long sequence length training.\nThe second drawback is incompatibility with tensor parallelism.\nWe are working on system optimization to overcome the training efficiency problem.\nThe compatibility problem with tensor parallelism requires more adaptation, and we will tackle this issue in the future."),(0,a.kt)("p",null,"Here, we will introduce how to use MoE with model parallelism and data parallelism."),(0,a.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,a.kt)("p",null,"In this tutorial we will cover:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up MoE running environment"),(0,a.kt)("li",{parentName:"ol"},"Create MoE layer"),(0,a.kt)("li",{parentName:"ol"},"Train your model")),(0,a.kt)("p",null,"We provided the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpcaitech/ColossalAI-Examples/tree/main/image/widenet"},"example code")," for this tutorial in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpcaitech/ColossalAI-Examples"},"ColossalAI-Examples"),".\nThis example uses ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2107.11817"},"WideNet")," as an example of MoE-based model."),(0,a.kt)("h2",{id:"set-up-moe-running-environment"},"Set up MoE running environment"),(0,a.kt)("p",null,"In your project folder, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),"."),(0,a.kt)("p",null,"This file is to specify some features you may want to use to train your model.\nIn order to enable MoE, you need to add a dict called parallel and specify the value of key moe.\nYou can assign a value for the key size of moe, which represents the model parallel size of experts (i.e. the number of experts in one group to parallelize training)."),(0,a.kt)("p",null,"For example, if the size is 4, 4 processes will be assigned to 4 consecutive GPUs and these 4 processes form a moe model parallel group.\nEach process on the 4 GPUs will only get a portion of experts. Increasing the model parallel size will reduce communication cost, but increase computation cost in each GPU and activation cost in memory.\nThe total data parallel size is auto-detected and set as the number of GPUs by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"MOE_MODEL_PARALLEL_SIZE = ...\nparallel = dict(\n    moe=dict(size=MOE_MODEL_PARALLEL_SIZE)\n)\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"MOE_MODEL_PARALLEL_SIZE = E")," and set the number of experts as ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," is a constant number, the process flow of forward pass of a transformer encoder in a model parallel group is shown below."),(0,a.kt)("figure",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://s2.loli.net/2022/01/28/oI59QcxdteKUTks.png"}),(0,a.kt)("figcaption",null,"MoE Transformer, image source: ",(0,a.kt)("a",{href:"https://arxiv.org/abs/2006.16668"},"GShard"))),(0,a.kt)("p",null,"Since all experts are allocated to all GPUs in a model parallel group and a GPU only owns a portion of experts,\noriginal data parallel groups are no longer correct for the parameters of experts during gradient handling in backward pass anymore.\nSo we create a new kind of parallel group called moe data parallel group.\nThe difference among different kinds of parallel group, when the configuration is set as ",(0,a.kt)("inlineCode",{parentName:"p"},"WORLD_SIZE=4"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"MOE_MODEL_PARALLEL_SIZE=2"),", is shown here."),(0,a.kt)("figure",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://s2.loli.net/2022/01/28/Sn8FpmQPKIiBEq2.png"}),(0,a.kt)("figcaption",null,"MoE process group")),(0,a.kt)("p",null,"As for gradient handling, we provide MoeGradientHandler to all-reduce every parameter of the model.\nIf you use ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.initialize")," function to create your training engine, the MoE gradient handler will be added to your engine automatically.\nOtherwise, you should take care of gradient by yourself.\nAll parameters of MoE running environment are stored in colossalai.global_variables.moe_env.\nYou can access your configuration parameters to check whether your setup is correct."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.global_variables import moe_env\n")),(0,a.kt)("h2",{id:"create-moe-layer"},"Create MoE layer"),(0,a.kt)("p",null,"You can create a MoE layer from ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.nn.moe"),".\nBut before doing that, you should set up random seeds for all processes like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.context.random import moe_set_seed\nfrom model_zoo.moe.models import Widenet\n\nmoe_set_seed(42)\nmodel = Widenet(num_experts=4, capacity_factor=1.2)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"moe_set_seed")," will set different seed for different processes in a moe model parallel group.\nThis helps initialize parameters in experts.\nThen create an instance of experts and an instance of router.\nHere is the example in model zoo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.nn.layer.moe import Experts, MoeLayer, Top2Router, NormalNoiseGenerator\n\n\nnoisy_func = NormalNoiseGenerator(num_experts)\nshared_router = Top2Router(capacity_factor,\n                           noisy_func=noisy_func)\nshared_experts = Experts(expert=VanillaFFN,\n                         num_experts=num_experts,\n                         **moe_mlp_args(\n                             d_model=d_model,\n                             d_ff=d_ff,\n                             drop_rate=drop_rate\n                         ))\nffn=MoeLayer(dim_model=d_model, num_experts=num_experts,\n             router=shared_router, experts=shared_experts)\n")),(0,a.kt)("p",null,"Inside the initialization of Experts, the local expert number of each GPU will be calculated automatically. You just need to specify the class of each expert and its parameters used in its initialization. As for routers, we have provided top1 router and top2 router. You can find them in colossalai.nn.layer.moe. After creating the instance of experts and router, the only thing initialized in Moelayer is gate module. More definitions of each class can be found in our API document and code."),(0,a.kt)("h2",{id:"train-your-model"},"Train Your Model"),(0,a.kt)("p",null,"Do not to forget to use ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.initialize")," function in ",(0,a.kt)("inlineCode",{parentName:"p"},"colosalai")," to add gradient handler for the engine.\nWe handle the back-propagation of MoE models for you.\nIn ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.initialize"),", we will automatically create a ",(0,a.kt)("inlineCode",{parentName:"p"},"MoeGradientHandler")," object to process gradients.\nYou can find more information about the handler ",(0,a.kt)("inlineCode",{parentName:"p"},"MoeGradientHandler")," in colossal directory."),(0,a.kt)("p",null,"The loss criterion should be wrapped by ",(0,a.kt)("inlineCode",{parentName:"p"},"Moeloss")," to add auxiliary loss of MoE. Example is like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"criterion = MoeLoss(\n    aux_weight=0.01,\n    loss_fn=nn.CrossEntropyLoss,\n    label_smoothing=0.1\n)\n")),(0,a.kt)("p",null,"Finally, just use trainer or engine in ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai")," to do your training.\nOtherwise, you should take care of gradient by yourself."))}d.isMDXComponent=!0}}]);