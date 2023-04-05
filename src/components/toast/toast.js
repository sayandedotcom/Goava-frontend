import {toast} from 'react-toastify';

export const toastify = (result, type) => toast[type](result, {});
