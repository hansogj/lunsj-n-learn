# Lønsj & Learn 3 februar

## Intro

- [ ] lange media queries i CSS
- [ ] debugge SASS filen din etter at preprosessoren har kastet om på den koden, 
- [ ] nøste opp i klasse-klusset du selv har skapt ifb refaktorering? 

Store system får fort mye stiling og det blir vanskelig å følge konsistens, UU-prinsipper og å gjøre oppdateringer. 

Snakke litt om stiling av React apper, ulike måter å gjøre dette opp i mot et mål om UU, consistens og responsivitet


## create-react-app

Kommer med en forside de fleste drar kjensel på
```
import './App.css';
```

### CSS

- [x] Kjapt å komme igang - ut av boksen
- [ ] er tungvinn
- [ ] dårlig støtte for gjenbrukbare komponenter
- [ ] dårlig på funksjoner og utregninger (blitt noe bedre med CSS3)
- [ ] dårlig støtte for organisering av kode
- [ ] mister fort oversikt over kode

### Sass
Syntactically Awesome StyleSheets / Sassy CSS
- [x] variabler - deklarer en gang og gjenbruk
- [x] mixins - kan lage komplekse funksjoner for å genere lignende deler av stilingen
- [x] nøsting av kode 
- [x] partials & import - økt oversikt over kode
- [X] arv og utvidbarhet
- [x] ide-støtte
- [ ] Dårlig skope (finnes biblioteker for løse dette)
- [ ] klasse kluss - kan fort bli mer MESSY enn SASSY
- [ ] vanskeligere å debugge



### Frameworks (ie Bootstrap)

- [x] Kom i gang - prototyping
- [x] Bredt anvendt 
- [x] Cross browser, 
- [x] tilbyr et lass av templates
- [x] tilbyr et lass komponenter
- [x] konfigurerbart (farger, marginer, fonter osv )
- [x] godt dokumentert (Twitter)
- [ ] konfigurerbart, ment fortsatt "Bootstrap"
- [ ] Overlaster html med nøstede strukturer og klassenavn
- [ ] Alt ser likt ut
- [ ] jQuery


### Style Components

- [x] React
- [x] ES6 & CSS
- [x] Gjenbrukbart, Strukturert, Dynamisk
- [x] Klasse-kluss
- [x] scope kontroll
- [x] refaktorerbart
- [x] kombinasjon med andre løsninger

- [ ] globals (ie. font)
- [ ] responsivitet
- [ ] debugging (disse klassenavnene)
- [ ] Anguler, Vue? (npm pakke _npm angular-styled-components_ ikke det samme)



### A11Y

* eslint
* eslint-plugin-styled-components-a11y


### Media Queries

* definerte endepunkter - type : small, medium, large, gigantic,
* funksjoner: 
* * lessThan(breakpoint | size),
* * greaterThan(breakpoint | size),
* * between(firstBreakpoint | firstSize, lastBreakpoint | lastSize),

### react-responsive
- [x] lar deg jobbe i element-strukturen
- [x] ofte like godt å switche mellom screen-sizes - lag/vis en komponent pr size istede for å tweake på css med media-queries

### Style Systems

- [x] Tilbyr primitive byggestener for komponentbasert designsystem 
- [x] Style props angitt i en et globalt theme
- [x] raskt oppsett av verdier som responsive, font-størrelse, margin, padding, width, and more
- [x] konsistent opplevelse av Typographic scale for, spacing/layout, fargepalett
- [x] Fungerer med  CSS-in-JS biblioteker som Styled Components and Emotion
- [ ] Ikke fult ut responsive
- [ ] Skummel refaktorering
- [ ] Responsiv spacing som array av index-posisjoner !!!!
- [ ] Inline stylin

