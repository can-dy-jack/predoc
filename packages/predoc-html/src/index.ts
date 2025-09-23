export function generatePredocHTML(
  lang: string = 'zh-CN',
  title: string = 'predoc',
  description: string = 'A static site generator for Markdown',
  headElements: string = "",
  bodyElements: string = `<div id="predoc-app"></div>`,
  scriptElements: string = "",
) {
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${headElements}
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="icon" href="/ico.png" type="image/png" />
</head>
<body>
  ${bodyElements}
  ${scriptElements}
</body>
</html>`.trim();
}
