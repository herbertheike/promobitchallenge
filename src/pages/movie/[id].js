import React, { Component } from "react";
import {
  Container,
  Box,
  Section,
  Grid,
  Topbar,
  Title,
  Menu,
  SearchContainer,
  SearchInput,
  MovieTitle,
  MovieSinopsis,
  MovieVoteAvarage,
  MovieContainer,
  MovieContent,
  MoviePosterDetail,
  MovieGenre,
  NumberBox,
  Textlabel,
  CastContainer,
  CastContent,
  CastPoster,
  CastName,
  A,
} from "../../styles/style";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { getDetail } from "../../redux/action";
import moment from "moment";
import Link from "next/link";

class movie extends Component {
  state = {
    genres: [],
  };

  componentDidMount() {
    let id = this.props.id;
    console.log(id);
    this.props.getDetail(this.props.router.query.id);
    console.log(this.props.id);
  }
  render() {
    return (
      <Container>
        <Topbar>
          <Menu>
            <Link href={"/"} style={{ color: "#000" }}>
              <A>Voltar</A>
            </Link>
            <Title>{this.props.moviedetail.title}</Title>

            <SearchContainer>
              <SearchInput type="text" placeholder="Buscar" readOnly />
            </SearchContainer>
          </Menu>
        </Topbar>
        <Grid>
          {!this.props.moviedetail.credits ? (
            <Section>
              <Title>Carregando...</Title>
            </Section>
          ) : (
            <Section style={{ alignContent: "center" }}>
              {this.props.moviedetail.length === 0 ? (
                <Title>Carregando...</Title>
              ) : (
                <MovieContainer
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(5,5,74,0.8) 100%),url(https://image.tmdb.org/t/p/original" +
                      this.props.moviedetail.backdrop_path +
                      ")",
                  }}
                >
                  <MovieContent>
                    <MoviePosterDetail
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        this.props.moviedetail.poster_path
                      }
                      alt="Movie cover"
                    />
                    <div
                      style={{
                        alignContent: "flex-start",
                        maxWidth: 800,
                        textAlign: "left",
                        paddingLeft: "4rem",
                        flexDirection: "column",
                      }}
                    >
                      <MovieTitle>{this.props.moviedetail.title}</MovieTitle>
                      <div
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                        }}
                      >
                        {!this.props.moviedetail.release_dates ? (
                          <div> Loading...</div>
                        ) : (
                          this.props.moviedetail.release_dates.results.map(
                            (item) => {
                              if (item.iso_3166_1 === "BR") {
                                return (
                                  <>
                                    <NumberBox>
                                      {item.release_dates[0].certification}
                                    </NumberBox>
                                    <Textlabel>
                                      Lançado em:{" "}
                                      {moment(
                                        item.release_dates[0].release_date
                                      ).format("DD/MM/YYYY")}
                                    </Textlabel>
                                  </>
                                );
                              } else {
                                <div> Loading...</div>;
                              }
                            }
                          )
                        )}
                      </div>
                      <div
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                        }}
                      >
                        <MovieVoteAvarage>
                          {this.props.moviedetail.vote_average * 10}%
                        </MovieVoteAvarage>
                        {!this.props.moviedetail.genres ? (
                          <MovieGenre>Carregando...</MovieGenre>
                        ) : (
                          this.props.moviedetail.genres.map((item) => {
                            return <MovieGenre>{item.name}</MovieGenre>;
                          })
                        )}
                      </div>
                      <Textlabel style={{ paddingLeft: 0, fontWeight: "bold" }}>
                        Sinopse
                      </Textlabel>
                      <MovieSinopsis>
                        {this.props.moviedetail.overview}
                      </MovieSinopsis>
                    </div>
                  </MovieContent>
                </MovieContainer>
              )}
              <Box>
                <Title style={{color:'black'}}>Elenco Principal</ Title>
                <div style={{flexDirection:"row", padding:10}}>
                {this.props.moviedetail.credits.cast.slice(0, 9).map((item) => {
                  return (
                    <CastContainer>
                      <CastPoster
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          item.profile_path
                        }
                        alt="Movie cover"
                      />
                      <CastContent>
                        <CastName>
                          {item.name} como
                          <br /> {item.character}
                        </CastName>
                      </CastContent>
                    </CastContainer>
                  );
                })}
                </div>
              </Box>
            </Section>
          )}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  moviedetail: state.moviedetail,
  id: state.id,
});

export default connect(mapStateToProps, { getDetail })(withRouter(movie));
