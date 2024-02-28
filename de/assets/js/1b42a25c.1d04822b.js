"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[153],{6168:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=r(4848),s=r(8453);const i={sidebar_position:1},d="Verwendung von Discord-Webhooks",c={id:"guides/discord/discord-webhooks",title:"Verwendung von Discord-Webhooks",description:"1. Generieren Sie eine Webhook-URL f\xfcr Ihren Discord-Server in den Servereinstellungen Ihres Discords.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/guides/discord/discord-webhooks.md",sourceDirName:"guides/discord",slug:"/guides/discord/discord-webhooks",permalink:"/de/guides/discord/discord-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/discord/discord-webhooks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Discord integration",permalink:"/de/category/discord-integration"},next:{title:"RCON (Advanced)",permalink:"/de/category/rcon-advanced"}},t={},a=[];function u(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"verwendung-von-discord-webhooks",children:"Verwendung von Discord-Webhooks"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generieren Sie eine Webhook-URL f\xfcr Ihren Discord-Server in den Servereinstellungen Ihres Discords."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Setze die Umgebungsvariable wie bei dem Discord-Webhook-Beispiel auf diesen eindeutigen Token:\n",(0,o.jsx)(n.code,{children:"https://discord.com/api/webhooks/1234567890/abcde"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Senden Sie Discord-Nachrichten mit ",(0,o.jsx)(n.code,{children:"docker run"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'-e DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/1234567890/abcde" \\\n-e DISCORD_PRE_UPDATE_BOOT_MESSAGE="Der Server wird aktualisiert..." \\\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Senden Sie Discord-Nachrichten mit ",(0,o.jsx)(n.code,{children:"docker-compose"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1234567890/abcde\n- DISCORD_PRE_UPDATE_BOOT_MESSAGE=Der Server wird aktualisiert...\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var o=r(6540);const s={},i=o.createContext(s);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);