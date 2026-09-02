// Mzansi Artisan Core — local storage engine
// Extracted/generalised from the proven Mzansi Boilermaker storage pattern.

const MZANSI_DB_NAME = 'mzansi-artisan-db';
const MZANSI_DB_VERSION = 1;
const MZANSI_STORE_NAME = 'core';

export class MzansiStore {
  constructor(dbName = MZANSI_DB_NAME) {
    this.dbName = dbName;
    this.db = null;
  }

  async open() {
    if (this.db) return this.db;

    this.db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, MZANSI_DB_VERSION);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(MZANSI_STORE_NAME)) {
          db.createObjectStore(MZANSI_STORE_NAME);
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return this.db;
  }

  async set(key, value) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(MZANSI_STORE_NAME, 'readwrite');
      tx.objectStore(MZANSI_STORE_NAME).put(value, key);
      tx.oncomplete = () => resolve(value);
      tx.onerror = () => reject(tx.error);
    });
  }

  async get(key) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(MZANSI_STORE_NAME, 'readonly');
      const request = tx.objectStore(MZANSI_STORE_NAME).get(key);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
  }
}
