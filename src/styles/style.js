import styled from "styled-components";



export const Container = styled.div`
  display: inline;
  width: 100vh;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  flex 1;
  flex-direction: column;
  text-align:left;
  color:rgb(0,0,0);
  background-color: rgba(255, 255, 255);
`;
export const Section = styled.div`
  background-color: rgb(18, 18, 18);
  max-height:100vw;
  text-align:center;
  background-image: linear-gradient(180deg, #41295a 0%, #2f0743 100%);
`;
//rgba(243,243,72,1) 0%, rgba(65,170,111,0.43) 100%)
export const Grid = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 10px;
  display:inline-block;
  position: relative;
  max-width: 80vw;
  white-space:wrap;

`;

export const ListItem = styled.li`
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  box-sizing: border-box;
  text-align: left;
  padding: 0.2rem;
  
`;

export const Topbar = styled.header`
  background-color: #1976d2;
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;
export const AudioPlayer = styled.audio`
  width: 320px;
  height: 30px;
`;
export const SearchContainer = styled.div`
  padding: 0px 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #434343;
  &:focus {
    background: #434343;
    color: white;
    outline: none;
    width: 20ch;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &::placeholder {
    color: white;
  }
`;
export const SearchInput = styled.input`
  padding: 8px 8px 8px;
  width: 12ch;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font: inherit;
  letter-spacing: inherit;
  color: gray;
  border: 0px;
  box-sizing: content-box;
  background-color: transparent;
  height: 1.4375em;
  margin: 0px;
  display: block;
  border: none;
  border-radius: 0.3rem;
  &:focus {
    background: transparent;
    color: white;
    outline: none;
    width: 20ch;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const Title = styled.title`
    display:flex;
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
    padding: 10px;
    color:white;
    
`;
export const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 56px;
  justify-content: space-around;
`;
export const SubTitle = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  max-width:2:rem;
  letter-spacing: 0em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Label = styled.label`
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  text-align:justify;
  color: rgba(0,0,0, 0.7);
  display: block;
  max-width: 320px;
  &:hover {
    display: block;
    overflow: visible;
    white-space: wrap;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
export const Tag = styled.div`
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.75;
  color: rgba(36, 36, 36, 0.7);
`;
export const CardContainer = styled.div`
  background-color: white;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow: hidden;
  display: flex;
  margin-right: 0.25rem;
  max-width: 10rem;
  max-height:20rem;
  flex-direction: column;
  cursor:pointer;
  &:hover {
    transform:  scale(1.05);
    z-index: 1;
    box-shadow: 1px 1px 13px 4px #000000;
  }
  transition:all 0.4s 0s ease;
`;
export const CardContent = styled.div`
  padding: 11px;
  display:inline-block;
  flex-direction: column;
  max-width: 320px;
`;
export const MoviePoster = styled.img`
  display: block;
  width:10rem;
  height:15rem;
  object-fit: cover;
`;
export const MoviePosterDetail = styled.img`
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  width:20rem;
  object-fit: cover;
  max-width: 30rem;
`;

export const MovieContainer = styled.div`
  
  border-radius: 4px;
  overflow: hidden;
  display: block;
  height:35rem;
  flex-direction: column;
  background-size: cover;

`;
export const MovieContent = styled.div`
  padding: 11px;
  margin: 0px;
  display:flex;
  flex-direction: row;
  align-items: center;

`;
export const MovieTitle = styled.title`
display:inline;
color:white;
font-size:2rem;
padding:10px;
padding-left:0px;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight:bold;
`;
export const MovieSinopsis = styled.p`
color:white;
font-size:1rem;
`;
export const MovieVoteAvarage = styled.span`
 display:inline;
 color:white;
 padding: 10px;
 padding-left:0px;
 font-size:1.5rem;
 font-family: Roboto, Helvetica, Arial, sans-serif;
 font-weight:bold;
`;
export const MovieGenre = styled.div `
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    white-space: nowrap;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: default;
    outline: 0px;
    text-decoration: none;
    border: 0px;
    padding: 10px;
    vertical-align: middle;
    box-sizing: border-box;
    margin: 2px;
    `;

    export const CastContainer = styled.li`
  background-color: white;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin:3px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow: hidden;
  display: inline-flex;
  max-width:8rem;
  margin-right: 0.25rem;
  flex-direction: column;
  text-align:center;
  cursor:pointer;
  &:hover {
    transform:  scale(1.01);
    z-index: 1;
    box-shadow: 1px 1px 13px 4px #000000;
  }
  transition:all 0.4s 0s ease;
`;
export const CastContent = styled.div`
  padding: 11px;
  display:inline;
  flex-direction: column;
`;
export const CastPoster = styled.img`
  object-fit:cover;
  width:8rem;
`;
export const CastName = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  max-width:2:rem;
  letter-spacing: 0em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    font-size: 0.5rem;
    text-overflow: ellipsis;
  overflow: visible;
  white-space: nowrap;
   
  }
`;
export const Button = styled.button`
  display: flex;
  padding-left: 16px;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-image: linear-gradient(130deg, #232526, #414345);
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  vertical-align: middle;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  width: 120px;
  height: 8rem;
  padding: 5px 15px;
  border-radius: 4px;
  border: 0px;
  color: rgb(255, 255, 255);
  &:hover {
    background-image: linear-gradient(150deg, #434343, #000000);
    color: rgb(255, 255, 255);
  }
`;
export const A = styled.a`
  color: rgb(255,255,255);
  text-decoration: none;
  &:hover {
    color: rgb(105, 153, 232);
  }
  &:after {
    color: rgb(123, 456, 231);
  }
`;
export const NumberBox = styled.label`
  display:flex;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border:1px;
  border-color:rgba(255,255,255);
  color: rgba(255,255,255);
  text-decoration: none;
`;
export const Textlabel = styled.label`
  color: rgb(255,255,255);
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(105, 153, 232);
  }
  &:after {
    color: rgb(123, 456, 231);
  }
`;
export const FilterContainer = styled.div`
    padding: 10px;
    column-gap: 3px;
    column-count: 5;
    align-items: center; 
    justify-content: center;
    display: inline-block;
    text-align:justify

`;
export const FilterColumn = styled.div`
  align-items: center; 
  justify-content: center;
  
`;
export const FilterElement = styled.div`
  display:flex;
  flex-direction:row;
  box-sizing: border-box;
`;
export const FilterLabel = styled.label`
  font-size:12px;
  
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: rgb(255,255,255);
`;
export const FilterCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 17px;
  height:17px;
  border-radius:100px;
}
`;

