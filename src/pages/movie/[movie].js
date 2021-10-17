import React, { Component } from 'react'
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
  MoviePosterDetail,

} from "../../styles/style";
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import { getDetail } from "../../redux/action"

class movie extends Component {

    render() {
        return (
            <Container>
                <Topbar>
          <Menu>
            <Title>{this.props.router.query.movie}</Title>

            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Buscar"
                readOnly
              />
            </SearchContainer>
          </Menu>
        </Topbar>
        <Grid>
          <Section style={{ alignContent: "center" }}>
              <div>
                <title>nome</title>
                <p>
                    Adipisicing id irure sunt veniam occaecat culpa ea ipsum cillum magna fugiat. Cupidatat excepteur fugiat velit
                    cupidatat culpa sunt minim est culpa. Ut et adipisicing et consectetur incididunt anim aliqua excepteur excepteur quis culpa.
                    Ullamco cupidatat minim dolor minim aute adipisicing elit ipsum aliquip. Id tempor quis reprehenderit ut sunt reprehenderit ullamco
                    mollit pariatur deserunt dolor esse. Eu ad sit reprehenderit nostrud aliquip quis laboris.
                </p>
              </div>
              <MoviePosterDetail src={"https://lumiere-a.akamaihd.net/v1/images/image_a89e70e8.jpeg?region=0%2C0%2C540%2C810"}/>
          </Section>
        </Grid>
                
            </Container>
        )
    }
}

export default connect(null,{getDetail})(withRouter(movie));
