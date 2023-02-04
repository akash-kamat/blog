import { React, useState, useEffect } from 'react'
import BlogCard from './BlogCard';
import { useParams, Link } from 'react-router-dom'
import LoadingList from './LoadingList';
export default function BlogSort() {
    const params = useParams();
    const keyword = params.key;
    const [blogListFiltered, setBlogListFiltered] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/filter/${keyword}`)
            .then((response) => response.json())
            .then((data) => setBlogListFiltered(data));
    }, [keyword])
    if (blogListFiltered) {
        return (
            <div className='blogListCont'>
                {
                    blogListFiltered.map((e, i) => {
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
