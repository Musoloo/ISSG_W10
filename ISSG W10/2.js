const crypto = require('crypto');
const fs = require('fs');

// Given hash for Bob's password
const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

// Function to compute MD5 hash
function md5Hash(data) {
    return crypto.createHash('md5').update(data).digest('hex');
}

// Function to perform a dictionary attack
function dictionaryAttack(dictionaryFilePath) {
    const dictionary = fs.readFileSync(dictionaryFilePath, 'utf8').split('\n');

    for (const word of dictionary) {
        const trimmedWord = word.trim(); // Remove extra spaces or newlines
        const hash = md5Hash(trimmedWord);

        if (hash === targetHash) {
            return trimmedWord; // Found the password
        }
    }
    return null; // Password not found
}

// Path to the dictionary file (you need a dictionary file)
const dictionaryFilePath = '500-worst-passwords.txt';

// Perform the dictionary attack
const password = dictionaryAttack(dictionaryFilePath);

if (password) {
    console.log(`Bob's password is: ${password}`);
} else {
    console.log('Password not found in the dictionary.');
}
