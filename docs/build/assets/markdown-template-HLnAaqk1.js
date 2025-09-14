import{jsx as n,jsxs as r,Fragment as i}from"react/jsx-runtime";const c={title:"Markdown 模板示例"},a=[{id:"标题示例",text:"标题示例",depth:2},{id:"三级标题",text:"三级标题",depth:3},{id:"四级标题",text:"四级标题",depth:4},{id:"文本格式",text:"文本格式",depth:2},{id:"引用",text:"引用",depth:2},{id:"列表",text:"列表",depth:2},{id:"无序列表",text:"无序列表",depth:3},{id:"有序列表",text:"有序列表",depth:3},{id:"任务列表",text:"任务列表",depth:3},{id:"代码",text:"代码",depth:2},{id:"表格",text:"表格",depth:2},{id:"链接和图片",text:"链接和图片",depth:2},{id:"水平分割线",text:"水平分割线",depth:2},{id:"数学公式",text:"数学公式",depth:2},{id:"注释",text:"注释",depth:2},{id:"转义字符",text:"转义字符",depth:2},{id:"脚注",text:"脚注",depth:2},{id:"自定义容器如果支持",text:"自定义容器（如果支持）",depth:2}],s="Markdown 模板示例";function h(l){const e={a:"a",blockquote:"blockquote",code:"code",del:"del",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l.components};return r(i,{children:[r(e.h1,{id:"markdown-模板示例",children:[n(e.a,{className:"header-anchor",href:"#markdown-模板示例",children:"#"}),"Markdown 模板示例"]}),`
`,r(e.h2,{id:"标题示例",children:[n(e.a,{className:"header-anchor",href:"#标题示例",children:"#"}),"标题示例"]}),`
`,r(e.h3,{id:"三级标题",children:[n(e.a,{className:"header-anchor",href:"#三级标题",children:"#"}),"三级标题"]}),`
`,r(e.h4,{id:"四级标题",children:[n(e.a,{className:"header-anchor",href:"#四级标题",children:"#"}),"四级标题"]}),`
`,r(e.h5,{id:"五级标题",children:[n(e.a,{className:"header-anchor",href:"#五级标题",children:"#"}),"五级标题"]}),`
`,r(e.h6,{id:"六级标题",children:[n(e.a,{className:"header-anchor",href:"#六级标题",children:"#"}),"六级标题"]}),`
`,r(e.h2,{id:"文本格式",children:[n(e.a,{className:"header-anchor",href:"#文本格式",children:"#"}),"文本格式"]}),`
`,n(e.p,{children:"普通文本段落。"}),`
`,r(e.p,{children:[n(e.strong,{children:"粗体文本"})," 和 ",n(e.em,{children:"斜体文本"})]}),`
`,n(e.p,{children:n(e.em,{children:n(e.strong,{children:"粗斜体文本"})})}),`
`,n(e.p,{children:n(e.del,{children:"删除线文本"})}),`
`,r(e.h2,{id:"引用",children:[n(e.a,{className:"header-anchor",href:"#引用",children:"#"}),"引用"]}),`
`,r(e.blockquote,{children:[`
`,n(e.p,{children:"这是一个引用"}),`
`,n(e.p,{children:"多行引用示例"}),`
`,r(e.blockquote,{children:[`
`,n(e.p,{children:"嵌套引用示例"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"列表",children:[n(e.a,{className:"header-anchor",href:"#列表",children:"#"}),"列表"]}),`
`,r(e.h3,{id:"无序列表",children:[n(e.a,{className:"header-anchor",href:"#无序列表",children:"#"}),"无序列表"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"项目1"}),`
`,r(e.li,{children:["项目2",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"子项目2.1"}),`
`,n(e.li,{children:"子项目2.2"}),`
`]}),`
`]}),`
`,n(e.li,{children:"项目3"}),`
`]}),`
`,r(e.h3,{id:"有序列表",children:[n(e.a,{className:"header-anchor",href:"#有序列表",children:"#"}),"有序列表"]}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"第一项"}),`
`,r(e.li,{children:["第二项",`
`,r(e.ol,{children:[`
`,n(e.li,{children:"子项2.1"}),`
`,n(e.li,{children:"子项2.2"}),`
`]}),`
`]}),`
`,n(e.li,{children:"第三项"}),`
`]}),`
`,r(e.h3,{id:"任务列表",children:[n(e.a,{className:"header-anchor",href:"#任务列表",children:"#"}),"任务列表"]}),`
`,r(e.ul,{className:"contains-task-list",children:[`
`,r(e.li,{className:"task-list-item",children:[n(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","已完成任务"]}),`
`,r(e.li,{className:"task-list-item",children:[n(e.input,{type:"checkbox",disabled:!0})," ","未完成任务"]}),`
`,r(e.li,{className:"task-list-item",children:[n(e.input,{type:"checkbox",disabled:!0})," ","待办事项"]}),`
`]}),`
`,r(e.h2,{id:"代码",children:[n(e.a,{className:"header-anchor",href:"#代码",children:"#"}),"代码"]}),`
`,r(e.p,{children:["行内代码 ",n(e.code,{children:'const example = "hello world";'})]}),`
`,n(e.p,{children:"代码块："}),`
`,r(e.div,{className:"language-javascript",children:[n(e.span,{className:"lang",children:"javascript"}),n(i,{children:n(e.pre,{className:"shiki shiki-themes everforest-light github-dark",style:{backgroundColor:"#fdf6e3","--shiki-dark-bg":"#24292e",color:"#5c6a72","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:r(e.code,{children:[r(e.span,{className:"line",children:[n(e.span,{style:{color:"#F85552","--shiki-dark":"#F97583"},children:"function"}),n(e.span,{style:{color:"#8DA101","--shiki-dark":"#B392F0"},children:" greeting"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:"("}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#FFAB70"},children:"name"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:")"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:" {"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:"    console"}),n(e.span,{style:{color:"#939F91","--shiki-dark":"#E1E4E8"},children:"."}),n(e.span,{style:{color:"#8DA101","--shiki-dark":"#B392F0"},children:"log"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:"("}),n(e.span,{style:{color:"#DFA000","--shiki-dark":"#9ECBFF"},children:"`Hello, "}),n(e.span,{style:{color:"#8DA101","--shiki-dark":"#9ECBFF"},children:"${"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:"name"}),n(e.span,{style:{color:"#8DA101","--shiki-dark":"#9ECBFF"},children:"}"}),n(e.span,{style:{color:"#DFA000","--shiki-dark":"#9ECBFF"},children:"!`"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:");"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#8DA101","--shiki-dark":"#B392F0"},children:"greeting"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:"("}),n(e.span,{style:{color:"#DFA000","--shiki-dark":"#9ECBFF"},children:'"World"'}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#E1E4E8"},children:");"})]})]})})})]}),`
`,r(e.h2,{id:"表格",children:[n(e.a,{className:"header-anchor",href:"#表格",children:"#"}),"表格"]}),`
`,r(e.table,{children:[n(e.thead,{children:r(e.tr,{children:[n(e.th,{children:"表头1"}),n(e.th,{children:"表头2"}),n(e.th,{children:"表头3"})]})}),r(e.tbody,{children:[r(e.tr,{children:[n(e.td,{children:"单元格1"}),n(e.td,{children:"单元格2"}),n(e.td,{children:"单元格3"})]}),r(e.tr,{children:[n(e.td,{children:"示例文本"}),n(e.td,{children:"示例文本"}),n(e.td,{children:"示例文本"})]})]})]}),`
`,r(e.h2,{id:"链接和图片",children:[n(e.a,{className:"header-anchor",href:"#链接和图片",children:"#"}),"链接和图片"]}),`
`,r(e.p,{children:["literals ",n(e.a,{href:"http://www.example.com",children:"www.example.com"}),", ",n(e.a,{href:"https://example.com",children:"https://example.com"}),", and ",n(e.a,{href:"mailto:contact@example.com",children:"contact@example.com"}),"."]}),`
`,n(e.p,{children:n(e.a,{href:"https://example.com",children:"链接文本"})}),`
`,n(e.p,{children:n(e.img,{src:"https://example.com/image.jpg",alt:"图片替代文本"})}),`
`,r(e.h2,{id:"水平分割线",children:[n(e.a,{className:"header-anchor",href:"#水平分割线",children:"#"}),"水平分割线"]}),`
`,n(e.hr,{}),`
`,r(e.h2,{id:"数学公式",children:[n(e.a,{className:"header-anchor",href:"#数学公式",children:"#"}),"数学公式"]}),`
`,n(e.p,{children:"使用 KaTeX 或 MathJax 渲染数学公式（需要相应配置）："}),`
`,r(e.p,{children:["行内公式：",n(e.code,{children:"$E = mc^2$"})]}),`
`,n(e.p,{children:"块级公式："}),`
`,r(e.div,{className:"language-latex",children:[n(e.span,{className:"lang",children:"latex"}),n(i,{children:n(e.pre,{className:"shiki shiki-themes everforest-light github-dark",style:{backgroundColor:"#fdf6e3","--shiki-dark-bg":"#24292e",color:"#5c6a72","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:r(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#DFA000","--shiki-dark":"#9ECBFF"},children:"$$"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"\\"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"frac"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"{"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"n!"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"}{"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"k!"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"("}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"n"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"-"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"k"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:")"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"!"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"}"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:" = "}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"\\"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"binom"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"{"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"n"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"}{"}),n(e.span,{style:{color:"#3A94C5","--shiki-dark":"#79B8FF"},children:"k"}),n(e.span,{style:{color:"#5C6A72","--shiki-dark":"#79B8FF"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#DFA000","--shiki-dark":"#9ECBFF"},children:"$$"})})]})})})]}),`
`,r(e.h2,{id:"注释",children:[n(e.a,{className:"header-anchor",href:"#注释",children:"#"}),"注释"]}),`
`,`
`,r(e.h2,{id:"转义字符",children:[n(e.a,{className:"header-anchor",href:"#转义字符",children:"#"}),"转义字符"]}),`
`,n(e.p,{children:"* 这是一个星号 *"}),`
`,n(e.p,{children:"` 这是一个反引号 `"}),`
`,r(e.h2,{id:"脚注",children:[n(e.a,{className:"header-anchor",href:"#脚注",children:"#"}),"脚注"]}),`
`,r(e.p,{children:["这是一个带有脚注的文本",n(e.sup,{children:n(e.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),`
`,r(e.h2,{id:"自定义容器如果支持",children:[n(e.a,{className:"header-anchor",href:"#自定义容器如果支持",children:"#"}),"自定义容器（如果支持）"]}),`
`,n(e.p,{children:`::: tip
这是一个提示信息
:::`}),`
`,n(e.p,{children:`::: warning
这是一个警告信息
:::`}),`
`,n(e.p,{children:`::: danger
这是一个危险警告
:::`}),`
`,n(e.p,{children:"6777"}),`
`,`
`,`
`,r(e.section,{"data-footnotes":!0,className:"footnotes",children:[r(e.h2,{className:"sr-only",id:"footnote-label",children:[n(e.a,{className:"header-anchor",href:"#footnote-label",children:"#"}),"Footnotes"]}),`
`,r(e.ol,{children:[`
`,r(e.li,{id:"user-content-fn-1",children:[`
`,r(e.p,{children:["这是脚注的内容 ",n(e.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function t(l={}){const{wrapper:e}=l.components||{};return e?n(e,{...l,children:n(h,{...l})}):h(l)}export{t as default,c as frontmatter,s as title,a as toc};
