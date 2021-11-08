import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = "http://localhost:6060/";

const showToastr = (msg, status = "") => {
    const args = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    if(status == "warning") {
        toast.warning(msg, args);
    } else if(status == "error") {
        toast.error(msg, args);
    } else if(status == "info") {
        toast.info(msg, args);
    } else {
        toast(msg);
    }
}

const getFileSize = (file) => {
    return (Math.round(file.size / 1024 / 1024 * 100) / 100) + "MB";
}

const getDuration = (duration) => {
    let second = Math.round(duration);
    return Math.round(second / 3600) + ":" + Math.round((second % 3600) / 60) + ":" + (second % 60);
}

export { apiUrl, showToastr, getFileSize, getDuration }