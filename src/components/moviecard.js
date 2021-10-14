import React from "react";
import { connect } from "react-redux";
import {
  AudioPlayer,
  SubTitle,
  Label,
  Tag,
  CardContainer,
  CardContent,
  MoviePoster,
  A,
} from "../styles/style";



const Moviecard = ({
  id,
  title,
  overview,
  album,
  duration,
  preview,
  albumcover,
  link,
}) => {
  return (
    <CardContainer>
      <CardContent>
        <SubTitle>
            {title}
        </SubTitle>
        <Label>
          {overview} - {album}
        </Label>
      </CardContent>
      <MoviePoster src={"https://image.tmdb.org/t/p/original/"+albumcover} alt="Album cover" />
    </CardContainer>
  );
};


export default connect(null)(Moviecard);