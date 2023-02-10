"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[3428],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return t?i.createElement(f,l(l({ref:n},c),{},{components:t})):i.createElement(f,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1204:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=t(3117),a=t(102),r=(t(7294),t(3905)),l=["components"],o={},s="Pipeline Parallel",p={unversionedId:"features/pipeline_parallel",id:"version-v0.2.2/features/pipeline_parallel",title:"Pipeline Parallel",description:"Author: Guangyang Lu, Hongxin Liu, Yongbin Li",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v0.2.2/features/pipeline_parallel.md",sourceDirName:"features",slug:"/features/pipeline_parallel",permalink:"/docs/features/pipeline_parallel",tags:[],version:"v0.2.2",frontMatter:{}},c=[{value:"Quick introduction",id:"quick-introduction",children:[],level:2},{value:"Table Of Content",id:"table-of-content",children:[],level:2},{value:"Introduction of 1F1B pipeline",id:"introduction-of-1f1b-pipeline",children:[{value:"Non-interleaved Schedule",id:"non-interleaved-schedule",children:[],level:3},{value:"Interleaved Schedule",id:"interleaved-schedule",children:[],level:3}],level:2},{value:"Usage of non-interleaved and interleaved schedule",id:"usage-of-non-interleaved-and-interleaved-schedule",children:[],level:2},{value:"Training ResNet with pipeline",id:"training-resnet-with-pipeline",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipeline-parallel"},"Pipeline Parallel"),(0,r.kt)("p",null,"Author: Guangyang Lu, Hongxin Liu, Yongbin Li"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisite")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/basics/define_your_config"},"Define Your Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/basics/engine_trainer"},"Use Engine and Trainer in Training")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/basics/configure_parallelization"},"Configure Parallelization"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Code")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hpcaitech/ColossalAI-Examples/tree/main/features/pipeline_parallel"},"ColossalAI-Examples ResNet with pipeline"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Related Paper")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2110.14883"},"Colossal-AI: A Unified Deep Learning System For Large-Scale Parallel Training")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2104.04473"},"Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1811.06965"},"GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism"))),(0,r.kt)("h2",{id:"quick-introduction"},"Quick introduction"),(0,r.kt)("p",null,"In this tutorial, you will learn how to use pipeline parallel. In Colossal-AI, we use 1F1B pipeline, introduced by Nvidia. In this case, ViT and Imagenet are too large to use. Therefore, here we use ResNet and Cifar as example."),(0,r.kt)("h2",{id:"table-of-content"},"Table Of Content"),(0,r.kt)("p",null,"In this tutorial we will cover:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Introduction of 1F1B pipeline."),(0,r.kt)("li",{parentName:"ol"},"Usage of non-interleaved and interleaved schedule."),(0,r.kt)("li",{parentName:"ol"},"Training ResNet with pipeline.")),(0,r.kt)("h2",{id:"introduction-of-1f1b-pipeline"},"Introduction of 1F1B pipeline"),(0,r.kt)("p",null,"First of all, we will introduce you GPipe for your better understanding."),(0,r.kt)("figure",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://s2.loli.net/2022/01/28/OAucPF6mWYynUtV.png"}),(0,r.kt)("figcaption",null,"Figure1: GPipe. This figure is from ",(0,r.kt)("a",{href:"https://arxiv.org/pdf/2104.04473.pdf"},"Megatron-LM")," paper.")),(0,r.kt)("p",null,"As you can see, for GPipe, only when the forward passes of all microbatches in a batch finish, the backward passes would be executed."),(0,r.kt)("p",null,"In general, 1F1B(one forward pass followed by one backward pass) is more efficient than GPipe(in memory or both memory and time). There are two schedules of 1F1B pipeline, the non-interleaved and the interleaved. The figures are shown below."),(0,r.kt)("figure",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://s2.loli.net/2022/01/28/iJrVkp2HLcahjsT.png"}),(0,r.kt)("figcaption",null,"Figure2: This figure is from ",(0,r.kt)("a",{href:"https://arxiv.org/pdf/2104.04473.pdf"},"Megatron-LM")," paper. The top part shows the default non-interleaved schedule. And the bottom part shows the interleaved schedule.")),(0,r.kt)("h3",{id:"non-interleaved-schedule"},"Non-interleaved Schedule"),(0,r.kt)("p",null,"The non-interleaved schedule can be divided into three stages. The first stage is the warm-up stage, where workers perform differing numbers of forward passes. At the following stage, workers perform one forward pass followed by one backward pass. Workers will finish backward passes at the last stage."),(0,r.kt)("p",null,"This mode is more memory-efficient than GPipe. However, it would take the same time to finish a turn of passes as GPipe."),(0,r.kt)("h3",{id:"interleaved-schedule"},"Interleaved Schedule"),(0,r.kt)("p",null,"This schedule requires ",(0,r.kt)("strong",{parentName:"p"},"the number of microbatches to be an integer multiple of the stage of pipeline"),"."),(0,r.kt)("p",null,"In this schedule, each device can perform computation for multiple subsets of layers(called a model chunk) instead of a single contiguous set of layers. i.e. Before device 1 had layer 1-4; device 2 had layer 5-8; and so on. But now device 1 has layer 1,2,9,10; device 2 has layer 3,4,11,12; and so on. With this scheme, each device in the pipeline is assigned multiple pipeline stages and each pipeline stage has less computation."),(0,r.kt)("p",null,"This mode is both memory-efficient and time-efficient."),(0,r.kt)("h2",{id:"usage-of-non-interleaved-and-interleaved-schedule"},"Usage of non-interleaved and interleaved schedule"),(0,r.kt)("p",null,"In Colossal-AI, we provided both non-interleaved(as ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineSchedule"),") and interleaved schedule(as  ",(0,r.kt)("inlineCode",{parentName:"p"},"InterleavedPipelineSchedule"),")."),(0,r.kt)("p",null,"You just need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"NUM_MICRO_BATCHES")," in config file and set ",(0,r.kt)("inlineCode",{parentName:"p"},"NUM_CHUNKS")," in config file if you want to use Interleaved Pipeline Schedule. If you certainly know the shape of each pipeline stage's output tensor and the shapes are all the same, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"TENSOR_SHAPE")," in config file to further reduce communication. Otherwise, you can just ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"tensor_shape"),", and the shape will be exchanged over pipeline stages automatically. Then we will generate an appropriate schedule for you."),(0,r.kt)("h2",{id:"training-resnet-with-pipeline"},"Training ResNet with pipeline"),(0,r.kt)("p",null,"Let's build the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResNet")," model first with Colossal PipelinableContext:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom typing import Callable, List, Optional, Type, Union\nimport torch\nimport torch.nn as nn\nimport colossalai\nimport colossalai.nn as col_nn\n\nfrom colossalai.core import global_context as gpc\nfrom colossalai.logging import disable_existing_loggers, get_dist_logger\nfrom colossalai.trainer import Trainer, hooks\nfrom colossalai.utils import MultiTimer, get_dataloader\nfrom colossalai.context import ParallelMode\nfrom colossalai.pipeline.pipelinable import PipelinableContext\n\nfrom titans.dataloader.cifar10 import build_cifar\nfrom torchvision.models import resnet50\nfrom torchvision.models.resnet import BasicBlock, Bottleneck, conv1x1\n\n# Define some config\nBATCH_SIZE = 64\nNUM_EPOCHS = 2\nNUM_CHUNKS = 1\nCONFIG = dict(NUM_MICRO_BATCHES=4, parallel=dict(pipeline=2))\n\n# Train\ndisable_existing_loggers()\nparser = colossalai.get_default_parser()\nargs = parser.parse_args()\ncolossalai.launch_from_torch(backend=args.backend, config=CONFIG)\nlogger = get_dist_logger()\npipelinable = PipelinableContext()\n\n# build model\nwith pipelinable:\n    model = resnet50()\n")),(0,r.kt)("p",null,"Define an execution sequence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"exec_seq = [\n    'conv1', 'bn1', 'relu', 'maxpool', 'layer1', 'layer2', 'layer3', 'layer4', 'avgpool',\n    (lambda x: torch.flatten(x, 1), \"behind\"), 'fc'\n]\npipelinable.to_layer_list(exec_seq)\n")),(0,r.kt)("p",null,"Partition the model into pipeline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model = pipelinable.partition(NUM_CHUNKS, gpc.pipeline_parallel_size, gpc.get_local_rank(ParallelMode.PIPELINE))\n")),(0,r.kt)("p",null,"In this tutorial, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Trainer")," to train ",(0,r.kt)("inlineCode",{parentName:"p"},"ResNet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# build criterion\ncriterion = nn.CrossEntropyLoss()\n\n# optimizer\noptimizer = torch.optim.Adam(model.parameters(), lr=1e-3)\n\n# build dataloader\nroot = os.environ.get('DATA', './data')\ntrain_dataloader, test_dataloader = build_cifar(BATCH_SIZE, root, padding=4, crop=32, resize=32)\n\nlr_scheduler = col_nn.lr_scheduler.LinearWarmupLR(optimizer, NUM_EPOCHS, warmup_steps=1)\nengine, train_dataloader, test_dataloader, lr_scheduler = colossalai.initialize(model, optimizer, criterion,\n                                                                                train_dataloader, test_dataloader,\n                                                                                lr_scheduler)\ntimer = MultiTimer()\n\ntrainer = Trainer(engine=engine, timer=timer, logger=logger)\n\nhook_list = [\n    hooks.LossHook(),\n    hooks.AccuracyHook(col_nn.metric.Accuracy()),\n    hooks.LogMetricByEpochHook(logger),\n    hooks.LRSchedulerHook(lr_scheduler, by_epoch=True)\n]\n\ntrainer.fit(train_dataloader=train_dataloader,\n            epochs=NUM_EPOCHS,\n            test_dataloader=test_dataloader,\n            test_interval=1,\n            hooks=hook_list,\n            display_progress=True)\n")),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," pipeline stages and the batch will be splitted into ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," micro batches."))}d.isMDXComponent=!0}}]);