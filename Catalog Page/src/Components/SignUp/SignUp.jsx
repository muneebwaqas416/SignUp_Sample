import { useState } from 'react'
import './SignUp.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import validator from 'validator';

export default function SignUp() {

  const [showDiv, setShowDiv] = useState(false);
  const [icon, setIcon] = useState(<KeyboardArrowDownIcon />);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  const [validation_Email, setvalidation_Email] = useState('')
  const [validation_Password, setvalidation_Password] = useState('')
  const [validation_TAS, setvalidation_TAS] = useState('')
  const toggleDiv = () => {
    setShowDiv(!showDiv);
    setIcon(showDiv ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />);
  };

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const [isChecked, setIsChecked] = useState(false); // Initial state of checkbox (unchecked)


  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    if (!isChecked) {
      setRadioValue('Yes'); // If checkbox is checked, set radio value to 'Yes'
    } else {
      setRadioValue(''); // If checkbox is unchecked, clear radio value
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const emailValidation = (e)=>{
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setvalidation_Email('Enter a valid email address');
    }else{
      setvalidation_Email('')
    }
  }
  const passwordValidation = (e)=>{
    e.preventDefault();
    if (!validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      setvalidation_Password("Use 8 or more characters with a mix of letters, numbers and symbols");
    }else{
      setvalidation_Password("");
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!isChecked) {
        setvalidation_TAS('Please accept the terms and conditions to finish the signup')
    } 
    if (password.trim() === '') {
        setvalidation_Password('This field cannot be left blank')
    } 
    if (email.trim() === '') {
      setvalidation_Email('This field cannot be left blank')
    } 
  }

  return (
    <div className='h-screen w-full flex overflow-hidden'>
        <div className="left hidden lg:flex lg:flex-1 text-white">
                <h1 className='text-center leading-[2.25rem] text-4xl font-normal mb-[2.1875rem]' >Sign up <br></br>and come on in</h1>
                {/* <img src='https://www.typeform.com/static/images/signup-page/product-sample@2x.webp'></img>
                 */}
                <div>
                  <picture>
                       <img className='w-full max-w-[366px]' loading='lazy' alt='' src='https://www.typeform.com/static/images/signup-page/product-sample@2x.webp'></img>
                  </picture>
                 </div>
                 <p className="text-white absolute text-l leading-6 bottom-6">
                  © Typeform
                  </p>
                 
        </div>
        
        <div className="right lg:flex-[1.3_1_0%] lg:rounded-l-3xl w-full">
          {
            isDropdownOpen && (
              <div role="menu" className="dropdown w-[23vw] sm:w-[14vw] md:w-[14vw] lg:w-[10vw]  ">
              <a href="/signup/" >
                <span href="/signup/" className='text-[1rem]'>
                  English
                </span>
              </a>
              <a href="/es/signup/">
                  <span href="/es/signup/" className='text-[1rem]'>
                    Español
                    </span>
              </a>
            </div>
            )}
        
                <div className="row1 py-2 px-6 flex items-center justify-between ">
                  <button className='flex items-center' onClick={toggleDropdown}>
                    <div className="flex item-center justify-center">
                    <svg height="17" viewBox="0 0 20 20" className='mr-2'  width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fillRule="evenodd"></path></svg>
                    <span className='text-[14px] text-[#5E5E5E] leading-4'>English</span>
                    </div>
                   <div className="symbol">
                   <svg fill="none" height="5" className='ml-1' viewBox="0 0 9 5" width="9" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z" fill="#5E5E5E" fillRule="evenodd"></path></svg>
                   </div>
                  </button>
                  
                  <div className="text flex">
                    <p className='mr-[8px] text-[14px]'>Already  have an account?</p>
                    <div className="login flex flex-col items-stretch justify-center gap-4 min-w-[64px]">
                        <a href='/login' className='login-btn'>Login</a>
                    </div>
                  </div>
                </div>
                {/* flex items-center justify-center h-20 */}
                <div className="row2 flex flex-col justify-center items-center justify-self-center lg:max-w-[542px] max-w-[256px]">
                    <div className="logo flex items-center justify-center h-20">
                      <a>
                        <div className="icons flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none">
                            <path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd">
                            </path>
                          </svg>
                          <span className='ml-2.5 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" >
                              <path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z">
                              </path>
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                    <h2 className='heading mb-6'>Get better data with conversational forms, surveys, quizzes & more.</h2>
                    <div className="form universal max-w-[256px]">
                      <main className='universal'>
                        <div className="text-fields universal mb-10">
                            <div className="email-field mb-12 universal">
                                <span className='universal span-input-fields'>
                                <input type='email' onChange={(e)=>{setemail(e.target.value)}} value={email} 
                                placeholder='Email' 
                                onBlur={(e)=>{emailValidation(e)}}
                                className='input-fields'></input>
                               {

                                validation_Email && (
                                <p className='warning-para'>
                                  
                                  <span className='warning'>{validation_Email}</span>
                                </p>
                              )}
                               </span>
                                  
                                
                            </div>
                            <div className="password-field universal relative mb-4">
                                <span className='universal span-input-fields'>

                                <input onChange={(e)=>{setpassword(e.target.value)}} 
                                value={password} 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder='Password' 
                                onBlur={(e)=>{passwordValidation(e)}}
                                className='input-fields'></input>
                                
                                <button type='button' className='toggle-btn'>
                                  <span className='toogle-span'>
                                  <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
                                  </span>
                                </button>
                                {
                                  validation_Password &&
                                  (
                                    <p className='warning-para'>
                                  
                                    <span className='warning'>{validation_Password}</span>
                                  </p>
                                  )
                                }
                                
                                
                                </span>
                                  
                                
                            </div>
                        </div>
                        <div className="universal">
                        <label className="checkbox" id="label-terms_and_consents">
                          <input type="checkbox" className='checkbox-field mr-2' checked={isChecked} onChange={handleChange} />
                            I agree to Typeform’s <a rel="noopener" target="_blank" href="https://www.typeform.com/terms-service/">Terms of Service</a>, <a rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">Privacy Policy</a> and <a rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">Data Processing Agreement</a>
                            </label>
                            {validation_TAS && (
                                <p className='warning-para'>
                                  <span className='warning'>{validation_TAS}</span>
                                </p>
                              )}
                        <div className='w-full pl-8 pb-4 pt-2'>
                            <div className="flex items-center w-full">
                              <button onClick={toggleDiv} className="flex items-center w-full justify-between">
                                <span>See options</span>
                                <span className='text-lg'>{icon}</span>
                              </button>
                                
                            </div>
                            {showDiv && <div className='universal my-2'>
                              <div className="universal my-1">
                                  <div className="label">
                                    <label className='text leading-5 m-0 text-[14px] text-black'>
                                    Get useful tips, inspiration, and offers via e-communication.
                                    </label>
                                  </div>
                                  <div className="radio-buttons w-full">
                                    <div className="flex items-center">
                                      <div className="btns">
                                      <input type='radio' 
                                      value="Yes"
                                      name="Get useful tips"
                                      checked={radioValue === 'Yes'}
                                      onChange={() => setRadioValue('Yes')}></input>
                                          <label className='mx-3'>
                                            Yes
                                            </label>
                                      </div>
                                      <div className="btns">
                                          <input type='radio' value={"No"} name='Get useful tips'></input>
                                          <label className='mx-3'>No</label>
                                      </div>  
                                    </div>
                                    
                                    
                                  </div>
                              </div>
                              <div className="universal my-1">
                                  <div className="label">
                                    <label className='text leading-5 m-0 text-[14px] text-black'>
                                    Tailor Typeform to my needs based on my activity.
                                    </label>
                                  </div>
                                  <div className="radio-buttons w-full">
                                    <div className="flex items-center">
                                      <div className="btns">
                                      <input type='radio' 
                                      value="Yes"
                                      name="Tailor Typeform"
                                      checked={radioValue === 'Yes'}
                                      onChange={() => setRadioValue('Yes')}></input>
                                          <label className='mx-3'>
                                            Yes
                                            </label>
                                      </div>
                                      <div className="btns">
                                          <input type='radio' value={"No"} name='Tailor Typeform'></input>
                                          <label className='mx-3'>No</label>
                                      </div>  
                                    </div>
                                    
                                    
                                  </div>
                              </div>
                              <div className="universal my-1">
                                  <div className="label">
                                    <label className='text leading-5 m-0 text-[14px] text-black'>
                                    Enrich my data with select third parties for more relevant content.
                                    <a className='Underline text-[#5E5E5E]' href='#'>See Privacy Policy</a>
                                    </label>
                                  </div>
                                  <div className="radio-buttons w-full">
                                    <div className="flex items-center">
                                      <div className="btns">
                                      <input type='radio' 
                                      name="third parties"
                                      checked={radioValue === 'Yes'}
                                      onChange={() => setRadioValue('Yes')}></input>
                                          <label className='mx-3'>
                                            Yes
                                            </label>
                                      </div>
                                      <div className="btns">
                                          <input type='radio' 
                                          value={"No"} name='third parties'></input>
                                          <label className='mx-3'>No</label>
                                      </div>  
                                    </div>
                                    
                                    
                                  </div>
                              </div>
                              <p className='text-[#7f7f7f] text-[14px] leading-4'>You can update your preferences in your Profile at any time</p>
                            </div>
                            }
                        </div>
                        </div>
                        <div className="btn universal w-full">
                          <button className='submit lg:max-w-[230px]' onClick={(e)=>{handleSubmit(e)}}>Create my Free account</button>
                        </div>
                      </main>
                    </div>
                </div>
                <div className="row3">
                  
                </div>
        </div>
    </div>
  )
}
