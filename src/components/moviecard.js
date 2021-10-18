
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
}) => {
  return (
               
    <CardContainer>
      <MoviePoster src={"https://image.tmdb.org/t/p/original/"+moviecover} alt="Movie cover" />
      <CardContent>
        <Label>{vote*10}%</Label>
        <SubTitle>
            {title}
        </SubTitle>
        
      </CardContent>
      
    </CardContainer>
  );
};

/**DEPRECATED
 * <Label>
          {overview} - {vote}
        </Label>
        <Label>
          {duration}
        </Label>
 */


export default connect(null)(Moviecard);