"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1913],{6999:(e,t,o)=>{o.d(t,{Cl:()=>n,Dx:()=>u,Pc:()=>a,aE:()=>c,iz:()=>l,nT:()=>i});var r=o(7294),s=o(398);o(814);function n(e){return r.createElement("div",{className:"docstring-container"},e.children)}function a(e){return r.createElement("div",{className:"signature"},"(",e.children,")")}function l(e){return r.createElement("h3",{className:"divider"},e.name)}function c(e){return r.createElement("div",null,r.createElement(l,{name:"Parameters"}),r.createElement(s.D,null,e.children))}function i(e){return r.createElement("div",null,r.createElement(l,{name:"Returns"}),r.createElement(s.D,null,`${e.name}: ${e.desc}`))}function u(e){return r.createElement("div",{className:"title-container"},r.createElement("div",{className:"title-module"},r.createElement("h3",null,e.type),"\xa0 ",r.createElement("h2",null,e.name)),r.createElement("div",{className:"title-source"},"<",r.createElement("a",{href:e.source,className:"title-source"},"source"),">"))}},4869:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=o(7462),s=(o(7294),o(3905)),n=o(6999);const a={},l="\u96c6\u7fa4\u5b9e\u7528\u7a0b\u5e8f",c={unversionedId:"features/cluster_utils",id:"features/cluster_utils",title:"\u96c6\u7fa4\u5b9e\u7528\u7a0b\u5e8f",description:"\u4f5c\u8005: Hongxin Liu",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/features/cluster_utils.md",sourceDirName:"features",slug:"/features/cluster_utils",permalink:"/zh-Hans/docs/features/cluster_utils",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/cluster_utils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NVMe offload",permalink:"/zh-Hans/docs/features/nvme_offload"},next:{title:"\u4f7f\u7528\u6d41\u6c34\u5e76\u884c\u8bad\u7ec3 ViT",permalink:"/zh-Hans/docs/advanced_tutorials/train_vit_using_pipeline_parallelism"}},i={},u=[{value:"\u5f15\u8a00",id:"\u5f15\u8a00",level:2},{value:"API \u53c2\u8003",id:"api-\u53c2\u8003",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u96c6\u7fa4\u5b9e\u7528\u7a0b\u5e8f"},"\u96c6\u7fa4\u5b9e\u7528\u7a0b\u5e8f"),(0,s.kt)("p",null,"\u4f5c\u8005: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ver217"},"Hongxin Liu")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u524d\u7f6e\u6559\u7a0b:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-Hans/docs/concepts/distributed_training"},"\u5206\u5e03\u5f0f\u8bad\u7ec3"))),(0,s.kt)("h2",{id:"\u5f15\u8a00"},"\u5f15\u8a00"),(0,s.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b9e\u7528\u7a0b\u5e8f\u7c7b ",(0,s.kt)("inlineCode",{parentName:"p"},"colossalai.cluster.DistCoordinator")," \u6765\u534f\u8c03\u5206\u5e03\u5f0f\u8bad\u7ec3\u3002\u5b83\u5bf9\u4e8e\u83b7\u53d6\u6709\u5173\u96c6\u7fa4\u7684\u5404\u79cd\u4fe1\u606f\u5f88\u6709\u7528\uff0c\u4f8b\u5982\u8282\u70b9\u6570\u3001\u6bcf\u4e2a\u8282\u70b9\u7684\u8fdb\u7a0b\u6570\u7b49\u3002"),(0,s.kt)("h2",{id:"api-\u53c2\u8003"},"API \u53c2\u8003"),(0,s.kt)(n.Cl,{mdxType:"DocStringContainer"},(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"class",name:"colossalai.cluster.DistCoordinator",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L11",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"*args, **kwargs"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **rank** (int) -- the rank of the current process\n- **world_size** (int) -- the total number of processes\n- **local_rank** (int) -- the rank of the current process on the current node")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"This class is used to coordinate distributed training. It is a singleton class, which means that there is only one instance of this\nclass in the whole program."),(0,s.kt)("p",null,"There are some terms that are used in this class:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"rank: the rank of the current process"),(0,s.kt)("li",{parentName:"ul"},"world size: the total number of processes"),(0,s.kt)("li",{parentName:"ul"},"local rank: the rank of the current process on the current node"),(0,s.kt)("li",{parentName:"ul"},"master: the process with rank 0"),(0,s.kt)("li",{parentName:"ul"},"node master: the process with local rank 0 on the current node")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("blockquote",null,(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("p",{parentName:"blockquote"},"from colossalai.cluster.dist_coordinator import DistCoordinator\ncoordinator = DistCoordinator()"),(0,s.kt)("p",{parentName:"blockquote"},"if coordinator.is_master():\ndo_something()"),(0,s.kt)("p",{parentName:"blockquote"},"coordinator.print_on_master('hello world')"))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"block_all",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L161",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"process_group: ProcessGroup = None"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **process_group** (ProcessGroup, optional) -- process group to block. Defaults to None, which refers to the default process group.")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Block all processes in the process group."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"destroy",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L152",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"process_group: ProcessGroup = None"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **process_group** (ProcessGroup, optional) -- process group to destroy. Defaults to None, which refers to the default process group.")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Destroy the distributed process group."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"is_last_process",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L87",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"process_group: ProcessGroup = None"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **process_group** (ProcessGroup, optional) -- process group to use for the last rank check. Defaults to None, which refers to the default process group."),(0,s.kt)(n.nT,{name:"bool",desc:"True if the current process is the last process, False otherwise",mdxType:"Returns"})),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Check if the current process is the last process (rank is world size - 1). It can accept a sub process group to check the last rank with respect to the process."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"is_master",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L64",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"process_group: ProcessGroup = None"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **process_group** (ProcessGroup, optional) -- process group to use for the rank 0 check. Defaults to None, which refers to the default process group."),(0,s.kt)(n.nT,{name:"bool",desc:"True if the current process is the master process, False otherwise",mdxType:"Returns"})),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Check if the current process is the master process (rank is 0). It can accept a sub process group to check the rank 0 with respect to the process."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"is_node_master",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L77",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},""),(0,s.kt)(n.nT,{name:"bool",desc:"True if the current process is the master process on the current node, False otherwise",mdxType:"Returns"})),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Check if the current process is the master process on the current node (local rank is 0)."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"on_master_only",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L170",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"process_group: ProcessGroup = None")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"A function wrapper that only executes the wrapped function on the master process (rank 0)."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("blockquote",null,(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("p",{parentName:"blockquote"},"from colossalai.cluster import DistCoordinator\ndist_coordinator = DistCoordinator()"),(0,s.kt)("p",{parentName:"blockquote"},"@dist_coordinator.on_master_only()\ndef print_on_master(msg):\nprint(msg)")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"print_on_master",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L101",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"msg: str, process_group: ProcessGroup = None"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **msg** (str) -- message to print\n- **process_group** (ProcessGroup, optional) -- process group to use for the rank 0 check. Defaults to None, which refers to the default process group.")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Print message only from rank 0."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"print_on_node_master",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L113",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"msg: str"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **msg** (str) -- message to print")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"Print message only from local rank 0. Local rank 0 refers to the 0th process running the current node."))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Dx,{type:"",name:"priority_execution",source:"https://github.com/hpcaitech/ColossalAI/blob/main/src/colossalai/cluster/dist_coordinator.py#L124",mdxType:"Title"}),(0,s.kt)(n.Pc,{mdxType:"Signature"},"executor_rank: int = 0, process_group: ProcessGroup = None"),(0,s.kt)(n.aE,{mdxType:"Parameters"},"- **executor_rank** (int) -- the process rank to execute without blocking, all other processes will be blocked\n- **process_group** (ProcessGroup, optional) -- process group to use for the executor rank check. Defaults to None, which refers to the default process group.")),(0,s.kt)("div",null,(0,s.kt)(n.iz,{name:"Doc",mdxType:"Divider"}),(0,s.kt)("p",null,"This context manager is used to allow one process to execute while blocking all\nother processes in the same process group. This is often useful when downloading is required\nas we only want to download in one process to prevent file corruption."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("blockquote",null,(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("p",{parentName:"blockquote"},"from colossalai.cluster import DistCoordinator\ndist_coordinator = DistCoordinator()\nwith dist_coordinator.priority_execution():\ndataset = CIFAR10(root='./data', download=True)"))))))))}m.isMDXComponent=!0}}]);