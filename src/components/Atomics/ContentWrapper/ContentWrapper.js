import { ToastContainer } from 'react-toastify';

export default function ContentWrapper({ children, className = null }) {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
			<div id="content-wrapper" className={className}>
				{children}
			</div>
		</>
	);
}
