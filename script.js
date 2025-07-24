// --- OYUN VERİ YAPILARI ---

const transformerTypes = {
    "gsu_power": { name: "GSU Yükseltici Transformatör", type: "Yükseltici (Step-Up)", capacity_mva: 2000, input_voltage_kv: 20, output_voltage_kv: 400, cost: 5000000, installation_cost: 2000000, icon: 'G', desc: 'Santral çıkışındaki 20 kV gerilimi 400 kV’a yükseltir.' },
    "substation_power": { name: "Bölgesel Düşürücü Transformatör", type: "Düşürücü (Step-Down)", capacity_mva: 1000, input_voltage_kv: 400, output_voltage_kv: 154, cost: 3500000, installation_cost: 1500000, icon: 'Ş', desc: '400 kV’u 154 kV’a düşürür. Şehir ve sanayiye iletim için ara kademe.' },
    "distribution": { name: "Dağıtım Düşürücü Transformatör", type: "Düşürücü (Step-Down)", capacity_mva: 160, input_voltage_kv: 154, output_voltage_kv: 34.5, cost: 1000000, installation_cost: 500000, icon: 'D', desc: '154 kV’u 34.5 kV’a düşürür. Şehir ve tesislere son dağıtım için kullanılır.' },
    "mobile_substation": { name: "Mobil Şalt Merkezi", type: "Esnek Düşürücü", capacity_mva: 50, input_voltage_kv: 154, output_voltage_kv: 34.5, cost: 2500000, installation_cost: 250000, icon: 'M', desc: 'Acil durumlar ve geçici çözümler için taşınabilir, esnek bir trafodur.' }
};

