"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[242],{4506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(4848),s=n(8453);const i={sidebar_position:4},d="Automatische Neustarts",o={id:"guides/automatic-reboots",title:"Automatische Neustarts",description:"Konfiguration von automatischen Neustarts mit Cron",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/guides/automatic-reboots.md",sourceDirName:"guides",slug:"/guides/automatic-reboots",permalink:"/de/guides/automatic-reboots",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-reboots.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"RCON Wrapper",permalink:"/de/guides/rcon/rcon-wrapper"},next:{title:"Automatische Updates",permalink:"/de/guides/automatic-updates"}},a={},c=[{value:"Konfiguration von automatischen Neustarts mit Cron",id:"konfiguration-von-automatischen-neustarts-mit-cron",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"automatische-neustarts",children:"Automatische Neustarts"}),"\n",(0,r.jsx)(t.h2,{id:"konfiguration-von-automatischen-neustarts-mit-cron",children:"Konfiguration von automatischen Neustarts mit Cron"}),"\n",(0,r.jsxs)(t.p,{children:["Um automatische Neustarts mit diesem Server verwenden zu k\xf6nnen, ",(0,r.jsx)(t.strong,{children:"m\xfcssen"})," die folgenden Umgebungsvariablen auf ",(0,r.jsx)(t.code,{children:"true"}),"\ngesetzt werden:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RCON_ENABLED"})}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["Wenn der Docker-Neustart nicht auf die Richtlinie ",(0,r.jsx)(t.code,{children:"always"})," oder ",(0,r.jsx)(t.code,{children:"unless-stopped"})," gesetzt ist, wird der Server\nheruntergefahren und muss manuell neu gestartet werden."]}),(0,r.jsxs)(t.p,{children:["Der Beispiel-Docker-Befehl und die Docker-Compose-Datei in ",(0,r.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/de/",children:"der Schnellstartanleitung"})," verwenden bereits die ben\xf6tigte Richtlinie."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{children:"Info"}),(0,r.jsx)(t.th,{children:"Standardwert"}),(0,r.jsx)(t.th,{children:"Erlaubte Werte"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),(0,r.jsx)(t.td,{children:"Einstellung beeinflusst die H\xe4ufigkeit automatischer Neustarts."}),(0,r.jsx)(t.td,{children:"0 0 * * *"}),(0,r.jsxs)(t.td,{children:["Erfordert einen Cron-Ausdruck - Siehe ",(0,r.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/de/guides/backup/automated-backup",children:"Konfiguration automatischer Backups mit Cron"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_REBOOT_ENABLED"}),(0,r.jsx)(t.td,{children:"Aktiviert automatische Neustarts"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"true/false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_REBOOT_WARN_MINUTES"}),(0,r.jsx)(t.td,{children:"Wie lange gewartet werden soll, bis der Server nach dem Informieren der Spieler neu gestartet wird."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"!0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE"}),(0,r.jsx)(t.td,{children:"Startet den Server neu, auch wenn Spieler online sind."}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"true/false"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Dieses Image verwendet Supercronic f\xfcr Cron-Jobs.\nSiehe ",(0,r.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"Supercronic"}),"\noder ",(0,r.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["Setzen Sie ",(0,r.jsx)(t.code,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),", um den Zeitplan zu \xe4ndern. Standardm\xe4\xdfig ist er auf jede Nacht um Mitternacht\ngesetzt. (gem\xe4\xdf der mit TZ festgelegten Zeitzone)"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);