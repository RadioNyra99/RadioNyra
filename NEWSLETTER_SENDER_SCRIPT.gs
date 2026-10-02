// ============================================================
// Radio Nyra Newsletter Sender
// Add this to your existing Google Apps Script project
// Run sendNewsletter() whenever you want to send a newsletter
// ============================================================

const SPREADSHEET_ID = "1_5wqpmsANwXHWlH7C3vjo6R0dsRI9tv2-SEcGe74s8k";
const SHEET_NAME = "Sheet1";

// ✅ Edit this before running:
const NEWSLETTER_SUBJECT = "Radio Nyra Weekly Update 🎙️";
const NEWSLETTER_BODY_HTML = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 30px; border-radius: 12px;">
  
  <!-- Header -->
  <div style="text-align: center; margin-bottom: 24px;">
    <img src="https://www.radionyra.com/images/radio-nyra-logo.jpg" width="80" style="border-radius: 50%;" />
    <h1 style="color: #e53e3e; font-size: 28px; margin: 12px 0 4px;">Radio Nyra</h1>
    <p style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Weekly VIP Newsletter</p>
  </div>

  <!-- RTV News Section -->
  <div style="background: #1a1a1a; border: 1px solid #e53e3e; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <p style="color: #e53e3e; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">📺 RTV Daily News</p>
    <h2 style="color: #fff; margin: 0 0 12px; font-size: 20px;">This Week's Telugu News Bulletins</h2>
    <p style="color: #ccc; font-size: 14px; line-height: 1.6;">
      <!-- EDIT: Add your news summary here -->
      This week on RTV News (99.9 FM-HD3): Major headlines covering local community events, 
      national politics, and diaspora news from Raleigh-Durham.
    </p>
    <a href="https://www.radionyra.com/rtv-news" 
       style="display: inline-block; margin-top: 16px; background: #e53e3e; color: #fff; 
              padding: 10px 24px; border-radius: 24px; text-decoration: none; 
              font-weight: bold; font-size: 13px;">
      Listen to Daily News →
    </a>
  </div>

  <!-- Weekly Highlights -->
  <div style="background: #1a1a1a; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <h2 style="color: #fff; margin: 0 0 12px; font-size: 18px;">🎵 This Week's Highlights</h2>
    <ul style="color: #ccc; font-size: 14px; line-height: 2; padding-left: 20px; margin: 0;">
      <!-- EDIT: Add your weekly highlights here -->
      <li>New show updates from Radio Nyra Hindi 99.9 FM-HD4</li>
      <li>Upcoming community events in Raleigh-Durham</li>
      <li>Latest Tollywood & Bollywood news</li>
      <li>Exclusive interviews and podcasts</li>
    </ul>
  </div>

  <!-- Tune In Box -->
  <div style="text-align: center; background: #e53e3e; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <p style="color: #fff; font-weight: bold; font-size: 14px; margin: 0 0 8px;">TUNE IN LIVE</p>
    <p style="color: #fff; font-size: 20px; font-weight: 900; margin: 0;">99.9 FM-HD3 (Telugu) &amp; HD4 (Hindi)</p>
    <p style="color: rgba(255,255,255,0.8); font-size: 12px; margin: 4px 0 0;">101.9 FM &bull; 1490 AM &bull; Stream Online</p>
  </div>

  <!-- Social Links -->
  <div style="text-align: center; margin-bottom: 20px;">
    <a href="https://www.instagram.com/radionyrausa" style="color: #e53e3e; text-decoration: none; margin: 0 8px; font-size: 13px;">Instagram</a>
    <a href="https://www.youtube.com/c/RadioNyraUSA" style="color: #e53e3e; text-decoration: none; margin: 0 8px; font-size: 13px;">YouTube</a>
    <a href="https://www.facebook.com/radionyrausa" style="color: #e53e3e; text-decoration: none; margin: 0 8px; font-size: 13px;">Facebook</a>
    <a href="https://www.radionyra.com" style="color: #e53e3e; text-decoration: none; margin: 0 8px; font-size: 13px;">Website</a>
  </div>

  <!-- Footer -->
  <div style="border-top: 1px solid #333; padding-top: 16px; text-align: center;">
    <p style="color: #666; font-size: 11px; margin: 0;">
      Radio Nyra | Raleigh-Durham, NC | Indian Subcontinent Community Media Network<br/>
      You are receiving this because you subscribed at radionyra.com
    </p>
  </div>

</div>
`;

// ============================================================
// RUN THIS FUNCTION to send the newsletter to all subscribers
// ============================================================
function sendNewsletter() {
  const sheet = SpreadsheetApp
    .openById(SPREADSHEET_ID)
    .getSheetByName(SHEET_NAME);

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    Logger.log("No subscribers found.");
    return;
  }

  // Get all emails from column A (skip header row)
  const emails = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat().filter(e => e);

  let sent = 0;
  let failed = 0;

  emails.forEach((email) => {
    try {
      GmailApp.sendEmail(email, NEWSLETTER_SUBJECT, "", {
        htmlBody: NEWSLETTER_BODY_HTML,
        name: "Radio Nyra",
        replyTo: "info@radionyra.com"
      });
      sent++;
      Logger.log("✅ Sent to: " + email);
    } catch (err) {
      failed++;
      Logger.log("❌ Failed for: " + email + " — " + err.toString());
    }
  });

  Logger.log(`\nDone! Sent: ${sent} | Failed: ${failed} | Total: ${emails.length}`);
}

// ============================================================
// TEST: Send to just yourself first before sending to everyone
// ============================================================
function sendTestEmail() {
  const TEST_EMAIL = "infopranab26@gmail.com"; // Change to your email
  GmailApp.sendEmail(TEST_EMAIL, "[TEST] " + NEWSLETTER_SUBJECT, "", {
    htmlBody: NEWSLETTER_BODY_HTML,
    name: "Radio Nyra",
  });
  Logger.log("Test email sent to: " + TEST_EMAIL);
}
