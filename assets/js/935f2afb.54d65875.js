"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Get started","collapsed":true,"items":[{"type":"link","label":"Setup","href":"/docs/get_started/installation","docId":"get_started/installation"},{"type":"link","label":"Quick Demo","href":"/docs/get_started/run_demo","docId":"get_started/run_demo"},{"type":"link","label":"Reading Roadmap","href":"/docs/get_started/reading_roadmap","docId":"get_started/reading_roadmap"}],"collapsible":true},{"type":"category","label":"Concepts","collapsed":true,"items":[{"type":"link","label":"Distributed Training","href":"/docs/concepts/distributed_training","docId":"concepts/distributed_training"},{"type":"link","label":"Paradigms of Parallelism","href":"/docs/concepts/paradigms_of_parallelism","docId":"concepts/paradigms_of_parallelism"},{"type":"link","label":"Colossal-AI Overview","href":"/docs/concepts/colossalai_overview","docId":"concepts/colossalai_overview"}],"collapsible":true},{"type":"category","label":"Basics","collapsed":true,"items":[{"type":"link","label":"Command Line Tool","href":"/docs/basics/command_line_tool","docId":"basics/command_line_tool"},{"type":"link","label":"Launch Colossal-AI","href":"/docs/basics/launch_colossalai","docId":"basics/launch_colossalai"},{"type":"link","label":"Booster API","href":"/docs/basics/booster_api","docId":"basics/booster_api"},{"type":"link","label":"Booster Plugins","href":"/docs/basics/booster_plugins","docId":"basics/booster_plugins"},{"type":"link","label":"Booster Checkpoint","href":"/docs/basics/booster_checkpoint","docId":"basics/booster_checkpoint"},{"type":"link","label":"Define Your Configuration","href":"/docs/basics/define_your_config","docId":"basics/define_your_config"},{"type":"link","label":"Initialize Features","href":"/docs/basics/initialize_features","docId":"basics/initialize_features"},{"type":"link","label":"Use Engine and Trainer in Training","href":"/docs/basics/engine_trainer","docId":"basics/engine_trainer"},{"type":"link","label":"Configure Parallelization","href":"/docs/basics/configure_parallelization","docId":"basics/configure_parallelization"},{"type":"link","label":"Model Checkpoint","href":"/docs/basics/model_checkpoint","docId":"basics/model_checkpoint"},{"type":"link","label":"ColoTensor Concepts","href":"/docs/basics/colotensor_concept","docId":"basics/colotensor_concept"}],"collapsible":true},{"type":"category","label":"Features","collapsed":true,"items":[{"type":"link","label":"Auto Mixed Precision Training","href":"/docs/features/mixed_precision_training","docId":"features/mixed_precision_training"},{"type":"link","label":"Gradient Accumulation","href":"/docs/features/gradient_accumulation","docId":"features/gradient_accumulation"},{"type":"link","label":"Gradient Clipping (Latest)","href":"/docs/features/gradient_clipping_with_booster","docId":"features/gradient_clipping_with_booster"},{"type":"link","label":"Gradient Clipping (Outdated)","href":"/docs/features/gradient_clipping","docId":"features/gradient_clipping"},{"type":"link","label":"Gradient Handler","href":"/docs/features/gradient_handler","docId":"features/gradient_handler"},{"type":"link","label":"Zero Redundancy Optimizer with chunk-based memory management","href":"/docs/features/zero_with_chunk","docId":"features/zero_with_chunk"},{"type":"category","label":"Tensor Parallel","collapsed":true,"items":[{"type":"link","label":"1D Tensor Parallelism","href":"/docs/features/1D_tensor_parallel","docId":"features/1D_tensor_parallel"},{"type":"link","label":"2D Tensor Parallelism","href":"/docs/features/2D_tensor_parallel","docId":"features/2D_tensor_parallel"},{"type":"link","label":"2.5D Tensor Parallelism","href":"/docs/features/2p5D_tensor_parallel","docId":"features/2p5D_tensor_parallel"},{"type":"link","label":"3D Tensor Parallelism","href":"/docs/features/3D_tensor_parallel","docId":"features/3D_tensor_parallel"}],"collapsible":true},{"type":"link","label":"Pipeline Parallel","href":"/docs/features/pipeline_parallel","docId":"features/pipeline_parallel"},{"type":"link","label":"NVMe offload","href":"/docs/features/nvme_offload","docId":"features/nvme_offload"},{"type":"link","label":"Cluster Utilities","href":"/docs/features/cluster_utils","docId":"features/cluster_utils"}],"collapsible":true},{"type":"category","label":"Advanced Tutorials","collapsed":true,"items":[{"type":"link","label":"Train ViT Using Pipeline Parallelism","href":"/docs/advanced_tutorials/train_vit_using_pipeline_parallelism","docId":"advanced_tutorials/train_vit_using_pipeline_parallelism"},{"type":"link","label":"Step By Step: Accelerate ViT Training With Colossal-AI (From Data Parallel to Hybrid Parallel)","href":"/docs/advanced_tutorials/train_vit_with_hybrid_parallelism","docId":"advanced_tutorials/train_vit_with_hybrid_parallelism"},{"type":"link","label":"Train GPT Using Hybrid Parallelism","href":"/docs/advanced_tutorials/train_gpt_using_hybrid_parallelism","docId":"advanced_tutorials/train_gpt_using_hybrid_parallelism"},{"type":"link","label":"Define your own parallel model","href":"/docs/advanced_tutorials/define_your_own_parallel_model","docId":"advanced_tutorials/define_your_own_parallel_model"},{"type":"link","label":"Add Your Own Parallel Mode","href":"/docs/advanced_tutorials/add_your_parallel","docId":"advanced_tutorials/add_your_parallel"},{"type":"link","label":"Meet Gemini:The Heterogeneous Memory Manager of Colossal-AI","href":"/docs/advanced_tutorials/meet_gemini","docId":"advanced_tutorials/meet_gemini"},{"type":"link","label":"Parallelize Your Training like Megatron-LM via ColoTensor","href":"/docs/advanced_tutorials/parallelize_your_training_like_Megatron","docId":"advanced_tutorials/parallelize_your_training_like_Megatron"},{"type":"link","label":"Integrate Mixture-of-Experts Into Your Model","href":"/docs/advanced_tutorials/integrate_mixture_of_experts_into_your_model","docId":"advanced_tutorials/integrate_mixture_of_experts_into_your_model"},{"type":"link","label":"Build an online OPT service using Colossal-AI in 5 minutes","href":"/docs/advanced_tutorials/opt_service","docId":"advanced_tutorials/opt_service"}],"collapsible":true}]},"docs":{"advanced_tutorials/add_your_parallel":{"id":"advanced_tutorials/add_your_parallel","title":"Add Your Own Parallel Mode","description":"Author: Shenggui Li, Yongbin Li","sidebar":"tutorialSidebar"},"advanced_tutorials/define_your_own_parallel_model":{"id":"advanced_tutorials/define_your_own_parallel_model","title":"Define your own parallel model","description":"Author: Zhengda Bian, Yongbin Li","sidebar":"tutorialSidebar"},"advanced_tutorials/integrate_mixture_of_experts_into_your_model":{"id":"advanced_tutorials/integrate_mixture_of_experts_into_your_model","title":"Integrate Mixture-of-Experts Into Your Model","description":"Author: Haichen Huang","sidebar":"tutorialSidebar"},"advanced_tutorials/meet_gemini":{"id":"advanced_tutorials/meet_gemini","title":"Meet Gemini:The Heterogeneous Memory Manager of Colossal-AI","description":"Author: Jiarui Fang, Yang You","sidebar":"tutorialSidebar"},"advanced_tutorials/opt_service":{"id":"advanced_tutorials/opt_service","title":"Build an online OPT service using Colossal-AI in 5 minutes","description":"Introduction","sidebar":"tutorialSidebar"},"advanced_tutorials/parallelize_your_training_like_Megatron":{"id":"advanced_tutorials/parallelize_your_training_like_Megatron","title":"Parallelize Your Training like Megatron-LM via ColoTensor","description":"Author: Haichen Huang and Jiarui Fang","sidebar":"tutorialSidebar"},"advanced_tutorials/train_gpt_using_hybrid_parallelism":{"id":"advanced_tutorials/train_gpt_using_hybrid_parallelism","title":"Train GPT Using Hybrid Parallelism","description":"Author: Hongxin Liu, Yongbin Li","sidebar":"tutorialSidebar"},"advanced_tutorials/train_vit_using_pipeline_parallelism":{"id":"advanced_tutorials/train_vit_using_pipeline_parallelism","title":"Train ViT Using Pipeline Parallelism","description":"Author: Hongxin Liu, Yongbin Li","sidebar":"tutorialSidebar"},"advanced_tutorials/train_vit_with_hybrid_parallelism":{"id":"advanced_tutorials/train_vit_with_hybrid_parallelism","title":"Step By Step: Accelerate ViT Training With Colossal-AI (From Data Parallel to Hybrid Parallel)","description":"Author: Yuxuan Lou","sidebar":"tutorialSidebar"},"basics/booster_api":{"id":"basics/booster_api","title":"Booster API","description":"Author: Mingyan Jiang","sidebar":"tutorialSidebar"},"basics/booster_checkpoint":{"id":"basics/booster_checkpoint","title":"Booster Checkpoint","description":"Author: Hongxin Liu","sidebar":"tutorialSidebar"},"basics/booster_plugins":{"id":"basics/booster_plugins","title":"Booster Plugins","description":"Author: Hongxin Liu","sidebar":"tutorialSidebar"},"basics/colotensor_concept":{"id":"basics/colotensor_concept","title":"ColoTensor Concepts","description":"Author: Jiarui Fang, Hongxin Liu and Haichen Huang","sidebar":"tutorialSidebar"},"basics/command_line_tool":{"id":"basics/command_line_tool","title":"Command Line Tool","description":"Author: Shenggui Li","sidebar":"tutorialSidebar"},"basics/configure_parallelization":{"id":"basics/configure_parallelization","title":"Configure Parallelization","description":"Author: Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"basics/define_your_config":{"id":"basics/define_your_config","title":"Define Your Configuration","description":"Author: Guangyang Lu, Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"basics/engine_trainer":{"id":"basics/engine_trainer","title":"Use Engine and Trainer in Training","description":"Author: Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"basics/initialize_features":{"id":"basics/initialize_features","title":"Initialize Features","description":"Author: Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"basics/launch_colossalai":{"id":"basics/launch_colossalai","title":"Launch Colossal-AI","description":"Author: Chuanrui Wang, Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"basics/model_checkpoint":{"id":"basics/model_checkpoint","title":"Model Checkpoint","description":"Author : Guangyang Lu","sidebar":"tutorialSidebar"},"Colossal-Auto/feature/auto_checkpoint":{"id":"Colossal-Auto/feature/auto_checkpoint","title":"auto_checkpoint","description":""},"Colossal-Auto/feature/device_mesh":{"id":"Colossal-Auto/feature/device_mesh","title":"device_mesh","description":""},"Colossal-Auto/feature/layout_converting_management":{"id":"Colossal-Auto/feature/layout_converting_management","title":"layout_converting_management","description":"When a tensor is required to have different sharding specs in upstream and downstream operators, we need to perform layout conversion processing, which can also be called redistribution. There are currently two mainstream methods, enumeration conversion, and dimension-by-dimension conversion. enumeration conversion is to enumerate all possible situations, and then find the corresponding conversion scheme in the table when conversion is required. However, it has a big problem. That is, as the dimension of the device mesh increases, the scale of this problem is so inflated that it cannot be solved by enumerating tables. Dimension-by-dimension conversion is for a sharding spec of an N-D tensor, X0X1...Xn-1, sharding spec is converted from 0 to n-1 dimension by dimension, so that no matter how many dimensions the device mesh and tensor have, with only one-time Scanning, a feasible conversion operation sequence is generated, the problem is that the conversion efficiency will be very poor."},"Colossal-Auto/feature/tracer":{"id":"Colossal-Auto/feature/tracer","title":"tracer","description":""},"Colossal-Auto/get_started/installation":{"id":"Colossal-Auto/get_started/installation","title":"Setup","description":"Announcement"},"Colossal-Auto/get_started/introduction":{"id":"Colossal-Auto/get_started/introduction","title":"Introduction","description":"In recent years, the deployment of large-scale machine learning models has become increasingly important. However, distributed training systems often require manual parallelization plans, which can be complex and require expert knowledge in system engineering and configuration. This can be a challenge for most AI developers without the necessary skills. The need for manual parallelization can make deploying large-scale machine learning models difficult and expensive."},"Colossal-Auto/get_started/run_demo":{"id":"Colossal-Auto/get_started/run_demo","title":"Quick Demo","description":"Colossal-Auto simplifies the process of deploying large-scale machine learning models for AI developers. Compared to other solutions that require manual configuration of complex parallel policies and model modification, Colossal-Auto only requires one line of code from the user, along with cluster information and model configurations, to enable distributed training. Quick demos showing how to use Colossal-Auto are given below."},"concepts/colossalai_overview":{"id":"concepts/colossalai_overview","title":"Colossal-AI Overview","description":"Author: Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"concepts/distributed_training":{"id":"concepts/distributed_training","title":"Distributed Training","description":"Author: Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"concepts/paradigms_of_parallelism":{"id":"concepts/paradigms_of_parallelism","title":"Paradigms of Parallelism","description":"Author: Shenggui Li, Siqi Mai","sidebar":"tutorialSidebar"},"features/1D_tensor_parallel":{"id":"features/1D_tensor_parallel","title":"1D Tensor Parallelism","description":"Author: Zhengda Bian, Yongbin Li","sidebar":"tutorialSidebar"},"features/2D_tensor_parallel":{"id":"features/2D_tensor_parallel","title":"2D Tensor Parallelism","description":"Author: Zhengda Bian, Yongbin Li","sidebar":"tutorialSidebar"},"features/2p5D_tensor_parallel":{"id":"features/2p5D_tensor_parallel","title":"2.5D Tensor Parallelism","description":"Author: Zhengda Bian, Yongbin Li","sidebar":"tutorialSidebar"},"features/3D_tensor_parallel":{"id":"features/3D_tensor_parallel","title":"3D Tensor Parallelism","description":"Author: Zhengda Bian, Yongbin Li","sidebar":"tutorialSidebar"},"features/cluster_utils":{"id":"features/cluster_utils","title":"Cluster Utilities","description":"Author: Hongxin Liu","sidebar":"tutorialSidebar"},"features/gradient_accumulation":{"id":"features/gradient_accumulation","title":"Gradient Accumulation","description":"Author: Shenggui Li, Yongbin Li","sidebar":"tutorialSidebar"},"features/gradient_clipping":{"id":"features/gradient_clipping","title":"Gradient Clipping (Outdated)","description":"Author: Boxiang Wang, Haichen Huang, Yongbin Li","sidebar":"tutorialSidebar"},"features/gradient_clipping_with_booster":{"id":"features/gradient_clipping_with_booster","title":"Gradient Clipping (Latest)","description":"Author: Mingyan Jiang","sidebar":"tutorialSidebar"},"features/gradient_handler":{"id":"features/gradient_handler","title":"Gradient Handler","description":"Author: Shenggui Li, Yongbin Li","sidebar":"tutorialSidebar"},"features/mixed_precision_training":{"id":"features/mixed_precision_training","title":"Auto Mixed Precision Training","description":"Author: Chuanrui Wang, Shenggui Li, Yongbin Li","sidebar":"tutorialSidebar"},"features/nvme_offload":{"id":"features/nvme_offload","title":"NVMe offload","description":"Author: Hongxin Liu","sidebar":"tutorialSidebar"},"features/pipeline_parallel":{"id":"features/pipeline_parallel","title":"Pipeline Parallel","description":"Author: Guangyang Lu, Hongxin Liu, Yongbin Li","sidebar":"tutorialSidebar"},"features/zero_with_chunk":{"id":"features/zero_with_chunk","title":"Zero Redundancy Optimizer with chunk-based memory management","description":"Author: Hongxiu Liu, Jiarui Fang, Zijian Ye","sidebar":"tutorialSidebar"},"get_started/installation":{"id":"get_started/installation","title":"Setup","description":"Requirements:","sidebar":"tutorialSidebar"},"get_started/reading_roadmap":{"id":"get_started/reading_roadmap","title":"Reading Roadmap","description":"Colossal-AI provides a collection of parallel training components for you. We aim to support you with your development","sidebar":"tutorialSidebar"},"get_started/run_demo":{"id":"get_started/run_demo","title":"Quick Demo","description":"Colossal-AI is an integrated large-scale deep learning system with efficient parallelization techniques. The system can","sidebar":"tutorialSidebar"}}}')}}]);