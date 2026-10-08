// File: api/index.js

export default function handler(req, res) {
    // Mengatur CORS (opsional, jika ingin bisa diakses dari domain lain)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    // Mereturn response dalam bentuk JSON
    res.status(200).json({
        status: "success",
        code: 200,
        message: "Sistem Informasi Satsiber TNI Beroperasi Normal.",
        data: {
            unit: "Satuan Siber Tentara Nasional Indonesia",
            version: "1.0.0",
            timestamp: new Date().toISOString()
        }
    });
}