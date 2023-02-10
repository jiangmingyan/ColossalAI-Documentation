"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[1684],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5531:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],l={},s="Use Engine and Trainer in Training",p={unversionedId:"basics/engine_trainer",id:"version-v0.2.2/basics/engine_trainer",title:"Use Engine and Trainer in Training",description:"Author: Shenggui Li, Siqi Mai",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v0.2.2/basics/engine_trainer.md",sourceDirName:"basics",slug:"/basics/engine_trainer",permalink:"/docs/basics/engine_trainer",tags:[],version:"v0.2.2",frontMatter:{}},c=[{value:"Introduction",id:"introduction",children:[{value:"Engine",id:"engine",children:[],level:3},{value:"Trainer",id:"trainer",children:[],level:3}],level:2},{value:"Explain with ResNet",id:"explain-with-resnet",children:[{value:"Overview",id:"overview",children:[],level:3},{value:"Hands-on Practice",id:"hands-on-practice",children:[{value:"Step 1. Create a Config File",id:"step-1-create-a-config-file",children:[],level:4},{value:"Step 2. Initialize Distributed Environment",id:"step-2-initialize-distributed-environment",children:[],level:4},{value:"Step 3. Create all the training components",id:"step-3-create-all-the-training-components",children:[],level:4},{value:"Step 4. Initialize with Colossal-AI",id:"step-4-initialize-with-colossal-ai",children:[],level:4},{value:"Step 5. Train with engine",id:"step-5-train-with-engine",children:[],level:4},{value:"Step 6. Train with trainer",id:"step-6-train-with-trainer",children:[],level:4},{value:"Step 7. Start Distributed Training",id:"step-7-start-distributed-training",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-engine-and-trainer-in-training"},"Use Engine and Trainer in Training"),(0,i.kt)("p",null,"Author: Shenggui Li, Siqi Mai"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/basics/initialize_features"},"Initialize Features"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this tutorial, you will learn how to use the engine and trainer provided in Colossal-AI to train your model.\nBefore we delve into the details, we would like to first explain the concept of engine and trainer."),(0,i.kt)("h3",{id:"engine"},"Engine"),(0,i.kt)("p",null,"Engine is essentially a wrapper class for model, optimizer and loss function.\nWhen we call ",(0,i.kt)("inlineCode",{parentName:"p"},"colossalai.initialize"),", an engine object will be returned, and it has already been equipped with\nfunctionalities such as gradient clipping, gradient accumulation and zero optimizer as specified in your configuration file.\nAn engine object will use similar APIs to those of PyTorch training components such that the user has minimum change\nto their code."),(0,i.kt)("p",null,"Below is a table which shows the commonly used APIs for the engine object."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"PyTorch"),(0,i.kt)("th",{parentName:"tr",align:null},"Colossal-AI"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"optimizer"),(0,i.kt)("td",{parentName:"tr",align:null},"Set all gradients to zero before an iteration"),(0,i.kt)("td",{parentName:"tr",align:null},"optimizer.zero_grad()"),(0,i.kt)("td",{parentName:"tr",align:null},"engine.zero_grad()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"optimizer"),(0,i.kt)("td",{parentName:"tr",align:null},"Update the parameters"),(0,i.kt)("td",{parentName:"tr",align:null},"optimizer.step()"),(0,i.kt)("td",{parentName:"tr",align:null},"engine.step()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"model"),(0,i.kt)("td",{parentName:"tr",align:null},"Run a forward pass"),(0,i.kt)("td",{parentName:"tr",align:null},"outputs = model(inputs)"),(0,i.kt)("td",{parentName:"tr",align:null},"outputs = engine(inputs)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"criterion"),(0,i.kt)("td",{parentName:"tr",align:null},"Calculate the loss value"),(0,i.kt)("td",{parentName:"tr",align:null},"loss = criterion(output, label)"),(0,i.kt)("td",{parentName:"tr",align:null},"loss = engine.criterion(output, label)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"criterion"),(0,i.kt)("td",{parentName:"tr",align:null},"Execute back-propagation on the model"),(0,i.kt)("td",{parentName:"tr",align:null},"loss.backward()"),(0,i.kt)("td",{parentName:"tr",align:null},"engine.backward(loss)")))),(0,i.kt)("p",null,"The reason why we need such an engine class is that we can add more functionalities while hiding the implementations in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"colossalai.initialize")," function.\nImaging we are gonna add a new feature, we can manipulate the model, optimizer, dataloader and loss function in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"colossalai.initialize")," function and only expose an engine object to the user.\nThe user only needs to modify their code to the minimum extent by adapting the normal PyTorch APIs to the Colossal-AI\nengine APIs. In this way, they can enjoy more features for efficient training."),(0,i.kt)("p",null,"A normal training iteration using engine can be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import colossalai\n\n# build your model, optimizer, criterion, dataloaders\n...\n\nengine, train_dataloader, test_dataloader, _ = colossalai.initialize(model,\n                                                                    optimizer,\n                                                                    criterion,\n                                                                    train_dataloader,\n                                                                    test_dataloader)\nfor img, label in train_dataloader:\n    engine.zero_grad()\n    output = engine(img)\n    loss = engine.criterion(output, label)\n    engine.backward(loss)\n    engine.step()\n")),(0,i.kt)("h3",{id:"trainer"},"Trainer"),(0,i.kt)("p",null,"Trainer is a more high-level wrapper for the user to execute training with fewer lines of code. However, in pursuit of more abstraction, it loses some flexibility compared to engine. The trainer is designed to execute a forward and backward step to perform model weight update. It is easy to create a trainer object by passing the engine object. The trainer has a default value ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," for the argument ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule"),". In most cases, we leave this value to ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," unless we want to use pipeline parallelism. If you wish to explore more about this parameter, you can go to the tutorial on pipeline parallelism."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.logging import get_dist_logger\nfrom colossalai.trainer import Trainer, hooks\n\n# build components and initialize with colossalai.initialize\n...\n\n# create a logger so that trainer can log on the console\nlogger = get_dist_logger()\n\n# create a trainer object\ntrainer = Trainer(\n    engine=engine,\n    logger=logger\n)\n")),(0,i.kt)("p",null,"In trainer, the user can customize some hooks and attach these hooks to the trainer object. A hook object will execute life-cycle methods periodically based on the training scheme. For example,  The ",(0,i.kt)("inlineCode",{parentName:"p"},"LRSchedulerHook")," will execute ",(0,i.kt)("inlineCode",{parentName:"p"},"lr_scheduler.step()")," to update the learning rate of the model during either ",(0,i.kt)("inlineCode",{parentName:"p"},"after_train_iter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"after_train_epoch")," stages depending on whether the user wants to update the learning rate after each training iteration or only after the entire training epoch. You can store the hook objects in a list and pass it to ",(0,i.kt)("inlineCode",{parentName:"p"},"trainer.fit")," method. ",(0,i.kt)("inlineCode",{parentName:"p"},"trainer.fit")," method will execute training and testing based on your parameters. If ",(0,i.kt)("inlineCode",{parentName:"p"},"display_process")," is True, a progress bar will be displayed on your console to show the training process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# define the hooks to attach to the trainer\nhook_list = [\n    hooks.LossHook(),\n    hooks.LRSchedulerHook(lr_scheduler=lr_scheduler, by_epoch=True),\n    hooks.AccuracyHook(accuracy_func=Accuracy()),\n    hooks.LogMetricByEpochHook(logger),\n]\n\n# start training\ntrainer.fit(\n    train_dataloader=train_dataloader,\n    epochs=NUM_EPOCHS,\n    test_dataloader=test_dataloader,\n    test_interval=1,\n    hooks=hook_list,\n    display_progress=True\n)\n")),(0,i.kt)("p",null,"If you want to customize your own hook class, you can inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"hooks.BaseHook")," and override the life-cycle methods of your interest. A dummy example to demonstrate how to create a simple log message hook is provided below for your reference."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.logging import get_dist_logger\nfrom colossalai.trainer import hooks\n\nclass LogMessageHook(hooks.BaseHook):\n\n    def __init__(self, priority=10):\n        self._logger = get_dist_logger()\n\n    def before_train(self, trainer):\n        self._logger.info('training starts')\n\n    def after_train(self, trainer):\n        self._logger.info('training finished')\n\n\n...\n\n# then in your training script\nhook_list.append(LogMessageHook())\n")),(0,i.kt)("p",null,"In the sections below, I will guide you through the steps required to train a ResNet model with both engine and trainer."),(0,i.kt)("h2",{id:"explain-with-resnet"},"Explain with ResNet"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this section we will cover:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use an engine object to train a ResNet34 model on CIFAR10 dataset"),(0,i.kt)("li",{parentName:"ol"},"Use a trainer object to train a ResNet34 model on CIFAR10 dataset")),(0,i.kt)("p",null,"The project structure will be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-- config.py\n-- run_resnet_cifar10_with_engine.py\n-- run_resnet_cifar10_with_trainer.py\n")),(0,i.kt)("p",null,"Steps 1-4 below are commonly used regardless of using engine or trainer. Thus, steps 1-4 + step 5 will be your ",(0,i.kt)("inlineCode",{parentName:"p"},"run_resnet_cifar10_with_engine.py")," and steps 1-4 + step 6 will form ",(0,i.kt)("inlineCode",{parentName:"p"},"run_resnet_cifar10_with_trainer.py"),"."),(0,i.kt)("h3",{id:"hands-on-practice"},"Hands-on Practice"),(0,i.kt)("h4",{id:"step-1-create-a-config-file"},"Step 1. Create a Config File"),(0,i.kt)("p",null,"In your project folder, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.py"),". This file is to specify some features you may want to use to train your model. A sample config file is as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.amp import AMP_TYPE\n\nBATCH_SIZE = 128\nNUM_EPOCHS = 200\n\nfp16=dict(\n    mode=AMP_TYPE.TORCH\n)\n")),(0,i.kt)("p",null,"In this config file, we specify that we want to use batch size 128 per GPU and run for 200 epochs. These two parameters are exposed by ",(0,i.kt)("inlineCode",{parentName:"p"},"gpc.config"),". For example, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"gpc.config.BATCH_SIZE")," to access the value you store in your config file. The ",(0,i.kt)("inlineCode",{parentName:"p"},"fp16")," configuration tells ",(0,i.kt)("inlineCode",{parentName:"p"},"colossalai.initialize")," to use mixed precision training provided by PyTorch to train the model with better speed and lower memory consumption."),(0,i.kt)("h4",{id:"step-2-initialize-distributed-environment"},"Step 2. Initialize Distributed Environment"),(0,i.kt)("p",null,"We need to initialize the distributed training environment. This has been introduced in the tutorial on how to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/launch_colossalai"},"launch Colossal-AI"),". For this demostration, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"launch_from_torch")," and PyTorch launch utility."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import colossalai\n\n# ./config.py refers to the config file we just created in step 1\ncolossalai.launch_from_torch(config='./config.py')\n")),(0,i.kt)("h4",{id:"step-3-create-all-the-training-components"},"Step 3. Create all the training components"),(0,i.kt)("p",null,"In this step, we can create all the components used for training. These components include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Model"),(0,i.kt)("li",{parentName:"ol"},"Optimizer"),(0,i.kt)("li",{parentName:"ol"},"Criterion/loss function"),(0,i.kt)("li",{parentName:"ol"},"Training/Testing dataloaders"),(0,i.kt)("li",{parentName:"ol"},"Learning rate Scheduler"),(0,i.kt)("li",{parentName:"ol"},"Logger")),(0,i.kt)("p",null,"To build these components, you need to import the following modules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pathlib import Path\nfrom colossalai.logging import get_dist_logger\nimport torch\nimport os\nfrom colossalai.core import global_context as gpc\nfrom colossalai.utils import get_dataloader\nfrom torchvision import transforms\nfrom colossalai.nn.lr_scheduler import CosineAnnealingLR\nfrom torchvision.datasets import CIFAR10\nfrom torchvision.models import resnet34\n")),(0,i.kt)("p",null,"Then build your components in the same way as how to normally build them in your PyTorch scripts. In the script below, we set the root path for CIFAR10 dataset as an environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA"),". You can change it to any path you like, for example, you can change ",(0,i.kt)("inlineCode",{parentName:"p"},"root=Path(os.environ['DATA'])")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"root='./data'")," so that there is no need to set the environment variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# build logger\nlogger = get_dist_logger()\n\n# build resnet\nmodel = resnet34(num_classes=10)\n\n# build datasets\ntrain_dataset = CIFAR10(\n    root='./data',\n    download=True,\n    transform=transforms.Compose(\n        [\n            transforms.RandomCrop(size=32, padding=4),\n            transforms.RandomHorizontalFlip(),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.4914, 0.4822, 0.4465], std=[\n                0.2023, 0.1994, 0.2010]),\n        ]\n    )\n)\n\ntest_dataset = CIFAR10(\n    root='./data',\n    train=False,\n    transform=transforms.Compose(\n        [\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.4914, 0.4822, 0.4465], std=[\n                0.2023, 0.1994, 0.2010]),\n        ]\n    )\n)\n\n# build dataloaders\ntrain_dataloader = get_dataloader(dataset=train_dataset,\n                                  shuffle=True,\n                                  batch_size=gpc.config.BATCH_SIZE,\n                                  num_workers=1,\n                                  pin_memory=True,\n                                  )\n\ntest_dataloader = get_dataloader(dataset=test_dataset,\n                                 add_sampler=False,\n                                 batch_size=gpc.config.BATCH_SIZE,\n                                 num_workers=1,\n                                 pin_memory=True,\n                                 )\n\n# build criterion\ncriterion = torch.nn.CrossEntropyLoss()\n\n# optimizer\noptimizer = torch.optim.SGD(model.parameters(), lr=0.1, momentum=0.9, weight_decay=5e-4)\n\n# lr_scheduler\nlr_scheduler = CosineAnnealingLR(optimizer, total_steps=gpc.config.NUM_EPOCHS)\n")),(0,i.kt)("h4",{id:"step-4-initialize-with-colossal-ai"},"Step 4. Initialize with Colossal-AI"),(0,i.kt)("p",null,"Next, the essential step is to obtain the engine class by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"colossalai.initialize"),". As stated in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.py"),", we will be using mixed precision training for training ResNet34 model. ",(0,i.kt)("inlineCode",{parentName:"p"},"colossalai.initialize")," will automatically check your config file and assign relevant features to your training components. In this way, our engine object has already been able to train with mixed precision, but you do not have to explicitly take care of it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"engine, train_dataloader, test_dataloader, _ = colossalai.initialize(model,\n                                                                     optimizer,\n                                                                     criterion,\n                                                                     train_dataloader,\n                                                                     test_dataloader,\n                                                                     )\n")),(0,i.kt)("h4",{id:"step-5-train-with-engine"},"Step 5. Train with engine"),(0,i.kt)("p",null,"With all the training components ready, we can train ResNet34 just like how to normally deal with PyTorch training."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'for epoch in range(gpc.config.NUM_EPOCHS):\n    # execute a training iteration\n    engine.train()\n    for img, label in train_dataloader:\n        img = img.cuda()\n        label = label.cuda()\n\n        # set gradients to zero\n        engine.zero_grad()\n\n        # run forward pass\n        output = engine(img)\n\n        # compute loss value and run backward pass\n        train_loss = engine.criterion(output, label)\n        engine.backward(train_loss)\n\n        # update parameters\n        engine.step()\n\n    # update learning rate\n    lr_scheduler.step()\n\n    # execute a testing iteration\n    engine.eval()\n    correct = 0\n    total = 0\n    for img, label in test_dataloader:\n        img = img.cuda()\n        label = label.cuda()\n\n        # run prediction without back-propagation\n        with torch.no_grad():\n            output = engine(img)\n            test_loss = engine.criterion(output, label)\n\n        # compute the number of correct prediction\n        pred = torch.argmax(output, dim=-1)\n        correct += torch.sum(pred == label)\n        total += img.size(0)\n\n    logger.info(\n        f"Epoch {epoch} - train loss: {train_loss:.5}, test loss: {test_loss:.5}, acc: {correct / total:.5}, lr: {lr_scheduler.get_last_lr()[0]:.5g}", ranks=[0])\n')),(0,i.kt)("h4",{id:"step-6-train-with-trainer"},"Step 6. Train with trainer"),(0,i.kt)("p",null,"If you wish to train with a trainer object, you can follow the code snippet below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from colossalai.nn.metric import Accuracy\nfrom colossalai.trainer import Trainer, hooks\n\n\n# create a trainer object\ntrainer = Trainer(\n    engine=engine,\n    logger=logger\n)\n\n# define the hooks to attach to the trainer\nhook_list = [\n    hooks.LossHook(),\n    hooks.LRSchedulerHook(lr_scheduler=lr_scheduler, by_epoch=True),\n    hooks.AccuracyHook(accuracy_func=Accuracy()),\n    hooks.LogMetricByEpochHook(logger),\n    hooks.LogMemoryByEpochHook(logger)\n]\n\n# start training\n# run testing every 1 epoch\ntrainer.fit(\n    train_dataloader=train_dataloader,\n    epochs=gpc.config.NUM_EPOCHS,\n    test_dataloader=test_dataloader,\n    test_interval=1,\n    hooks=hook_list,\n    display_progress=True\n)\n")),(0,i.kt)("h4",{id:"step-7-start-distributed-training"},"Step 7. Start Distributed Training"),(0,i.kt)("p",null,"Lastly, we can invoke the scripts using the distributed launcher provided by PyTorch as we used ",(0,i.kt)("inlineCode",{parentName:"p"},"launch_from_torch")," in Step 2. You need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<num_gpus>")," with the number of GPUs available on your machine. This number can be 1 if you only want to use 1 GPU. If you wish to use other launchers, you can refer to the tutorial on How to Launch Colossal-AI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# with engine\npython -m torch.distributed.launch --nproc_per_node <num_gpus> --master_addr localhost --master_port 29500 run_resnet_cifar10_with_engine.py\n# with trainer\npython -m torch.distributed.launch --nproc_per_node <num_gpus> --master_addr localhost --master_port 29500 run_resnet_cifar10_with_trainer.py\n")))}u.isMDXComponent=!0}}]);