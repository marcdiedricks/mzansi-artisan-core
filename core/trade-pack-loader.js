// Mzansi Artisan Core — Universal Trade Pack loader

const SUPPORTED_SCHEMA = 'MAF-UTP-0.1';

export class TradePackLoader {
  async load(manifestUrl) {
    const response = await fetch(manifestUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Trade Pack manifest unavailable: ${response.status}`);

    const manifest = await response.json();
    this.validateManifest(manifest);
    return manifest;
  }

  validateManifest(manifest) {
    const required = ['schema', 'trade_pack_id', 'trade', 'country', 'version', 'status', 'default_language', 'languages'];
    const missing = required.filter((field) => manifest[field] === undefined || manifest[field] === null);

    if (missing.length) {
      throw new Error(`Invalid Trade Pack manifest. Missing: ${missing.join(', ')}`);
    }

    if (manifest.schema !== SUPPORTED_SCHEMA) {
      throw new Error(`Unsupported Trade Pack schema: ${manifest.schema}`);
    }

    if (!Array.isArray(manifest.languages) || manifest.languages.length === 0) {
      throw new Error('Trade Pack must declare at least one language.');
    }

    return true;
  }
}
