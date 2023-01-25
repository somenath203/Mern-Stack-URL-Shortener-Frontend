import Tippy from '@tippyjs/react';

const navbar = () => {
  return (
    <nav className="bg-slate-800 h-20 flex items-center justify-between p-12">
      <p className="text-xl md:text-3xl lg:text-4xl font-bold font-mono tracking-widest mt-6 text-white">ShortMyURL</p>
      <Tippy content={<span>ShortMyURL Github Repo</span>}>
        <p className="text-2xl lg:text-5xl mt-6 text-white">
          <a href="https://github.com/somenath203/Mern-Stack-URL-Shortener-Frontend" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </p>
      </Tippy>
    </nav>
  )
};

export default navbar;