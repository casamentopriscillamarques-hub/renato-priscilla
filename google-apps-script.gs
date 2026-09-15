/**
 * RENATO & PRISCILLA — Google Apps Script
 *
 * Integra RSVP e lista de presentes com uma planilha Google.
 *
 * IMPORTANTE SOBRE O COMPROVANTE:
 * O site envia o comprovante apenas temporariamente para este endpoint,
 * para cumprir a exigência de anexá-lo antes da confirmação.
 * Este script NÃO salva o arquivo no Google Drive, NÃO grava o conteúdo
 * do arquivo na planilha e NÃO cria anexo. O conteúdo recebido fica apenas
 * na memória durante a execução e é descartado ao final.
 *
 * O status PAGO significa que o convidado anexou um comprovante.
 * A confirmação efetiva do crédito Pix continua sendo manual.
 */

const NOME_ABA_RSVP = "Confirmacoes";
const NOME_ABA_PRESENTES = "Presentes";

function doGet() {
  return ContentService
    .createTextOutput("Renato & Priscilla — integração ativa.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === "rsvp") {
      registrarRSVP(ss, data);
    } else if (data.type === "gift") {
      registrarPresente(ss, data);
    } else {
      throw new Error("Tipo de registro não reconhecido.");
    }

    return resposta(true, "Registro realizado com sucesso.");
  } catch (error) {
    console.error(error);
    return resposta(false, error.message);
  }
}

function registrarRSVP(ss, data) {
  const sheet = obterAba(ss, NOME_ABA_RSVP,
    ["Data/Hora", "Nome", "Telefone/WhatsApp", "Presença"]);

  const guests = Array.isArray(data.guests) ? data.guests : [];

  guests.forEach(guest => {
    sheet.appendRow([
      new Date(),
      guest.name || "",
      guest.phone || "",
      "Sim"
    ]);
  });
}

function registrarPresente(ss, data) {
  if (!data.name || !data.gift || !data.proofBase64) {
    throw new Error("Nome, presente e comprovante do Pix são obrigatórios.");
  }

  const sheet = obterAba(ss, NOME_ABA_PRESENTES,
    ["Data/Hora", "Nome", "Presente", "Valor", "Chave Pix", "Status"]);

  // NÃO salvar proofBase64, nome do arquivo ou o arquivo em qualquer lugar.
  // O comprovante é usado apenas como requisito de envio e permanece em memória.
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.gift || "",
    Number(data.value || 0),
    data.pix || "",
    "PAGO"
  ]);
}

function obterAba(ss, nome, cabecalho) {
  let sheet = ss.getSheetByName(nome);

  if (!sheet) {
    sheet = ss.insertSheet(nome);
    sheet.appendRow(cabecalho);
    sheet.getRange(1, 1, 1, cabecalho.length)
      .setFontWeight("bold");
    sheet.setFrozenRows(1);
  } else {
    // Compatibilidade com uma aba Presentes criada pela versão anterior.
    if (nome === NOME_ABA_PRESENTES && sheet.getLastColumn() < cabecalho.length) {
      sheet.getRange(1, 1, 1, cabecalho.length).setValues([cabecalho]);
      sheet.getRange(1, 1, 1, cabecalho.length).setFontWeight("bold");
    }
  }

  return sheet;
}

function resposta(sucesso, mensagem) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: sucesso,
      message: mensagem
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
