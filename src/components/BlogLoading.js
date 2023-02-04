import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './styles/Blog.css'
export default function BlogLoading() {
    return (
        <article className='rnr-container'>
            <SkeletonTheme baseColor="#d8d4f1" highlightColor="#e6e4f">
                <Skeleton className="loadHeading" height={80} width={'85%'} />
                <Skeleton width={'75%'} />
                <Skeleton width={'95%'} />
                <Skeleton width={'88%'} />
                <Skeleton className='loadImage' width={'75%'} height={250} />\
                <Skeleton width={'70%'} count={10} />
            </SkeletonTheme>
        </article>
    )
}
