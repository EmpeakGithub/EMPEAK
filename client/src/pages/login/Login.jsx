import Logo from '../../images/empeak_logo.png';
import { BiArrowBack, BiSolidLock } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin, FaUser } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const [showSignUp, setShowSignup] = useState(false);

  return (
    <div className='w-full bg-white absolute z-20 top-0 font-poppins'>
      {
        showSignUp ? 
        <section className='flex  jusify-between'>
          <article className='w-1/2'>
            <div className='mt-8 ml-14 font-bold text-xl'>
              < BiArrowBack onClick={() => navigate('/')} />
            </div>
            <div className='flex flex-col items-center px-32 mt-16'>
              <img src={Logo} alt="empeak logo" className='h-12 w-12' />
              <h3 className='text-empeakYel text-2xl my-2 font-semibold'>Empeak</h3>
              <p className='text-center font-semibold'>Empowering Africa's Digital Asset and Micro Startup Ecosystem</p>
              <ul className='list-disc marker:text-empeakYel marker:text-xl mt-4'>
              <li className='text-xs md:text-sm text-justify mb-3'>
                <p>Wide Range of Digital Assets</p>
              </li>
              <li className='text-xs md:text-sm text-justify mb-3'>
                <p>Mircro Startup Hub</p>
              </li>
              <li className='text-xs md:text-sm text-justify mb-3'>
                <p>Seamless User Experience</p>
              </li>
              <li className='text-xs md:text-sm text-justify mb-3'>
                <p>Community and Networking</p>
              </li>
            </ul>
              <p className='mt-32 text-center mx-4 text-xs'>By continuing you agree to our <span className='text-empeakYel'>Terms of Services </span> and <span className='text-empeakYel'> Privacy Policy </span></p>
            </div>
          </article>
          <article className='flex flex-col items-center pt-16 px-24 w-1/2 my-custom-bg-class text-white'>
            <div className='mt-4 text-center'>
              <p className='text-3xl '>Create an account</p>
              <p className='text-xs mt-2'>Please input details to Signup</p>
            </div>
            <form action="" className='mt-10'>
              <div className='flex rounded-3xl items-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
                < FaUser className='text-xl mr-2' />
                <input type="text" placeholder='FullName'  className='bg-transparent w-full outline-none placeholder:text-white placeholder:bg-transparent'/>
              </div>
              <div className='flex rounded-3xl items-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
                < GrMail className='text-2xl mr-2' />
                <input type="email" placeholder='Email'  className='bg-transparent w-full outline-none placeholder:text-white placeholder:bg-transparent'/>
              </div>
              <div className='flex rounded-3xl items-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
                < BiSolidLock className='text-2xl mr-2' />
                <input type="password" placeholder='Password' className='bg-transparent  w-full outline-none placeholder:text-white placeholder:bg-transparent'/>
              </div>
              <button className='text-center rounded-3xl bg-empeakYel px-3 py-1.5 mt-4 w-[350px]'>
                Sign In
              </button>
              <p className='text-gray-300 ml-12 mt-3'>Forgot Password?</p>
              <button className='flex rounded-3xl items-center justify-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
                < FcGoogle className='text-2xl mr-2' />
                Sign Up with Google
              </button>
              <button className='flex rounded-3xl items-center justify-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
                < FaLinkedin className='text-2xl mr-2 fill-blue-500 bg-white outline-none' />
                Sign Up with Linkedin
              </button>

            </form>
            <p className='mt-6 text-xs'>Already Have an Account? <span className='text-empeakYel font-bold cursor-pointer' onClick={() => setShowSignup(false)}>Sign In</span> </p>
          </article>
        </section>
        :
        <section className='flex  jusify-between'>
        <article className='w-1/2'>
          <div className='mt-8 ml-14 font-bold text-xl'>
            < BiArrowBack onClick={() => navigate('/')} />
          </div>
          <div className='flex flex-col items-center px-32 mt-24'>
            <img src={Logo} alt="empeak logo" className='h-12 w-12' />
            <h3 className='text-empeakYel text-2xl my-2 font-semibold'>Empeak</h3>
            <p className='text-center font-semibold'>Empowering Africa's Digital Asset and Micro Startup Ecosystem</p>

            <p className='mt-64 text-xs'>By continuing you agree to our <span className='text-empeakYel'>Terms of Services </span> and <span className='text-empeakYel'> Privacy Policy </span></p>
          </div>
        </article>
        <article className='flex flex-col items-center pt-32 px-24 w-1/2 my-custom-bg-class text-white'>
          <div className='mt-4 text-center'>
            <p className='text-3xl '>Welcome</p>
            <p className='text-xs mt-2'>Please input details to login</p>
          </div>
          <form action="" className='mt-10'>
            <div className='flex rounded-3xl items-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
              < GrMail className='text-2xl mr-2' />
              <input type="text" placeholder='Email'  className='bg-transparent w-full outline-none placeholder:text-white placeholder:bg-transparent'/>
            </div>
            <div className='flex rounded-3xl items-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
              < BiSolidLock className='text-2xl mr-2' />
              <input type="password" placeholder='Password' className='bg-transparent  w-full outline-none placeholder:text-white placeholder:bg-transparent'/>
            </div>
            <button className='text-center rounded-3xl bg-empeakYel px-3 py-1.5 mt-4 w-[350px]'>
              Sign In
            </button>
            <p className='text-gray-300 ml-12 mt-3'>Forgot Password?</p>
            <button className='flex rounded-3xl items-center justify-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
              < FcGoogle className='text-2xl mr-2' />
              Sign In with Google
            </button>
            <button className='flex rounded-3xl items-center justify-center  bg-inputbg px-3 py-1.5 mt-4 w-[350px]'>
              < FaLinkedin className='text-2xl mr-2 fill-blue-500 bg-white outline-none' />
              Sign In with Linkedin
            </button>

          </form>
          <p className='mt-6 text-xs'>Don’t have an account? <span className='text-empeakYel font-bold cursor-pointer' onClick={() => setShowSignup(true)}>Sign up</span> </p>
        </article>
        </section>

      }
    </div>
  )
}

export default Login