import './Paginator.css';

export default function Paginator({ currentPage, totalPages, setCurrentPage }) {

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
}