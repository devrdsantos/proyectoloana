import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function OrderBy() {
  return (
    <Dropdown as={ButtonGroup} className="ms-2">
      <Button variant="light">Ordenar Por</Button>

      <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu
      name = "select" 
      defaultValue="destacados"
      >
        <Dropdown.Item value="relevante">Destacados</Dropdown.Item>
        <Dropdown.Item value="descendente">Mayor precio</Dropdown.Item>
        <Dropdown.Item value="ascendente">Menor precio</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default OrderBy;
