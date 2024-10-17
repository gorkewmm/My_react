import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container,Row,Col } from "reactstrap";

function App() {
  let categoryInfo = {title:"C-list"}
  let productInfo = {title:"P-list", number:"96"}

  return (
    <div>
       <Container>
        <Row>
          <Navi/>
          </Row>
        
        <Row>
          <Col xs="3"><CategoryList info = {categoryInfo}/></Col>
          <Col xs="9"><ProductList info = {productInfo}/></Col>           
        </Row>

       </Container>

       
    </div>
  );
}
export default App;
