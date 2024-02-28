"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[535],{5567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(4848),s=r(8453);const i={sidebar_position:4},o="Automatische herstarts",a={id:"guides/automatic-reboots",title:"Automatische herstarts",description:"Configuratie van automatische herstarts met Cron",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/guides/automatic-reboots.md",sourceDirName:"guides",slug:"/guides/automatic-reboots",permalink:"/nl/guides/automatic-reboots",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-reboots.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"RCON Wrapper",permalink:"/nl/guides/rcon/rcon-wrapper"},next:{title:"Automatische Updates",permalink:"/nl/guides/automatic-updates"}},d={},c=[{value:"Configuratie van automatische herstarts met Cron",id:"configuratie-van-automatische-herstarts-met-cron",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"automatische-herstarts",children:"Automatische herstarts"}),"\n",(0,n.jsx)(t.h2,{id:"configuratie-van-automatische-herstarts-met-cron",children:"Configuratie van automatische herstarts met Cron"}),"\n",(0,n.jsxs)(t.p,{children:["Om automatische herstarts met deze Server te kunnen gebruiken,\nmoeten de volgende omgevingsvariabelen worden ingesteld op ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"RCON_ENABLED"}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["Als docker restart niet is ingesteld op het beleid ",(0,n.jsx)(t.code,{children:"always"})," of ",(0,n.jsx)(t.code,{children:"unless-stopped"}),",\ndan zal de server afsluiten en moet handmatig opnieuw worden gestart."]}),(0,n.jsxs)(t.p,{children:["Het voorbeeld docker run commando en docker compose bestand in de ",(0,n.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/",children:"de Snelle installatie"}),"\ngebruiken al het vereiste beleid."]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Info"}),(0,n.jsx)(t.th,{children:"Default Values"}),(0,n.jsx)(t.th,{children:"Allowed Values"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),(0,n.jsx)(t.td,{children:"De instelling be\xefnvloedt de frequentie van automatische updates."}),(0,n.jsx)(t.td,{children:"0 0 * * *"}),(0,n.jsxs)(t.td,{children:["Heeft een Cron expressie nodig - Zie ",(0,n.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/nl/guides/backup/automated-backup",children:"Configuring Automatic Backups with Cron"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_ENABLED"}),(0,n.jsx)(t.td,{children:"Schakelt automatische herstarts in."}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"true/false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_WARN_MINUTES"}),(0,n.jsx)(t.td,{children:"Hoe lang moet er gewacht worden voordat de server wordt herstart."}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"!0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE"}),(0,n.jsx)(t.td,{children:"Herstart de server zelfs als er spelers online zijn."}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"true/false"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Deze image gebruikt Supercronic voor cron-jobs.\nzie ",(0,n.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"supercronic"}),"\nof ",(0,n.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["Stel ",(0,n.jsx)(t.code,{children:"AUTO_REBOOT_CRON_EXPRESSION"})," in om het schema te wijzigen,\nstandaard is elke nacht om middernacht volgens de tijdzone ingesteld met TZ."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);