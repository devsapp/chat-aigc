"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{862:function(n,e,i){i.r(e),i.d(e,{ConfirmAndSubmit:function(){return T},DingTalkOutGoing:function(){return J},EventBus:function(){return O},Landing:function(){return M}});var s,l,o=i(5893),t=i(7294),r=i(1163),c=i(8226),a=i(9834),d=i(6894),h=i(9876),x=i(5117),u=i(7841),j=i(1003),g=i(6980),p=i(5033),m=i(4777),f=i(8513),k=i(8333),b=i(6137),w=i(8198),y=i(3625),v=i(8060),C=i(1759),z=i(7248),N=i(1666);(s=l||(l={})).Home="/",s.Action="/action";var S=i(5299);let P=n=>{let{content:e}=n;return(0,o.jsx)(S.D,{className:"markdown-container",children:e})},A=n=>{let{value:e}=n,i=(0,v.V)({timeout:500});return(0,o.jsx)(c.u,{label:i.copied?"已复制":"复制",withArrow:!0,position:"right",children:(0,o.jsx)(a.A,{color:i.copied?"teal":"gray",onClick:()=>i.copy(e),children:i.copied?(0,o.jsx)(w.Z,{size:"1rem"}):(0,o.jsx)(y.Z,{size:"1rem"})})})};function J(){let[n,{toggle:e}]=(0,C.q)(!1);(0,v.V)({timeout:500});let i=(0,N.s)().outgoing,{postUrl:s,token:l}=i;return(0,o.jsxs)("div",{style:{width:720,padding:20},children:[(0,o.jsxs)(d.r,{children:[(0,o.jsx)(d.r.Col,{span:4,children:"Outgoing Post地址"}),(0,o.jsx)(d.r.Col,{span:8,className:"copy_container",children:(0,o.jsxs)(h.k,{justify:"flex-start",align:"center",direction:"row",children:[(0,o.jsx)(x.x,{fw:700,children:s}),(0,o.jsx)(A,{value:s})]})})]}),(0,o.jsxs)(d.r,{children:[(0,o.jsx)(d.r.Col,{span:4,children:"Outgoing Token"}),(0,o.jsx)(d.r.Col,{span:8,children:(0,o.jsxs)(h.k,{justify:"flex-start",align:"center",direction:"row",children:[(0,o.jsx)(x.x,{fw:700,children:l}),(0,o.jsx)(A,{value:l})]})})]}),(0,o.jsxs)("div",{style:{textAlign:"right"},children:[" ",(0,o.jsx)(u.z,{variant:"subtle",compact:!0,onClick:e,children:"详细指引"})]}),(0,o.jsx)(j.U,{in:n,children:(0,o.jsx)(P,{content:"### chat&\xa0万相机器人设置教程一\n#### 1.钉群中添加机器人\n![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/9e67cd78-9d7f-40c8-92a9-6c6c7c8996b3.png)\n\n![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/e2e488ad-af11-4208-aff0-c80d541e65c3.png)\n\n![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/6ed7d36b-2757-4a7c-ae35-4fbf34513c7b.png)\n\n![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/0253e413-d389-4498-a461-00007683f59c.png)\n#### 2.安全设置选择“加签”（后续配置需要）\n![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/81788dbf-fd69-4715-883d-fd7080b87195.png)\n#### 3.开启outgoing，并复制页面信息填写到输入框\n![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/733ed8f4-7501-42e9-88da-e30b031dd1b9.png)"})})]})}function O(n){let{form:e}=n,[i,{toggle:s}]=(0,C.q)(!1);return(0,o.jsxs)("div",{style:{width:720,padding:20},children:[(0,o.jsx)(g.o,{label:"Webhook",placeholder:"输入钉钉webhook地址",...e.getInputProps("webhook")}),(0,o.jsx)(g.o,{label:"加签Token",placeholder:"输入加签的秘钥",...e.getInputProps("token")}),(0,o.jsxs)("div",{style:{textAlign:"right"},children:[" ",(0,o.jsx)(u.z,{variant:"subtle",compact:!0,onClick:s,children:"详细指引"})]}),(0,o.jsx)(j.U,{in:i,children:(0,o.jsx)(P,{content:"### chat&\xa0万相机器人设置教程二\n#### 1.复制钉钉机器人生成的webhook和加签token\n#### 2.将webhook和token录入页面的输入框."})})]})}function T(n){let{form:e}=n,i=(0,N.s)().outgoing,{postUrl:s,token:l}=i,t=(null==e?void 0:e.values)||{},{webhook:r,token:c}=t;return(0,o.jsxs)("div",{style:{width:720,padding:20},children:[(0,o.jsxs)("div",{children:[" ",(0,o.jsx)(x.x,{fw:700,children:"钉钉outgoing配置："})]}),(0,o.jsxs)(d.r,{children:[(0,o.jsx)(d.r.Col,{span:4,children:"Outgoing Url"}),(0,o.jsx)(d.r.Col,{span:8,children:(0,o.jsx)(p.y,{highlight:s,children:s})})]}),(0,o.jsxs)(d.r,{children:[(0,o.jsx)(d.r.Col,{span:4,children:"Outgoing Token"}),(0,o.jsx)(d.r.Col,{span:8,children:(0,o.jsx)(p.y,{highlight:l,children:l})})]}),(0,o.jsx)(m.i,{my:"sm",variant:"dashed"}),(0,o.jsx)("div",{children:(0,o.jsx)(x.x,{fw:700,children:"事件总线连接配置："})}),(0,o.jsxs)(d.r,{children:[(0,o.jsx)(d.r.Col,{span:4,children:"钉钉webhook"}),(0,o.jsx)(d.r.Col,{span:8,children:(0,o.jsx)(p.y,{highlight:r,children:r})})]}),(0,o.jsxs)(d.r,{children:[(0,o.jsx)(d.r.Col,{span:4,children:"钉钉加签验证Token"}),(0,o.jsx)(d.r.Col,{span:8,children:(0,o.jsx)(p.y,{highlight:c,children:c})})]})]})}function M(){let n=(0,z.c)({initialValues:{webhook:"",token:""},validate:{webhook:n=>n?null:"webhook必填",token:n=>n?null:"token必填"}}),e=(0,r.useRouter)(),[i,s]=(0,t.useState)(!1),[c,a]=(0,t.useState)(0),d=()=>a(n=>n<3?n+1:n),h=()=>a(n=>n>0?n-1:n),x=async function(n){try{s(!0);let i=await fetch("/api/eventbus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),o=await i.json();"Success"===o.Code&&e.push(l.Action)}catch(n){console.log(n)}finally{s(!1)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.f,{visible:i,overlayBlur:2}),(0,o.jsxs)("form",{onSubmit:n.onSubmit(x),children:[(0,o.jsxs)(k.v,{active:c,onStepClick:a,breakpoint:"sm",children:[(0,o.jsx)(k.v.Step,{label:"钉钉机器人设置",description:"配置钉钉机器人",children:(0,o.jsx)(J,{})}),(0,o.jsx)(k.v.Step,{label:"事件总线设置",description:"配置事件总线连接",children:(0,o.jsx)(O,{form:n})}),(0,o.jsx)(k.v.Completed,{children:(0,o.jsx)(T,{form:n})})]}),(0,o.jsxs)(b.Z,{position:"center",mt:"xl",children:[c>0?(0,o.jsx)(u.z,{variant:"default",onClick:h,children:"返回"}):null,c<2?(0,o.jsx)(u.z,{onClick:1===c?function(){n.validate(),n.isValid()&&d()}:d,children:"下一步"}):null,2===c?(0,o.jsx)(u.z,{type:"submit",children:"确定"}):null]})]})]})}}}]);