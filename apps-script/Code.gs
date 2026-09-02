/**
 * BUBUR BAKAR SABUBA - GOOGLE APPS SCRIPT
 * 
 * Target Google Sheet Menu & Foto: https://docs.google.com/spreadsheets/d/1HuhlPIe-GF7fIewCD__NHIkt8xEBzXfx0LdBIek16Q0/edit
 * Target Google Drive Folder Foto: https://drive.google.com/drive/u/0/folders/1JmtHAKrxFB9_JRnaofEIgI4Uqza8_flM
 * Target Google Sheet Transaksi: https://docs.google.com/spreadsheets/d/1PSbBSYxsLbXBgzwoBS3Xm1i_C-nLYCffXXGeIJ5tbHA/edit
 */

const MENU_SPREADSHEET_ID = "1HuhlPIe-GF7fIewCD__NHIkt8xEBzXfx0LdBIek16Q0";
const DRIVE_FOLDER_ID = "1JmtHAKrxFB9_JRnaofEIgI4Uqza8_flM";
const TRANSACTIONS_SPREADSHEET_ID = "1PSbBSYxsLbXBgzwoBS3Xm1i_C-nLYCffXXGeIJ5tbHA";

/**
 * Membuat menu khusus di Google Sheets saat dokumen dibuka
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Sabuba Tools')
    .addItem('Sync Foto Drive ke Kolom J', 'syncDrivePhotosToSheet')
    .addToUi();
}

/**
 * SINKRONISASI FOTO:
 * Mencocokkan nama file di Google Drive dengan Nama Menu di Kolom E Google Sheet,
 * lalu mengisi Kolom J dengan URL thumbnail foto Google Drive yang sesuai.
 */
function syncDrivePhotosToSheet() {
  try {
    const ss = SpreadsheetApp.openById(MENU_SPREADSHEET_ID);
    const sheet = ss.getActiveSheet();
    
    // 1. Ambil semua file foto dari Google Drive Folder
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    const files = folder.getFiles();
    const photoMap = {};
    let totalFilesFound = 0;

    while (files.hasNext()) {
      const file = files.next();
      const fileName = file.getName();
      // Hapus ekstensi file (.png, .jpg, .jpeg, .webp, dll)
      const baseName = fileName.replace(/\.[^/.]+$/, "").trim();
      const fileId = file.getId();
      
      // Format URL Thumbnail High-Res dari Google Drive
      const imageUrl = "https://drive.google.com/thumbnail?id=" + fileId + "&sz=w800";
      
      // Simpan kunci normalisasi (lowercase & hapus spasi berlebih)
      photoMap[normalizeName(baseName)] = imageUrl;
      photoMap[normalizeName(fileName)] = imageUrl;
      totalFilesFound++;
    }

    // 2. Baca Kolom E (Nama Menu) dari Google Sheet (Mulai Baris 2)
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      SpreadsheetApp.getUi().alert("Sheet masih kosong atau hanya terdapat header.");
      return;
    }

    // Kolom E = Kolom ke-5, Kolom J = Kolom ke-10
    const menuNames = sheet.getRange(2, 5, lastRow - 1, 1).getValues();
    const currentPhotoUrls = sheet.getRange(2, 10, lastRow - 1, 1).getValues();

    const newPhotoColumn = [];
    let updatedCount = 0;
    const unmatchedList = [];

    for (let i = 0; i < menuNames.length; i++) {
      const rawMenuName = menuNames[i][0];
      if (!rawMenuName) {
        newPhotoColumn.push([currentPhotoUrls[i][0]]);
        continue;
      }

      const normalizedMenu = normalizeName(String(rawMenuName));
      
      if (photoMap[normalizedMenu]) {
        newPhotoColumn.push([photoMap[normalizedMenu]]);
        updatedCount++;
      } else {
        unmatchedList.push(rawMenuName);
        newPhotoColumn.push([currentPhotoUrls[i][0]]);
      }
    }

    // 3. Update Kolom J di Google Sheet
    sheet.getRange(2, 10, newPhotoColumn.length, 1).setValues(newPhotoColumn);

    let resultMessage = "Berhasil memperbarui " + updatedCount + " foto menu di Kolom J dari total " + totalFilesFound + " foto di Drive!";
    if (unmatchedList.length > 0) {
      resultMessage += "\n\nMenu berikut belum ditemukan nama fotonya di Drive:\n- " + unmatchedList.join("\n- ");
    }

    Logger.log(resultMessage);
    SpreadsheetApp.getUi().alert(resultMessage);

  } catch (error) {
    Logger.log("Error syncDrivePhotosToSheet: " + error.toString());
    SpreadsheetApp.getUi().alert("Terjadi kesalahan: " + error.toString());
  }
}

/**
 * Normalisasi string agar pencocokan nama file & nama menu 100% presisi
 */
function normalizeName(str) {
  if (!str) return "";
  return str.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Endpoint POST untuk menyimpan pesanan dari website
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(TRANSACTIONS_SPREADSHEET_ID).getActiveSheet();
    
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
        "STATUS",
        "BUKTI BAYAR"
      ]);
      
      const headerRange = sheet.getRange(1, 1, 1, 11);
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

    // Standardize Bukti Bayar Google Drive Upload
    let buktiBayarUrl = "-";
    if (data.buktiBayarData && typeof data.buktiBayarData === "string" && data.buktiBayarData.indexOf("data:") === 0) {
      try {
        const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
        const parts = data.buktiBayarData.split(";base64,");
        const contentType = parts[0].replace("data:", "");
        const base64Data = parts[1];
        const bytes = Utilities.base64Decode(base64Data);
        
        const fileName = orderId + "_" + (data.buktiBayarName || "bukti_bayar.jpg");
        const blob = Utilities.newBlob(bytes, contentType, fileName);
        const file = folder.createFile(blob);
        
        // Atur izin file publik (siapa saja yang memiliki link dapat melihat)
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        buktiBayarUrl = file.getUrl();
      } catch (uploadErr) {
        Logger.log("Error upload file to Drive: " + uploadErr.toString());
        buktiBayarUrl = data.buktiBayarName ? (data.buktiBayarName + " (Gagal simpan link)") : "-";
      }
    } else if (data.buktiBayarName) {
      buktiBayarUrl = data.buktiBayarName;
    }

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
      status,
      buktiBayarUrl
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ 
        result: "success", 
        message: "Data pesanan & bukti bayar berhasil disimpan", 
        orderId: orderId,
        buktiBayarUrl: buktiBayarUrl 
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Endpoint GET
 */
function doGet(e) {
  return ContentService.createTextOutput("API Google Apps Script Sabuba Aktif & Siap Menerima Data!");
}

