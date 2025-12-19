// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    startLiveUpdates();
    showFloatingMessage();
    
    // تأثيرات عند التمرير
    window.addEventListener('scroll', handleScrollEffects);
});

// تهيئة الصفحة
function initializePage() {
    // تحديث المنطقة
    updateRegion();
    
    // تحديث الوقت
    updateTime();
    
    // إضافة تأثيرات عشوائية
    addSparkleEffects();
}

// تحديث المنطقة التلقائي
function updateRegion() {
    const regions = [
        'أوروبا (فرانكفورت)',
        'أمريكا (فرجينيا)',
        'آسيا (سنغافورة)',
        'الشرق الأوسط (بحرين)',
        'أستراليا (سيدني)'
    ];
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    document.getElementById('region').textContent = randomRegion;
}

// تحديث الوقت
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const dateStr = now.toLocaleDateString('ar-SA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // يمكن إضافة الوقت في مكان مناسب
}

// بدء التحديثات الحية
function startLiveUpdates() {
    // تحديث وقت الاستجابة بشكل عشوائي (محاكاة)
    setInterval(() => {
        const responseTime = Math.floor(Math.random() * 50) + 20;
        document.getElementById('responseTime').textContent = responseTime;
        
        // تأثير عند التحديث
        flashElement('responseTime');
    }, 3000);
}

