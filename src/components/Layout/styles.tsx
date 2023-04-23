import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'nav nav nav'
    'main main main';
  min-height: 100vh !important;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      'nav'
      'main';
    transition: all 1s;
  }
`;
