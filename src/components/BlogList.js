import { React, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import './styles/BlogList.css'
import LoadingList from './LoadingList';
export default function BlogList({ Link }) {
    const [blogList, setBlogList] = useState();
    useEffect(() => {
        fetch("http://localhost:3001/all")
            .then((response) => response.json())
            .then((data) => setBlogList(data));


    }, [])
    if (blogList) {
        return (
            <div className='blogListCont'>
                {
                    blogList.map((e, i) => {
                        return (<BlogCard Link={Link} key={e.id} properties={e} />)
                    })
                }
            </div>

        )
    }
    else {
        return (<LoadingList />)
    }
}
