import fs from "fs";
import path from "path";
import products from "./models/productsSchema.js";
import { fileURLToPath } from "url";
import { connectDB } from "./utils/connectDb.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __uploads = path.join(__dirname, "uploads");
const __temp = path.join(__dirname, "temp");

// const deleteOldFiles = () => {
//   const now = Date.now();

//   fs.readdir(__temp, (err, files) => {
//     if (err) {
//       console.error("Error reading directory:", err);
//       return;
//     }

//     files.forEach((file) => {
//       const filePath = path.join(__temp, file);
//       fs.stat(filePath, (err, stats) => {
//         if (err) {
//           console.error("Error getting file stats:", err);
//           return;
//         }

//         const fileAge = (now - stats.mtimeMs) / 1000;
//         if (fileAge > 5 * 3600) {
//           fs.unlink(filePath, (err) => {
//             if (err) {
//               console.error("Error deleting file:", err);
//             } else {
//               console.log(`Deleted: ${file}`);
//             }
//           });
//         }
//       });
//     });
//   });
// };

// setInterval(deleteOldFiles, 1000 * 60 * 60);

// Export the function instead of calling it immediately
export { __dirname, __uploads, __temp };
