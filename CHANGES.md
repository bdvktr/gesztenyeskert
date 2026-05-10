# Változtatások

- A „Hagyomány & Élmény” szekció alatti képes placeholderbe bekerült: `images/etterem.jpg`.
- Az „Étlap” szekció képes placeholderébe bekerült: `images/etlap.jpg`.
- A galéria placeholder képei a fájlnevek alapján lettek feltöltve:
  - `images/etterem.jpg` → Az étterem belső tere
  - `images/fogasaink.jpg` → Fogásaink
  - `images/kulter.jpg` → Kertünk
  - `images/rendezvenyek.jpg` → Rendezvények
  - `images/italok.jpg` → Italválaszték
- Hozzáadott CSS biztosítja, hogy a képek kitöltsék a placeholder területeket (`object-fit: cover`).

# Érintett fájlok

- `gesztenyeskert-redesign.html`
- `images/` mappa változatlanul megmaradt

# Megjegyzés

A ZIP-ben a képek `.jpg` kiterjesztéssel szerepeltek, ezért a HTML-ben is ezekre a meglévő `.jpg` fájlokra hivatkozik az oldal.

---

# Új változtatások – külön étlap oldal

- Elkészült egy új, különálló `etlap.html` oldal a feltöltött étlap PDF tartalma alapján.
- Az új étlap oldal követi a meglévő Gesztenyéskert design arculatát:
  - sötét erdőzöld háttér,
  - arany kiemelések,
  - Cormorant Garamond / Jost tipográfia,
  - elegáns étlapkártyák,
  - ragadós kategórianavigáció,
  - mobilbarát reszponzív tördelés.
- Az étlap három nyelven böngészhető:
  - Magyar,
  - English,
  - Deutsch.
- Az allergénszámok és allergénmagyarázatok külön szekcióban is szerepelnek.
- A főoldalon az étlapra mutató linkek frissítve lettek `etlap.html`-re:
  - felső navigáció „Étlap” link,
  - hero „Étlap megtekintése” gomb,
  - étlap szekció „Étlap megnyitása” gomb,
  - footer „Étlap” link.

# Érintett fájlok

- `etlap.html` – új fájl
- `gesztenyeskert-redesign.html` – étlap linkek frissítve
- `CHANGES.md` – módosítások dokumentálva

---

# Új változtatások – étlap hero egyszerűsítése

- Az `etlap.html` hero részéből kikerült a szöveges tartalom:
  - „Gesztenyéskert Étterem” eyebrow,
  - nagy „Étlap” cím,
  - rövid leíró bekezdés.
- A hero képen már csak a két CTA gomb maradt:
  - fogások böngészése,
  - vissza a főoldalra.
- A hero kép sötét overlay-e finomabb lett, hogy az étlapfotó jobban érvényesüljön.
- A CTA gombok a hero alsó részére kerültek, hogy ne takarják túl a képet.
- A nyelvváltás továbbra is frissíti az első CTA célját és gombfeliratát magyar / angol / német nézetben.

# Érintett fájlok

- `etlap.html`
- `CHANGES.md`

## 2026-05-10 – Étlap hero overlay sötétítése

- Az `etlap.html` hero képén visszakerült / erősebb lett a sötét overlay.
- A hero továbbra is csak a két CTA gombot tartalmazza, szöveges cím és alcím nélkül.
- A módosítás célja, hogy az étlap hero ne legyen túl világos, és a gombok kontrasztosabbak maradjanak.

## 2026-05-10 - Finom gold scrollbar
- Az `etlap.html` oldalon vékony, arany tónusú globális scrollbar stílus került beállításra.
- A kategória jump bar vízszintes scrollbarja is külön, visszafogott gold megjelenést kapott.
- A hero overlay és a két CTA gomb változatlanul maradt.


## 2026-05-10 - Mobil galéria javítás

- Javítva lett az index oldal galéria szekciója telefonos nézetben.
- A galéria elemek mobilon explicit képarányt és minimális magasságot kaptak, így az abszolút pozicionált képek nem nullára összeeső kártyákban jelennek meg.
- Tablet nézetben kétoszlopos, mobilon egyoszlopos galéria marad, a képfeliratok pedig érintőkijelzőn is láthatóak.

# Érintett fájlok

- `gesztenyeskert-redesign.html`
- `CHANGES.md`
## 2026-05-10 – Index hero görgetésjelző igazítás

- Javítva lett az index oldal hero szekciójában a „Fedezze fel” felirat és az alatta lévő animált csík középre igazítása.
- A korábbi globális `fadeUp` animáció felülírta a vízszintes `translateX(-50%)` középre húzást; ezért a hero scroll elem saját animációt kapott, ami megtartja a horizontális pozíciót desktopon és mobilon is.

Érintett fájlok:
- `gesztenyeskert-redesign.html`

## 2026-05-10 – Nyitvatartás szekció dekorvonal eltávolítása

- Az index oldal nyitvatartás szekciójából kikerült a középen megjelenő arany dekorvonal.
- A cím alatti külön ornament/dekor elem is eltávolításra került, így a szekció letisztultabb lett.

Érintett fájlok:
- `gesztenyeskert-redesign.html`

## 2026-05-10 – Index magyar szövegek finomítása

- Átnézve és javítva lett az index oldal több magyar nyelvi megfogalmazása.
- A rendezvényes bemutatkozó szövegben a „meeting” és a „csapatépítő” kifejezések természetesebb magyar megfogalmazást kaptak.
- A nyitvatartás, étlap és foglalás szekciókban több apró stílus- és nyelvhelyességi finomítás készült.
- Javítva lett az „Évente nyitva” címke „Egész évben nyitva” szövegre.
- Javítva lett egy galériakép alt szövege is.

Érintett fájlok:
- `gesztenyeskert-redesign.html`
- `CHANGES.md`

## 2026-05-10 – HTML rétegelés / CSS és JS kiszervezése

- Az `gesztenyeskert-redesign.html` inline `<style>` tartalma átkerült a `css/index.css` fájlba.
- Az `gesztenyeskert-redesign.html` inline `<script>` tartalma átkerült a `js/index.js` fájlba.
- Az `etlap.html` inline `<style>` tartalma átkerült a `css/etlap.css` fájlba.
- Az `etlap.html` inline `<script>` tartalma átkerült a `js/etlap.js` fájlba.
- Az index oldal inline `style` attribútumai osztályokba kerültek, hogy a HTML tisztább és jobban karbantartható legyen.
- A foglalási űrlap `onsubmit` attribútuma helyett külső JS eseménykezelő működik.

## 2026-05-10 – Étlap hero képútvonal javítása

- Javítva lett az `etlap.html` hero háttérképének elérési útja a kiszervezett `css/etlap.css` fájlban.
- A korábbi `images/etlap.jpg` útvonal a CSS fájl új helye miatt `css/images/etlap.jpg`-re mutatott volna, ezért a helyes relatív útvonal `../images/etlap.jpg` lett.
- Az étlap hero kép újra megjelenik, a sötét overlay és a két CTA gomb változatlan maradt.

Érintett fájlok:
- `css/etlap.css`
- `CHANGES.md`

## 2026-05-10 – Index gold scrollbar visszaállítása

- Az index oldal kiszervezett `css/index.css` fájlja is megkapta a korábban beállított vékony, arany tónusú scrollbar stílust.
- A rétegelés után az étlap oldalon megmaradt a scrollbar, de az index CSS-ből hiányzott; ez most javítva lett.

Érintett fájlok:
- `css/index.css`
- `CHANGES.md`
