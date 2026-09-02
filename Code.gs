/**
 * Uchumi Langata Road POS — Google Apps Script backend
 *
 * Paste this into the Apps Script editor of the Google Sheet you want
 * to use as the online database, then deploy it as a Web App
 * (see DEPLOYMENT.md for the full walkthrough).
 *
 * Sheet columns (exact order, header row required):
 * Branch | Date | Time | Items | Total | Status | OrderID | Timestamp | CancelledAt
 */

const SHEET_NAME = 'Orders'; // change if your sheet tab is named differently
const HEADERS = ['Branch', 'Date', 'Time', 'Items', 'Total', 'Status', 'OrderID', 'Timestamp', 'CancelledAt'];

function getSheet_(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if(!sheet){
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if(sheet.getLastRow() === 0){
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

/**
 * Finds the row number (1-based, including header) for a given
 * OrderID. Returns -1 if not found.
 */
function findRowByOrderId_(sheet, orderId){
  const data = sheet.getDataRange().getValues();
  const orderIdCol = HEADERS.indexOf('OrderID'); // 0-based
  for(let i = 1; i < data.length; i++){
    if(String(data[i][orderIdCol]) === String(orderId)){
      return i + 1; // convert to 1-based sheet row
    }
  }
  return -1;
}

/**
 * Receives one order as a JSON body and either inserts a new row
 * or updates the existing row for that OrderID (upsert), so retried
 * syncs and cancel-order updates never create duplicate rows.
 */
function doPost(e){
  try {
    const order = JSON.parse(e.postData.contents);
    const sheet = getSheet_();
    const existingRow = findRowByOrderId_(sheet, order.orderId);

    const rowValues = [
      order.branch || '',
      order.date || '',
      order.time || '',
      order.items || '',
      order.total || 0,
      order.status || 'SUCCESS',
      order.orderId || '',
      order.timestamp || '',
      order.cancelledAt || ''
    ];

    if(existingRow > 0){
      sheet.getRange(existingRow, 1, 1, HEADERS.length).setValues([rowValues]);
    } else {
      sheet.appendRow(rowValues);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, orderId: order.orderId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err){
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional read endpoint.
 *   ?orderId=LANG-20260902-001  → returns that single order
 *   (no params)                 → returns every row as JSON
 * Useful for the manager dashboard to verify a sync, or for building
 * further reporting outside the app later.
 */
function doGet(e){
  const sheet = getSheet_();
  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1).map(row => {
    const obj = {};
    HEADERS.forEach((h, i) => { obj[h.charAt(0).toLowerCase() + h.slice(1)] = row[i]; });
    return obj;
  });

  const orderId = e.parameter && e.parameter.orderId;
  const result = orderId ? rows.filter(r => r.orderID === orderId) : rows;

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
