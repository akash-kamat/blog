import { React, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import './styles/BlogList.css'
import Loading from './Loading';
export default function LoadingList() {

    return (
        <div className='blogListCont'>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
        </div>

    )

}
