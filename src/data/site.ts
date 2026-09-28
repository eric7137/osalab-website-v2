export const navItems = [
  { href: '/', label: '首頁' },
  { href: '/about', label: '關於實驗室' },
  { href: '/research', label: '研究方向' },
  { href: '/results', label: '研究成果' },
  { href: '/team', label: '團隊成員' },
  { href: '/academic', label: '學術成果' },
  { href: '/news', label: '最新消息' },
  { href: '/life', label: '實驗室生活' },
  { href: '/join', label: '加入我們' },
  { href: '/contact', label: '聯絡 / 合作' },
];

export const researchDomains = [
  { id:'sleep', title:'智慧睡眠健康', icon:'☾', items:['睡眠呼吸中止','CPAP 配戴與面罩推薦','睡眠品質評估','睡眠介入'] },
  { id:'aging', title:'高齡智慧健康', icon:'♿', items:['高齡韌性','跌倒風險','衰弱評估','認知 / 情緒','多模態健康評估'] },
  { id:'oral', title:'高齡口腔健康', icon:'🦷', items:['口腔衰弱','咀嚼功能','吞嚥','口腔健康促進'] },
  { id:'care', title:'智慧醫療 AI', icon:'✦', items:['電腦視覺','眼動追蹤','臉部分析','穿戴式感測','多模態 AI'] },
];

export const projects = [
  { title:'SmartFit CPAP', icon:'😴', desc:'從鼻型量測、面罩尺寸推薦到多鏡頭配戴檢核，建立可落地的智慧睡眠照護流程。', tags:['鼻罩尺寸推薦','多鏡頭配戴檢測','AR 配戴輔助','AI 綁帶偵測'] },
  { title:'智慧睡眠評估', icon:'🌙', desc:'整合睡眠健康評估、OSA 風險篩檢與睡眠介入系統，協助早期辨識與照護。', tags:['睡眠健康評估','OSA 風險篩檢','睡眠介入'] },
  { title:'眼動臉部 AI 平台', icon:'👁️', desc:'將眼動軌跡、臉部肌肉與多模態訊號結合，用於高齡與神經健康研究。', tags:['眼動分析','臉部動態分析','多模態健康分析'] },
  { title:'口腔衰弱 AI', icon:'🦷', desc:'以影像與非侵入式感測進行口腔衰弱、臉部 / 口腔影像與高齡健康風險評估。', tags:['口腔衰弱評估','影像分析','高齡健康預測'] },
  { title:'高齡韌性 AI', icon:'🌱', desc:'以長期追蹤資料與多模態 AI 建構高齡韌性量化、預測與介入研究框架。', tags:['韌性評估','非侵入式感測','長期追蹤預測'] },
];

export const researchDescriptions: Record<string, string> = {
  sleep:'聚焦睡眠呼吸中止、CPAP 配戴、睡眠品質與睡眠介入，發展個人化照護工具。',
  aging:'以高齡韌性、衰弱、跌倒、認知與情緒為主軸，建立多模態風險評估與預測。',
  oral:'以高齡口腔衰弱、咀嚼與吞嚥功能為核心，探索與全身健康的關聯。',
  care:'整合電腦視覺、眼動、臉部動態、穿戴訊號與多模態 AI。',
};

export const researchItemDescriptions: Record<string, string> = {
  '睡眠呼吸中止':'結合問卷、影像與生理訊號，探索 OSA 風險的智慧篩檢方法。',
  'CPAP 配戴與面罩推薦':'以臉部量測、多鏡頭視覺與 AR 協助鼻罩尺寸推薦與配戴品質評估。',
  '高齡韌性':'建立可量化、可追蹤、可預測的高齡韌性多模態指標。',
  '跌倒風險':'以視覺、姿態與行為訊號進行非侵入式風險評估。',
  '口腔衰弱':'整合影像、功能與健康資料辨識口腔衰弱風險。',
  '眼動追蹤':'利用視覺刺激與眼動反應分析神經、認知與健康狀態。',
};
