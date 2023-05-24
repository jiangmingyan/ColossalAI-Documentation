"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5067],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},_=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(t),_=a,u=p["".concat(s,".").concat(_)]||p[_]||c[_]||r;return t?i.createElement(u,o(o({ref:n},m),{},{components:t})):i.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=_;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}_.displayName="MDXCreateElement"},3873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={},o="Train ViT Using Pipeline Parallelism",l={unversionedId:"advanced_tutorials/train_vit_using_pipeline_parallelism",id:"advanced_tutorials/train_vit_using_pipeline_parallelism",title:"Train ViT Using Pipeline Parallelism",description:"Author: Hongxin Liu, Yongbin Li",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advanced_tutorials/train_vit_using_pipeline_parallelism.md",sourceDirName:"advanced_tutorials",slug:"/advanced_tutorials/train_vit_using_pipeline_parallelism",permalink:"/docs/advanced_tutorials/train_vit_using_pipeline_parallelism",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced_tutorials/train_vit_using_pipeline_parallelism.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cluster Utilities",permalink:"/docs/features/cluster_utils"},next:{title:"Step By Step: Accelerate ViT Training With Colossal-AI (From Data Parallel to Hybrid Parallel)",permalink:"/docs/advanced_tutorials/train_vit_with_hybrid_parallelism"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Import libraries",id:"import-libraries",level:2},{value:"Define Vision Transformer model",id:"define-vision-transformer-model",level:2},{value:"Process the dataset",id:"process-the-dataset",level:2},{value:"Training ViT using pipeline",id:"training-vit-using-pipeline",level:2}],m={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"train-vit-using-pipeline-parallelism"},"Train ViT Using Pipeline Parallelism"),(0,a.kt)("p",null,"Author: Hongxin Liu, Yongbin Li"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Code")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hpcaitech/ColossalAI-Examples/tree/main/image/vision_transformer/pipeline_parallel"},"ColossalAI-Examples Pipeline Parallel ViT"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Related Paper")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2104.04473"},"Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial, you will learn how to train Vision Transformer for image classification from scratch, using pipeline.\nPipeline parallelism is a kind of model parallelism, which is useful when your GPU memory cannot fit your model.\nBy using it, we split the original model into multi stages, and each stage maintains a part of the original model.\nWe assume that your GPU memory cannot fit ViT/L-16, and your memory can fit this model."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("p",null,"In this tutorial we will cover:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The definition of ViT model, based on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rwightman/pytorch-image-models/blob/master/timm/models/vision_transformer.py"},"TIMM")),(0,a.kt)("li",{parentName:"ol"},"Processing the dataset"),(0,a.kt)("li",{parentName:"ol"},"Training ViT using pipeline")),(0,a.kt)("h2",{id:"import-libraries"},"Import libraries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom collections import OrderedDict\nfrom functools import partial\n\nimport colossalai\nimport colossalai.nn as col_nn\nimport torch\nimport torch.nn as nn\nfrom colossalai.builder import build_pipeline_model\nfrom colossalai.engine.schedule import (InterleavedPipelineSchedule,\n                                        PipelineSchedule)\nfrom colossalai.logging import disable_existing_loggers, get_dist_logger\nfrom colossalai.trainer import Trainer, hooks\nfrom colossalai.utils import MultiTimer, get_dataloader\nfrom timm.models import vision_transformer as vit\nfrom torchvision import transforms\nfrom torchvision.datasets import CIFAR10\n")),(0,a.kt)("h2",{id:"define-vision-transformer-model"},"Define Vision Transformer model"),(0,a.kt)("p",null,"Generally, we provide 3 ways to build a pipelined model:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"colossalai.builder.build_pipeline_model_from_cfg")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"colossalai.builder.build_pipeline_model")),(0,a.kt)("li",{parentName:"ol"},"Split the model by stages by yourself")),(0,a.kt)("p",null,"When your memory can fit the model, you can use the first two methods to build your model, otherwise you must split the model by yourself. The first two methods first build the whole model on CPU, then split the model, and finally you can just move the corresponding part of model to GPU."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.builder.build_pipeline_model_from_cfg()")," receives a config file of model, and it can split the model uniformly (by layer) or balanced (by parameter size)."),(0,a.kt)("p",null,"If you are familiar with ",(0,a.kt)("inlineCode",{parentName:"p"},"PyTorch"),", you can use  ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.builder.build_pipeline_model()")," which receives a ",(0,a.kt)("inlineCode",{parentName:"p"},"torch.nn.Sequential")," model and split it by layer uniformly."),(0,a.kt)("p",null,"In this tutorial, we will modify ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rwightman/pytorch-image-models/blob/master/timm/models/vision_transformer.py"},"TIMM/ViT")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"torch.nn.Sequential")," and then use ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.builder.build_pipeline_model()")," to build the pipelined model."),(0,a.kt)("p",null,"When the data is ",(0,a.kt)("strong",{parentName:"p"},"one")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Tensor"),", you can use the positional argument in ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()")," of your model to get the data tensor. For the first stage of pipeline, the first positional argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()")," is the data tensor loaded from data loader. For other stages, the first positional argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()")," is the output tensor from the previous stage. Note that if the stage is not the last stage, the return of ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()")," must be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Tensor"),"."),(0,a.kt)("p",null,"When the data is a ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Tensor"),", you can use named keyword arguments in ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()")," of your model to get the data ",(0,a.kt)("inlineCode",{parentName:"p"},"dict"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class ViTEmbedding(nn.Module):\n    def __init__(self, img_size=224, patch_size=16, in_chans=3, embed_dim=768, embed_layer=vit.PatchEmbed, drop_rate=0., distilled=False):\n        super().__init__()\n        self.embed_dim = embed_dim  # num_features for consistency with other models\n        self.num_tokens = 2 if distilled else 1\n        self.patch_embed = embed_layer(\n            img_size=img_size, patch_size=patch_size, in_chans=in_chans, embed_dim=embed_dim)\n        num_patches = self.patch_embed.num_patches\n\n        self.cls_token = nn.Parameter(torch.zeros(1, 1, embed_dim))\n        self.dist_token = nn.Parameter(torch.zeros(1, 1, embed_dim)) if distilled else None\n        self.pos_embed = nn.Parameter(torch.zeros(1, num_patches + self.num_tokens, embed_dim))\n        self.pos_drop = nn.Dropout(p=drop_rate)\n        self.init_weights()\n\n    def forward(self, x):\n        x = self.patch_embed(x)\n        cls_token = self.cls_token.expand(x.shape[0], -1, -1)  # stole cls_tokens impl from Phil Wang, thanks\n        if self.dist_token is None:\n            x = torch.cat((cls_token, x), dim=1)\n        else:\n            x = torch.cat((cls_token, self.dist_token.expand(x.shape[0], -1, -1), x), dim=1)\n        x = self.pos_drop(x + self.pos_embed)\n        return x\n\n    def init_weights(self):\n        vit.trunc_normal_(self.pos_embed, std=.02)\n        if self.dist_token is not None:\n            vit.trunc_normal_(self.dist_token, std=.02)\n        vit.trunc_normal_(self.cls_token, std=.02)\n        self.apply(vit._init_vit_weights)\n\n\nclass ViTHead(nn.Module):\n    def __init__(self, embed_dim=768, num_classes=1000, norm_layer=None, distilled=False, representation_size=None):\n        super().__init__()\n        norm_layer = norm_layer or partial(nn.LayerNorm, eps=1e-6)\n        self.norm = norm_layer(embed_dim)\n        self.num_classes = num_classes\n        self.distilled = distilled\n        self.num_features = embed_dim\n        # Representation layer\n        if representation_size and not distilled:\n            self.num_features = representation_size\n            self.pre_logits = nn.Sequential(OrderedDict([\n                ('fc', nn.Linear(embed_dim, representation_size)),\n                ('act', nn.Tanh())\n            ]))\n        else:\n            self.pre_logits = nn.Identity()\n        # Classifier head(s)\n        self.head = nn.Linear(self.num_features, num_classes) if num_classes > 0 else nn.Identity()\n        self.head_dist = None\n        if distilled:\n            self.head_dist = nn.Linear(embed_dim, num_classes) if num_classes > 0 else nn.Identity()\n        self.init_weights()\n\n    def forward(self, x):\n        x = self.norm(x)\n        if self.distilled:\n            x, x_dist = self.head(x[:, 0]), self.head_dist(x[:, 1])\n            if self.training and not torch.jit.is_scripting():\n                # during inference, return the average of both classifier predictions\n                return x, x_dist\n            else:\n                return (x + x_dist) / 2\n        else:\n            x = self.pre_logits(x[:, 0])\n            x = self.head(x)\n        return x\n\n    def init_weights(self):\n        self.apply(vit._init_vit_weights)\n\n\ndef sequential_vit(img_size=224, patch_size=16, in_chans=3, num_classes=1000, embed_dim=768, depth=12,\n                   num_heads=12, mlp_ratio=4., qkv_bias=True, representation_size=None, distilled=False,\n                   drop_rate=0., attn_drop_rate=0., drop_path_rate=0., embed_layer=vit.PatchEmbed, norm_layer=None,\n                   act_layer=None):\n    norm_layer = norm_layer or partial(nn.LayerNorm, eps=1e-6)\n    act_layer = act_layer or nn.GELU\n    embedding = ViTEmbedding(img_size=img_size, patch_size=patch_size, in_chans=in_chans,\n                             embed_dim=embed_dim, embed_layer=embed_layer, drop_rate=drop_rate, distilled=distilled)\n    dpr = [x.item() for x in torch.linspace(0, drop_path_rate, depth)]  # stochastic depth decay rule\n    blocks = [vit.Block(\n        dim=embed_dim, num_heads=num_heads, mlp_ratio=mlp_ratio, qkv_bias=qkv_bias, drop=drop_rate,\n        attn_drop=attn_drop_rate, drop_path=dpr[i], norm_layer=norm_layer, act_layer=act_layer)\n        for i in range(depth)]\n    for block in blocks:\n        block.apply(vit._init_vit_weights)\n    head = ViTHead(embed_dim=embed_dim, num_classes=num_classes, norm_layer=norm_layer,\n                   distilled=distilled, representation_size=representation_size)\n    return nn.Sequential(embedding, *blocks, head)\n\n\ndef vit_large_patch16_224(**kwargs):\n    model_kwargs = dict(embed_dim=1024, depth=24, num_heads=16, **kwargs)\n    return sequential_vit(**model_kwargs)\n")),(0,a.kt)("h2",{id:"process-the-dataset"},"Process the dataset"),(0,a.kt)("p",null,"Generally, we train ViT on large dataset like Imagenet. For simplicity, we just use CIFAR-10 here, since this tutorial is just for pipeline training."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def build_cifar(batch_size):\n    transform_train = transforms.Compose([\n        transforms.RandomCrop(224, pad_if_needed=True),\n        transforms.AutoAugment(policy=transforms.AutoAugmentPolicy.CIFAR10),\n        transforms.ToTensor(),\n        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),\n    ])\n    transform_test = transforms.Compose([\n        transforms.Resize(224),\n        transforms.ToTensor(),\n        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),\n    ])\n\n    train_dataset = CIFAR10(root=os.environ['DATA'], train=True, download=True, transform=transform_train)\n    test_dataset = CIFAR10(root=os.environ['DATA'], train=False, transform=transform_test)\n    train_dataloader = get_dataloader(dataset=train_dataset, shuffle=True, batch_size=batch_size, pin_memory=True)\n    test_dataloader = get_dataloader(dataset=test_dataset, batch_size=batch_size, pin_memory=True)\n    return train_dataloader, test_dataloader\n")),(0,a.kt)("h2",{id:"training-vit-using-pipeline"},"Training ViT using pipeline"),(0,a.kt)("p",null,"You can set the size of pipeline parallel and number of microbatches in config. ",(0,a.kt)("inlineCode",{parentName:"p"},"NUM_CHUNKS")," is useful when using interleaved-pipeline (for more details see ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2104.04473"},"Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM")," ). The original batch will be split into ",(0,a.kt)("inlineCode",{parentName:"p"},"num_microbatches"),", and each stage will load a micro batch each time. Then we will generate an appropriate schedule for you to execute the pipeline training. If you don't need the output and label of model, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"return_output_label")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"trainer.fit()")," which can further reduce GPU memory usage."),(0,a.kt)("p",null,"You should ",(0,a.kt)("inlineCode",{parentName:"p"},"export DATA=/path/to/cifar"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"BATCH_SIZE = 16\nNUM_EPOCHS = 60\nNUM_CHUNKS = 1\nCONFIG = dict(NUM_MICRO_BATCHES=4, parallel=dict(pipeline=2))\n\n\ndef train():\n    disable_existing_loggers()\n    parser = colossalai.get_default_parser()\n    args = parser.parse_args()\n    colossalai.launch_from_torch(backend=args.backend, config=CONFIG)\n    logger = get_dist_logger()\n\n    # build model\n    model = vit_large_patch16_224()\n    model = build_pipeline_model(model, num_chunks=NUM_CHUNKS, verbose=True)\n\n    # build criterion\n    criterion = nn.CrossEntropyLoss()\n\n    # optimizer\n    optimizer = torch.optim.Adam(model.parameters(), lr=0.001, weight_decay=0)\n\n    # build dataloader\n    train_dataloader, test_dataloader = build_cifar(BATCH_SIZE)\n\n    engine, train_dataloader, test_dataloader, _ = colossalai.initialize(model, optimizer, criterion,\n                                                                         train_dataloader, test_dataloader)\n    timer = MultiTimer()\n\n    trainer = Trainer(engine=engine, timer=timer, logger=logger)\n\n    hook_list = [\n        hooks.LossHook(),\n        hooks.AccuracyHook(col_nn.metric.Accuracy()),\n        hooks.LogMetricByEpochHook(logger),\n    ]\n\n    trainer.fit(train_dataloader=train_dataloader,\n                epochs=NUM_EPOCHS,\n                test_dataloader=test_dataloader,\n                test_interval=1,\n                hooks=hook_list,\n                display_progress=True)\n")))}c.isMDXComponent=!0}}]);