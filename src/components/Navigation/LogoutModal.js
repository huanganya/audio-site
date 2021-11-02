import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LogoutModal({ show, handleClose, handleLogout }) {
	return (
		<>
			<Modal show={show} onHide={handleClose} centered size="sm">
				<Modal.Header closeButton>
					<Modal.Title>Ready to Leave?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Select "Logout" below if you are ready to end your current
					session.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleLogout}>
						Logout
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default LogoutModal;
