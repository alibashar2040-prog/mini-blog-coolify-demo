const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../index.html');
});

// API للاختبار
app.get('/api', (req, res) => {
    const response = {
        status: 'success',
        message: '✨ مرحباً في عالم Koyeb السحري!',
        timestamp: new Date().toISOString(),
        service: 'Koyeb Cloud Platform',
        features: [
            'النشر الفوري',
            'شبكة CDN عالمية',
            'SSL مجاني تلقائي',
            'توسع تلقائي',
            'إدارة سهلة'
        ],
        region: process.env.REGION || 'unknown',
        memory: process.env.MEMORY || '512MB',
        uptime: process.uptime()
    };
    
    res.json(response);
});

// API للمعلومات
app.get('/api/info', (req, res) => {
    res.json({
        platform: 'Koyeb',
        runtime: `Node.js ${process.version}`,
        environment: process.env.NODE_ENV || 'development',
        region: process.env.REGION || 'local',
        memory: process.env.MEMORY_LIMIT || '512MB',
        endpoints: ['/', '/api', '/api/info', '/api/health']
    });
});

// API للصحة
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        region: process.env.REGION || 'local'
    });
});

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`✨ الخادم السحابي يعمل على المنفذ: ${PORT}`);
    console.log(`🌐 افتح: http://localhost:${PORT}`);
    console.log(`🚀 جاهز للنشر على Koyeb!`);
});