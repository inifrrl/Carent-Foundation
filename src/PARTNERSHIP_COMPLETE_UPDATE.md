# ✅ Partnership Page - Complete Mobile Design with Sustainability

## 🎯 Update Overview

Partnership page mobile sekarang **LENGKAP** dengan 3 sections:
1. **Partnership Model** - Filosofi kolaborasi
2. **Partner Type** - 6 tipe partnership hexagons
3. **Sustainability Model** - Financial sustainability framework ⭐ NEW!

---

## 📂 File Structure

```
/pages/Partnership.tsx              → Main responsive wrapper
/imports/Homepage.tsx               → Desktop version (1024px+)
/imports/PartnershipMobile.tsx     → Mobile/Tablet version (<1024px) [UPDATED]
/imports/svg-rltldmir26.ts         → SVG paths untuk mobile
```

---

## 🎨 Page Sections (Mobile)

### 1. **Partnership Model Section** (Top)

**Elements:**
- 🤝 Partnership handshake icon (Untitled design-17)
- "PARTNERSHIP MODEL" header (17.715px)
- Decorative blue ellipses (circles)
- Horizontal line divider
- Mission statement text with bold highlights:
  - "collaborative impact"
  - "shared value creation"
- White decorative circle (left side)

**Text:**
> "Carent Foundation Indonesia believes in **collaborative impact**, where sustainable youth development is achieved through **shared value creation** among government, industry, academia, and civil society."

**Partnership Model Features:**
- 3 Blue badges stating the model is:
  - ✅ **Outcome-driven** (center, 12.573px height)
  - ✅ **Policy- and industry-aligned** (left, 14.741px)
  - ✅ **Scalable and measurable** (right, 16.908px)
- Arrow pointing down (rotated 90.73°)

---

### 2. **Partner Type Hexagons** (Middle)

**Layout:**
- Central gray hexagon: **"PARTNER TYPE"** (9.451px)
- 6 Blue hexagons arranged in circle, all rotated -90°:

**Partner Types:**
1. **Community & Civil Society Partnership**
   - Left bottom (10.977px text)
   - 110.682px hexagon

2. **Academic & Training Institution Partnership**
   - Left middle (9.946px text)
   - 106.089px hexagon

3. **BUMN Partnership**
   - Center top (10px text)
   - 91px hexagon

4. **Government & Public Institution Partnership**
   - Right top (9.653px text)
   - 96.647px hexagon

5. **Private Sector & Industry Partnership**
   - Bottom center (9.469px text)
   - 101px hexagon

6. **International Organization & Donor Partnership**
   - Right bottom (10.449px text)
   - 121.034px hexagon

---

### 3. **Sustainability Model Section** ⭐ (Bottom - NEW!)

**Header:**
- "SUSTAINIBILITY MODEL" title (18px, semibold + normal)
- Horizontal line divider

**Two Arrows:**
- Left arrow (rotate 90°) pointing down from header
- Right arrow (rotate 90°) pointing down from header

**Sustainability Vision Box:**
- Blue rectangle header: "Sustainability Vision" (8.811px)
- Description text (7.713px, justified):
  > "Carent Foundation Indonesia is committed to building a financially resilient, institutionally strong, and impact-driven organization that delivers long-term value for youth, partners, and national development."

**Three Sustainability Pillars:**

1. **Programmatic Sustainability**
   - White box with blue border (0.588px)
   - 22.655px height × 70.303px width
   - 8.238px text

2. **Financial Sustainability**
   - White box with blue border (0.591px)
   - 22.735px height × 62px width
   - 8.267px text

3. **Impact & Ecosystem Sustainability**
   - White box with blue border (0.571px)
   - 22px height × 88.662px width
   - 8px text

---

## 📐 Design Specifications

### Typography:
```css
Main Header: 17.715px - 18px (Partnership/Sustainability)
Subheaders: 9.451px - 10.977px
Body Text: 7.713px - 10.35px
Hexagon Text: 9.469px - 10.977px
Badge Text: 8px - 8.811px
All: Work Sans font family
```

### Colors:
```css
Primary Blue: #1E08B1
White: #FFFFFF
Gray (center hexagon): #D9D9D9
Border: #1E08B1
```

### Layout:
```css
Container Width: 375px (mobile viewport)
Total Height: 920px minimum
Positioning: Absolute (pixel-perfect Figma)
```

