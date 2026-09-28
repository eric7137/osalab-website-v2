# OSA Lab Astro 多頁版

## 結構
- `src/layouts/BaseLayout.astro`：全站 HTML 骨架
- `src/components/Navbar.astro`：共用導覽列＋手機摺疊選單
- `src/components/Footer.astro`：共用 Footer
- `src/components/*`：PageHero、SectionHead、CTA、研究成果卡片
- `src/data/site.ts`：導覽、研究方向、研究成果共用資料
- `src/pages/*.astro`：各獨立子頁面
- `src/styles/global.css`：保留原藍綠風格並加入 Glassmorphism

## 執行
```bash
npm install
npm run dev
```

## 若整合到既有 Astro 專案
將 `src/` 內的資料夾複製進既有專案即可。若已有 `global.css`，請先備份再合併。
