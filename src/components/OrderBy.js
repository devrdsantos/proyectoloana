import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function OrderBy() {
  return (
    <Dropdown as={ButtonGroup} className="ms-2">
      <Button variant="light">Ordenar Por</Button>

      <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Destacados</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mayor precio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Menor precio</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default OrderBy;