---

## 🎭 Visual Elements

### Decorative Shapes:
- 🔵 Blue circles/ellipses (top section)
- ⚪ White circle with blue stroke (left side)
- 🔷 6 Blue hexagons (partner types)
- ⚪ 1 Gray hexagon (center - partner type label)
- ➡️ 3 Arrows (1 down from model, 2 down to sustainability)
- ━ Horizontal lines (dividers)

### Icons:
- 🤝 Partnership handshake (top icon)
- 📦 Blue rectangles (badges)
- ◻️ White boxes with borders (sustainability pillars)

---

## 🎨 Component Hierarchy

```
PartnershipMobile
├─ Partnership Icon (Untitled design-17)
├─ Partnership Model Header
├─ Decorative Circles (Group4)
├─ Line Divider
├─ Mission Text
├─ Partnership Features (Group)
│  ├─ Policy-aligned badge
│  ├─ Outcome-driven badge
│  └─ Scalable badge
├─ Arrow Connector
├─ Partner Type Hexagons
│  ├─ Center Gray (Partner Type label)
│  ├─ Community & Civil Society
│  ├─ Academic & Training
│  ├─ BUMN
│  ├─ Government & Public
│  ├─ Private Sector
│  └─ International Organization
├─ Sustainability Model Header (Group2)
├─ Two Arrows pointing down
└─ Sustainability Framework
   ├─ Vision Box (Group15)
   ├─ Vision Description
   ├─ Programmatic Sustainability (Group16)
   ├─ Financial Sustainability
   └─ Impact & Ecosystem Sustainability
```

---

## 🎯 Key Features

### Partnership Model:
✅ Clear value proposition
✅ Bold keyword highlights
✅ 3 model characteristics
✅ Visual hierarchy with badges

### Partner Type Hexagons:
✅ 6 distinct partnership categories
✅ Circular arrangement
✅ Rotated for visual interest
✅ Center label for clarity

### Sustainability Model (NEW):
✅ Organizational vision statement
✅ 3 sustainability pillars
✅ Visual connections with arrows
✅ Structured framework display

---

## 📱 Responsive Behavior

```typescript
Breakpoint: 1024px (lg)

Desktop (≥1024px):
└─ Homepage.tsx - Full partnership section

Mobile/Tablet (<1024px):
└─ PartnershipMobile.tsx - Compact 920px design
   ├─ Hamburger navigation
   ├─ Stacked sections
   ├─ Hexagon layout preserved
   └─ All content scrollable
```

---

## 🎨 Exact Positioning

All elements use **absolute positioning** dengan coordinates exact dari Figma:

```css
/* Examples */
Icon: left: 163px, top: 34px
Header: left: 125px, top: 103px
Circles: left: -1px, top: 144px
Hexagons: Various precise coordinates
Sustainability: starts at top: 671px
```

---

## ✅ Complete Page Structure

**Total Sections: 3**

1. **Hero + Partnership Model** (0-450px)
   - Icon, header, mission, features

2. **Partner Type Visualization** (450-670px)
   - 7 hexagons (6 types + 1 label)

3. **Sustainability Model** (670-920px)
   - Vision + 3 pillars

**Page Flow:**
```
Icon
  ↓
Partnership Model
  ↓ (arrow)
Partner Types (hexagons)
  ↓
Sustainability Model
  ↓ (two arrows)
3 Sustainability Pillars
```

---

## 🚀 Integration

### Routes:
```typescript
{
  path: "partnership",
  Component: Partnership
}
```

### Access:
- Desktop: Full Homepage.tsx design
- Mobile: PartnershipMobile.tsx with sustainability
- Navigation: Hamburger menu (mobile)

---

## 🌟 Result

Partnership page sekarang:
- 🤝 **Partnership Philosophy**: Clear collaborative vision
- 🔷 **6 Partner Types**: Visual hexagon layout
- 💰 **Sustainability Model**: Financial framework ⭐
- 📱 **Mobile Optimized**: 920px scrollable design
- 🎨 **Pixel Perfect**: Exact Figma coordinates
- ⚡ **Smooth Animations**: Page transitions

**Complete Partnership page ready!** 🚀

Total mobile height: **920px minimum**
All sections: **100% Figma fidelity**
