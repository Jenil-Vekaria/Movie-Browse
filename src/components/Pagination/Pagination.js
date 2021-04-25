import React, { useEffect, useState } from 'react';
import './styles.css';

export const Pagination = ({ queryMovieSearch, totalPage, pageNumber, history }) => {

    const [currentPage, setcurrentPage] = useState(1);

    //This will display 5 blocks of number at a time
    // 1 2 3 4 5 ... 499 500
    const [totalNumberToDisplay, setTotalNumberToDisplay] = useState(3);

    useEffect(() => {
        setcurrentPage(parseInt(pageNumber));
    }, [pageNumber]);

    const generateArray = (start, end) => {
        return [...Array(end - start + 1).keys()].map(i => i + start);
    };

    const getCurrentList = () => {
        let paginationList;

        //Total page < Total Numbers displaying 
        if (totalPage <= totalNumberToDisplay) {
            paginationList = [...generateArray(1, totalPage)];
        }
        //Far Left
        else if (currentPage < totalNumberToDisplay) {
            paginationList = [...generateArray(1, totalNumberToDisplay), '...', totalPage];
        }
        //Far Right
        else if (currentPage > totalPage - totalNumberToDisplay) {
            paginationList = [1, '...', ...generateArray(totalPage - totalNumberToDisplay, totalPage)];
        }
        //Middle
        else if (currentPage >= totalNumberToDisplay) {
            paginationList = [1, '...', ...generateArray(currentPage - 1, currentPage + 1), '...', totalPage];
        }


        return paginationList;
    };

    const handlePageSelect = (e) => {
        const index = e.target.value;
        const page = e.target.innerHTML;

        let { pathname } = history.location;

        const searchQuery = queryMovieSearch ? `movieName=${queryMovieSearch}&page=${page}` : `page=${page}`;


        if (currentPage === parseInt(page))
            return;

        if (page !== '...') {
            history.push(`${pathname}?${searchQuery}`);
        }
        else {
            /*
                lower '...' clicked = move back <totalNumberToDisplay> pages from currentPage
                higher '...' clicked = move ahead <totalNumberToDisplay> pages from currentPage
            */
            if (index === 1) {
                history.push(`${pathname}?${searchQuery}`);
            } else {
                history.push(`${pathname}?${searchQuery}`);
            }
        }
    };

    const handlePreviousNext = (e) => {
        const action = e.target.value;

        const { pathname } = history.location;

        // -1 = Previous
        // 1 = Next
        if (action < 0)
            history.push(`${pathname}?page=${currentPage - 1}`);
        else
            history.push(`${pathname}?page=${currentPage + 1}`);
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
