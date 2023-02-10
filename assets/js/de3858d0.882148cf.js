"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[2133],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return u}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,_=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?t.createElement(_,r(r({ref:n},d),{},{components:a})):t.createElement(_,r({ref:n},d))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9936:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var t=a(3117),i=a(102),l=(a(7294),a(3905)),r=["components"],o={},s="Step By Step: Accelerate ViT Training With Colossal-AI (From Data Parallel to Hybrid Parallel)",p={unversionedId:"advanced_tutorials/train_vit_with_hybrid_parallelism",id:"version-v0.2.2/advanced_tutorials/train_vit_with_hybrid_parallelism",title:"Step By Step: Accelerate ViT Training With Colossal-AI (From Data Parallel to Hybrid Parallel)",description:"Author: Yuxuan Lou",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v0.2.2/advanced_tutorials/train_vit_with_hybrid_parallelism.md",sourceDirName:"advanced_tutorials",slug:"/advanced_tutorials/train_vit_with_hybrid_parallelism",permalink:"/docs/advanced_tutorials/train_vit_with_hybrid_parallelism",tags:[],version:"v0.2.2",frontMatter:{}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Tabel of Contents",id:"tabel-of-contents",children:[],level:2},{value:"Colossal-AI Installation",id:"colossal-ai-installation",children:[],level:2},{value:"Data Parallelism",id:"data-parallelism",children:[{value:"Define your configuration file (<code>data_parallel/config.py</code>)",id:"define-your-configuration-file-data_parallelconfigpy",children:[],level:3},{value:"Modify train script (<code>/data_parallel/train_with_cifar10.py</code>)",id:"modify-train-script-data_paralleltrain_with_cifar10py",children:[{value:"Import modules",id:"import-modules",children:[],level:4},{value:"Lauch Colossal-AI",id:"lauch-colossal-ai",children:[],level:4},{value:"Build Model",id:"build-model",children:[],level:4},{value:"Build CIFAR-10 Dataloader",id:"build-cifar-10-dataloader",children:[],level:4},{value:"Define optimizer, loss function and LR scheduler",id:"define-optimizer-loss-function-and-lr-scheduler",children:[],level:4},{value:"Start Colossal-AI engine",id:"start-colossal-ai-engine",children:[],level:4},{value:"Train: Trainer API",id:"train-trainer-api",children:[],level:4}],level:3},{value:"Start training",id:"start-training",children:[],level:3}],level:2},{value:"Pipeline Parallelism",id:"pipeline-parallelism",children:[{value:"Define your configuration file(<code>hybrid_parallel/configs/vit_pipeline.py</code>)",id:"define-your-configuration-filehybrid_parallelconfigsvit_pipelinepy",children:[],level:3},{value:"Build pipeline model (<code>/hybrid_parallel/model/vit.py</code>)",id:"build-pipeline-model-hybrid_parallelmodelvitpy",children:[],level:3},{value:"Modify train script (<code>/hybrid_parallel/train_with_cifar10.py</code>)",id:"modify-train-script-hybrid_paralleltrain_with_cifar10py",children:[{value:"Import modules",id:"import-modules-1",children:[],level:4},{value:"Launch Colossal-AI",id:"launch-colossal-ai",children:[],level:4},{value:"Define model",id:"define-model",children:[],level:4},{value:"Count number of parameters",id:"count-number-of-parameters",children:[],level:4},{value:"Build dataloader, optimizer, etc.",id:"build-dataloader-optimizer-etc",children:[],level:4},{value:"Start Colossal-AI engine",id:"start-colossal-ai-engine-1",children:[],level:4},{value:"Train: based on engine",id:"train-based-on-engine",children:[],level:4}],level:3},{value:"Start training",id:"start-training-1",children:[],level:3}],level:2},{value:"Tensor Parallelism and Hybrid Parallelism",id:"tensor-parallelism-and-hybrid-parallelism",children:[{value:"Define your configuration file(<code>/hybrid_parallel/configs/vit_1d_tp2_pp2.py</code>)",id:"define-your-configuration-filehybrid_parallelconfigsvit_1d_tp2_pp2py",children:[],level:3},{value:"Start training",id:"start-training-2",children:[],level:3}],level:2}],c={toc:d};function m(e){var n=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"step-by-step-accelerate-vit-training-with-colossal-ai-from-data-parallel-to-hybrid-parallel"},"Step By Step: Accelerate ViT Training With Colossal-AI (From Data Parallel to Hybrid Parallel)"),(0,l.kt)("p",null,"Author: Yuxuan Lou"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Code")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hpcaitech/ColossalAI-Examples/tree/main/image/vision_transformer"},"Colossal-AI Examples ViT on Cifar10"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Related Paper")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2010.11929.pdf"},"An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"In this example for ViT model, Colossal-AI provides three different parallelism techniques which acclerate model training: data parallelism, pipeline parallelism and tensor parallelism.\nWe will show you how to train ViT on CIFAR-10 dataset with these parallelism techniques. To run this example, you will need 2-4 GPUs."),(0,l.kt)("h2",{id:"tabel-of-contents"},"Tabel of Contents"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Colossal-AI installation"),(0,l.kt)("li",{parentName:"ol"},"Steps to train ViT with data parallelism"),(0,l.kt)("li",{parentName:"ol"},"Steps to train ViT with pipeline parallelism"),(0,l.kt)("li",{parentName:"ol"},"Steps to train ViT with tensor parallelism or hybrid parallelism")),(0,l.kt)("h2",{id:"colossal-ai-installation"},"Colossal-AI Installation"),(0,l.kt)("p",null,"You can install Colossal-AI pacakage and its dependencies with PyPI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install colossalai\n")),(0,l.kt)("h2",{id:"data-parallelism"},"Data Parallelism"),(0,l.kt)("p",null,"Data parallism is one basic way to accelerate model training process. You can apply data parallism to training by only two steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Define a configuration file"),(0,l.kt)("li",{parentName:"ol"},"Change a few lines of code in train script")),(0,l.kt)("h3",{id:"define-your-configuration-file-data_parallelconfigpy"},"Define your configuration file (",(0,l.kt)("inlineCode",{parentName:"h3"},"data_parallel/config.py"),")"),(0,l.kt)("p",null,"To use Colossal-AI, the first step is to define a configuration file. And there are two kinds of variables here:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Colossal-AI feature specification"))),(0,l.kt)("p",null,"There is an array of features Colossal-AI provides to speed up training (parallel mode, mixed precision, ZeRO, etc.). Each feature is defined by a corresponding field in the config file. If we apply data parallel only, we do not need to specify the parallel mode. In this example, we use mixed precision training natively provided by PyTorch by define the mixed precision configuration ",(0,l.kt)("inlineCode",{parentName:"p"},"fp16 = dict(mode=AMP_TYPE.TORCH)"),"."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Global hyper-parameters"))),(0,l.kt)("p",null,"Global hyper-parameters include model-specific hyper-parameters, training settings, dataset information, etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.amp import AMP_TYPE\n\n# ViT Base\nBATCH_SIZE = 256\nDROP_RATE = 0.1\nNUM_EPOCHS = 300\n\n# mix precision\nfp16 = dict(\n    mode=AMP_TYPE.TORCH,\n)\n\ngradient_accumulation = 16\nclip_grad_norm = 1.0\n\ndali = dict(\n    gpu_aug=True,\n    mixup_alpha=0.2\n)\n")),(0,l.kt)("h3",{id:"modify-train-script-data_paralleltrain_with_cifar10py"},"Modify train script (",(0,l.kt)("inlineCode",{parentName:"h3"},"/data_parallel/train_with_cifar10.py"),")"),(0,l.kt)("h4",{id:"import-modules"},"Import modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Colossal-AI related modules")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import colossalai\nfrom colossalai.context import ParallelMode\nfrom colossalai.core import global_context as gpc\nfrom colossalai.logging import disable_existing_loggers, get_dist_logger\nfrom colossalai.nn.lr_scheduler import LinearWarmupLR\nfrom colossalai.nn.metric import Accuracy\nfrom colossalai.trainer import Trainer, hooks\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Other modules")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import os\n\nimport torch\nfrom timm.models import vit_base_patch16_224\n\n\nfrom torchvision import transforms\nfrom torchvision.datasets import CIFAR10\n")),(0,l.kt)("h4",{id:"lauch-colossal-ai"},"Lauch Colossal-AI"),(0,l.kt)("p",null,"In train script,  you need to initialize the distributed environment for Colossal-AI after your config file is prepared. We call this process ",(0,l.kt)("inlineCode",{parentName:"p"},"launch"),". In Colossal-AI, we provided several launch methods to initialize the distributed backend. In most cases, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.launch")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.get_default_parser")," to pass the parameters via command line. Besides, Colossal-AI can utilize the existing launch tool provided by PyTorch as many users are familiar with by using ",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.launch_from_torch"),". For more details, you can view the related ",(0,l.kt)("a",{parentName:"p",href:"https://www.colossalai.org/docs/basics/launch_colossalai"},"documents"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# initialize distributed setting\nparser = colossalai.get_default_parser()\nargs = parser.parse_args()\ncolossalai.launch_from_torch(config=args.config)\n\ndisable_existing_loggers()\nlogger = get_dist_logger()\n")),(0,l.kt)("p",null,"After initialization, you can acess the variables in the config file by using ",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.core.global_context"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"#access parameters\nprint(gpc.config.BATCH_SIZE)\n")),(0,l.kt)("h4",{id:"build-model"},"Build Model"),(0,l.kt)("p",null,"If only data parallelism is required, you do not need to make any changes to your model. Here, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"vit_base_patch16_224")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"timm"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# build model\nmodel = vit_base_patch16_224(drop_rate=0.1, num_classes=gpc.config.NUM_CLASSES)\n")),(0,l.kt)("h4",{id:"build-cifar-10-dataloader"},"Build CIFAR-10 Dataloader"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.utils.get_dataloader")," can help you build dataloader easily."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_cifar(batch_size):\n    transform_train = transforms.Compose([\n        transforms.RandomCrop(224, pad_if_needed=True),\n        transforms.AutoAugment(policy=transforms.AutoAugmentPolicy.CIFAR10),\n        transforms.ToTensor(),\n        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),\n    ])\n    transform_test = transforms.Compose([\n        transforms.Resize(224),\n        transforms.ToTensor(),\n        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),\n    ])\n\n    train_dataset = CIFAR10(root=os.environ['DATA'], train=True, download=True, transform=transform_train)\n    test_dataset = CIFAR10(root=os.environ['DATA'], train=False, transform=transform_test)\n    train_dataloader = get_dataloader(dataset=train_dataset, shuffle=True, batch_size=batch_size, pin_memory=True)\n    test_dataloader = get_dataloader(dataset=test_dataset, batch_size=batch_size, pin_memory=True)\n    return train_dataloader, test_dataloader\n\n\n# build dataloader\ntrain_dataloader, test_dataloader = build_cifar(gpc.config.BATCH_SIZE)\n")),(0,l.kt)("h4",{id:"define-optimizer-loss-function-and-lr-scheduler"},"Define optimizer, loss function and LR scheduler"),(0,l.kt)("p",null,"Colossal-AI provides its own optimizer, loss function and LR scheduler. Those from PyTorch are also compatible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# build optimizer\noptimizer = colossalai.nn.Lamb(model.parameters(), lr=1.8e-2, weight_decay=0.1)\n\n# build loss\ncriterion = torch.nn.CrossEntropyLoss()\n\n# lr_scheduelr\nlr_scheduler = LinearWarmupLR(optimizer, warmup_steps=50, total_steps=gpc.config.NUM_EPOCHS)\n")),(0,l.kt)("h4",{id:"start-colossal-ai-engine"},"Start Colossal-AI engine"),(0,l.kt)("p",null,"Engine is essentially a wrapper class for model, optimizer and loss function. When we call ",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.initialize"),", an engine object will be returned, and it has already been equipped with functionalities such as gradient clipping, gradient accumulation and zero optimizer as specified in your configuration file. Further model training is based on Colossal-AI engine."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"engine, train_dataloader, test_dataloader, _ = colossalai.initialize(\n        model, optimizer, criterion, train_dataloader, test_dataloader\n    )\n")),(0,l.kt)("h4",{id:"train-trainer-api"},"Train: Trainer API"),(0,l.kt)("p",null,"Trainer is a more high-level wrapper for the user to execute training with fewer lines of code. It is easy to create a trainer object by passing the engine object."),(0,l.kt)("p",null,"Besides, In trainer, the user can customize some hooks and attach these hooks to the trainer object. A hook object will execute life-cycle methods periodically based on the training scheme. For example, The ",(0,l.kt)("inlineCode",{parentName:"p"},"LRSchedulerHook")," will execute ",(0,l.kt)("inlineCode",{parentName:"p"},"lr_scheduler.step()")," to update the learning rate of the model during either ",(0,l.kt)("inlineCode",{parentName:"p"},"after_train_iter")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"after_train_epoch")," stages."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# build trainer\ntrainer = Trainer(engine=engine, logger=logger)\n\n# build hooks\nhook_list = [\n    hooks.LossHook(),\n    hooks.AccuracyHook(accuracy_func=MixupAccuracy()),\n    hooks.LogMetricByEpochHook(logger),\n    hooks.LRSchedulerHook(lr_scheduler, by_epoch=True),\n\n    # comment if you do not need to use the hooks below\n    hooks.SaveCheckpointHook(interval=1, checkpoint_dir='./ckpt'),\n    hooks.TensorboardHook(log_dir='./tb_logs', ranks=[0]),\n]\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"trainer.fit")," for training:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# start training\ntrainer.fit(\n    train_dataloader=train_dataloader,\n    test_dataloader=test_dataloader,\n    epochs=gpc.config.NUM_EPOCHS,\n    hooks=hook_list,\n    display_progress=True,\n    test_interval=1\n)\n")),(0,l.kt)("h3",{id:"start-training"},"Start training"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATA")," is the filepath where CIFAR-10 dataset will be automatically downloaded and stored."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<NUM_GPUs>")," is the number of GPUs you want to use to train ViT on CIFAR-10 with data parallelism."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export DATA=<path_to_data>\n# If your torch >= 1.10.0\ntorchrun --standalone --nproc_per_node <NUM_GPUs>  train_dp.py --config ./configs/config_data_parallel.py\n# If your torch >= 1.9.0\n# python -m torch.distributed.run --standalone --nproc_per_node= <NUM_GPUs> train_dp.py --config ./configs/config_data_parallel.py\n# Otherwise\n# python -m torch.distributed.launch --nproc_per_node <NUM_GPUs> --master_addr <node_name> --master_port 29500 train_dp.py --config ./configs/config.py\n")),(0,l.kt)("h2",{id:"pipeline-parallelism"},"Pipeline Parallelism"),(0,l.kt)("p",null,"Aside from data parallelism, Colossal-AI also support pipleline parallelism. In specific, Colossal-AI uses 1F1B pipeline introduced by NVIDIA. For more details, you can view the related ",(0,l.kt)("a",{parentName:"p",href:"https://www.colossalai.org/tutorials/features/pipeline_parallel"},"documents"),"."),(0,l.kt)("h3",{id:"define-your-configuration-filehybrid_parallelconfigsvit_pipelinepy"},"Define your configuration file(",(0,l.kt)("inlineCode",{parentName:"h3"},"hybrid_parallel/configs/vit_pipeline.py"),")"),(0,l.kt)("p",null,"To apply pipleline parallel on the data parallel basis, you only need to add a ",(0,l.kt)("strong",{parentName:"p"},"parallel dict")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.amp import AMP_TYPE\n\nparallel = dict(\n    pipeline=2\n)\n# pipeline config\nNUM_MICRO_BATCHES = parallel['pipeline']\nTENSOR_SHAPE = (BATCH_SIZE // NUM_MICRO_BATCHES, SEQ_LENGTH, HIDDEN_SIZE)\n\nfp16 = dict(mode=AMP_TYPE.NAIVE)\nclip_grad_norm = 1.0\n")),(0,l.kt)("p",null,"Other configs\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# hyperparameters\n# BATCH_SIZE is as per GPU\n# global batch size = BATCH_SIZE x data parallel size\nBATCH_SIZE = 256\nLEARNING_RATE = 3e-3\nWEIGHT_DECAY = 0.3\nNUM_EPOCHS = 300\nWARMUP_EPOCHS = 32\n\n# model config\nIMG_SIZE = 224\nPATCH_SIZE = 16\nHIDDEN_SIZE = 768\nDEPTH = 12\nNUM_HEADS = 12\nMLP_RATIO = 4\nNUM_CLASSES = 10\nCHECKPOINT = True\nSEQ_LENGTH = (IMG_SIZE // PATCH_SIZE) ** 2 + 1  # add 1 for cls token\n")),(0,l.kt)("h3",{id:"build-pipeline-model-hybrid_parallelmodelvitpy"},"Build pipeline model (",(0,l.kt)("inlineCode",{parentName:"h3"},"/hybrid_parallel/model/vit.py"),")"),(0,l.kt)("p",null,"Colossal-AI provides two methods to build a pipeline model from the existing model."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"colossalai.builder.build_pipeline_model_from_cfg")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"colossalai.builder.build_pipeline_model"))),(0,l.kt)("p",null,"Besides, you can also build a pipeline model from scrath with Colossal-AI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import math\nfrom typing import Callable\n\nimport inspect\nimport torch\nfrom colossalai import nn as col_nn\nfrom colossalai.registry import LAYERS, MODELS\nfrom colossalai.logging import get_dist_logger\nfrom colossalai.core import global_context as gpc\nfrom colossalai.context import ParallelMode\nfrom colossalai.builder.pipeline import partition_uniform\nfrom torch import dtype, nn\nfrom model_zoo.vit.vit import ViTBlock, ViTEmbedding, ViTHead\n\n\n@MODELS.register_module\nclass PipelineVisionTransformer(nn.Module):\n    def __init__(self,\n                 img_size: int = 224,\n                 patch_size: int = 16,\n                 in_chans: int = 3,\n                 num_classes: int = 1000,\n                 depth: int = 12,\n                 num_heads: int = 12,\n                 dim: int = 768,\n                 mlp_ratio: int = 4,\n                 attention_dropout: float = 0.,\n                 dropout: float = 0.1,\n                 drop_path: float = 0.,\n                 layernorm_epsilon: float = 1e-6,\n                 activation: Callable = nn.functional.gelu,\n                 representation_size: int = None,\n                 dtype: dtype = None,\n                 bias: bool = True,\n                 checkpoint: bool = False,\n                 init_method: str = 'torch',\n                 first_stage=True,\n                 last_stage=True,\n                 start_idx=None,\n                 end_idx=None,):\n        super().__init__()\n\n        layers = []\n\n        if first_stage:\n            embed = ViTEmbedding(img_size=img_size,\n                                 patch_size=patch_size,\n                                 in_chans=in_chans,\n                                 embedding_dim=dim,\n                                 dropout=dropout,\n                                 dtype=dtype,\n                                 init_method=init_method)\n            layers.append(embed)\n\n        # stochastic depth decay rule\n        dpr = [x.item() for x in torch.linspace(0, drop_path, depth)]\n\n        if start_idx is None and end_idx is None:\n            start_idx = 0\n            end_idx = depth\n\n        blocks = [\n            ViTBlock(\n                dim=dim,\n                num_heads=num_heads,\n                mlp_ratio=mlp_ratio,\n                attention_dropout=attention_dropout,\n                dropout=dropout,\n                drop_path=dpr[i],\n                activation=activation,\n                dtype=dtype,\n                bias=bias,\n                checkpoint=checkpoint,\n                init_method=init_method,\n            ) for i in range(start_idx, end_idx)\n        ]\n        layers.extend(blocks)\n\n        if last_stage:\n            norm = col_nn.LayerNorm(normalized_shape=dim, eps=layernorm_epsilon, dtype=dtype)\n            head = ViTHead(dim=dim,\n                           num_classes=num_classes,\n                           representation_size=representation_size,\n                           dtype=dtype,\n                           bias=bias,\n                           init_method=init_method)\n            layers.extend([norm, head])\n\n        self.layers = nn.Sequential(\n            *layers\n        )\n\n    def forward(self, x):\n        x = self.layers(x)\n        return x\n\n\ndef _filter_kwargs(func, kwargs):\n    sig = inspect.signature(func)\n    return {k: v for k, v in kwargs.items() if k in sig.parameters}\n\n\ndef _build_pipeline_vit(module_cls, num_layers, num_chunks, device=torch.device('cuda'), **kwargs):\n    logger = get_dist_logger()\n    if gpc.is_initialized(ParallelMode.PIPELINE):\n        pipeline_size = gpc.get_world_size(ParallelMode.PIPELINE)\n        pipeline_rank = gpc.get_local_rank(ParallelMode.PIPELINE)\n    else:\n        pipeline_size = 1\n        pipeline_rank = 0\n    rank = gpc.get_global_rank()\n    parts = partition_uniform(num_layers, pipeline_size, num_chunks)[pipeline_rank]\n    models = []\n\n    for start, end in parts:\n        kwargs['first_stage'] = start == 0\n        kwargs['last_stage'] = end == num_layers\n        kwargs['start_idx'] = start\n        kwargs['end_idx'] = end\n        logger.info(f'Rank{rank} build layer {start}-{end}, {end-start}/{num_layers} layers')\n        chunk = module_cls(**_filter_kwargs(module_cls.__init__, kwargs)).to(device)\n        models.append(chunk)\n    if len(models) == 1:\n        model = models[0]\n    else:\n        model = nn.ModuleList(models)\n    return model\n\n\ndef build_pipeline_vit(num_layers, num_chunks, device=torch.device('cuda'), **kwargs):\n    return _build_pipeline_vit(PipelineVisionTransformer, num_layers, num_chunks, device, **kwargs)\n")),(0,l.kt)("h3",{id:"modify-train-script-hybrid_paralleltrain_with_cifar10py"},"Modify train script (",(0,l.kt)("inlineCode",{parentName:"h3"},"/hybrid_parallel/train_with_cifar10.py"),")"),(0,l.kt)("h4",{id:"import-modules-1"},"Import modules"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.engine.schedule import (InterleavedPipelineSchedule,\n                                        PipelineSchedule)\nfrom colossalai.utils import MultiTimer\nimport os\n\nimport colossalai\n\nimport torch\nfrom colossalai.context import ParallelMode\nfrom colossalai.core import global_context as gpc\nfrom colossalai.logging import get_dist_logger\nfrom colossalai.nn import CrossEntropyLoss\nfrom colossalai.nn.lr_scheduler import CosineAnnealingWarmupLR\nfrom colossalai.utils import is_using_pp, get_dataloader\nfrom model.vit import build_pipeline_vit\nfrom model_zoo.vit.vit import _create_vit_model\nfrom tqdm import tqdm\n\nfrom torchvision import transforms\nfrom torchvision.datasets import CIFAR10\n")),(0,l.kt)("h4",{id:"launch-colossal-ai"},"Launch Colossal-AI"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"colossalai.utils.is_using_pp")," can help check whether pipeline parallelism is required in config file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# initialize distributed setting\nparser = colossalai.get_default_parser()\nargs = parser.parse_args()\n\n# launch from torch\ncolossalai.launch_from_torch(config=args.config)\n\n# get logger\nlogger = get_dist_logger()\nlogger.info(\"initialized distributed environment\", ranks=[0])\n\nif hasattr(gpc.config, 'LOG_PATH'):\n    if gpc.get_global_rank() == 0:\n        log_path = gpc.config.LOG_PATH\n        if not os.path.exists(log_path):\n            os.mkdir(log_path)\n        logger.log_to_file(log_path)\n\nuse_pipeline = is_using_pp()\n")),(0,l.kt)("h4",{id:"define-model"},"Define model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# create model\nmodel_kwargs = dict(img_size=gpc.config.IMG_SIZE,\n                    patch_size=gpc.config.PATCH_SIZE,\n                    dim=gpc.config.HIDDEN_SIZE,\n                    depth=gpc.config.DEPTH,\n                    num_heads=gpc.config.NUM_HEADS,\n                    mlp_ratio=gpc.config.MLP_RATIO,\n                    num_classes=gpc.config.NUM_CLASSES,\n                    init_method='jax',\n                    checkpoint=gpc.config.CHECKPOINT)\n\nif use_pipeline:\n    model = build_pipeline_vit(num_layers=model_kwargs['depth'], num_chunks=1, **model_kwargs)\nelse:\n    model = _create_vit_model(**model_kwargs)\n")),(0,l.kt)("h4",{id:"count-number-of-parameters"},"Count number of parameters"),(0,l.kt)("p",null,"You can count model parameters on different pipeline stages easily."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# count number of parameters\ntotal_numel = 0\nfor p in model.parameters():\n    total_numel += p.numel()\nif not gpc.is_initialized(ParallelMode.PIPELINE):\n    pipeline_stage = 0\nelse:\n    pipeline_stage = gpc.get_local_rank(ParallelMode.PIPELINE)\nlogger.info(f"number of parameters: {total_numel} on pipeline stage {pipeline_stage}")\n')),(0,l.kt)("h4",{id:"build-dataloader-optimizer-etc"},"Build dataloader, optimizer, etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_cifar(batch_size):\n    transform_train = transforms.Compose([\n        transforms.RandomCrop(224, pad_if_needed=True),\n        transforms.AutoAugment(policy=transforms.AutoAugmentPolicy.CIFAR10),\n        transforms.ToTensor(),\n        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),\n    ])\n    transform_test = transforms.Compose([\n        transforms.Resize(224),\n        transforms.ToTensor(),\n        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),\n    ])\n\n    train_dataset = CIFAR10(root=os.environ['DATA'], train=True, download=True, transform=transform_train)\n    test_dataset = CIFAR10(root=os.environ['DATA'], train=False, transform=transform_test)\n    train_dataloader = get_dataloader(dataset=train_dataset, shuffle=True, batch_size=batch_size, pin_memory=True)\n    test_dataloader = get_dataloader(dataset=test_dataset, batch_size=batch_size, pin_memory=True)\n    return train_dataloader, test_dataloader\n\n\n# craete dataloaders\ntrain_dataloader , test_dataloader = build_cifar()\n\n# create loss function\ncriterion = CrossEntropyLoss(label_smoothing=0.1)\n\n# create optimizer\noptimizer = torch.optim.AdamW(model.parameters(), lr=gpc.config.LEARNING_RATE, weight_decay=gpc.config.WEIGHT_DECAY)\n\n# create lr scheduler\nlr_scheduler = CosineAnnealingWarmupLR(optimizer=optimizer,\n                                       total_steps=gpc.config.NUM_EPOCHS,\n                                       warmup_steps=gpc.config.WARMUP_EPOCHS)\n")),(0,l.kt)("h4",{id:"start-colossal-ai-engine-1"},"Start Colossal-AI engine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# intiailize\nengine, train_dataloader, test_dataloader, _ = colossalai.initialize(model=model,\n                                                                     optimizer=optimizer,\n                                                                     criterion=criterion,\n                                                                     train_dataloader=train_dataloader,\n                                                                     test_dataloader=test_dataloader)\n\nlogger.info("Engine is built", ranks=[0])\n')),(0,l.kt)("h4",{id:"train-based-on-engine"},"Train: based on engine"),(0,l.kt)("p",null,"In the data parallelism example, we show how to train a model with Trainer API. We can also directly train a model based on engine. In this way, you can customize your training with more features."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"data_iter = iter(train_dataloader)\n\nfor epoch in range(gpc.config.NUM_EPOCHS):\n    # training\n    engine.train()\n\n    if gpc.get_global_rank() == 0:\n        description = 'Epoch {} / {}'.format(\n            epoch,\n            gpc.config.NUM_EPOCHS\n        )\n        progress = tqdm(range(len(train_dataloader)), desc=description)\n    else:\n        progress = range(len(train_dataloader))\n    for _ in progress:\n        engine.zero_grad()\n        engine.execute_schedule(data_iter, return_output_label=False)\n        engine.step()\n        lr_scheduler.step()\n")),(0,l.kt)("h3",{id:"start-training-1"},"Start training"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export DATA=<path_to_dataset>\n# If your torch >= 1.10.0\ntorchrun --standalone --nproc_per_node <NUM_GPUs>  train_hybrid.py --config ./configs/config_pipeline_parallel.py\n# If your torch >= 1.9.0\n# python -m torch.distributed.run --standalone --nproc_per_node= <NUM_GPUs> train_hybrid.py --config ./configs/config_pipeline_parallel.py\n")),(0,l.kt)("h2",{id:"tensor-parallelism-and-hybrid-parallelism"},"Tensor Parallelism and Hybrid Parallelism"),(0,l.kt)("p",null,"Tensor parallelism partitions each weight parameter across multiple devices in order to reduce memory load. Colossal-AI support 1D, 2D, 2.5D and 3D tensor parallelism. Besides, you can combine tensor parallelism with pipeline parallelism and data parallelism to reach hybrid parallelism. Colossal-AI also provides an easy way to apply tensor parallelism and hybrid parallelism. On the basis of pipeline parallelism, a few lines of code changing in config file is all you need."),(0,l.kt)("h3",{id:"define-your-configuration-filehybrid_parallelconfigsvit_1d_tp2_pp2py"},"Define your configuration file(",(0,l.kt)("inlineCode",{parentName:"h3"},"/hybrid_parallel/configs/vit_1d_tp2_pp2.py"),")"),(0,l.kt)("p",null,"To use tensor parallelism, you only need to add related information to the ",(0,l.kt)("strong",{parentName:"p"},"parallel dict"),". To be specific, ",(0,l.kt)("inlineCode",{parentName:"p"},"TENSOR_PARALLEL_MODE")," can be '1d', '2d', '2.5d', '3d'. And the size of different parallelism should satisfy: ",(0,l.kt)("inlineCode",{parentName:"p"},"#GPUs = pipeline parallel size x tensor parallel size x data parallel size"),".  ",(0,l.kt)("inlineCode",{parentName:"p"},"data parallel size")," will automatically computed after you specify the number of GPUs, pipeline parallel size and tensor parallel size."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.amp import AMP_TYPE\n# parallel setting\nTENSOR_PARALLEL_SIZE = 2\nTENSOR_PARALLEL_MODE = '1d'\n\nparallel = dict(\n    pipeline=2,\n    tensor=dict(mode=TENSOR_PARALLEL_MODE, size=TENSOR_PARALLEL_SIZE)\n)\n\nfp16 = dict(mode=AMP_TYPE.NAIVE)\nclip_grad_norm = 1.0\n\n\n# pipeline config\nNUM_MICRO_BATCHES = parallel['pipeline']\nTENSOR_SHAPE = (BATCH_SIZE // NUM_MICRO_BATCHES, SEQ_LENGTH, HIDDEN_SIZE)\n")),(0,l.kt)("p",null,"Ohter configs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# hyperparameters\n# BATCH_SIZE is as per GPU\n# global batch size = BATCH_SIZE x data parallel size\nBATCH_SIZE = 256\nLEARNING_RATE = 3e-3\nWEIGHT_DECAY = 0.3\nNUM_EPOCHS = 300\nWARMUP_EPOCHS = 32\n\n# model config\nIMG_SIZE = 224\nPATCH_SIZE = 16\nHIDDEN_SIZE = 768\nDEPTH = 12\nNUM_HEADS = 12\nMLP_RATIO = 4\nNUM_CLASSES = 10\nCHECKPOINT = True\nSEQ_LENGTH = (IMG_SIZE // PATCH_SIZE) ** 2 + 1  # add 1 for cls token\n")),(0,l.kt)("h3",{id:"start-training-2"},"Start training"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export DATA=<path_to_dataset>\n# If your torch >= 1.10.0\ntorchrun --standalone --nproc_per_node <NUM_GPUs>  train_hybrid.py --config ./configs/config_hybrid_parallel.py\n# If your torch >= 1.9.0\n# python -m torch.distributed.run --standalone --nproc_per_node= <NUM_GPUs> train_hybrid.py --config ./configs/config_hybrid_parallel.py\n")))}m.isMDXComponent=!0}}]);