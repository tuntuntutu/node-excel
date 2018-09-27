const XLSX = require('xlsx');
const workbook = XLSX.readFile('test.xlsx');

console.dir(workbook.SheetNames);

const sheets = workbook.Sheets;

workbook.SheetNames.forEach(item=>{
  console.log(sheets[item])
   const sheet = XLSX.utils.sheet_to_json(sheets[item]);

   sheet.forEach(row=>{
     if(row['姓名'] === '王某'){
       console.log(row)
     }
   })
})
