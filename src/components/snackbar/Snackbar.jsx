import { useContext } from 'react';
import './Snackbar.css'
import { SnackbarContext } from '../../contexts/SnackbarContext';

export default function Snackbar() {
    const snackbar = useContext(SnackbarContext);

    return (
        <div>
            <div className={`snackbar ${snackbar.isSnackbarShown ? 'show' : ''}`}>{snackbar.errorMessage}</div>
        </div >
    );
}