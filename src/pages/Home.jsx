import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSilder';
import Img1 from '../assets/1.png'
import Img2 from '../assets/2.png'
import Img3 from '../assets/3.png'
import axios from 'axios';
import MultiActionAreaCard from '../components/MultiActionAreaCard';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const images = [
    Img1,
    Img2,
    Img3,
];
const Home = () => {

    const [getDt, setGetdt] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        axios('https://course-admission-portal.vercel.app/api/v1/student')
            .then((res) => {
                console.log(res.data);
                setGetdt(res.data)

            })
            .catch((err) => {
                console.log(err);

            })

    }, [])
    const singlepagerender = (id) => {
        console.log(id);
        navigate(`/singlestudent/${id}`)


    }
    const helod = (id) => {
        console.log('worjinf', id);

    }
    return (
        <Box>
            <ImageSlider images={images} />
            <Box sx={{
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '30px'
            }}>
                {
                    getDt ? getDt.map((item) =>
                        <MultiActionAreaCard
                            key={item._id}
                            showMorebtn={() => singlepagerender(item._id)}
                            profileImageUrl={item.profileImageUrl}
                            fullName={item.fullName}
                            email={item.email} />
                    )
                        : <Typography variant='h1'>loading....</Typography>

                }

            </Box>
        </Box>
    )
}

export default Home
