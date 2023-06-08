import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Sets(){
  const {sets, isSearch} = useGlobalContext();

  const renderWhenSearchComplete = () => {
    if(!isSearch) {
      return sets.map((set) => {
          return <Link to ={`/sets/${set.id}`} key={set.id}>
            <img src={set.images.logo} alt="name" />
          </Link>
           
      })
    }
  }
  return (
    <SetsStyle>
      <div className="all-sets">
        {renderWhenSearchComplete()}
      </div>
    </SetsStyle>
  )
}

const SetsStyle = styled.div`
display: flex;
 .all-sets{
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  background-color: #fff;
  border-top: 5px solid #e5e7eb;

  a {
    text-decoration: none;
    height: 300px;
    width: 300px
    border-radius: 7px;
    border: 5px solid #e5e7eb;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }
  a img {
    
    max-width: 100%;
    max-height: 100%;
    width: 250px;
    height: auto;
    
    
    border-radius: 5px;
  }
 }
`;
export default Sets;