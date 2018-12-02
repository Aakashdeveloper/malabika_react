import React from 'react';
import { Link } from 'react-router-dom'

const showArticles = ({latest}) => {
    if(latest){
        return latest.map((data) => {
            return(
                <Link to={`/news/${data.id}`} key={data.id} className="item">
                    <div className="image_cover"
                        style={{background:`url(/images/articles/${data.img})`}}>
                            <div className="description">
                                <span>
                                    {data.category}
                                </span>
                                <div>
                                    {data.title}
                                </div>
                            </div>
                    </div>
                </Link>
            )
        })
    }
}


const LatestNews = (props) => {
    return(
        <div className="home-latest">
            {showArticles(props)}
        </div>
    )
}

export default LatestNews;