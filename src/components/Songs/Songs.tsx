import List from "@mui/material/List";
import React, { FC } from "react";

import { Song as SongType } from "../../hooks/data";
import Song from "../Song/Song";

interface SongsProps {
  songs: SongType[];
}

const Songs: FC<SongsProps> = ({ songs }: SongsProps) => (
  <List data-testid="Songs">
    {songs?.map((song) => (
      <Song song={song} key={JSON.stringify(song)} />
    ))}
  </List>
);

export default Songs;
