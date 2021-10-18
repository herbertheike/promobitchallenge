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
  A
} from "../styles/style";
import Moviecard from "../components/moviecard.js";
import { getDetail, getGenre, getData,movieByGenre,setId } from "../redux/action";
import ReactPaginate from "react-paginate";
import Link from 'next/link'

export class index extends Component {
  state = {
    search: "",
    page: 1,
    totalPages: this.props.totalPages,
    arrg:[],
    str:''
  };

  componentDidMount() {
    this.props.movieByGenre(this.state.page);
    this.props.getGenre();
  }

  handlePagination = (e) => {
    let selected = e.selected;
    let newselected = selected + 1;
    console.log(newselected);
    console.log(e);
    this.props.movieByGenre(this.state.page);
  };

  handleClick = (e) =>{
    let isChecked = e.target.checked;
    let value = e.target.value;
    var str = this.state.str
    if(isChecked === true){
      let b = str.concat(value+",")
      this.setState({str:b})
      console.log(b)
      this.props.movieByGenre(b)
    }else{
      let c = str.replace(value+",",'')
      this.setState({str:c})
      console.log(c)
      this.props.movieByGenre(c)
    }
  }
  render() {
    return (
      <Container>
        <Topbar>
          <Menu>
            <Title>Desafio Promobit</Title>

            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Buscar"
                value={this.state.search}
                readOnly
              />
            </SearchContainer>
          </Menu>
        </Topbar>
        <Grid>
          <Section style={{ alignContent: "center" }}>
            {!this.props.movielist.results ? (
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
                          <FilterColumn key={item.id}>
                            <FilterCheckBox value={item.id} onClick={(e)=>this.handleClick(e)}/>
                            
                            <FilterLabel> {item.name}</FilterLabel>
                          </FilterColumn>
                      );
                    })
                  )}
                </FilterContainer>
                <List>
                  {console.log(this.props.movielist)}
                  {console.log(this.props.totalPages)}
                  {this.props.movielist.results.map((item) => {
                    return (
                      <Link href={"/movie/"+item.id} onClick={()=>this.props.setId(item.id)}>
                      <ListItem
                        key={item.id} 
                      >
                           
                        <Moviecard
                          id={item.id}
                          title={item.title}
                          overview={item.overview}
                          vote={item.vote_average}
                          duration={item.release_date}
                          moviecover={item.poster_path}
                          link={item.original_language}
                        />
                                               
                      </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </>
            )}
            {<ReactPaginate
              pageCount={this.props.totalPages}
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
            />}
          </Section>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  movielist: state.movielist,
  totalPages: state.totalPages,
  moviegenre: state.moviegenre
});

//const mapDispatchToProps = {
//    this.props.getDataSuccess}

export default connect(mapStateToProps, { getData, getDetail, getGenre,movieByGenre, setId})(
  index
);
