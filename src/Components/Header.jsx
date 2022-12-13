import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  let navigate = useNavigate();

  return (
    <>
      <Navbar
        className="header"
        style={{ minWidth: "360px", width: "360px " }}
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">TO-DO-List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/todo");
              }}
            >
              해야할 일
            </Nav.Link>
            {/* 로그인은 오른쪽 끝에  */}
            <Nav.Link
              onClick={() => {
                navigate("/calendar");
              }}
            >
              달력
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainHeader;
