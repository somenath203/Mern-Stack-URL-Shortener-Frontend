import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import RotateLoader from "react-spinners/RotateLoader";

const Home = () => {

  const [isOpeningScreen, setIsOpeningScreen] = useState('');

  const OpeningScreenLoader = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800">
        <RotateLoader color="#ffffff" size={30} margin={18} />
      </div>
    )
  };


  useEffect(() => {

    setIsOpeningScreen(true);

    setTimeout(() => {
      setIsOpeningScreen(false);
    }, 2000);

  }, []);


  return (
    <>
      {isOpeningScreen ? <OpeningScreenLoader /> : <div className="min-h-screen flex flex-col items-center bg-slate-800">

        <p className="mt-56 md:mt-64 lg:mt-60 text-center text-2xl md:text-4xl lg:text-6xl font-bold font-mono text-white tracking-widest">

          <Typewriter
            words={['Welcome to ShortMyURL', 'Short your long URLs like never before']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1400}
          />
        </p>

        <p className="mt-14 text-center text-violet-400 text-lg lg:text-2xl font-bold tracking-widest">A free tool to shorten long URLs</p>

        <Link to='/shorturl'>
          <button
            className="mt-20 py-4 px-8 md:py-6 md:px-16 rounded-xl shadow-lg bg-transparent text-white text-xl md:text-2xl tracking-widest border-8 border-violet-800 transition-all duration-500 hover:border-violet-500"
          >Get Started</button>
        </Link>

      </div>
      }
    </>
  )
};

export default Home;