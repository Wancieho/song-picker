import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { FC } from "react";

import { Song as SongType } from "../../hooks/data";
import CircleIcon from "@mui/icons-material/Circle";

interface SongProps {
  song: SongType;
}

const Song: FC<SongProps> = ({ song }) => (
  <ListItem data-testid="Song" key={JSON.stringify(song)}>
    <ListItemIcon>
      <CircleIcon />
    </ListItemIcon>
    <ListItemText>{song.name}</ListItemText>
  </ListItem>
);

export default Song;
