import React from "react";
import { connect } from "react-redux";
import {
  SubTitle,
  Label,
  CardContainer,
  CardContent,
  MoviePoster,
} from "../styles/style";


const Moviecard = ({
  id,
  title,
  overview,
  vote,
  duration,
  moviecover,
  link
}) => {
  return (
    <CardContainer>
      <CardContent>
        <SubTitle>
            {title}
        </SubTitle>
        <Label>
          {overview} - {vote}
        </Label>
        <Label>
          {duration}
        </Label>
      </CardContent>
      <MoviePoster src={"https://image.tmdb.org/t/p/original/"+moviecover} alt="Movie cover" />
    </CardContainer>
  );
};


export default connect(null)(Moviecard);