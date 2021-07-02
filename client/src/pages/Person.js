import React, { useEffect, useState, useRef } from "react";
import { getPerson, getPersonCredits } from '../apicalls/Connect';
import { useParams, useHistory } from "react-router-dom";
import styles from '../styles/movie.module.css';
import Output from '../components/Output';
import man from '../svg/man.svg';
import woman from '../svg/woman.svg';


const Person = () => {
    const [person, setPerson] = useState([]);
    const [personCredits, setPersonCredits] = useState([]);
    const [loading, setLoading] = useState(true);
    const personContainer = useRef([]);
    const URL = `https://image.tmdb.org/t/p/w500`;
    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // setPerson(await getPerson({ id }));
            personContainer.current = await getPerson({id});
            setPerson(personContainer.current[0]);
            setPersonCredits(personContainer.current[1]);
            // setPersonCredits(await getPersonCredits({ id }));
            setLoading(false);
        }
        fetchData();
    }, [])

    { loading ? document.title = 'loading' : document.title = `${person.name} - Movie Library` };

    return (
        <div className={styles.movieWrapper}>
            <div className={styles.movieDetails}>
                {person.profile_path === null ? <div className={styles.moviePoster}><img src={person.gender === 1 ? woman : person.gender === 2 ? man : man } alt="hey" /></div>
                    :
                    <div className={styles.moviePoster}><img src={`${URL}${person.profile_path}`} alt={person.name} /></div>
                }
                <div className={`${styles.movieInformation} ${styles.personInformation}`}>
                    <h1>{person.name}</h1>
                    <p>{person.also_known_as}</p>
                    {!person.place_of_birth ? ''
                        :

                    <h2>Place of Birth</h2>}
                    <p>{person.place_of_birth}</p>
                    
                    <h2>The Biography</h2>
                    {!person.biography ? <h2>There is no Biography available...</h2>
                        :

                        <p>{person.biography}</p>
                    }

                    {!person.imdb_id ? ''
                        :
                        <div className={styles.buttons}>
                            <a className={styles.clickables} href={`https://www.imdb.com/name/${person.imdb_id}`} target="_blank" rel="noopener noreferrer"> IMDB </a>
                            <button className={`${styles.clickables} ${styles.backBtn}`} onClick={() => history.push("/")}> Back </button>
                        </div>
                    }
                </div>

            </div>
            {loading ? <p>loading</p> : <Output personCredits={personCredits} />}
        </div>
    )
}

export default Person
