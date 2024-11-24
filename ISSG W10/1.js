const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

// Function to compute MD5 hash
function md5Hash(data) {
    return crypto.createHash('md5').update(data).digest('hex');
}

// Brute force attack to find the PIN
function bruteForcePIN() {
    for (let i = 0; i <= 9999; i++) {
        const pin = i.toString().padStart(4, '0'); // Pad with leading zeros
        const hash = md5Hash(pin);

        if (hash === targetHash) {
            return pin; // Found the PIN
        }
    }
    return null; // PIN not found
}

const pin = bruteForcePIN();

if (pin) {
    console.log(`Alice's PIN is: ${pin}`);
} else {
    console.log('PIN not found.');
}
