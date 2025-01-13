import Birthday from "../models/Birthday"; // Import your Mongoose model

// Function to generate a 10-character ID
function generateShortId(length = 6) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Function to generate a unique ID
export async function generateUniqueId() {
  let id;
  let exists;

  do {
    id = generateShortId(); // Generate a 10-character ID
    exists = await Birthday.findOne({ birthdayId: id }); // Check if the ID exists
  } while (exists); // Repeat until a unique ID is found

  return id;
}
