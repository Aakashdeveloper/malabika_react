import React from 'react';

const NewsList = (props) => {
    console.log(props)

    const data = props.sendingnews.map((item) => {
        return(
            <div>
                <h1>{item.title}</h1>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
            {data}
        </div>
    )
}

export default NewsList;