import React, {useEffect, useState} from 'react'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';



// export default function PatientRegForm() {

    
    // const [values, setValues] = useState({
    //     firstName:"",
    //     lastName:"",
    //     email:"",
    //     phoneNumber:"",
    //     password:"",
    //     confirm_password:"",
    // })

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirm_password, setConfirm_Password] = useState("");

    const DoctorRegForm = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [licenseNO, setLicenseNO] = useState('');
        const [specialty, setSpecialty] = useState('');
        const [password, setPassword] = useState('');
        const [confirm_password, setConfirm_Password] = useState('');
        const [error, setError] = useState('');
        const [message, setMessage] = useState('');
      
        const signUp = async (e) => {
          e.preventDefault();
      
          if (!firstName || !lastName || !email || !licenseNO || !specialty || !password || !confirm_password) {
            setError('Please fill in all fields.');
            return;
          }
      
          if (password !== confirm_password) {
            setError('Passwords do not match');
            return;
          }
          if (!/\S+@\S+\.\S+/.test(email)){
            setError('Please enter a valid email address');
          }
      
          try {
            const response = await fetch('https://vitals-8myt.onrender.com/vitals/doctors/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                firstName,
                lastName,
                email,
                licenseNO,
                specialty,
                password,
                confirm_password
              }),
              redirect: 'follow',
            });
      
            const data = await response.json();
            console.log(data);

            if (data.success = true) {

                console.log(data.message);
                setMessage('Account Created Successfully... Proceed to Login');

            } else {
                setMessage('User already registered')
            }
             // Handle the response as needed
          } catch (error) {
            setError(error.message);
          }
        };
      



    
    
    // const [errors, setErrors] = useState({});
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);


    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name] : event.target.value,
    //     })
    // }

    // const signUp = async (e) => {
    //     e.preventDefault();
    //     // let item = {firstName, lastName, email, phoneNumber, password, confirm_password}
    //     // console.log(item);
    //     // try{

    //         const result = await axios.post("https://vitals-8myt.onrender.com/vitals/patients/register",{
    //         firstName, lastName, email, phoneNumber, password, confirm_password,
    //             }
    //         );
    
    //        console.log(result);
        // } catch 

        // setErrors(validation(firstName, lastName, email, phoneNumber, password, confirm_password));
        // setDataIsCorrect(true);
        
        // <SignupFormSuccess />


        // useEffect(() => {
        //     if(Object.keys(errors).length === 0 && dataIsCorrect) {
        //         submitForm(true);
        //     };
        // },[errors]);


return (
    <div>
        {message && <p className='error-success'>{message}</p>}
        {error && <p className='error-text'>{error}</p>}
        <form className='reg-form' id='reg-form'>
                    <div className='form-inputs'>
                        <div className='name-inputs'>
                            <div className='rightform-inputs'>
                                <p>First Name</p>
                                <div className='small-input'>
                                    <input 
                                        className='small-inputs' 
                                        type="text" 
                                        placeholder='e.g Jermie' 
                                        name='firstName' 
                                        value={firstName} 
                                        onChange={(e) => setFirstName(e.target.value)} 
                                    />
                                    
                                    <span> </span>
                                </div>
                                {/* {errors.firstName && <p className="error-text" >{errors.firstName}</p>} */}
                            </div>
                            <div className='rightform-inputs'>
                                <p>Last Name</p>
                                <div className='small-input'>
                                    
                                    <input
                                        className='small-inputs'
                                        type="text" 
                                        placeholder='e.g Jermie' 
                                        name='lastName' 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    
                                    <span> </span>
                                </div>
                                {/* {errors.lastName && <p className="error-text" >{errors.lastName}</p>}  */}
                            </div>
                        </div>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>Email address</p>
                                <div className='large-input'>
                                    <input
                                        className='large-inputs' 
                                        type="email" 
                                        placeholder='name@example.com' 
                                        name='email' value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                    {/* {errors.email && <p className="error-text" >{errors.email}</p>} */}
                            </div>
                            
                        </div>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>License Number</p>
                                <div className='large-input'>
                                    <input
                                        className='large-inputs' 
                                        type="text" 
                                        placeholder='e.g +500023' 
                                        name='licenseNO' value={licenseNO} 
                                        onChange={(e) => setLicenseNO(e.target.value)}
                                    />
                                </div>
                                    {/* {errors.phoneNumber && <p className="error-text" >{errors.phoneNumber}</p>} */}
                            </div>
                            
                        </div>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>Specialty</p>
                                <div className='large-input'>
                                    <input
                                        className='large-inputs' 
                                        type="text" 
                                        placeholder='e.g Dentist' 
                                        name='specialty' value={specialty} 
                                        onChange={(e) => setSpecialty(e.target.value)}
                                    />
                                </div>
                                    {/* {errors.phoneNumber && <p className="error-text" >{errors.phoneNumber}</p>} */}
                            </div>
                            
                        </div>
                       
                        <div className='password-inputs'>
                            <div className='rightform-inputs'>
                                <p>Password</p>
                                <div className='pass-inputs'>
                                    <input
                                        type="password"
                                        placeholder='xxxxxxx'
                                        name='password' 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    
                                        <VisibilityOffOutlinedIcon className='pass-icons' />
                                </div>
                                    {/* {errors.password && <p className="error-text" >{errors.password}</p>} */}
                            </div>
                                        
                            <div className='rightform-inputs'>
                                <p>Confirm Password</p>
                                <div className='pass-inputs'>
                                    <input 
                                        type="password"
                                        placeholder='xxxxxxx'
                                        name='confirm_password'
                                        value={confirm_password}
                                        onChange={(e) => setConfirm_Password(e.target.value)}
                                    />
                                    
                                            <VisibilityOffOutlinedIcon className='pass-icons' />
                                </div>
                                            {/* {errors.confirm_password && <p className="error-text" >{errors.confirm_password}</p>} */}
                            </div>
                        </div>
                    </div>
                    <div className='form-terms'>
                        <input type='checkbox' name='agree' value='agree' />
                        <p>I accept all <span>Terms and Conditions</span></p>
                    </div>
                    <div className='form-submit'>
                        <button type='submit' onClick={signUp}>
                            {/* <Link style={{textDecoration:"none", color:"#fff"}} to={'/patient-login'}> */}
                                CREATE ACCOUNT
                            {/* </Link> */}
                            </button>
                    </div>
                </form>
    </div>
  )



        
    };

    export default DoctorRegForm;
   

    







  
// }
