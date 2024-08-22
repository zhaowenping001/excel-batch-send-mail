// src/excelReader.js
const XLSX = require('xlsx');

function readExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

    return worksheet;
}

module.exports = { readExcel };
