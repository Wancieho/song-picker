import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
} from "react";

import useSongs, { Song } from "../../hooks/data";
import { useTranslation } from "react-i18next";
import Songs from "../Songs/Songs";

const randomise = (
  songs: Song[],
  setRandomSong: Dispatch<SetStateAction<Song>>
) => {
  const randomInt = Math.floor(Math.random() * songs.length);

  setRandomSong(songs[randomInt]);
};

const Picker: FC = () => {
  const { t } = useTranslation();
  const [randomSong, setRandomSong] = useState<Song>();
  const { data: songs } = useSongs();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => randomise(songs, setRandomSong), []);

  return (
    <Box data-testid="Picker">
      <Songs songs={songs} />
      <Button onClick={() => randomise(songs, setRandomSong)}>
        {t("Randomise")}
      </Button>
      {randomSong && (
        <Typography fontSize={24}>
          {randomSong?.name} - {randomSong?.artist}
        </Typography>
      )}
    </Box>
  );
};

export default Picker;
