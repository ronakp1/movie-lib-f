import { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [searchPagination, setSearchPagination] = useState(true);


    const newPage = direction => {
        if (direction === "Next") {
            setPageNumber(prev => parseInt(prev) + 1);
            // setSearchPageNumber(prev => prev + 1);
        }
        else if (direction === "Previous") {
            if (pageNumber > 1) setPageNumber(pageNumber => parseInt(pageNumber) - 1);
            // if (searchPageNumber > 1) setSearchPageNumber(pageNumber => pageNumber - 1);
        }
    }

    return (
        <MovieContext.Provider
            value={{ pageNumber, setPageNumber, newPage, searchPagination, setSearchPagination }}>
            {children}
        </MovieContext.Provider>

    );
}
