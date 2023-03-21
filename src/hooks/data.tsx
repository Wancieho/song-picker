enum ARTISTS {
  STYX = "Styx",
  EUROPE = "Europe",
  KENNY_LOGGINS = "Kenny Loggins",
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
        influenced: null,
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
  ];

  return {
    data: songs,
  };
};

export default useSongs;
