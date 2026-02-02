interface Schulnoten {
  title: string
  description: string
  kategorie: string
  anbieter: string
  sprache: string
  dauer?: string
  abschluss: string
  datum: string
  sortDate: Date
}

export const zeugnis: Schulnoten[] = [
  {
    title: 'Basiswissen Wirtschaft',
    description: 'Wirtschaftliche Grundlagen',
    kategorie: 'Vorbereitungskurs',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '120 Stunden',
    abschluss: 'sehr gut',
    datum: 'Oktober 2023',
    sortDate: new Date('2023-10-27')
  },
  {
    title: 'Basiswissen IT',
    description: 'Informations- und Telekommunikationstechnik Grundlagen',
    kategorie: 'Vorbereitungskurs',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '120 Stunden',
    abschluss: 'gut',
    datum: 'November 2023',
    sortDate: new Date('2023-11-24')
  },
  {
    title: 'Basiswissen Programmierung',
    description: 'Programmierung in Python Grundlagen',
    kategorie: 'Vorbereitungskurs',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '120 Stunden',
    abschluss: 'sehr gut',
    datum: 'Dezember 2023',
    sortDate: new Date('2023-12-22')
  },
  {
    title: 'Projektmanagement',
    description: 'Agile Scrum Foundation',
    kategorie: 'Zusatzqualifikation',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'sehr gut',
    datum: 'September 2024',
    sortDate: new Date('2024-09-06')
  },
  {
    title: 'Datenbanken',
    description: 'Datenbanken und SQL',
    kategorie: 'Vertiefung',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '120 Stunden',
    abschluss: 'gut',
    datum: 'März 2025',
    sortDate: new Date('2025-03-21')
  },
  {
    title: 'Client Systeme',
    description: 'Client Systeme Windows',
    kategorie: 'Vertiefung',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '72 Stunden',
    abschluss: 'gut',
    datum: 'September 2024',
    sortDate: new Date('2024-09-20')
  },
  {
    title: 'Projektmanagement',
    description: 'Grundlagen Projektmanagement',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'sehr gut',
    datum: 'April 2024',
    sortDate: new Date('2024-04-19')
  },
  {
    title: 'Anwendungsentwicklung',
    description: 'Kundenspezifische Anwendungsentwicklung durchführen',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'sehr gut',
    datum: 'April 2025',
    sortDate: new Date('2025-04-11')
  },
  {
    title: 'Anwendungsentwicklung',
    description: 'Funktionalität in Anwendungen realisieren',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'sehr gut',
    datum: 'Oktober 2024',
    sortDate: new Date('2024-10-30')
  },
  {
    title: 'Anwendungsentwicklung',
    description: 'Benutzerschnittstellen gestalten und entwicklen',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'sehr gut',
    datum: 'Oktober 2024',
    sortDate: new Date('2024-10-11')
  },
  {
    title: 'Systemintegration',
    description: 'Netzwerke und dienste bereitstellen',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '120 Stunden',
    abschluss: 'sehr gut',
    datum: 'August 2024',
    sortDate: new Date('2024-08-23')
  },
  {
    title: 'Anwendungsentwicklung Java',
    description: 'Daten systemübergreifend bereitstellen',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'sehr gut',
    datum: 'August 2024',
    sortDate: new Date('2024-07-19')
  },
  {
    title: 'Cyberphysische Systeme',
    description: 'Cyberphysische Systeme ergänzen (IoT/Arduino)',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'gut',
    datum: 'Juni 2024',
    sortDate: new Date('2024-06-28')
  },
  {
    title: 'Serviceanfragen',
    description: 'Serviceanfragen bearbeiten',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '40 Stunden',
    abschluss: 'sehr gut',
    datum: 'Juni 2024',
    sortDate: new Date('2024-06-14')
  },
  {
    title: 'Anwendungsentwicklung',
    description: 'Software zur Verwaltung von Daten anpassen',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '112 Stunden',
    abschluss: 'sehr gut',
    datum: 'Juni 2024',
    sortDate: new Date('2024-06-07')
  },
  {
    title: 'Schutzbedarfsanalyse',
    description: 'Schutzbedarfsanalyse im eigenen Betrieb durchführen',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '40 Stunden',
    abschluss: 'gut',
    datum: 'Mai 2024',
    sortDate: new Date('2024-05-17')
  },
  {
    title: 'Systemintegration',
    description: 'Clients ins Netzwerk einbinden',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '80 Stunden',
    abschluss: 'gut',
    datum: 'Mai 2024',
    sortDate: new Date('2024-05-10')
  },
  {
    title: 'IT-Arbeitsplatz',
    description: 'Arbeitsplatz nach Kundenwunsch ausstatten',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '120 Stunden',
    abschluss: 'gut',
    datum: 'März 2024',
    sortDate: new Date('2024-03-15')
  },
  {
    title: 'Unternehmen',
    description: 'Das Unternehmen und die eigene Rolle im Betrieb',
    kategorie: 'Lernfeld',
    anbieter: 'GFN',
    sprache: 'Deutsch',
    dauer: '40 Stunden',
    abschluss: 'gut',
    datum: 'Februar 2024',
    sortDate: new Date('2024-02-16')
  }
]