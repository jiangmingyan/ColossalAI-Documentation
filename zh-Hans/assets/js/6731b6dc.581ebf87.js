"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6649],{6999:(e,t,o)=>{o.d(t,{Cl:()=>s,Dx:()=>p,Pc:()=>n,aE:()=>c,iz:()=>r,nT:()=>l});var i=o(7294),a=o(398);o(814);function s(e){return i.createElement("div",{className:"docstring-container"},e.children)}function n(e){return i.createElement("div",{className:"signature"},"(",e.children,")")}function r(e){return i.createElement("h3",{className:"divider"},e.name)}function c(e){return i.createElement("div",null,i.createElement(r,{name:"Parameters"}),i.createElement(a.D,null,e.children))}function l(e){return i.createElement("div",null,i.createElement(r,{name:"Returns"}),i.createElement(a.D,null,`${e.name}: ${e.desc}`))}function p(e){return i.createElement("div",{className:"title-container"},i.createElement("div",{className:"title-module"},i.createElement("h3",null,e.type),"\xa0 ",i.createElement("h2",null,e.name)),i.createElement("div",{className:"title-source"},"<",i.createElement("a",{href:e.source,className:"title-source"},"source"),">"))}},2191:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=o(7462),a=(o(7294),o(3905)),s=o(6999);const n={},r="Booster Checkpoint",c={unversionedId:"basics/booster_checkpoint",id:"basics/booster_checkpoint",title:"Booster Checkpoint",description:"\u4f5c\u8005: Hongxin Liu",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/booster_checkpoint.md",sourceDirName:"basics",slug:"/basics/booster_checkpoint",permalink:"/zh-Hans/docs/basics/booster_checkpoint",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/booster_checkpoint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Booster \u63d2\u4ef6",permalink:"/zh-Hans/docs/basics/booster_plugins"},next:{title:"\u6784\u5efa\u914d\u7f6e\u6587\u4ef6",permalink:"/zh-Hans/docs/basics/define_your_config"}},l={},p=[{value:"\u5f15\u8a00",id:"\u5f15\u8a00",level:2},{value:"\u6a21\u578b Checkpoint",id:"\u6a21\u578b-checkpoint",level:2},{value:"\u4f18\u5316\u5668 Checkpoint",id:"\u4f18\u5316\u5668-checkpoint",level:2},{value:"\u5b66\u4e60\u7387\u8c03\u5ea6\u5668 Checkpoint",id:"\u5b66\u4e60\u7387\u8c03\u5ea6\u5668-checkpoint",level:2},{value:"Checkpoint \u8bbe\u8ba1",id:"checkpoint-\u8bbe\u8ba1",level:2}],h={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"booster-checkpoint"},"Booster Checkpoint"),(0,a.kt)("p",null,"\u4f5c\u8005: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ver217"},"Hongxin Liu")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f6e\u6559\u7a0b:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-Hans/docs/basics/booster_api"},"Booster API"))),(0,a.kt)("h2",{id:"\u5f15\u8a00"},"\u5f15\u8a00"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u4e4b\u524d\u7684\u6559\u7a0b\u4e2d\u4ecb\u7ecd\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/zh-Hans/docs/basics/booster_api"},"Booster API"),"\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 booster \u4fdd\u5b58\u548c\u52a0\u8f7d checkpoint\u3002"),(0,a.kt)("h2",{id:"\u6a21\u578b-checkpoint"},"\u6a21\u578b Checkpoint"),(0,a.kt)(s.Cl,{mdxType:"DocStringContainer"},(0,a.kt)("div",null,(0,a.kt)(s.Dx,{type:"",name:"colossalai.booster.Booster.save_model",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/booster/booster.py#L180",mdxType:"Title"}),(0,a.kt)(s.Pc,{mdxType:"Signature"},"model: Module, checkpoint: str, prefix: str = None, shard: bool = False, size_per_shard: int = 1024"),(0,a.kt)(s.aE,{mdxType:"Parameters"},"- **model** (nn.Module) -- A model boosted by Booster.\n- **checkpoint** (str) -- Path to the checkpoint. It must be a local path.\n  It is a file path if `shard=False`. Otherwise, it is a directory path.\n- **prefix** (str, optional) -- A prefix added to parameter and buffer\n  names to compose the keys in state_dict. Defaults to None.\n- **shard** (bool, optional) -- Whether to save checkpoint a sharded way.\n  If true, the checkpoint will be a folder. Otherwise, it will be a single file. Defaults to False.\n- **size_per_shard** (int, optional) -- Maximum size of checkpoint shard file in MB. This is useful only when `shard=True`. Defaults to 1024.")),(0,a.kt)("div",null,(0,a.kt)(s.iz,{name:"Doc",mdxType:"Divider"}),"Save model to checkpoint.")),(0,a.kt)("p",null,"\u6a21\u578b\u5728\u4fdd\u5b58\u524d\u5fc5\u987b\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.booster.Booster")," \u52a0\u901f\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"checkpoint")," \u662f\u8981\u4fdd\u5b58\u7684 checkpoint \u7684\u8def\u5f84\u3002 \u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"shard=False"),"\uff0c\u5b83\u5c31\u662f\u6587\u4ef6\u3002 \u5426\u5219, \u5b83\u5c31\u662f\u6587\u4ef6\u5939\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"shard=True"),"\uff0ccheckpoint \u5c06\u4ee5\u5206\u7247\u65b9\u5f0f\u4fdd\u5b58\u3002\u5f53 checkpoint \u592a\u5927\u800c\u65e0\u6cd5\u4fdd\u5b58\u5728\u5355\u4e2a\u6587\u4ef6\u4e2d\u65f6\uff0c\u8fd9\u5f88\u6709\u7528\u3002\u6211\u4eec\u7684\u5206\u7247 checkpoint \u683c\u5f0f\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/huggingface/transformers"},"huggingface/transformers")," \u517c\u5bb9\u3002"),(0,a.kt)(s.Cl,{mdxType:"DocStringContainer"},(0,a.kt)("div",null,(0,a.kt)(s.Dx,{type:"",name:"colossalai.booster.Booster.load_model",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/booster/booster.py#L167",mdxType:"Title"}),(0,a.kt)(s.Pc,{mdxType:"Signature"},"model: Module, checkpoint: str, strict: bool = True"),(0,a.kt)(s.aE,{mdxType:"Parameters"},"- **model** (nn.Module) -- A model boosted by Booster.\n- **checkpoint** (str) -- Path to the checkpoint. It must be a local path.\n  It should be a directory path if the checkpoint is sharded. Otherwise, it should be a file path.\n- **strict** (bool, optional) -- whether to strictly enforce that the keys\n  in :attr:*state_dict* match the keys returned by this module's\n  [`~torch.nn.Module.state_dict`] function. Defaults to True.")),(0,a.kt)("div",null,(0,a.kt)(s.iz,{name:"Doc",mdxType:"Divider"}),"Load model from checkpoint.")),(0,a.kt)("p",null,"\u6a21\u578b\u5728\u52a0\u8f7d\u524d\u5fc5\u987b\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.booster.Booster")," \u52a0\u901f\u3002\u5b83\u4f1a\u81ea\u52a8\u68c0\u6d4b checkpoint \u683c\u5f0f\uff0c\u5e76\u4ee5\u76f8\u5e94\u7684\u65b9\u5f0f\u52a0\u8f7d\u3002"),(0,a.kt)("h2",{id:"\u4f18\u5316\u5668-checkpoint"},"\u4f18\u5316\u5668 Checkpoint"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0 \u5c1a\u4e0d\u652f\u6301\u4ee5\u5206\u7247\u65b9\u5f0f\u4fdd\u5b58\u4f18\u5316\u5668 Checkpoint\u3002")),(0,a.kt)(s.Cl,{mdxType:"DocStringContainer"},(0,a.kt)("div",null,(0,a.kt)(s.Dx,{type:"",name:"colossalai.booster.Booster.save_optimizer",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/booster/booster.py#L210",mdxType:"Title"}),(0,a.kt)(s.Pc,{mdxType:"Signature"},"optimizer: Optimizer, checkpoint: str, shard: bool = False, size_per_shard: int = 1024"),(0,a.kt)(s.aE,{mdxType:"Parameters"},"- **optimizer** (Optimizer) -- An optimizer boosted by Booster.\n- **checkpoint** (str) -- Path to the checkpoint. It must be a local path.\n  It is a file path if `shard=False`. Otherwise, it is a directory path.\n- **shard** (bool, optional) -- Whether to save checkpoint a sharded way.\n  If true, the checkpoint will be a folder. Otherwise, it will be a single file. Defaults to False.\n- **size_per_shard** (int, optional) -- Maximum size of checkpoint shard file in MB. This is useful only when `shard=True`. Defaults to 1024.")),(0,a.kt)("div",null,(0,a.kt)(s.iz,{name:"Doc",mdxType:"Divider"}),"Save optimizer to checkpoint. Warning: Saving sharded optimizer checkpoint is not supported yet.")),(0,a.kt)("p",null,"\u4f18\u5316\u5668\u5728\u4fdd\u5b58\u524d\u5fc5\u987b\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.booster.Booster")," \u52a0\u901f\u3002"),(0,a.kt)(s.Cl,{mdxType:"DocStringContainer"},(0,a.kt)("div",null,(0,a.kt)(s.Dx,{type:"",name:"colossalai.booster.Booster.load_optimizer",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/booster/booster.py#L200",mdxType:"Title"}),(0,a.kt)(s.Pc,{mdxType:"Signature"},"optimizer: Optimizer, checkpoint: str"),(0,a.kt)(s.aE,{mdxType:"Parameters"},"- **optimizer** (Optimizer) -- An optimizer boosted by Booster.\n- **checkpoint** (str) -- Path to the checkpoint. It must be a local path.\n  It should be a directory path if the checkpoint is sharded. Otherwise, it should be a file path.")),(0,a.kt)("div",null,(0,a.kt)(s.iz,{name:"Doc",mdxType:"Divider"}),"Load optimizer from checkpoint.")),(0,a.kt)("p",null,"\u4f18\u5316\u5668\u5728\u52a0\u8f7d\u524d\u5fc5\u987b\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.booster.Booster")," \u52a0\u901f\u3002"),(0,a.kt)("h2",{id:"\u5b66\u4e60\u7387\u8c03\u5ea6\u5668-checkpoint"},"\u5b66\u4e60\u7387\u8c03\u5ea6\u5668 Checkpoint"),(0,a.kt)(s.Cl,{mdxType:"DocStringContainer"},(0,a.kt)("div",null,(0,a.kt)(s.Dx,{type:"",name:"colossalai.booster.Booster.save_lr_scheduler",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/booster/booster.py#L224",mdxType:"Title"}),(0,a.kt)(s.Pc,{mdxType:"Signature"},"lr_scheduler: _LRScheduler, checkpoint: str"),(0,a.kt)(s.aE,{mdxType:"Parameters"},"- **lr_scheduler** (LRScheduler) -- A lr scheduler boosted by Booster.\n- **checkpoint** (str) -- Path to the checkpoint. It must be a local file path.")),(0,a.kt)("div",null,(0,a.kt)(s.iz,{name:"Doc",mdxType:"Divider"}),"Save lr scheduler to checkpoint.")),(0,a.kt)("p",null,"\u5b66\u4e60\u7387\u8c03\u5ea6\u5668\u5728\u4fdd\u5b58\u524d\u5fc5\u987b\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.booster.Booster")," \u52a0\u901f\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"checkpoint")," \u662f checkpoint \u6587\u4ef6\u7684\u672c\u5730\u8def\u5f84."),(0,a.kt)(s.Cl,{mdxType:"DocStringContainer"},(0,a.kt)("div",null,(0,a.kt)(s.Dx,{type:"",name:"colossalai.booster.Booster.load_lr_scheduler",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/booster/booster.py#L233",mdxType:"Title"}),(0,a.kt)(s.Pc,{mdxType:"Signature"},"lr_scheduler: _LRScheduler, checkpoint: str"),(0,a.kt)(s.aE,{mdxType:"Parameters"},"- **lr_scheduler** (LRScheduler) -- A lr scheduler boosted by Booster.\n- **checkpoint** (str) -- Path to the checkpoint. It must be a local file path.")),(0,a.kt)("div",null,(0,a.kt)(s.iz,{name:"Doc",mdxType:"Divider"}),"Load lr scheduler from checkpoint.")),(0,a.kt)("p",null,"\u5b66\u4e60\u7387\u8c03\u5ea6\u5668\u5728\u52a0\u8f7d\u524d\u5fc5\u987b\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"colossalai.booster.Booster")," \u52a0\u901f\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"checkpoint")," \u662f checkpoint \u6587\u4ef6\u7684\u672c\u5730\u8def\u5f84."),(0,a.kt)("h2",{id:"checkpoint-\u8bbe\u8ba1"},"Checkpoint \u8bbe\u8ba1"),(0,a.kt)("p",null,"\u6709\u5173 Checkpoint \u8bbe\u8ba1\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u6211\u4eec\u7684\u8ba8\u8bba ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpcaitech/ColossalAI/discussions/3339"},"A Unified Checkpoint System Design"),"."))}m.isMDXComponent=!0}}]);