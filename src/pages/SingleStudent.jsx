import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from '../components/UserProfile'

export default function SingleStudent() {
    const { id } = useParams()
    const [getDt, setgetdt] = useState(null)
    
const userData = {
    "_id": "667bd8d70b3c05a2220caf64",
    "fullName": "Muhammad Abdullah",
    "fatherName": "Muhammad Ajmal khan",
    "email": "mabdullah2037@gmail.com",
    "phoneNumber": "03221767616",
    "nationalID": "4210153350425",
    "birthDate": "2003-11-27T00:00:00.000Z",
    "address": "4 floor c-34 uk square block 16 fb area karachi",
    "gender": "male",
    "lastQualification": "bachelors",
    "hasLaptop": true,
    "profileImageUrl": "https://firebasestorage.googleapis.com/v0/b/admission-portal-fort.appspot.com/o/4210153350425?alt=media&token=6f47d359-dde5-4468-a656-6f1f06b63f4f",
    "rollNumber": "WD-2401",
    "feeVerification": true,
    "__v": 0
  };


    useEffect(() => {
        axios(`https://course-admission-portal.vercel.app/api/v1/student/singlestudent/${id}`)
            .then((res) => {
                setgetdt(res.data)
                console.log(res);

            })
    }, [])
    return (
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            
        }}>
            {
                getDt ? 
             
                <UserProfile user={getDt} />
            
                :<Typography variant='h3'>loading.....</Typography>
            }
        </Box>
    )
}
