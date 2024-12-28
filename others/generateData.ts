import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

// Function to read Excel files and convert them to an object array
const readExcelFolder = (folderPath: string): Array<Record<string, any>> => {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".xlsx"));
  const allData: Array<Record<string, any>> = [];

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    sheetNames.forEach((sheet) => {
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
      allData.push(...sheetData);
    });
  });

  return allData;
};

// Main function to generate TypeScript file
const generateTsFile = () => {
  const folderPath =
    "C:\\Users\\admin\\projects\\web\\dream_home\\others\\generateData.ts"; // Folder containing Excel files
  const outputFilePath =
    "C:\\Users\\admin\\projects\\web\\dream_home\\others\\data.ts"; // Output TypeScript file

  try {
    const data = readExcelFolder(folderPath);

    // Format data as TypeScript code
    const tsContent = `export const excelData = ${JSON.stringify(
      data,
      null,
      2
    )};`;

    // Write data to the TypeScript file
    fs.writeFileSync(outputFilePath, tsContent, "utf8");
    console.log(`TypeScript file generated at: ${outputFilePath}`);
  } catch (error) {
    console.error("Error generating TypeScript file:", error.message);
  }
};

// Run the script
generateTsFile();
