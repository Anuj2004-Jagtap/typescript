const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Define the file name
const fileName = 'Dairy Development Dept. of Maharashtra Govt..xlsx';

// Check if the file exists in the current directory
const filePath = path.join(__dirname, fileName);
if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

try {
    // Read the spreadsheet
    const workbook = XLSX.readFile(filePath);

    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    const data = XLSX.utils.sheet_to_json(sheet);

    // Log the first few rows of data for debugging
    console.log('First few rows of data:', data.slice(0, 10));

    // Check if 'online verified' column is present and filter rows
    const columnName = 'online verified';
    const filteredData = data.filter(row => {
        // Normalize column names to lowercase and trim spaces for robust filtering
        const normalizedRow = {};
        for (const key in row) {
            normalizedRow[key.trim().toLowerCase()] = row[key];
        }

        // Debug logging for each row
        console.log('Normalized Row:', normalizedRow);

        // Check and filter rows based on 'online verified' column
        return normalizedRow[columnName] && normalizedRow[columnName].toLowerCase() === 'no';
    });

    // Log the first few rows of filtered data for debugging
    console.log('First few rows of filtered data:', filteredData.slice(0, 10));

    if (filteredData.length === 0) {
        console.warn('No rows matched the filter criteria.');
    }

    // Create a new workbook and add the filtered data to a new sheet
    const newWorkbook = XLSX.utils.book_new();
    const newSheet = XLSX.utils.json_to_sheet(filteredData);
    XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Filtered Data');

    // Write the new workbook to a file
    const outputFileName = 'FilteredData.xlsx';
    XLSX.writeFile(newWorkbook, outputFileName);

    console.log(`Filtered spreadsheet created: ${outputFileName}`);
} catch (error) {
    console.error('An error occurred:', error.message);
}
