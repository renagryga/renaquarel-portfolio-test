# RENAQUAREL – Portfolio-Website, Version 2

Diese Version verwendet dein Portfolio-Cover als vollständiges Hero-Bild. Es gibt keinen Instagram-Link.

## Wo du deine Angaben änderst

### E-Mail und Etsy-Link

Öffne `app/page.tsx`.

Ersetze:

- `DEINE-EMAIL@BEISPIEL.DE` durch deine E-Mail-Adresse.
- beide Vorkommen von `https://DEIN-ETSY-LINK` durch die vollständige Adresse deines Etsy-Shops.

### Über-mich-Text

Ebenfalls in `app/page.tsx`. Suche nach:

```tsx
<section id="about" className="textSection">
```

Ändere dort die Texte innerhalb der beiden `<p>...</p>`-Blöcke.

### Impressum

Öffne:

```text
app/impressum/page.tsx
```

Ersetze die Platzhalter durch die rechtlich erforderlichen Angaben.

### Datenschutz

Öffne:

```text
app/datenschutz/page.tsx
```

Füge dort eine zu deiner Website passende Datenschutzerklärung ein.

## Bilder

Das Hero-Bild ist bereits eingesetzt:

```text
public/images/hero/hero.jpg
```

Ersetze die Platzhalterbilder in:

```text
public/images/der-leere-platz/
public/images/storchingo/
public/images/ausgewaehlte-illustrationen/
```

Behalte zunächst die Namen `01.jpg`, `02.jpg` usw.

Die Reihenfolge und Anzahl der Bilder änderst du in:

```text
components/PortfolioGallery.tsx
```

## Empfohlener Export

- JPG, sRGB
- lange Bildkante ungefähr 2.000–2.800 Pixel
- ungefähr 300–800 KB je Bild
- keine druckfähigen Originaldateien
- Dateinamen klein und ohne Leerzeichen oder Umlaute

## Lokal testen

```bash
npm install
npm run dev
```

Danach im Browser öffnen: `http://localhost:3000`

## GitHub Pages

1. Neues Repository erstellen.
2. Alle Dateien hochladen.
3. `Settings → Pages` öffnen.
4. Als Quelle `GitHub Actions` auswählen.
5. Unter `Actions` auf den grünen Haken warten.
