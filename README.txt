# Renato & Priscilla — Site de Casamento

## PASSO 1 — Testar no computador
1. Baixe os três arquivos:
   - index.html
   - style.css
   - script.js
2. Coloque os três arquivos dentro da mesma pasta.
3. Abra o arquivo `index.html` no navegador.

O site já funciona visualmente e os formulários funcionam em modo de teste.

## PASSO 2 — Publicar no GitHub Pages
1. Entre no GitHub.
2. Crie um novo repositório, por exemplo: `renato-priscilla-casamento`.
3. Envie `index.html`, `style.css` e `script.js`.
4. No repositório, entre em Settings > Pages.
5. Em Source, selecione a branch `main` e a pasta `/root`.
6. Salve.
7. O GitHub fornecerá o endereço do site.

## PASSO 3 — Google Sheets
O arquivo `script.js` está preparado para receber a URL de um Google Apps Script.

Procure esta linha:

const GOOGLE_APPS_SCRIPT_URL = "";

Depois que o Google Apps Script estiver publicado como aplicativo da web, coloque a URL entre as aspas.

Enquanto estiver vazia, o site salva os testes no navegador usando localStorage.

## Importante
A lista de presentes é simbólica. O site registra o presente escolhido e mostra a chave Pix:
21964143316

A integração definitiva com Google Sheets será configurada na próxima etapa.
