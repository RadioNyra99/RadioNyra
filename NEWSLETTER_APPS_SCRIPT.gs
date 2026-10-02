// ============================================================
// Radio Nyra Newsletter → Google Sheets
// Google Apps Script — paste this entire file at:
//   script.google.com → New Project → replace Code.gs content
// ============================================================

// ✅ Your Google Spreadsheet ID (from the URL)
const SPREADSHEET_ID = "1_5wqpmsANwXHWlH7C3vjo6R0dsRI9tv2-SEcGe74s8k";
const SHEET_NAME = "Sheet1"; // Change if your sheet tab has a different name

function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .openById(SPREADSHEET_ID)
      .getSheetByName(SHEET_NAME);

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Email", "Timestamp", "Source"]);
      sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
    }

    // Read submitted data
    const email     = e.parameter.email     || e.postData?.contents || "";
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const source    = e.parameter.source    || "RadioNyra Website";

    // Prevent duplicate emails
    const existingEmails = sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1)
                                .getValues()
                                .flat()
                                .map(v => String(v).toLowerCase().trim());

    if (existingEmails.includes(email.toLowerCase().trim())) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "duplicate", message: "Email already subscribed" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Append the new subscriber row
    sheet.appendRow([email, timestamp, source]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Subscribed!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Also handle GET (for testing in browser)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Radio Nyra Newsletter Script is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}
