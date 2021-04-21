import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './styles.css';

export const Pagination = ({ totalPage, pageNumber }) => {

    const [currentPage, setcurrentPage] = useState(1);

    //This will display 5 blocks of number at a time
    // 1 2 3 4 5 ... 499 500
    const [totalNumberToDisplay, setTotalNumberToDisplay] = useState(5);

    const history = useHistory();

    useEffect(() => {
        setcurrentPage(parseInt(pageNumber));
    }, [pageNumber]);

    const generateArray = (start, end) => {
        return [...Array(end - start + 1).keys()].map(i => i + start);
    };

    const getCurrentList = () => {
        let paginationList;
        //Far Left
        if (currentPage < totalNumberToDisplay) {
            paginationList = [...generateArray(1, totalNumberToDisplay), '...', totalPage - 1, totalPage];
        }
        //Far Right
        else if (currentPage > totalPage - 5) {
            paginationList = [1, 2, '...', ...generateArray(totalPage - 5, totalPage)];
        }
        //Middle
        else if (currentPage >= totalNumberToDisplay) {
            paginationList = [1, 2, '...', ...generateArray(currentPage - 2, currentPage + 2), '...', totalPage - 1, totalPage];
        }


        return paginationList;
    };

    const handlePageSelect = (e) => {
        const index = e.target.value;
        const page = e.target.innerHTML;

        if (page !== '...') {
            history.push(`/search?page=${page}`);
        }
        else {
            /*
                lower '...' clicked = move back <totalNumberToDisplay> pages from currentPage
                higher '...' clicked = move ahead <totalNumberToDisplay> pages from currentPage
            */
            if (index === 2) {
                history.push(`/search?page=${currentPage - totalNumberToDisplay - 1}`);
            } else {
                history.push(`/search?page=${currentPage + totalNumberToDisplay + 1}`);
            }
        }
    };

    const handlePreviousNext = (e) => {
        const action = e.target.value;

        // -1 = Previous
        // 1 = Next
        if (action < 0)
            history.push(`/search?page=${currentPage - 1}`);
        else
            history.push(`/search?page=${currentPage + 1}`);
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="btn-previous disabled page-link" value="-1" onClick={handlePreviousNext}>
                    Previous
                </li>
                {
                    getCurrentList().map((page, index) => (
                        <li
                            className={`page-item page-link ${page === currentPage ? 'active' : null}`}
                            key={index}
                            value={index}
                            onClick={handlePageSelect}>{page}</li>
                    ))
                }

                <li className="btn-next page-link" value="1" onClick={handlePreviousNext}>
                    Next
                </li>
            </ul>
        </nav>
    );
};
