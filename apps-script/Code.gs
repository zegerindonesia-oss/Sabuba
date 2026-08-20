/**
 * BUBUR BAKAR SABUBA - GOOGLE APPS SCRIPT
 * Target Google Sheet: https://docs.google.com/spreadsheets/d/1PSbBSYxsLbXBgzwoBS3Xm1i_C-nLYCffXXGeIJ5tbHA/edit#gid=0
 * 
 * PETUNJUK DEPLOYMENT:
 * 1. Buka Google Sheets target: https://docs.google.com/spreadsheets/d/1PSbBSYxsLbXBgzwoBS3Xm1i_C-nLYCffXXGeIJ5tbHA/edit#gid=0
 * 2. Klik menu "Ekstensi" (Extensions) -> "Apps Script".
 * 3. Hapus semua kode default dan Paste kode di bawah ini.
 * 4. Klik "Simpan" (Icon Disket / Ctrl+S).
 * 5. Klik tombol "Terapkan" (Deploy) -> "Terapkan sebagai web app" (New deployment).
 * 6. Pada setelan deployment:
 *    - Pilih Jenis (Select type): Web app
 *    - Jalankan sebagai (Execute as): Saya (Me)
 *    - Yang memiliki akses (Who has access): Siapa saja (Anyone) -> SANGAT PENTING!
 * 7. Klik "Terapkan" (Deploy) dan berikan izin akses jika diminta (Authorize Access).
 * 8. Salin "URL Web App" yang didapat (misal: https://script.google.com/macros/s/AKfycb.../exec).
 * 9. Tempelkan URL tersebut ke `appScriptUrl` di file `src/data/sabubaData.js`.
 */

const SPREADSHEET_ID = "1PSbBSYxsLbXBgzwoBS3Xm1i_C-nLYCffXXGeIJ5tbHA";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Otomatis buat header jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "WAKTU TRANSAKSI",
        "ID TRANSAKSI",
        "NAMA CUSTOMER",
        "NO. WHATSAPP",
        "TIPE PESANAN",
        "CABANG OUTLET",
        "DETAIL PESANAN",
        "CATATAN CUSTOMER",
        "TOTAL PEMBAYARAN (RP)",
        "STATUS"
      ]);
      
      // Styling header row (Merah Sabuba & Teks Putih Tebal)
      const headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setBackground("#991B1B");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }

    let data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter || {};
    }

    const timestamp = data.timestamp || new Date().toLocaleString("id-ID");
    const orderId = data.orderId || "SB-" + Date.now();
    const customerName = data.customerName || "-";
    const customerPhone = data.customerPhone || "-";
    const orderType = data.orderType || "-";
    const outlet = data.outlet || "Utama";
    const itemsDetail = data.itemsDetail || "-";
    const notes = data.notes || "-";
    const totalAmount = data.totalAmount || 0;
    const status = data.status || "Pending WA";

    sheet.appendRow([
      timestamp,
      orderId,
      customerName,
      customerPhone,
      orderType,
      outlet,
      itemsDetail,
      notes,
      totalAmount,
      status
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", message: "Data pesanan berhasil disimpan", orderId: orderId })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("API Google Apps Script Sabuba Aktif & Siap Menerima Data!");
}
