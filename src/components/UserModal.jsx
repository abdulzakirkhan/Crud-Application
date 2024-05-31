/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function UserModal({ id, showPopUp, setShowPopUp }) {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div
      className="custmodal p-4 rounded-3"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>

        <Modal.Body>
          <p>
            {" "}
            <span>Name:</span> {singleUser[0].name}
          </p>
          <p>
            {" "}
            <span>Email:</span> {singleUser[0].email}
          </p>
          <p>
            {" "}
            <span>Age:</span> {singleUser[0].age}
          </p>
          <p>
            {" "}
            <span>Gender:</span> {singleUser[0].gender}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowPopUp(false)}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default UserModal;
