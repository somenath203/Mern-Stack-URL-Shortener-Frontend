import axios from 'axios';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import toast from 'react-hot-toast';


import Navbar from './../components/Navbar';


const ShortUrl = () => {


  const [urlInput, setUrlInput] = useState('');

  const [dispLink, setDispLink] = useState('');

  const [isSendingDataToBackend, setIsSendingDataToBackend] = useState('');

  const [isShowOutputDiv, setIsShowOutputDiv] = useState('');


  const onSubmitURL = async (e) => {

    e.preventDefault();

    try {

      setIsShowOutputDiv(false);

      setIsSendingDataToBackend(true);

      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/createShortUrl`, {
        url: urlInput
      });

      setIsSendingDataToBackend(false);

      setDispLink(data.data);

      toast.success('your link has been shortened successfully');

      setIsShowOutputDiv(true);

    } catch (error) {

      setIsSendingDataToBackend(false);

      setIsShowOutputDiv(false);

      toast.error('Something went wrong!! Please try again.');

      console.log(error);

    };

    setUrlInput('');

  };


  const copyLinkToClipboard = () => {

    navigator.clipboard.writeText(dispLink);

    toast.success('link copied to clipboard successfully');

  }



  return (
    <>

      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-slate-800">

        <div className="w-11/12 lg:w-7/12 mt-20 lg:mt-28">

          <form className="flex flex-col gap-7 mb-24" onSubmit={onSubmitURL}>
            <input
              type="url"
              value={urlInput}
              placeholder="enter your url"
              className="w-full shadow-xl p-4 focus:outline-none rounded-lg placeholder:text-lg"
              onChange={(e) => setUrlInput(e.target.value)}
              required
            />
            {isSendingDataToBackend ? <button
              className="w-full lg:w-5/12 bg-purple-600 m-auto p-3 uppercase shadow-lg rounded-lg tracking-wider text-white text-lg lg:text-2xl transition-all duration-500 hover:bg-purple-500 cursor-not-allowed"
              disabled
            >Shortening...</button> : <button
              className="w-full lg:w-5/12 bg-purple-400 m-auto p-3 uppercase shadow-lg rounded-lg tracking-wider text-white text-lg lg:text-2xl transition-all duration-500 hover:bg-purple-500"
            >Short URL</button>}
          </form>

          {isShowOutputDiv && <div
            className="w-full p-6 bg-slate-700 shadow-lg rounded-xl overflow-x-auto"
          >

            <p className='text-2xl text-white font-mono font-bold text-center'>Your Short URL</p>

            <p className='min-w-full text-center mt-8'>
              <a href={dispLink} className='text-lg lg:text-3xl text-purple-500 font-mono font-bold' target='_blank' rel="noreferrer">{dispLink}</a>
            </p>

            <p className='min-w-full text-center mt-8'>
              <Tippy content={<span>Copy to Clipboard</span>}>
                <i
                  className="fa-regular fa-clipboard text-3xl text-violet-300 hover:cursor-pointer text-center"
                  onClick={() => copyLinkToClipboard()}
                ></i>
              </Tippy>
            </p>

          </div>}

          <div className="w-full mt-32 mb-14">
            <p className="text-lg md:text-xl lg:text-2xl text-white text-center tracking-wider">
              <span className="text-slate-300">ShortMyURL</span> is a free open source application to shorten URL of any length.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-white text-center tracking-wider mt-8">
              <a href="https://github.com/somenath203/Mern-Stack-URL-Shortener-Frontend" className="text-blue-300" target='_blank' rel="noreferrer">Click Here</a> to checkout the repo of this website
            </p>
          </div>

        </div>

      </div>

    </>
  )
};

export default ShortUrl;
