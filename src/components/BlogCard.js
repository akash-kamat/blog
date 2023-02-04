import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/BlogCard.css'
export default function BlogCard({ properties, Link }) {

    const navigate = useNavigate();
    function handleClick(id) {
        navigate(`/post/${id}`);
    }
    function handleClickTag(keyword) {
        navigate(`/sort/${keyword}`);
    }
    const { cover, title, date, id, author, authorLink, description, tags } = properties;
    return (
        <div className='blogCard'>
            <img className='cardCover' onClick={() => handleClick(id)} src={cover} />
            <div className='cardInfoCont'>
                <div className='cardTitleCont'>
                    <h2 className='cardTitle' onClick={() => handleClick(id)}>{title}</h2>
                    <p className='tags'>tags:{
                        tags.map((e, i) => {
                            return (
                                <span onClick={() => handleClickTag(e.name)} src={cover} className='tag' style={{ backgroundColor: e.color }}>{e.name}</span>
                            )
                        })
                    }</p>
                    <p className='cardDesc'>{`${description} `}<span className='readMore' onClick={() => handleClick(id)}>...read more</span></p>
                </div>
                <div className='cardAuthorCont'>
                    <a href={authorLink == null ? "" : authorLink} target='_blank'>
                        <p className='cardAuthor'>{author == null ? `akashkamat` : author}</p>
                    </a>
                    <p className='cardDate'>{date}</p>
                </div>
            </div>


        </div>
    )
}
