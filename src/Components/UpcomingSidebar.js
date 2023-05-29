import React from 'react'
import { useGlobalContext } from '../context/global';
import { Link } from 'react-router-dom';
import { SidebarStyled } from '../style/style';
function Sidebar() {
    const {upcomingAnime} = useGlobalContext()

    const sorted = upcomingAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3>Top 10 Upcoming</h3>
            <div className="anime">
                {sorted?.slice(0,10).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}


export default Sidebar