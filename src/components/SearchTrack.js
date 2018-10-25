import React from "react";

import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const InputField = styled.input.attrs({
  type: "text",
  placeholder: "Enter track or artist here..."
})`
  width: 80%;
  max-width: 500px;
  height: 35px;
  padding-left: 2%;
  font-size: 20px;
  border: 2px solid rgba(26, 113, 177, 0.2);
  border-radius: 15px;

  :focus {
    outline: none;
    border: 2px solid rgba(26, 113, 177, 1);
  }
`;

class SearchTrack extends React.Component {
  render() {
    const { onFetchTracklist } = this.props;
    return (
      <SearchContainer>
        <InputField
          ref={input => (this._input = input)}
          onChange={() => onFetchTracklist(this._input.value)}
        />
      </SearchContainer>
    );
  }
}

export default SearchTrack;
