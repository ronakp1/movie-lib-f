import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Credits.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import '../styles/cast.css';
import empty from '../svg/32956.svg';
import man from '../svg/man.svg';
import woman from '../svg/woman.svg';

SwiperCore.use([Navigation, Autoplay]);

const Credits = (props) => {

    const URL = `https://image.tmdb.org/t/p/w92`;
    const { credits: { cast } } = props


    const checkNull = props

    return (
        <div className={styles.cast}>
            <Swiper
                slidesPerView={6}
                navigation
                autoplay
            >
                {cast.map(member =>
                    <SwiperSlide>
                        <Link className={styles.castRef} to={`/person/${member.id}`}>
                            {member.profile_path != null ? <img className={styles.castImg} src={`${URL}${member.profile_path}`} alt="member.name" /> 
                            :
                                <img className={`${styles.castImg} ${styles.errorImg}`} src={member.gender === 1 ? woman : member.gender === 2 ? man : man } alt="member.name" />
                            }
                            {/* <img className={`${styles.castImg} ${styles.errorImg}`} src={empty} alt="member.name" />
                              <img className={styles.castImg} src={`${URL}${member.profile_path}`} alt="member.name" /> */}

                            <p>{member.name}</p>
                            <hr></hr>
                            <p>'{member.character}'</p>
                        </Link>
                    </SwiperSlide>

                )}
            </Swiper>
        </div>
    )
}

export default Credits