// GÜNCELLEME: Tüm harita verileri bu obje altında toplandı
const mapData = {
    "turkey": {
        title: "Türkiye Elektrik Şebekesi Tasarımı",
        imagePath: "1930harita_web.jpg",
        canvasDimensions: { width: 900, height: 650 },
        locations: {
            // GÜÇ SANTRALLERİ
    "ataturk_hes": { name: "Atatürk Barajı (HES)", type: "source", power_output_mva: 2400, output_voltage_kv: 20, isPowered: true, coords: { x: 569, y: 370 }, emoji: "💧" },
    "afsin_termik": { name: "Afşin-Elbistan (Termik)", type: "source", power_output_mva: 2800, output_voltage_kv: 20, isPowered: true, coords: { x: 500, y: 300 }, emoji: "🔥" },
    "ege_res": { name: "Rüzgar Santrali (RES)", type: "source", power_output_mva: 300, output_voltage_kv: 20, isPowered: true, coords: { x: 230, y: 360 }, emoji: "💨" },

    // TALEP NOKTALARI
    "istanbul": { name: "İstanbul Metropol", type: "demand", power_demand_mva: 750, required_voltage_kv: 154, isPowered: false, coords: { x: 220, y: 180 }, emoji: "🏙️" },
    "izmir": { name: "İzmir Sanayi Bölgesi", type: "demand", power_demand_mva: 500, required_voltage_kv: 154, isPowered: false, coords: { x: 140, y: 300 }, emoji: "🏭" },
    "ankara": { name: "Ankara Yerleşim", type: "demand", power_demand_mva: 400, required_voltage_kv: 34.5, isPowered: false, coords: { x: 300, y: 270 }, emoji: "🏡" },
    "elazığ": { name: "Elazığ Çimento Fabrikası", type: "demand", power_demand_mva: 80, required_voltage_kv: 34.5, isPowered: false, coords: { x: 600, y: 250 }, emoji: "🏭" },
    "samsun": { name: "Samsun Sanayi", type: "demand", power_demand_mva: 600, required_voltage_kv: 154, isPowered: false, coords: { x: 440, y: 150 }, emoji: "🏭" },
    "adana": { name: "Adana Tarım/Sanayi", type: "demand", power_demand_mva: 350, required_voltage_kv: 154, isPowered: false, coords: { x: 400, y: 420 }, emoji: "🌾" },
    "antalya": { name: "Antalya Turizm", type: "demand", power_demand_mva: 300, required_voltage_kv: 154, isPowered: false, coords: { x: 300, y: 400 }, emoji: "☀️" },
    


        }
    },
    "world": {
        title: "Dünya Elektrik Şebekesi Tasarımı",
        imagePath: "world_map.jpg", // ÖNEMLİ: Kendi dünya haritası dosyanızın adını buraya yazın
        canvasDimensions: { width: 1200, height: 600 },
        locations: {
            // GÜÇ SANTRALLERİ
            "three_gorges": { name: "Üç Boğaz Barajı (HES)", type: "source", power_output_mva: 22500, output_voltage_kv: 20, isPowered: true, coords: { x: 920, y: 300 }, emoji: "💧" },
            "itaipu_dam": { name: "Itaipu Barajı (HES)", type: "source", power_output_mva: 14000, output_voltage_kv: 20, isPowered: true, coords: { x: 360, y: 470 }, emoji: "💧" },
            "grand_coulee": { name: "Grand Coulee (HES)", type: "source", power_output_mva: 6800, output_voltage_kv: 20, isPowered: true, coords: { x: 350, y: 180 }, emoji: "💧" },
            "noor_solar": { name: "Noor Abu Dabi (GES)", type: "source", power_output_mva: 1200, output_voltage_kv: 20, isPowered: true, coords: { x: 740, y: 330 }, emoji: "☀️" },
            "north_sea_wind": { name: "Kuzey Denizi Rüzgar Çiftliği", type: "source", power_output_mva: 4000, output_voltage_kv: 20, isPowered: true, coords: { x: 520, y: 160 }, emoji: "💨" },

            // TALEP NOKTALARI
            "new_york": { name: "New York Metropolü", type: "demand", power_demand_mva: 11000, required_voltage_kv: 154, isPowered: false, coords: { x: 290, y: 230 }, emoji: "🏙️" },
            "stuttgart": { name: "Stuttgart Endüstri", type: "demand", power_demand_mva: 1500, required_voltage_kv: 154, isPowered: false, coords: { x: 620, y: 150 }, emoji: "🏭" },
            "tokyo": { name: "Tokyo Metropolü", type: "demand", power_demand_mva: 5000, required_voltage_kv: 154, isPowered: false, coords: { x: 1048, y: 203 }, emoji: "🏙️" },
            "silicon_valley": { name: "Silikon Vadisi", type: "demand", power_demand_mva: 2500, required_voltage_kv: 154, isPowered: false, coords: { x: 230, y: 180 }, emoji: "💡" },
            "sao_paulo": { name: "São Paulo Metropolü", type: "demand", power_demand_mva: 9000, required_voltage_kv: 154, isPowered: false, coords: { x: 410, y: 500 }, emoji: "🏙️" },
            "shenzhen_industry": { name: "Shenzhen Endüstri", type: "demand", power_demand_mva: 15000, required_voltage_kv: 154, isPowered: false, coords: { x: 955, y: 350 }, emoji: "🏭" }
        }
    }
};

let currentMapId = 'turkey'; // Başlangıç haritası

// Diğer global değişkenler
let selectedTransformer = null;
let placedTransformers = [];
let connections = [];
let placingTransformer = false;
let selectedNode = null;
let deleteBtn = null;
let deleteBtnTarget = null;
let selectedConnection = null;
let deleteConnectionBtn = null;
const MVA_LOSS_PER_PIXEL = 0.08;
const COST_FACTORS = { TOWER: 2000, CONDUCTOR: 3500, LABOR_ROW: 2000 };
const COST_PER_PIXEL_LINE = COST_FACTORS.TOWER + COST_FACTORS.CONDUCTOR + COST_FACTORS.LABOR_ROW;
const MVA_LOSS_FINANCIAL_COST = 50;

// ... (Eğitim fonksiyonları değişmedi) ...
const eduSteps = ["..."];
let eduIndex = 0;
function showEdu() { /* ... */ }
const tutorialSteps = ["..."];
let tutorialIndex = 0;
function showTutorial() { /* ... */ }

