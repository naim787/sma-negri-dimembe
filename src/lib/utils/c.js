import crypto from 'crypto';

export function EncDat(data, password) {
  // buat key
  const key = crypto.createHash('sha256').update(password).digest();

  // buat random hex nonce
  const nonce = crypto.randomBytes(12); 

  const cipher = crypto.createCipheriv('aes-256-gcm', key, nonce);

  const encrypted = Buffer.concat([
    cipher.update(data, 'utf8'),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  // Gabungkan nonce + ciphertext + authTag
  const fullData = Buffer.concat([nonce, encrypted, authTag]);

  // Kembalikan dalam bentuk hex string
  return fullData.toString('hex');
}

export function DesDat(h, p) {
  const raw = Buffer.from(h, 'hex');

  const key = crypto.createHash('sha256').update(p).digest();

  const nonce = raw.slice(0, 12); 
  const authTag = raw.slice(raw.length - 16); 
  const ciphertext = raw.slice(12, raw.length - 16); 

  const decipher = crypto.createDecipheriv('aes-256-gcm', key, nonce);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final()
  ]);

  return decrypted.toString('utf8');
}