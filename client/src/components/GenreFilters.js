import React, { useRef } from 'react';
import styles from '../styles/Select.module.css';
// export const MyContext = React.createContext();

function GenreFilters(props) {
    const linkRef = useRef("popular");

    const handleChange = e => {
        linkRef.current = e.target.value;
        props.changeValue(e.target.value);
    }
    
    const { title } = props;
    return (
        <div>
            <h1>{title}</h1>
            <select className={styles.selectFilter} ref={linkRef} onChange={e => handleChange(e)}>
                <option value="popular">Popular</option>
                <option value="toprated" >Top Rated</option>
                <option value="title">Title</option>
                <option value="releasedate">Release Date</option>
            </select>
            {/* <MyContext.Provider value={value}>
                <Genres />
            </MyContext.Provider> */}
        </div>
    )
}

export default GenreFilters
