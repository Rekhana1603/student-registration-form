import { Stack, TextField, FormControl, FormControlLabel, Radio, RadioGroup, Select, InputLabel, MenuItem, Button } from '@mui/material'
import './App.css'
import { useState } from 'react';


function App() {

  const [studentName, setStudentName] = useState("")
  const [address, setAddress] = useState("")
  const [course, setCourse] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")

  const [isStudentNameInvalid, setIsStudentNameInvalid] = useState(false)
  const [isAddressInvalid, setIsAddressInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false)

  const userInputValidation = (inputData) => {
    const { name, value } = inputData
    // console.log(name, value);
    if (name == "studentName") {
      setStudentName(value)
      !!value.match(/^[a-zA-Z]+ [a-zA-Z]+$/) ? setIsStudentNameInvalid(false) : setIsStudentNameInvalid(true)
    }

    if (name == "address") {
      setAddress(value)
      !!value.match(/^[a-zA-Z]+,[a-zA-Z]+$/) ? setIsAddressInvalid(false) : setIsAddressInvalid(true)
    }

    if (name == "emailAddress") {
      setEmailAddress(value)
      !!value.match(/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    }

    if (name == "PhoneNumber") {
      setPhoneNumber(value)
      !!value.match(/^[6-9]\d{9}$/) ? setIsPhoneNumberInvalid(false) : setIsPhoneNumberInvalid(true)
    }
  }

  const courseSelection = (courseData) => {
    setCourse(courseData)
    // console.log(courseData);
  }

  const genderSelection = (genderData) => {
    setGender(genderData)
    // console.log(genderData);   
  }

  const handleRegister = () => {
    if (studentName && address && emailAddress && phoneNumber && dob && gender && course) {
      alert(`Student Registration successfull !!!

        Name : ${studentName}
        Address : ${address}
        Email ID : ${emailAddress}
        Phone Number : ${phoneNumber}
        Date Of Birth : ${dob}
        Gender : ${gender}
        Course : ${course}`)
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  const handleCancel = () => {
    setStudentName("")
    setAddress("")
    setEmailAddress("")
    setPhoneNumber("")
    setCourse("")
    setGender("")
    setDob("")
    setIsStudentNameInvalid(false)
    setIsAddressInvalid(false)
    setIsEmailInvalid(false)
    setIsPhoneNumberInvalid(false)
  }

  
  return (
    <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center backgroundDiv'>
      <div style={{ width: '720px' }} className='bg-light rounded p-5'>
        <h2 className='text-center fw-bolder'>Registration Form</h2>

        <form className='mt-3'>
          {/* Name */}
          <div className='mb-3'>
            <label className='mb-2'>Full Name: </label>
            <TextField onChange={e => userInputValidation(e.target)} value={studentName} name='studentName' className='w-100' size='small' id="outlined-basic" label="Enter your name" variant="outlined" />
          </div>
          {
            isStudentNameInvalid && <div className="mb-2 text-danger">*Please enter your full name</div>
          }

          {/* Address */}
          <div className='mb-3'>
            <label className='mb-2'>Address: </label>
            <TextField onChange={e => userInputValidation(e.target)} value={address} name='address' className='w-100' size='small' id="outlined-basic" label="Street name,City" variant="outlined" />
            {
              isAddressInvalid && <div className="mb-2 text-danger">*Enter a valid address</div>
            }
          </div>
         
          {/* Email Address */}
          <div className='mb-3'>
            <label className='mb-2'>Email Address: </label>
            <TextField onChange={e => userInputValidation(e.target)} value={emailAddress} name='emailAddress' className='w-100' size='small' id="outlined-basic" label="Enter email address" variant="outlined" />
          </div>
          {
            isEmailInvalid && <div className="mb-2 text-danger">*Enter a valid email</div>
          }

          {/* Phone Number */}
          <div className='mb-3'>
            <label className='mb-2'>Phone Number: </label>
            <TextField onChange={e => userInputValidation(e.target)} value={phoneNumber} name='PhoneNumber' className='w-100' size='small' id="outlined-basic" label="Enter mobile number" variant="outlined" />
          </div>
          {
            isPhoneNumberInvalid && <div className="mb-2 text-danger">*Enter a valid 10-digit phone number</div>
          }

          {/* Course */}
          <div className='mb-3'>
            <label className='mb-2'>Course: </label>
            <FormControl fullWidth size="small">
              <InputLabel id="course-label">Course</InputLabel>
              <Select
                labelId="course-label"
                id="course-select"
                label="Course"
                value={course}
                onChange={e =>courseSelection(e.target.value)}
              >
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
              </Select>
            </FormControl>
          </div>


          <Stack direction="row" spacing={23}>
            {/* Gender */}
            <FormControl>
              <label>Gender:</label>
              <RadioGroup row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender}
                onChange={e =>genderSelection(e.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            {/* DOB */}
            <div className='mb-3' >
              <p>Date of Birth:</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name='dob'
                type='date'
                size='small'
                value={dob}
                onChange={e=>setDob(e.target.value)}
              />
            </div>
          </Stack>


          <Stack direction="row" spacing={2}>
            <Button onClick={handleRegister} style={{ width: '50%', height: '50px' }} className='bg-primary' variant="contained">Register</Button>
            <Button onClick={handleCancel} style={{ width: '50%', height: '50px' }} className='border border-primary text-primary' variant="outlined">Cancel</Button>
          </Stack>

        </form>
      </div>
    </div>
  )
}

export default App
