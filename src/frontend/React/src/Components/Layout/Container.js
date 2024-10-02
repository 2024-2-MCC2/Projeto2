import styled from "styled-components";

const ContainerModules = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`
function Container(props) {
  return (
    <ContainerModules>
      {props.children}
    </ContainerModules>
  );
}
export default Container;