// اختبار API
async function testAPI() {
    const startTime = Date.now();
    const responseArea = document.getElementById('response');
    
    // عرض تحميل
    responseArea.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>جاري اختبار الاتصال بالسحابة...</p>
        </div>
    `;
    
    try {
        // محاكاة اتصال API
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        // تحديث وقت الاستجابة
        document.getElementById('responseTime').textContent = responseTime;
        
        // عرض النتيجة
        const result = {
            status: "success",
            message: "✅ اتصال ناجح بالسحابة!",
            timestamp: new Date().toISOString(),
            responseTime: `${responseTime}ms`,
            region: document.getElementById('region').textContent,
            features: [
                "HTTP/2 Active",
                "SSL Encryption",
                "Global CDN",
                "Auto-scaling Ready"
            ]
        };
        
        responseArea.innerHTML = `
            <div class="api-result">
                <div class="result-header success">
                    <i class="fas fa-check-circle"></i>
                    <h5>اتصال API ناجح</h5>
                </div>
                <pre class="result-data">${JSON.stringify(result, null, 2)}</pre>
                <div class="result-stats">
                    <span class="stat"><i class="fas fa-bolt"></i> ${responseTime}ms</span>
                    <span class="stat"><i class="fas fa-server"></i> ${result.region}</span>
                    <span class="stat"><i class="fas fa-shield-alt"></i> آمن</span>
                </div>
            </div>
        `;
        
        // تأثير نجاح
        createConfetti();
        
    } catch (error) {
        responseArea.innerHTML = `
            <div class="api-result error">
                <div class="result-header error">
                    <i class="fas fa-exclamation-circle"></i>
                    <h5>خطأ في الاتصال</h5>
                </div>
                <p>تعذر الاتصال بالخادم. يرجى المحاولة مرة أخرى.</p>
            </div>
        `;
    }
    
    // تأثير على الزر
    animateButton('testAPI');
}

// عرض معلومات الخادم
function showServerInfo() {
    const serverInfo = {
        platform: "Koyeb Cloud Platform",
        runtime: "Node.js 18.x",
        memory: "512 MB RAM",
        storage: "1 GB SSD",
        region: document.getElementById('region').textContent,
        status: "Operational",
        uptime: "99.9%",
        features: [
            "Docker Container",
            "Auto-scaling",
            "Load Balancing",
            "Zero-downtime Deploys",
            "Built-in Monitoring"
        ],
        endpoints: [
            "REST API: /api/*",
            "WebSocket: /ws",
            "Static Files: /*"
        ]
    };
    
    const responseArea = document.getElementById('response');
    responseArea.innerHTML = `
        <div class="server-info">
            <div class="info-header">
                <i class="fas fa-server"></i>
                <h5>معلومات الخادم السحابي</h5>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">المنصة:</span>
                    <span class="info-value">${serverInfo.platform}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">المنطقة:</span>
                    <span class="info-value">${serverInfo.region}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">الذاكرة:</span>
                    <span class="info-value">${serverInfo.memory}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">التخزين:</span>
                    <span class="info-value">${serverInfo.storage}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">الحالة:</span>
                    <span class="info-value status-active">${serverInfo.status}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">وقت التشغيل:</span>
                    <span class="info-value">${serverInfo.uptime}</span>
                </div>
            </div>
            
            <div class="info-section">
                <h6><i class="fas fa-star"></i> المميزات</h6>
                <ul class="features-list">
                    ${serverInfo.features.map(feat => `<li><i class="fas fa-check"></i> ${feat}</li>`).join('')}
                </ul>
            </div>
            
            <div class="info-section">
                <h6><i class="fas fa-link"></i> نقاط الاتصال</h6>
                <ul class="endpoints-list">
                    ${serverInfo.endpoints.map(endpoint => `<li><i class="fas fa-bolt"></i> ${endpoint}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // تأثير
    animateButton('showServerInfo');
}

// عرض المميزات
function showFeatures() {
    const features = [
        {
            icon: "fas fa-bolt",
            title: "سرعة فائقة",
            description: "نشر في ثوانٍ مع شبكة CDN عالمية",
            color: "#ff9a9e"
        },
        {
            icon: "fas fa-lock",
            title: "أمان تلقائي",
            description: "SSL مجاني وجدران حماية مدمجة",
            color: "#a8edea"
        },
        {
            icon: "fas fa-expand",
            title: "توسع ذكي",
            description: "توسع تلقائي مع زيادة الحمل",
            color: "#d4fc79"
        },
        {
            icon: "fas fa-globe",
            title: "توزيع عالمي",
            description: "يعمل في 20+ منطقة حول العالم",
            color: "#667eea"
        },
        {
            icon: "fas fa-code",
            title: "دعم متعدد",
            description: "Node.js, Python, Go, Rust, والمزيد",
            color: "#fed6e3"
        },
        {
            icon: "fas fa-wallet",
            title: "مجاني للبدء",
            description: "بدون بطاقة ائتمان مع حدود سخية",
            color: "#f093fb"
        }
    ];
    
    const responseArea = document.getElementById('response');
    responseArea.innerHTML = `
        <div class="features-display">
            <div class="display-header">
                <i class="fas fa-gem"></i>
                <h5>المميزات السحرية لـ Koyeb</h5>
            </div>
            
            <div class="features-container">
                ${features.map((feature, index) => `
                    <div class="feature-display-card" style="border-left-color: ${feature.color};">
                        <div class="feature-display-icon" style="background: ${feature.color}20; color: ${feature.color};">
                            <i class="${feature.icon}"></i>
                        </div>
                        <div class="feature-display-content">
                            <h6>${feature.title}</h6>
                            <p>${feature.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="features-summary">
                <p><i class="fas fa-magic"></i> كل هذه المميزات متاحة في خطة البدء المجانية!</p>
            </div>
        </div>
    `;
    
    // تأثيرات
    animateButton('showFeatures');
    createSparkles();
}

// تأثيرات خيالية
function animatePage() {
    // اهتزاز لطيف للصفحة
    document.body.style.animation = 'none';
    setTimeout(() => {
        document.body.style.animation = 'shake 0.5s ease';
    }, 10);
    
    // إنشاء شرارات
    createSparks();
    
    // تغيير ألوان الخلفية
    const colors = [
        'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'linear-gradient(135deg, #23074d, #cc5333)',
        'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
        'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)'
    ];
    
    let currentIndex = 0;
    const intervals = 3;
    
    const changeColor = () => {
        document.body.style.background = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    };
    
    // تغيير الألوان بسرعة ثم العودة
    const colorInterval = setInterval(changeColor, 300);
    setTimeout(() => {
        clearInterval(colorInterval);
        document.body.style.background = colors[0];
    }, intervals * 300);
    
    // عرض رسالة
    showNotification('تأثيرات سحرية مفعلة! ✨');
    
    // تأثير على الزر
    animateButton('animatePage', true);
}

// مسح النتائج
function clearResults() {
    const responseArea = document.getElementById('response');
    responseArea.innerHTML = `
        <div class="welcome-message">
            <i class="fas fa-broom"></i>
            <p>تم مسح النتائج. جاهز لتجربة جديدة!</p>
        </div>
    `;
    
    // تأثير
    animateButton('clearResults');
}

// إضافة تأثيرات الشرر
function addSparkleEffects() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(sparkle);
    }
    
    // إضافة CSS للشرر
    const style = document.createElement('style');
    style.textContent = `
        .sparkle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            animation: sparkle 2s infinite;
            box-shadow: 0 0 10px white;
        }
        
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
        }
        
        .loading {
            text-align: center;
            padding: 40px;
        }
        
        .loading i {
            font-size: 3rem;
            margin-bottom: 20px;
            color: #a8edea;
        }
        
        .api-result {
            animation: fadeIn 0.5s ease;
        }
        
        .result-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid;
        }
        
        .result-header.success {
            color: #4CAF50;
            border-bottom-color: #4CAF50;
        }
        
        .result-header.error {
            color: #f44336;
            border-bottom-color: #f44336;
        }
        
        .result-data {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 10px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        
        .result-stats {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .result-stats .stat {
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 15px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }
        
        .server-info, .features-display {
            animation: fadeIn 0.5s ease;
        }
        
        .info-header, .display-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid #667eea;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 25px;
        }
        
        .info-item {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
        }
        
        .info-label {
            font-weight: 600;
            color: #d1c4e9;
        }
        
        .info-value {
            font-weight: 700;
        }
        
        .status-active {
            color: #4CAF50;
        }
        
        .info-section {
            margin-top: 25px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
        }
        
        .info-section h6 {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            color: #a8edea;
        }
        
        .features-list, .endpoints-list {
            list-style: none;
            padding: 0;
        }
        
        .features-list li, .endpoints-list li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .features-list li:last-child, .endpoints-list li:last-child {
            border-bottom: none;
        }
        
        .features-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .feature-display-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            border-left: 4px solid;
            transition: transform 0.3s ease;
        }
        
        .feature-display-card:hover {
            transform: translateX(10px);
        }
        
        .feature-display-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        
        .feature-display-content h6 {
            margin: 0 0 5px 0;
            font-size: 1.1rem;
        }
        
        .feature-display-content p {
            margin: 0;
            opacity: 0.8;
            font-size: 0.9rem;
        }
        
        .features-summary {
            text-align: center;
            padding: 20px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            border-radius: 10px;
            margin-top: 20px;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
}

// إنشاء شرارات
function createSparks() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = `${Math.random() * 100}%`;
        spark.style.top = `${Math.random() * 100}%`;
        spark.style.animationDelay = `${Math.random() * 0.5}s`;
        container.appendChild(spark);
        
        setTimeout(() => spark.remove(), 1000);
    }
    
    // إضافة CSS للشرارات
    if (!document.querySelector('#spark-style')) {
        const style = document.createElement('style');
        style.id = 'spark-style';
        style.textContent = `
            .spark {
                position: absolute;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, #ff9a9e, #a8edea, #fed6e3);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0;
                animation: sparkFly 1s ease-out forwards;
                z-index: 1000;
                box-shadow: 0 0 15px white;
            }
            
            @keyframes sparkFly {
                0% {
                    opacity: 1;
                    transform: translate(0, 0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(
                        ${Math.random() * 200 - 100}px,
                        ${Math.random() * 200 - 100}px
                    ) scale(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// إنشاء كونفيتي
function createConfetti() {
    const colors = ['#ff9a9e', '#a8edea', '#fed6e3', '#d4fc79', '#667eea'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.animationDelay = `${Math.random() * 1}s`;
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2000);
    }
    
    // إضافة CSS للكونفيتي
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            .confetti {
                position: absolute;
                top: -20px;
                border-radius: 2px;
                pointer-events: none;
                opacity: 0;
                animation: confettiFall 2s ease-out forwards;
                z-index: 999;
            }
            
            @keyframes confettiFall {
                0% {
                    opacity: 1;
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: translateY(100vh) rotate(720deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// إنشاء شرارات صغيرة
function createSparkles() {
    const buttons = document.querySelectorAll('.action-btn');
    buttons.forEach(button => {
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'button-sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            button.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    });
    
    // إضافة CSS لشرارات الأزرار
    if (!document.querySelector('#button-sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'button-sparkle-style';
        style.textContent = `
            .button-sparkle {
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0;
                animation: buttonSparkle 1s ease-out forwards;
                box-shadow: 0 0 8px white;
            }
            
            @keyframes buttonSparkle {
                0% {
                    opacity: 1;
                    transform: scale(0);
                }
                50% {
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// تأثير على العنصر
function flashElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
}

// تأثير على الزر
function animateButton(action, special = false) {
    const buttons = {
        'testAPI': '.btn-primary',
        'showServerInfo': '.btn-secondary',
        'showFeatures': '.btn-success',
        'animatePage': '.btn-warning',
        'clearResults': '.clear-btn'
    };
    
    const selector = buttons[action];
    if (selector) {
        const button = document.querySelector(selector);
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            if (special) {
                button.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    button.style.animation = '';
                }, 500);
            }
        }
    }
}

// عرض رسالة عائمة
function showFloatingMessage() {
    setTimeout(() => {
        const floatingMsg = document.getElementById('floatingMsg');
        if (floatingMsg) {
            floatingMsg.style.opacity = '1';
            floatingMsg.style.transform = 'translateX(0)';
            
            setTimeout(() => {
                floatingMsg.style.opacity = '0';
                floatingMsg.style.transform = 'translateX(100%)';
            }, 3000);
        }
    }, 1000);
}

// عرض إشعار
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-magic"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // إضافة CSS للإشعارات
    if (!document.querySelector('#notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                z-index: 1000;
                animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
                opacity: 0;
                transform: translateX(100%);
            }
            
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// التعامل مع تأثيرات التمرير
function handleScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // تأثير بارالاكس خفيف للخلفية
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        circle.style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
    });
}

// إضافة CSS إضافية
const additionalStyles = `
    .shake {
        animation: shake 0.5s ease;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease;
    }
`;

// إضافة الأنماط الإضافية
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);