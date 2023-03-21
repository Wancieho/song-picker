import React, { FC } from "react";
import useSongs from "../../hooks/data";

interface PickerProps {}

const Picker: FC<PickerProps> = () => {
  const { data: songs } = useSongs();

  const randomInt = Math.floor(Math.random() * songs.length);

  const randomSong = songs[randomInt];

  return (
    <div data-testid="Picker">
      {randomSong.artist} {randomSong.name}
    </div>
  );
};

export default Picker;
