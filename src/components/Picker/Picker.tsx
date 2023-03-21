import React, { FC, useMemo } from "react";

import useSongs, { Song } from "../../hooks/data";

const Picker: FC = () => {
  const { data: songs } = useSongs();

  const randomSong: Song = useMemo(() => {
    const randomInt = Math.floor(Math.random() * songs.length);

    return songs[randomInt];
  }, [songs]);

  return (
    <div data-testid="Picker">
      {songs && randomSong && (
        <>
          <h2>
            {randomSong?.name} - {randomSong?.artist}
          </h2>
          <ol>
            {songs.map((song) => (
              <li>{song.name}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default Picker;
