const useSongs = () => {
  enum ARTISTS {
    STYX = "Styx",
    EUROPE = "Europe",
    KENNY_LOGGINS = "Kenny Loggins",
  }

  const songs = [
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
