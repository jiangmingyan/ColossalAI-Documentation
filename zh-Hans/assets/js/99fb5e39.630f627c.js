"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="\u68af\u5ea6\u7d2f\u79ef (\u6700\u65b0\u7248\u672c)",l={unversionedId:"features/gradient_accumulation_with_booster",id:"features/gradient_accumulation_with_booster",title:"\u68af\u5ea6\u7d2f\u79ef (\u6700\u65b0\u7248\u672c)",description:"\u4f5c\u8005: Mingyan Jiang",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/features/gradient_accumulation_with_booster.md",sourceDirName:"features",slug:"/features/gradient_accumulation_with_booster",permalink:"/zh-Hans/docs/features/gradient_accumulation_with_booster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/gradient_accumulation_with_booster.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u6df7\u5408\u7cbe\u5ea6\u8bad\u7ec3 (\u65e7\u7248\u672c)",permalink:"/zh-Hans/docs/features/mixed_precision_training"},next:{title:"\u68af\u5ea6\u7d2f\u79ef (\u65e7\u7248\u672c)",permalink:"/zh-Hans/docs/features/gradient_accumulation"}},s={},p=[{value:"\u5f15\u8a00",id:"\u5f15\u8a00",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u6b65\u9aa4 1. \u5728 train.py \u5bfc\u5165\u76f8\u5173\u5e93",id:"\u6b65\u9aa4-1-\u5728-trainpy-\u5bfc\u5165\u76f8\u5173\u5e93",level:3},{value:"\u6b65\u9aa4 2. \u521d\u59cb\u5316\u5206\u5e03\u5f0f\u73af\u5883",id:"\u6b65\u9aa4-2-\u521d\u59cb\u5316\u5206\u5e03\u5f0f\u73af\u5883",level:3},{value:"\u6b65\u9aa4 3. \u521b\u5efa\u8bad\u7ec3\u7ec4\u4ef6",id:"\u6b65\u9aa4-3-\u521b\u5efa\u8bad\u7ec3\u7ec4\u4ef6",level:3},{value:"\u6b65\u9aa4 4. \u6ce8\u5165\u7279\u6027",id:"\u6b65\u9aa4-4-\u6ce8\u5165\u7279\u6027",level:3},{value:"\u6b65\u9aa4 5. \u4f7f\u7528booster\u8bad\u7ec3",id:"\u6b65\u9aa4-5-\u4f7f\u7528booster\u8bad\u7ec3",level:3},{value:"\u6b65\u9aa4 6. \u542f\u52a8\u8bad\u7ec3\u811a\u672c",id:"\u6b65\u9aa4-6-\u542f\u52a8\u8bad\u7ec3\u811a\u672c",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u68af\u5ea6\u7d2f\u79ef-\u6700\u65b0\u7248\u672c"},"\u68af\u5ea6\u7d2f\u79ef (\u6700\u65b0\u7248\u672c)"),(0,a.kt)("p",null,"\u4f5c\u8005: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jiangmingyan"},"Mingyan Jiang")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f6e\u6559\u7a0b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-Hans/docs/basics/define_your_config"},"\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-Hans/docs/basics/booster_api"},"\u8bad\u7ec3\u4e2d\u4f7f\u7528Booster"))),(0,a.kt)("h2",{id:"\u5f15\u8a00"},"\u5f15\u8a00"),(0,a.kt)("p",null,"\u68af\u5ea6\u7d2f\u79ef\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u589e\u5927\u8bad\u7ec3 batch size \u7684\u65b9\u5f0f\u3002 \u5728\u8bad\u7ec3\u5927\u6a21\u578b\u65f6\uff0c\u5185\u5b58\u7ecf\u5e38\u4f1a\u6210\u4e3a\u74f6\u9888\uff0c\u5e76\u4e14 batch size \u901a\u5e38\u4f1a\u5f88\u5c0f\uff08\u59822\uff09\uff0c\u8fd9\u5bfc\u81f4\u6536\u655b\u6027\u65e0\u6cd5\u4fdd\u8bc1\u3002\u68af\u5ea6\u7d2f\u79ef\u5c06\u591a\u6b21\u8fed\u4ee3\u7684\u68af\u5ea6\u7d2f\u52a0\uff0c\u5e76\u4ec5\u5728\u8fbe\u5230\u9884\u8bbe\u8fed\u4ee3\u6b21\u6570\u65f6\u66f4\u65b0\u53c2\u6570\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728 Colossal-AI \u4e2d\u4f7f\u7528\u68af\u5ea6\u7d2f\u79ef\u975e\u5e38\u7b80\u5355\uff0cbooster\u63d0\u4f9bno_sync\u8fd4\u56de\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7ba1\u7406\u5668\uff0c\u5728\u8be5\u4e0a\u4e0b\u6587\u7ba1\u7406\u5668\u4e0b\u53d6\u6d88\u540c\u6b65\u5e76\u4e14\u7d2f\u79ef\u68af\u5ea6\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u68af\u5ea6\u7d2f\u79ef\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u68af\u5ea6\u7d2f\u79ef\u6b21\u6570\u88ab\u8bbe\u7f6e\u4e3a4\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa4-1-\u5728-trainpy-\u5bfc\u5165\u76f8\u5173\u5e93"},"\u6b65\u9aa4 1. \u5728 train.py \u5bfc\u5165\u76f8\u5173\u5e93"),(0,a.kt)("p",null,"\u521b\u5efatrain.py\u5e76\u5bfc\u5165\u5fc5\u8981\u4f9d\u8d56\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"torch")," \u7684\u7248\u672c\u5e94\u4e0d\u4f4e\u4e8e1.8.1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom pathlib import Path\n\nimport torch\nfrom torchvision import transforms\nfrom torchvision.datasets import CIFAR10\nfrom torchvision.models import resnet18\n\nimport colossalai\nfrom colossalai.booster import Booster\nfrom colossalai.booster.plugin import TorchDDPPlugin\nfrom colossalai.logging import get_dist_logger\nfrom colossalai.cluster.dist_coordinator import priority_execution\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-2-\u521d\u59cb\u5316\u5206\u5e03\u5f0f\u73af\u5883"},"\u6b65\u9aa4 2. \u521d\u59cb\u5316\u5206\u5e03\u5f0f\u73af\u5883"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u521d\u59cb\u5316\u5206\u5e03\u5f0f\u73af\u5883\u3002\u4e3a\u4e86\u5feb\u901f\u6f14\u793a\uff0c\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"launch_from_torch"),"\u3002\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-Hans/docs/basics/launch_colossalai"},"Launch Colossal-AI"),"\u4f7f\u7528\u5176\u4ed6\u521d\u59cb\u5316\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# initialize distributed setting\nparser = colossalai.get_default_parser()\nargs = parser.parse_args()\n\n# launch from torch\ncolossalai.launch_from_torch(config=dict())\n\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-3-\u521b\u5efa\u8bad\u7ec3\u7ec4\u4ef6"},"\u6b65\u9aa4 3. \u521b\u5efa\u8bad\u7ec3\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6784\u5efa\u4f60\u7684\u6a21\u578b\u3001\u4f18\u5316\u5668\u3001\u635f\u5931\u51fd\u6570\u3001\u5b66\u4e60\u7387\u8c03\u6574\u5668\u548c\u6570\u636e\u52a0\u8f7d\u5668\u3002\u6ce8\u610f\u6570\u636e\u96c6\u7684\u8def\u5f84\u4ece\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"DATA"),"\u83b7\u5f97\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"export DATA=/path/to/data")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Path(os.environ['DATA'])"),"\uff0c\u5728\u4f60\u7684\u673a\u5668\u4e0a\u8bbe\u7f6e\u8def\u5f84\u3002\u6570\u636e\u5c06\u4f1a\u88ab\u81ea\u52a8\u4e0b\u8f7d\u5230\u8be5\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# define the training hyperparameters\nBATCH_SIZE = 128\nGRADIENT_ACCUMULATION = 4\n\n# build resnet\nmodel = resnet18(num_classes=10)\n\n# build dataloaders\nwith priority_execution():\n    train_dataset = CIFAR10(root=Path(os.environ.get('DATA', './data')),\n                            download=True,\n                            transform=transforms.Compose([\n                                transforms.RandomCrop(size=32, padding=4),\n                                transforms.RandomHorizontalFlip(),\n                                transforms.ToTensor(),\n                                transforms.Normalize(mean=[0.4914, 0.4822, 0.4465], std=[0.2023, 0.1994, 0.2010]),\n                            ]))\n\n# build criterion\ncriterion = torch.nn.CrossEntropyLoss()\n\n# optimizer\noptimizer = torch.optim.SGD(model.parameters(), lr=0.1, momentum=0.9, weight_decay=5e-4)\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-4-\u6ce8\u5165\u7279\u6027"},"\u6b65\u9aa4 4. \u6ce8\u5165\u7279\u6027"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"TorchDDPPlugin"),"\u5bf9\u8c61\uff0c\u5e76\u4f5c\u4e3a\u53c2\u5b9e\u4f8b\u5316",(0,a.kt)("inlineCode",{parentName:"p"},"Booster"),"\uff0c \u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"booster.boost"),"\u6ce8\u5165\u7279\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"plugin = TorchDDPPlugin()\nbooster = Booster(plugin=plugin)\ntrain_dataloader = plugin.prepare_dataloader(train_dataset, batch_size=BATCH_SIZE, shuffle=True, drop_last=True)\nmodel, optimizer, criterion, train_dataloader, _ = booster.boost(model=model,\n                                                                    optimizer=optimizer,\n                                                                    criterion=criterion,\n                                                                    dataloader=train_dataloader)\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-5-\u4f7f\u7528booster\u8bad\u7ec3"},"\u6b65\u9aa4 5. \u4f7f\u7528booster\u8bad\u7ec3"),(0,a.kt)("p",null,"\u4f7f\u7528booster\u6784\u5efa\u4e00\u4e2a\u666e\u901a\u7684\u8bad\u7ec3\u5faa\u73af\uff0c\u9a8c\u8bc1\u68af\u5ea6\u7d2f\u79ef\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"param_by_iter")," \u8bb0\u5f55\u5206\u5e03\u8bad\u7ec3\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"optimizer.zero_grad()\nfor idx, (img, label) in enumerate(train_dataloader):\n        sync_context = booster.no_sync(model)\n        img = img.cuda()\n        label = label.cuda()\n        if idx % (GRADIENT_ACCUMULATION - 1) != 0:\n            with sync_context:\n                output = model(img)\n                train_loss = criterion(output, label)\n                booster.backward(train_loss, optimizer)\n        else:\n            output = model(img)\n            train_loss = criterion(output, label)\n            booster.backward(train_loss, optimizer)\n            optimizer.step()\n            optimizer.zero_grad()\n\n        ele_1st = next(model.parameters()).flatten()[0]\n        param_by_iter.append(str(ele_1st.item()))\n\n        if idx != 0 and idx % (GRADIENT_ACCUMULATION - 1) == 0:\n            break\n\n    for iteration, val in enumerate(param_by_iter):\n        print(f'iteration {iteration} - value: {val}')\n\n    if param_by_iter[-1] != param_by_iter[0]:\n        print('The parameter is only updated in the last iteration')\n\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-6-\u542f\u52a8\u8bad\u7ec3\u811a\u672c"},"\u6b65\u9aa4 6. \u542f\u52a8\u8bad\u7ec3\u811a\u672c"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1\u68af\u5ea6\u7d2f\u79ef\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u68c0\u67e5\u53c2\u6570\u503c\u7684\u53d8\u5316\u3002\u5f53\u8bbe\u7f6e\u68af\u5ea6\u7d2f\u52a0\u65f6\uff0c\u4ec5\u5728\u6700\u540e\u4e00\u6b65\u66f4\u65b0\u53c2\u6570\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"colossalai run --nproc_per_node 1 train.py\n")),(0,a.kt)("p",null,"\u4f60\u5c06\u4f1a\u770b\u5230\u7c7b\u4f3c\u4e0b\u65b9\u7684\u6587\u672c\u8f93\u51fa\u3002\u8fd9\u5c55\u73b0\u4e86\u68af\u5ea6\u867d\u7136\u5728\u524d3\u4e2a\u8fed\u4ee3\u4e2d\u88ab\u8ba1\u7b97\uff0c\u4f46\u76f4\u5230\u6700\u540e\u4e00\u6b21\u8fed\u4ee3\uff0c\u53c2\u6570\u624d\u88ab\u66f4\u65b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"iteration 0, first 10 elements of param: tensor([-0.0208,  0.0189,  0.0234,  0.0047,  0.0116, -0.0283,  0.0071, -0.0359, -0.0267, -0.0006], device='cuda:0', grad_fn=<SliceBackward0>)\niteration 1, first 10 elements of param: tensor([-0.0208,  0.0189,  0.0234,  0.0047,  0.0116, -0.0283,  0.0071, -0.0359, -0.0267, -0.0006], device='cuda:0', grad_fn=<SliceBackward0>)\niteration 2, first 10 elements of param: tensor([-0.0208,  0.0189,  0.0234,  0.0047,  0.0116, -0.0283,  0.0071, -0.0359, -0.0267, -0.0006], device='cuda:0', grad_fn=<SliceBackward0>)\niteration 3, first 10 elements of param: tensor([-0.0141,  0.0464,  0.0507,  0.0321,  0.0356, -0.0150,  0.0172, -0.0118, 0.0222,  0.0473], device='cuda:0', grad_fn=<SliceBackward0>)\n")))}d.isMDXComponent=!0}}]);