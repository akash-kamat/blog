import { React } from 'react'
// import './styles/BlogList.css'
import './styles/BlogCard.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {

    return (
        <SkeletonTheme baseColor="#d8d4f1" highlightColor="#e6e4f">
            <div className='blogCard'>
                {<Skeleton className='cardCover' />}
                <div className='cardInfoCont'>
                    <div className='cardTitleCont'>
                        {<Skeleton height={'40px'} className='cardTitle' />}

                        {<Skeleton height={'20px'} width={'100px'} count={3} />}

                        {<Skeleton height={'30px'} count={2} />}
                    </div>
                </div>


            </div>
        </SkeletonTheme>


    )


}
