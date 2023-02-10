"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={},s="Distributed Training",d={unversionedId:"concepts/distributed_training",id:"version-v0.2.2/concepts/distributed_training",title:"Distributed Training",description:"Author: Shenggui Li, Siqi Mai",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v0.2.2/concepts/distributed_training.md",sourceDirName:"concepts",slug:"/concepts/distributed_training",permalink:"/docs/concepts/distributed_training",tags:[],version:"v0.2.2",frontMatter:{}},p=[{value:"What is a distributed system?",id:"what-is-a-distributed-system",children:[],level:2},{value:"Why we need distributed training for machine learning?",id:"why-we-need-distributed-training-for-machine-learning",children:[],level:2},{value:"Basic Concepts in Distributed Training",id:"basic-concepts-in-distributed-training",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed-training"},"Distributed Training"),(0,i.kt)("p",null,"Author: Shenggui Li, Siqi Mai"),(0,i.kt)("h2",{id:"what-is-a-distributed-system"},"What is a distributed system?"),(0,i.kt)("figure",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://s2.loli.net/2022/01/28/sE5daHf2ohIy9wX.png"}),(0,i.kt)("figcaption",null,"Image source: ",(0,i.kt)("a",{href:"https://towardsdatascience.com/distributed-training-in-the-cloud-cloud-machine-learning-engine-9e264ddde27f"},"Towards Data Science"))),(0,i.kt)("p",null,"A distributed system consists of multiple software components which run on multiple machines. For example, the traditional\ndatabase runs on a single machine. As the amount of data gets incredibly large, a single machine can no longer deliver desirable\nperformance to the business, especially in situations such as Black Friday where network traffic can be unexpectedly high.\nTo handle such pressure, modern high-performance database is designed to run on multiple machines, and they work together to provide\nhigh throughput and low latency to the user."),(0,i.kt)("p",null,"One important evaluation metric for distributed system is scalability. For example, when we run an application on 4 machines,\nwe naturally expect that the application can run 4 times faster. However, due to communication overhead and difference in\nhardware performance, it is difficult to achieve linear speedup. Thus, it is important to consider how to make the application\nfaster when we implement it. Algorithms of good design and system optimization can help to deliver good performance. Sometimes,\nit is even possible to achieve linear and super-linear speedup."),(0,i.kt)("h2",{id:"why-we-need-distributed-training-for-machine-learning"},"Why we need distributed training for machine learning?"),(0,i.kt)("p",null,"Back in 2012, ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1404.5997"},"AlexNet")," won the champion of the ImageNet competition, and it was trained\non two GTX 580 3GB GPUs.\nToday, most models that appear in the top AI conferences are trained on multiple GPUs. Distributed training is definitely\na common practice when researchers and engineers develop AI models. There are several reasons behind this trend."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Model size increases rapidly. ",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1512.03385"},"ResNet50")," has 20 million parameters in 2015,\n",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1810.04805"},"BERT-Large")," has 345 million parameters in 2018,\n",(0,i.kt)("a",{parentName:"li",href:"https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"},"GPT-2"),"\nhas 1.5 billion parameters in 2018, and ",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2005.14165"},"GPT-3")," has 175 billion parameters in 2020.\nIt is obvious that the model size grows exponentially with time. The current largest model has exceeded more than 1000\nbillion parameters. Super large models generally deliver more superior performance compared to their smaller counterparts.",(0,i.kt)("figure",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://s2.loli.net/2022/01/28/sCyreJ9PF1EdZYf.jpg"}),(0,i.kt)("figcaption",null,"Image source: ",(0,i.kt)("a",{href:"https://huggingface.co/blog/large-language-models"},"HuggingFace"))))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Dataset size increases rapidly. For most machine learning developers, MNIST and CIFAR10 datasets are often the first few\ndatasets on which they train their models. However, these datasets are very small compared to well-known ImageNet datasets.\nGoogle even has its own (unpublished) JFT-300M dataset which has around 300 million images, and this is close to 300 times\nlarger than the ImageNet-1k dataset.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Computing power gets stronger. With the advancement in the semiconductor industry, graphics cards become more and more\npowerful. Due to its larger number of cores, GPU is the most common compute platform for deep learning.\nFrom K10 GPU in 2012 to A100 GPU in 2020, the computing power has increased several hundred times. This allows us to performance\ncompute-intensive tasks faster and deep learning is exactly such a task.")),(0,i.kt)("p",null,"Nowadays, the model can be too large to fit into a single GPU, and the dataset can be large enough to train for a hundred\ndays on a single GPU. Only by training our models on multiple GPUs with different parallelization techniques, we are able\nto speed up the training process and obtain results in a reasonable amount of time."),(0,i.kt)("h2",{id:"basic-concepts-in-distributed-training"},"Basic Concepts in Distributed Training"),(0,i.kt)("p",null,"Distributed training requires multiple machines/GPUs. During training, there will be communication among these devices.\nTo understand distributed training better, there are several important terms to be made clear."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"host: host is the main device in the communication network. It is often required as an argument when initializing the\ndistributed environment."),(0,i.kt)("li",{parentName:"ul"},"port: port here mainly refers to master port on the host for communication."),(0,i.kt)("li",{parentName:"ul"},"rank: the unique ID given to a device in the network."),(0,i.kt)("li",{parentName:"ul"},"world size: the number of devices in the network."),(0,i.kt)("li",{parentName:"ul"},"process group: a process group is a communication network which include a subset of the devices. There is always a default\nprocess group which contains all the devices. A subset devices can form a process group so that they only communicate among\nthe devices within the group.")),(0,i.kt)("figure",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://s2.loli.net/2022/01/28/qnNBKh8AjzgM5sY.png"}),(0,i.kt)("figcaption",null,"A distributed system example")),(0,i.kt)("p",null,"To illustrate these concepts, let's assume we have 2 machines (also called nodes), and each machine has 4 GPUs. When we\ninitialize distributed environment over these two machines, we essentially launch 8 processes (4 processes on each machine)\nand each process is bound to a GPU."),(0,i.kt)("p",null,"Before initializing the distributed environment, we need to specify the host (master address) and port (master port). In\nthis example, we can let host be node 0 and port be a number such as 29500. All the 8 processes will then look for the\naddress and port and connect to one another.\nThe default process group will then be created. The default process group has a world size of 8 and details are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"process ID"),(0,i.kt)("th",{parentName:"tr",align:null},"rank"),(0,i.kt)("th",{parentName:"tr",align:null},"Node index"),(0,i.kt)("th",{parentName:"tr",align:null},"GPU index"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"3")))),(0,i.kt)("p",null,"We can also create a new process group. This new process group can contain any subset of the processes.\nFor example, we can create one containing only even-number processes, and the details of this new group will be:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"process ID"),(0,i.kt)("th",{parentName:"tr",align:null},"rank"),(0,i.kt)("th",{parentName:"tr",align:null},"Node index"),(0,i.kt)("th",{parentName:"tr",align:null},"GPU index"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"2")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note that rank is relative to the process group and one process can have a different rank in different process\ngroups. The max rank is always ",(0,i.kt)("inlineCode",{parentName:"strong"},"world size of the process group - 1"),".")),(0,i.kt)("p",null,"In the process group, the processes can communicate in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"peer-to-peer: one process send data to another process"),(0,i.kt)("li",{parentName:"ol"},"collective: a group of process perform operations such as scatter, gather, all-reduce, broadcast together.")),(0,i.kt)("figure",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://s2.loli.net/2022/01/28/zTmlxgc3oeAdn97.png"}),(0,i.kt)("figcaption",null,"Collective communication, source: ",(0,i.kt)("a",{href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"},"PyTorch distributed tutorial"))))}c.isMDXComponent=!0}}]);