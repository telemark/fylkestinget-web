[![Build Status](https://travis-ci.org/telemark/fylkestinget-web.svg?branch=master)](https://travis-ci.org/telemark/fylkestinget-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/fylkestinget-web.svg)](https://greenkeeper.io/)

# fylkestinget-web

Forslagsløsning for fylkestinget

## Brukerveiledning

Løsningen viser agenda og innkomne forslag for fylkestingmøtene.

Møtedeltagere har tre visningsmuligheter.
- Liste over alle saker med forslagene plassert under hver sak
- Liste hvor kun saker med forslag vises
- Live visning hvor man kun ser saken som er til behandling og dens forslag

Forslag leveres ved hjelp av e-post.
- Trykk lever forslag ved saken du vil levere forslag til

## Administrator

Etter innlogging har administrator mulighet til
- Importere ny agenda
- Registrere forslag
- Vise og skjule forslag
- Sette saker til behandling

### Importere ny agenda

- Finn frem det aktuelle møtet fra [OpenGov](http://opengov.cloudapp.net/Meetings/tfk)
- Kopier lenken til møtets agenda
- Trykk på brukernavnet helt øverst til høyre og velg importer  
- Lim inn lenken i feltet og trykk importer
- Dersom alt gikk greit vil sakslisten fra møtet vises på siden
- Obs: Når man importere en agenda slettes alt annet innhold

### Registrere forslag

- Fra sakslisten trykk "Registrer forslag" ved saken forslaget hører til
- Fyll inn feltene og trykk "Legg til"
- Forslag vil ut utgangspunktet ha status skjult
- Styr visning av forslag ved hjelp av knappene
- Forslag har ikke redigeringsmodus så for å endre må du slette og legge inn påny

### Styre live visning

- Trykk "Sett til behandling" ved saken som er til behandling
- Kun en sak er til behandling av gangen. Endre ved å trykke "Sett til behandling" på en annen sak. 
- Styr visning og skjuling av forslag til sak under behandling ved hjelp av knappene

## License

[MIT](LICENSE)

![Robohash image of fylkestinget-web](https://robots.kebabstudios.party/fylkestinget-web.png "Robohash image of fylkestinget-web")