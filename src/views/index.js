import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Box,
  Section,
  Grid,
  List,
  ListItem,
  Topbar,
  AudioPlayer,
  Title,
  Menu,
  SearchContainer,
  SearchInput,
  SubTitle,
  Label,
  Tag,
  CardContainer,
  CardContent,
  MoviePoster,
  Button,
  FilterContainer,
  FilterColumn,
  FilterLabel,
  FilterCheckBox,
  FilterElement,
} from "../styles/style";
import "../styles/defaults.css";
import Moviecard from "../components/moviecard.js";
import { getDetail, getGenre, getData,setGenre } from "../redux/action";
import ReactPaginate from "react-paginate";

export class index extends Component {
  state = {
    search: "",
    page: 1,
    totalPages: this.props.totalPages,
  };

  componentDidMount() {
    this.props.getData(this.state.page);
    this.props.getGenre();
  }

  handlePagination = (e) => {
    let selected = e.selected;
    let newselected = selected + 1;
    console.log(newselected);
    console.log(e);
    this.props.getData(newselected);
  };

  handleClick = (e) =>{
    let isChecked = e.target.checked;
    let value = e.target.value;
    console.log(value, isChecked)
  }
  render() {
    return (
      <Container>
        <Topbar>
          <Menu>
            <Title>Desafio promobit</Title>

            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Buscar"
                value={this.state.search}
                onChange={(e) => this.handleChange(e)}
                onKeyDown={this.searchComponent}
              />
            </SearchContainer>
          </Menu>
        </Topbar>
        <Grid>
          <Section style={{ alignContent: "center" }}>
            {!this.props.moviespopular.results ? (
              <List>
                <ListItem>
                  <CardContainer>
                    <Box>
                      <CardContent>
                        <SubTitle>Carregando...</SubTitle>
                        <Label>Carregando...</Label>
                        <Label
                          style={{ fontStyle: "italic", fontSize: "0.8rem" }}
                        >
                          Carregando...
                        </Label>
                        <Tag>Carregando...</Tag>
                      </CardContent>
                      <Box>
                        <AudioPlayer controls name="media" />
                      </Box>
                    </Box>
                    <MoviePoster
                      src={
                        "https://cdn-icons-png.flaticon.com/512/1384/1384061.png"
                      }
                      alt="Album cover"
                    />
                  </CardContainer>
                </ListItem>
              </List>
            ) : (
              <>
              <Title style={{display:"grid"}}>Buscar por genero</Title>
                <FilterContainer>
                  {!this.props.moviegenre.genres ? (
                    <FilterLabel>Loading...</FilterLabel>
                  ) : (
                    this.props.moviegenre.genres.map((item) => {
                      return (
                          <FilterColumn>
                            <FilterCheckBox value={item.id} onClick={(e)=>this.handleClick(e)}/>
                            
                            <FilterLabel> {item.name}</FilterLabel>
                          </FilterColumn>
                      );
                    })
                  )}
                </FilterContainer>
                <List>
                  {console.log(this.props.moviespopular)}
                  {this.props.moviespopular.results.map((item) => {
                    return (
                      <ListItem
                        key={item.id}
                        onClick={() => this.props.getDetail(item.id)}
                      >
                        <Moviecard
                          id={item.id}
                          title={item.title}
                          overview={item.overview}
                          album={item.vote_average}
                          duration={item.release_date}
                          preview={item.video}
                          albumcover={item.poster_path}
                          link={item.original_language}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </>
            )}
            <ReactPaginate
              pageCount={this.state.totalPages}
              pageRange={1}
              marginPagesDisplayed={1}
              onPageChange={this.handlePagination}
              containerClassName={"container"}
              previousLinkClassName={"page"}
              breakClassName={"page"}
              nextLinkClassName={"page"}
              pageClassName={"page"}
              disabledClassNme={"disabled"}
              activeClassName={"active"}
              previousLabel={"<"}
              nextLabel={">"}
            />
          </Section>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  moviespopular: state.moviespopular,
  totalPages: state.totalPages,
  moviegenre: state.moviegenre,
  id: state.id,
});

//const mapDispatchToProps = {
//    this.props.getDataSuccess}

export default connect(mapStateToProps, { getData, getDetail, getGenre,setGenre })(
  index
);
