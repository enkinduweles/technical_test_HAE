export type Movie = {
  id: number;
  title: string;
  genre: string;
};

export const MOVIES = [
  { id: 1, title: 'A Garota no Trem', genre: 'thriller' },
  { id: 2, title: 'O Silêncio dos Inocentes', genre: 'thriller' },
  { id: 3, title: 'Janela Indiscreta', genre: 'thriller' },
  { id: 4, title: 'Seven: Os Sete Crimes Capitais', genre: 'thriller' },
  { id: 5, title: 'Psicose', genre: 'thriller' },
  { id: 6, title: 'O Exorcista', genre: 'horror' },
  { id: 7, title: 'Hereditário', genre: 'horror' },
  { id: 8, title: 'A Bruxa', genre: 'horror' },
  { id: 9, title: 'Invocação do Mal', genre: 'horror' },
  { id: 10, title: 'Esqueceram de Mim', genre: 'comedy' },
  {
    id: 11,
    title: 'Debi & Lóide: Dois Idiotas em Apuros',
    genre: 'comedy',
  },
  {
    id: 12,
    title: 'Apertem os Cintos... O Piloto Sumiu!',
    genre: 'comedy',
  },
  { id: 13, title: 'Um Príncipe em Nova York', genre: 'comedy' },
  { id: 14, title: 'Duro de Matar', genre: 'action' },
  { id: 15, title: 'Velozes e Furiosos 7', genre: 'action' },
  { id: 16, title: 'Mad Max: Estrada da Fúria', genre: 'action' },
  { id: 17, title: 'Vingadores: Ultimato', genre: 'action' },
  { id: 18, title: 'Matrix', genre: 'action' },
  { id: 19, title: 'Forrest Gump', genre: 'drama' },
  { id: 20, title: 'Um Sonho de Liberdade', genre: 'drama' },
  { id: 21, title: 'A Chegada', genre: 'drama' },
] as Movie[];
