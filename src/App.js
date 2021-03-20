import Home from './module/Home';
import styled from 'styled-components';
import { Fragment } from 'react';


const HeaderSection = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
  position: relative;
  color: white;
  background-color: blue;
  display:block;
`;

function App() {
  return (
    <Fragment>
      <HeaderSection>
        <header>
          <h1 style={{ margin: 0 }}>Redux-Saga</h1>
        </header>
      </HeaderSection>
      <div style={{ textAlign: 'center' }}>
        <Home></Home>
      </div>
    </Fragment>
  );
}

export default App;
