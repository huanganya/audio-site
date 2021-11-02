import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ItemModal({ show, handleAccept, handleReject }) {
	return (
		<>
			<Modal show={show} onHide={handleReject} centered size="sm">
				<Modal.Header closeButton>
					<Modal.Title>Ready to Leave?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Select "Logout" below if you are ready to end your current
					session.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleReject}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleAccept}>
						Logout
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ItemModal;