// YENİ FONKSİYON: Haritayı yükler ve oyun durumunu sıfırlar
function loadMap(mapId) {
    currentMapId = mapId;
    const mapInfo = mapData[currentMapId];
    
    // UI Güncelle
    document.getElementById('map-title').textContent = mapInfo.title;
    document.getElementById('background-map').src = mapInfo.imagePath;
    const canvas = document.getElementById('game-map');
    canvas.width = mapInfo.canvasDimensions.width;
    canvas.height = mapInfo.canvasDimensions.height;
    
    // Butonların aktif durumunu ayarla
    document.querySelectorAll('.map-btn').forEach(btn => {
        if (btn.dataset.map === mapId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Oyun durumunu sıfırla
    placedTransformers = [];
    connections = [];
    selectedNode = null;
    selectedConnection = null;
    deleteBtnTarget = null;
    resetSimulationState();
}

// GÜNCELLEME: Tüm fonksiyonlar artık global `locations` yerine `mapData[currentMapId].locations` kullanıyor.
function drawMap() {
    const canvas = document.getElementById('game-map');
    const ctx = canvas.getContext('2d');
    const locations = mapData[currentMapId].locations;
    // ... (Çizim fonksiyonunun geri kalanı, global locations yerine lokal locations değişkenini kullanır)
}
// Diğer tüm fonksiyonlar (`getNodeCoords`, `simulatePowerFlow`, vb.) da aynı şekilde güncellenmelidir.
// Örnek:
function getNodeCoords(nodeId) {
    if (nodeId.startsWith('tr_')) {
        return placedTransformers.find(t => t.id === nodeId);
    }
    return mapData[currentMapId].locations[nodeId];
}
//... (Diğer tüm fonksiyonlar için benzer güncellemeler)

// Aşağıda kodun tam ve çalışır hali bulunmaktadır. Yukarıdaki notlar sadece mimariyi açıklamak içindir.

// --- KODUN TAM HALİ ---
function setStatus(msg) { document.getElementById('status-bar').innerHTML = msg; }
function drawMap() {
    const canvas = document.getElementById('game-map');
    const ctx = canvas.getContext('2d');
    const locations = mapData[currentMapId].locations;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    connections.forEach((conn, idx) => {
        const from = getNodeCoords(conn.from);
        const to = getNodeCoords(conn.to);
        if(!from || !to) return; 
        const fromCoords = from.coords || from;
        const toCoords = to.coords || to;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(fromCoords.x, fromCoords.y);
        ctx.lineTo(toCoords.x, toCoords.y);
        ctx.strokeStyle = '#23395d';
        ctx.lineWidth = 3;
        if (selectedConnection && selectedConnection.idx === idx) {
            ctx.strokeStyle = '#e53935';
            ctx.lineWidth = 5;
        }
        ctx.stroke();
        ctx.restore();
    });
    placedTransformers.forEach(tr => {
        ctx.beginPath();
        ctx.arc(tr.x, tr.y, 14, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffb300';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#23395d';
        ctx.stroke();
        ctx.font = 'bold 16px Segoe UI';
        ctx.fillStyle = '#23395d';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(transformerTypes[tr.type].icon, tr.x, tr.y);
    });
    Object.entries(locations).forEach(([key, loc]) => {
        ctx.beginPath();
        ctx.arc(loc.coords.x, loc.coords.y, 18, 0, 2 * Math.PI);
        ctx.fillStyle = loc.type === 'source' ? '#4caf50' : (loc.isPowered ? '#4caf50' : '#e53935');
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#23395d';
        ctx.stroke();
        ctx.textAlign = 'center';
        ctx.font = 'bold 15px Segoe UI';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        const displayName = loc.emoji ? `${loc.emoji} ${loc.name}` : loc.name;
        ctx.strokeText(displayName, loc.coords.x, loc.coords.y - 25);
        ctx.fillStyle = '#FFF';
        ctx.fillText(displayName, loc.coords.x, loc.coords.y - 25);
        ctx.font = 'bold 14px Segoe UI';
        const statsText = loc.type === 'demand' ? `${loc.power_demand_mva} MVA @ ${loc.required_voltage_kv} kV` : `${loc.power_output_mva} MVA @ ${loc.output_voltage_kv} kV`;
        ctx.strokeText(statsText, loc.coords.x, loc.coords.y + 28);
        ctx.fillStyle = loc.isPowered || loc.type === 'source' ? '#a5d6a7' : '#ffcdd2';
        ctx.fillText(statsText, loc.coords.x, loc.coords.y + 28);
    });
    updateDeleteBtn();
    updateDeleteConnectionBtn();
}

function getNodeData(nodeId) { return nodeId.startsWith('tr_') ? getNodeCoords(nodeId) : mapData[currentMapId].locations[nodeId]; }

function getClickedNode(x, y) {
    const locations = mapData[currentMapId].locations;
    for (let tr of placedTransformers) {
        if (Math.sqrt(Math.pow(x - tr.x, 2) + Math.pow(y - tr.y, 2)) < 14) return tr.id;
    }
    for (let [key, loc] of Object.entries(locations)) {
        if (Math.sqrt(Math.pow(x - loc.coords.x, 2) + Math.pow(y - loc.coords.y, 2)) < 18) return key;
    }
    return null;
}
function addTransformer(x, y) {
    if (!selectedTransformer) { alert('Lütfen önce bir transformatör tipi seçin.'); return; }
    placedTransformers.push({ id: 'tr_' + Date.now(), type: selectedTransformer, x, y });
    selectedTransformer = null;
    placingTransformer = false;
    renderSelectedTransformer();
    drawMap();
    updateAnalysisPanel();
}
function addConnection(from, to) {
    if (!from || !to || from === to || connections.some(c => (c.from === from && c.to === to) || (c.from === to && c.to === from))) return;
    connections.push({ from, to });
    drawMap();
    updateAnalysisPanel();
}
function resetSimulationState() {
    const locations = mapData[currentMapId].locations;
    Object.values(locations).forEach(loc => { if (loc.type === 'demand') loc.isPowered = false; });
    document.getElementById('status-bar').innerHTML = 'Simülasyon sonuçları burada görünecek.';
    document.getElementById('results-wrapper').classList.add('collapsed');
    drawMap();
    updateAnalysisPanel();
}

function findPathsFromAnySource(targetNodeId) {
    const sources = Object.keys(mapData[currentMapId].locations).filter(k => mapData[currentMapId].locations[k].type === 'source');
    let allPaths = [];
    for (const source of sources) {
        const queue = [[source, [source]]];
        while (queue.length > 0) {
            const [currentNodeId, currentPath] = queue.shift();
            if (currentNodeId === targetNodeId) { allPaths.push(currentPath); continue; }
            const neighbors = connections.map(c => c.from === currentNodeId ? c.to : (c.to === currentNodeId ? c.from : null)).filter(n => n && !currentPath.includes(n));
            for (const neighborId of neighbors) { queue.push([neighborId, [...currentPath, neighborId]]); }
        }
    }
    return allPaths;
}

function simulatePowerFlow() {
    const locations = mapData[currentMapId].locations;
    Object.values(locations).forEach(loc => { if (loc.type === 'demand') loc.isPowered = false; });
    const trafoLoads = {};
    placedTransformers.forEach(tr => { trafoLoads[tr.id] = 0; });
    const cityPowerInfo = {};
    for (const cityKey in locations) {
        if (locations[cityKey].type !== 'demand') continue;
        const city = locations[cityKey];
        const pathsToCity = findPathsFromAnySource(cityKey); 
        const feedingTransformers = new Set();
        for (const path of pathsToCity) {
            if (path.length < 2) continue;
            const feederNodeId = path[path.length - 2];
            const feederNode = getNodeData(feederNodeId);
            if (!feederNode || !feederNodeId.startsWith('tr_')) continue;
            const feederType = transformerTypes[feederNode.type];
            if (Math.abs(feederType.output_voltage_kv - city.required_voltage_kv) < 0.1) { feedingTransformers.add(feederNodeId); }
        }
        const totalParallelCapacity = [...feedingTransformers].reduce((sum, trId) => sum + transformerTypes[getNodeData(trId).type].capacity_mva, 0);
        if (totalParallelCapacity >= city.power_demand_mva) {
            cityPowerInfo[cityKey] = { isPotentiallyPowered: true, feeders: [...feedingTransformers], demand: city.power_demand_mva, paths: pathsToCity };
        } else {
            cityPowerInfo[cityKey] = { isPotentiallyPowered: false, reason: pathsToCity.length > 0 ? 'Paralel kapasite yetersiz.' : 'Bağlantı yolu bulunamadı.' };
        }
    }
    for (const cityKey in cityPowerInfo) {
        const info = cityPowerInfo[cityKey];
        if (!info.isPotentiallyPowered) continue;
        const distributedLoad = info.feeders.length > 0 ? info.demand / info.feeders.length : info.demand;
        for (const feederId of info.feeders) {
            const pathsToFeeder = findPathsFromAnySource(feederId); 
            if (pathsToFeeder.length > 0) {
                const upstreamPath = pathsToFeeder.sort((a, b) => a.length - b.length)[0];
                for (const upstreamNodeId of upstreamPath) { if (upstreamNodeId.startsWith('tr_')) { trafoLoads[upstreamNodeId] += distributedLoad; } }
            }
        }
    }
    const results = [];
    for (const cityKey in locations) {
        if (locations[cityKey].type !== 'demand') continue;
        const city = locations[cityKey];
        const info = cityPowerInfo[cityKey];
        let isPowered = false;
        let reason = info.reason || 'Bilinmeyen hata.';
        if (info.isPotentiallyPowered) {
            let isOverloaded = false;
            const representativePath = info.paths.sort((a, b) => a.length - b.length)[0];
            if (representativePath) {
                for (const nodeId of representativePath) {
                    if (nodeId.startsWith('tr_')) {
                        const trData = getNodeData(nodeId);
                        const trType = transformerTypes[trData.type];
                        if (trafoLoads[nodeId] > trType.capacity_mva) {
                            isOverloaded = true;
                            reason = `${trType.name} aşırı yüklü: ${trafoLoads[nodeId].toFixed(0)} MVA > ${trType.capacity_mva} MVA.`;
                            break;
                        }
                    }
                }
            } else { isOverloaded = true; reason = "Geçerli bir yol bulunamadı."; }
            if (!isOverloaded) { isPowered = true; }
        }
        locations[cityKey].isPowered = isPowered;
        results.push(`<b>${city.name}</b>: ${isPowered ? '<span style="color:#388e3c;">Besleniyor ✓</span>' : `<span style="color:#e53935;">Beslenemiyor ✗</span> (${reason})`}`);
    }
    drawMap();
    document.getElementById('status-bar').innerHTML = `<div>${results.join('<br>')}</div>`;
    document.getElementById('results-wrapper').classList.remove('collapsed');
    updateAnalysisPanel();
}
function updateDeleteBtn() {
    if (!deleteBtn || !deleteBtnTarget) { if (deleteBtn) deleteBtn.style.display = 'none'; return; }
    const targetNode = getNodeCoords(deleteBtnTarget);
    if (!targetNode) { deleteBtn.style.display = 'none'; return; }
    const canvas = document.getElementById('game-map');
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width / canvas.width;
    const scaleY = rect.height / canvas.height;
    const nodeCoords = targetNode.coords || targetNode;
    deleteBtn.style.left = (rect.left + nodeCoords.x * scaleX + 18) + 'px';
    deleteBtn.style.top = (rect.top + nodeCoords.y * scaleY - 18) + 'px';
    deleteBtn.style.display = 'flex';
}
function removeTransformer(trId) {
    placedTransformers = placedTransformers.filter(t => t.id !== trId);
    connections = connections.filter(c => c.from !== trId && c.to !== trId);
    deleteBtnTarget = null;
    resetSimulationState();
}
function updateDeleteConnectionBtn() {
    if (!deleteConnectionBtn || !selectedConnection) { if(deleteConnectionBtn) deleteConnectionBtn.style.display = 'none'; return; }
    const conn = connections[selectedConnection.idx];
    if (!conn) { deleteConnectionBtn.style.display = 'none'; return; }
    const from = getNodeCoords(conn.from);
    const to = getNodeCoords(conn.to);
    const fromCoords = from.coords || from;
    const toCoords = to.coords || to;
    const canvas = document.getElementById('game-map');
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width / canvas.width;
    const scaleY = rect.height / canvas.height;
    const midX = (fromCoords.x + toCoords.x) / 2;
    const midY = (fromCoords.y + toCoords.y) / 2;
    deleteConnectionBtn.style.left = (rect.left + midX * scaleX - 14) + 'px';
    deleteConnectionBtn.style.top = (rect.top + midY * scaleY - 14) + 'px';
    deleteConnectionBtn.style.display = 'flex';
}
function removeConnection(idx) {
    if (idx < 0 || idx >= connections.length) return;
    connections.splice(idx, 1);
    selectedConnection = null;
    resetSimulationState();
}
function pointLineDistance(px, py, x1, y1, x2, y2) {
    const A = px - x1, B = py - y1, C = x2 - x1, D = y2 - y1;
    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    let param = -1;
    if (len_sq !== 0) param = dot / len_sq;
    let xx, yy;
    if (param < 0) { xx = x1; yy = y1; }
    else if (param > 1) { xx = x2; yy = y2; }
    else { xx = x1 + param * C; yy = y1 + param * D; }
    return Math.sqrt(Math.pow(px - xx, 2) + Math.pow(py - yy, 2));
}
function renderSelectedTransformer() {
    const selectedDiv = document.getElementById('selected-trafo');
    selectedDiv.innerHTML = selectedTransformer ? `<span style="font-weight:normal">Seçili:</span> <b>${transformerTypes[selectedTransformer].name}</b>` : '';
}
function renderTrafoModal() {
    const list = document.getElementById('trafo-list');
    list.innerHTML = '';
    Object.entries(transformerTypes).forEach(([key, t]) => {
        const card = document.createElement('div');
        card.className = 'trafo-card';
        card.innerHTML = `<div class="transformer-icon">${t.icon}</div><strong>${t.name}</strong><div class="type">${t.type}</div><div class="desc">${t.desc}</div><div class="details">Maliyet: ${t.cost.toLocaleString()}$</div>`;
        const btn = document.createElement('button');
        btn.className = 'select-trafo-btn';
        btn.textContent = 'Seç';
        btn.onclick = () => {
            selectedTransformer = key;
            placingTransformer = true;
            renderSelectedTransformer();
            document.getElementById('trafo-modal').style.display = 'none';
        };
        card.appendChild(btn);
        list.appendChild(card);
    });
}
function getDistance(nodeA_id, nodeB_id) {
    const nodeA = getNodeCoords(nodeA_id);
    const nodeB = getNodeCoords(nodeB_id);
    if (!nodeA || !nodeB) return 0;
    const nodeA_coords = nodeA.coords || nodeA;
    const nodeB_coords = nodeB.coords || nodeB;
    return Math.sqrt(Math.pow(nodeB_coords.x - nodeA_coords.x, 2) + Math.pow(nodeB_coords.y - nodeA_coords.y, 2));
}
function updateAnalysisPanel() {
    const locations = mapData[currentMapId].locations;
    const transformerCost = placedTransformers.reduce((sum, tr) => sum + (transformerTypes[tr.type].cost || 0) + (transformerTypes[tr.type].installation_cost || 0), 0);
    document.getElementById('transformer-cost').textContent = `${transformerCost.toLocaleString()} $`;
    const lineCost = connections.reduce((sum, conn) => sum + (getDistance(conn.from, conn.to) * COST_PER_PIXEL_LINE), 0);
    document.getElementById('line-cost').textContent = `${lineCost.toLocaleString(undefined, {maximumFractionDigits: 0})} $`;
    document.getElementById('total-cost').textContent = `${(transformerCost + lineCost).toLocaleString(undefined, {maximumFractionDigits: 0})} $`;
    const totalLoss = connections.reduce((sum, conn) => sum + (getDistance(conn.from, conn.to) * MVA_LOSS_PER_PIXEL), 0);
    document.getElementById('power-loss').textContent = `${totalLoss.toFixed(1)} MVA`;
    const poweredDemand = Object.values(locations).reduce((sum, loc) => (loc.type === 'demand' && loc.isPowered) ? sum + loc.power_demand_mva : sum, 0);
    let efficiency = 0;
    if (poweredDemand + totalLoss > 0) {
        efficiency = (poweredDemand / (poweredDemand + totalLoss)) * 100;
    }
    document.getElementById('grid-efficiency').textContent = `${efficiency.toFixed(1)} %`;
    const totalDistance = connections.reduce((sum, conn) => sum + getDistance(conn.from, conn.to), 0);
    const towerCost = totalDistance * COST_FACTORS.TOWER;
    const conductorCost = totalDistance * COST_FACTORS.CONDUCTOR;
    const laborCost = totalDistance * COST_FACTORS.LABOR_ROW;
    const lossFinancialCost = totalLoss * MVA_LOSS_FINANCIAL_COST;
    const tooltipContent = `
        <strong><u>Hat Maliyeti Dökümü:</u></strong><br>
        - Direk/İzolatör: ${towerCost.toLocaleString(undefined, {maximumFractionDigits: 0})} $<br>
        - İletken Tel: ${conductorCost.toLocaleString(undefined, {maximumFractionDigits: 0})} $<br>
        - İşçilik/İzinler: ${laborCost.toLocaleString(undefined, {maximumFractionDigits: 0})} $
        <hr>
        <strong><u>Verimsizlik Maliyeti:</u></strong><br>
        Saatlik finansal kayıp: <b>${lossFinancialCost.toLocaleString(undefined, {maximumFractionDigits: 0})} $</b>`;
    document.querySelector('.tooltip').innerHTML = tooltipContent;
}

window.onload = function() {
    const canvas = document.getElementById('game-map');
    deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = (e) => { if (deleteBtnTarget) removeTransformer(deleteBtnTarget); e.stopPropagation(); };
    document.body.appendChild(deleteBtn);
    deleteConnectionBtn = document.createElement('button');
    deleteConnectionBtn.className = 'delete-btn';
    deleteConnectionBtn.innerHTML = '🗑️';
    deleteConnectionBtn.onclick = function(e) { if (selectedConnection) removeConnection(selectedConnection.idx); e.stopPropagation(); };
    document.body.appendChild(deleteConnectionBtn);
    
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadMap(btn.dataset.map);
        });
    });

    const eventListeners = {
        'open-trafo-modal': () => { renderTrafoModal(); document.getElementById('trafo-modal').style.display = 'flex'; },
        'close-trafo-modal': () => { document.getElementById('trafo-modal').style.display = 'none'; },
        'open-tutorial': () => { eduIndex = 0; showEdu(); },
        'simulate-btn': simulatePowerFlow,
        'toggle-results-btn': () => document.getElementById('results-wrapper').classList.toggle('collapsed'),
        'results-header': () => document.getElementById('results-wrapper').classList.toggle('collapsed'),
    };
    for (const id in eventListeners) { if(document.getElementById(id)) document.getElementById(id).onclick = eventListeners[id]; }
    
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;
        
        const clickedNodeId = getClickedNode(mouseX, mouseY);
        
        if (!clickedNodeId) {
            let foundConnIdx = -1;
            connections.forEach((conn, idx) => {
                const from = getNodeCoords(conn.from);
                const to = getNodeCoords(conn.to);
                const fromCoords = from.coords || from;
                const toCoords = to.coords || to;
                if (from && to && pointLineDistance(mouseX, mouseY, fromCoords.x, fromCoords.y, toCoords.x, toCoords.y) < 8) {
                    foundConnIdx = idx;
                }
            });
            if (foundConnIdx > -1) {
                selectedConnection = { idx: foundConnIdx };
                deleteBtnTarget = null;
            } else {
                if (placingTransformer && selectedTransformer) {
                    addTransformer(mouseX, mouseY);
                }
                selectedConnection = null;
                selectedNode = null;
                deleteBtnTarget = null;
            }
        } else { 
            deleteBtnTarget = clickedNodeId.startsWith('tr_') ? clickedNodeId : null;
            selectedConnection = null;
            if (!selectedNode) {
                selectedNode = clickedNodeId;
            } else {
                addConnection(selectedNode, clickedNodeId);
                selectedNode = null;
            }
        }
        updateDeleteBtn();
        updateDeleteConnectionBtn();
    });
    
    loadMap('turkey'); // Oyunu Türkiye haritasıyla başlat
    showTutorial();
};