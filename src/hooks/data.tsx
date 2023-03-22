enum ARTISTS {
  STYX = "Styx",
  EUROPE = "Europe",
  KENNY_LOGGINS = "Kenny Loggins",
  DEF_LEPPARD = "Def Leppard",
  GUNS_N_ROSES = "Guns N' Roses",
  WHITESNAKE = "Whitesnake",
  BON_JOVI = "Bon Jovi",
  ROBERT_PALMER = "Robert Palmer",
  GORKY_PARK = "Gorky Park",
  KINGDOM_COME = "Kingdom Come",
  MOTLEY_CRUE = "Judas Priest",
  SKID_ROW = "Metallica",
  VAN_HALEN = "Metallica",
  AC_DC = "ACADACA (AC/DC)",
  EXTREME = "Extreme",
  POISON = "Poison",
  TIGERTAILZ = "Tigertailz",
  TOURNIQUET = "Tourniquet",
  WARRANT = "Warrant",
  WINGER = "Winger",
  ALICE_COOPER = "Alice Cooper",
  METALLICA = "Metallica",
  NIRVANA = "Nirvana",
  VIXEN = "Vixen",
  ZZ_TOP = "ZZ Top",
  STRAPPING_YOUNG_LAD = "Strapping Young Lad",
  SPIRITBOX = "Spiritbox",
  SOEN = "Soen",
  Soilwork = "Soilwork",
  SLAUGHTER = "Slaughter",
  SERJ_TANKIAN = "Serj Tankian",
  THROWDOWN = "Throwdown",
  NEWSTED = "Newsted",
  MUSHROOMHEAD = "Mushroomhead",
  MOTIONLESS_IN_WHITE = "Motioness In White",
  MARTY_FRIEDMAN = "Marty Friedman",
  THUNDER = "Thunder",
  ASPHALT_BALLET = "Asphalt Ballet",
  LIMP_BIZKIT = "Limp Bizkit",
  CONQUERING_DYSTOPIA = "Conquering Dystopia",
  JIMI_HENDRIX = "Jimi Hendrix",
  IN_THIS_MOMENT = "In This Moment",
  IN_FLAMES = "In Flames",
  ICE_NINE_KILLS = "Ice Nine Kills",
  ICED_EARTH = "Iced Earth",
  HYRO_THE_HERO = "Hyro The Hero",
  HOLY_SOLDIER = "Hold Soldier",
  HOOBASTANK = "Hoobastank",
  LA_GUNS = "L.A. Guns",
  HALFORD = "Halford",
  FIGHT = "Fight",
  GOJIRA = "Gojira",
  FOO_FIGHTERS = "Foo Fighters",
  LIVE = "Live",
  EARSHOT = "Earshot",
  DREAM_THEATER = "Dream Theater",
  DISTURBED = "Disturbed",
  ANIMAL_ALPHA = "Animal Alpha",
  DEMONS_AND_WIZARDS = "Demons & Wizards",
  DEFTONES = "Deftones",
  DAMN_YANKEES = "Damn Yankees",
  PHANTOM_BLUE = "Phantom Blue",
}

type Years = {
  influenced: number;
  released: number;
};

export type Song = {
  artist: ARTISTS;
  name: string;
  years: Years;
};

const useSongs = () => {
  const songs: Song[] = [
    {
      artist: ARTISTS.STYX,
      name: "Mr Roboto",
      years: {
        influenced: null,
        released: 1983,
      },
    },
    {
      artist: ARTISTS.EUROPE,
      name: "Cherokee",
      years: {
        influenced: 1986,
        released: 1986,
      },
    },
    {
      artist: ARTISTS.KENNY_LOGGINS,
      name: "Danger Zone",
      years: {
        influenced: 1986,
        released: 1986,
      },
    },
    {
      artist: ARTISTS.DEF_LEPPARD,
      name: "Rocket",
      years: {
        influenced: 1987,
        released: 1987,
      },
    },
    {
      artist: ARTISTS.DEF_LEPPARD,
      name: "Women",
      years: {
        influenced: 1987,
        released: 1987,
      },
    },
    {
      artist: ARTISTS.DEF_LEPPARD,
      name: "Love Bites",
      years: {
        influenced: 1987,
        released: 1987,
      },
    },
    {
      artist: ARTISTS.DEF_LEPPARD,
      name: "Gods Of War",
      years: {
        influenced: 1987,
        released: 1987,
      },
    },
    {
      artist: ARTISTS.DEF_LEPPARD,
      name: "Excitable",
      years: {
        influenced: 1987,
        released: 1987,
      },
    },
    {
      artist: ARTISTS.DEF_LEPPARD,
      name: "Bringin' On The Heartbreak",
      years: {
        influenced: 1989,
        released: 1981,
      },
    },
    {
      artist: ARTISTS.ZZ_TOP,
      name: "Concrete And Steel",
      years: {
        influenced: 1990,
        released: 1990,
      },
    },
    {
      artist: ARTISTS.WHITESNAKE,
      name: "Still Of The Night",
      years: {
        influenced: 1987,
        released: 1987,
      },
    },
  ];

  return {
    data: songs,
  };
};

export default useSongs;
