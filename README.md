# Un poble per a tothom · Accessibilitat als Pallaresos

Aquest lloc web és un projecte acadèmic de la **Universitat Rovira i Virgili (URV)**, desenvolupat per a la **Facultat de Turisme i Geografia**. L'objectiu de la web és mostrar de manera interactiva i divulgativa els resultats i les propostes de l'estudi sobre l'accessibilitat i la mobilitat a peu al centre urbà dels Pallaresos, posant especial atenció en l'estat dels passos de vianants i altres elements urbans.

## 🚀 Característiques Principals

1. **Mapa Interactiu (GIS)**:
   - Integrat mitjançant dades exportades de QGIS amb `qgis2web` i renderitzat amb la biblioteca **OpenLayers**.
   - Compta amb **icones SVG personalitzades** dissenyades específicament per a cadascuna de les capes analitzades:
     - 🟢 **Passos de vianants accessibles**: Passos adaptats que compleixen els requisits bàsics de mobilitat.
     - 🔴 **Passos no accessibles**: Passos amb obstacles, rampes deficients o desnivells majors de 3 cm.
     - 🔵 **Aparcaments adaptats**: Places de pàrquing reservades per a persones amb mobilitat reduïda (PMR).
     - 🟡 **Semàfors inclusius**: Semàfors equipats amb avisadors acústics o sensors de moviment.
     - 🟠 **Propostes d'ampliació de voreres**: Trams representats amb línies discontínues taronges per a la visualització del pla de millora.
   - Finestres emergents (popups) interactives que mostren els atributs de cada element (estat, observacions, amplada, carrer, etc.) en clicar-hi.

2. **Disseny Premium i Framework CSS**:
   - Estructurat amb el framework **Bootstrap 5** (a través de CDN) per garantir una graella de continguts estables i consistents.
   - Enriquit amb estils personalitzats premium de CSS (`estils.css`) que implementen:
     - Disseny modern estil *glassmorphism* (vidre esmerilat) a les capçaleres i targetes.
     - Gradients radials dinàmics de fons.
     - Transicions i microanimacions en els elements interactius.
     - Suport complet per a **Mode Clar** i **Mode Fosc** mitjançant un commutador d'estat a la barra de navegació.

3. **Apartat de Propostes Urbanes**:
   - Pestanyes interactives per visualitzar les millores plantejades en matèria de senyalització podotàctil, semàfors intel·ligents, ampliació de voreres i aparcaments reservats, incloent imatges reals de referència i esquemes explicatius.

4. **Participació Ciutadana**:
   - Formulari de contacte adaptat amb Bootstrap perquè els ciutadans puguin enviar els seus comentaris, suggeriments i incidències detectades als carrers dels Pallaresos.

## 📁 Estructura del Projecte

El repositori està organitzat de la següent manera:

- `index.html`: Portada del lloc web, explicació del context de la investigació i els objectius bàsics.
- `resultats.html`: Anàlisi de dades, gràfiques conceptuals d'accessibilitat (punts forts/febles) i fases del pla d'actuació.
- `propostes.html`: Detall de les 4 grans línies d'actuació de millora urbana amb el seu visualitzador interactiu de text i imatge.
- `mapa.html`: Pàgina que allotja el mapa interactiu del municipi integrat mitjançant un `iframe`.
- `membres.html`: Fitxes professionals dels membres de l'equip de treball.
- `contacte.html`: Formulari d'enviament de missatges i dades institucionals de contacte de la URV.
- `estils.css`: Full d'estils principal, variables CSS per als temes de color i responsive queries.
- `script.js`: Fitxer JavaScript per a la lògica de la interfície: toggle de mode fosc (desat a `localStorage`), navegació de pestanyes, menú de mòbil responsive i animació de revelació en fer scroll (*Scroll Reveal* amb `IntersectionObserver`).
- `mapa/`: Directori que conté l'aplicació SIG en OpenLayers:
  - `index.html`: Pàgina interna que inicialitza el mapa.
  - `images/`: Emmagatzema les icones SVG personalitzades (`accessible_crossing.svg`, `inaccessible_crossing.svg`, etc.).
  - `layers/`: Capes de dades en format GeoJSON escrites en fitxers JavaScript.
  - `styles/`: Funcions d'estil en JavaScript que associen les icones SVG i l'aparença a cada element del mapa OpenLayers.
  - `resources/`: Biblioteques d'OpenLayers, fulls d'estil (`ol.css`, `qgis2web.css`) i scripts de control de capes.
- `img/`: Carpeta de mitjans gràfics del lloc (logotip de la universitat, fotos dels investigadors i imatges dels passos i semàfors).

## 🛠️ Com Executar el Projecte en Local

Per visualitzar i provar el projecte a la teva màquina local:
1. Descarrega o clona aquest repositori de GitHub.
2. Obre directament el fitxer `index.html` en qualsevol navegador web modern, o executa un servidor de desenvolupament local simple si vols provar-ho com a entorn de servidor:
   ```bash
   # Si utilitzes Python
   python -m http.server 8000
   
   # O si utilitzes Node/npm
   npx serve .
   ```
3. Navega a `http://localhost:8000` (o al port indicat) per comprovar totes les funcionalitats, la càrrega del mapa i el funcionament del mode fosc.

## 👥 Crèdits i Equip de Recerca

Aquest estudi ha estat possible gràcies al treball coordinat de l'equip:

- **Jaume Rius de la Yglesia**: Coordinador del projecte i investigador principal.
- **Alex Sales**: Responsable del treball de camp i recollida de dades geogràfiques.
- **Paola Vilagran**: Dissenyadora de la interfície de la web i material gràfic.
- **Gerard Salgado**: Tècnic SIG encarregat de la digitalització cartogràfica i la base de dades.

---
*Treball de Geografia · Accessibilitat als Pallaresos · Curs 2025-26*
*© Jaume Rius de la Yglesia, 2026.*
