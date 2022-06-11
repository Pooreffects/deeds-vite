import searchMan from './searchMan.svg';
import trendingMan from './trendingMan.svg';
import { motion } from 'framer-motion';
function App() {
  return (
    <div className="flex flex-col items-center justify-evenly bg-gray-400 border-x border-darkBlue-100  h-screen container mx-auto w-full">
      <motion.header
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ transition: 'easeOut', duration: 1 }}
        className="pt-2 text-center"
      >
        <h1 className="text-7xl font-bold text-darkBlue-100">DeeDs</h1>
        <h2 className="text-4xl font-semibold pt-4 text-white">
          The Hub For The Internet Trolls
        </h2>
      </motion.header>
      {/* Maybe I'll have to look up animating SVG with framer */}
      <motion.nav
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ transition: 'easeOut', delay: 0.8, duration: 0.8 }}
        className="w-full py-8 flex items-center justify-evenly"
      >
        <div className="p-4  flex flex-col items-center">
          <img
            src={searchMan}
            width={173}
            height={209}
            alt="Search Man Illustration"
          />
          <h1 className="pt-2 pl-6 text-xl text-gray-700">Trending</h1>
        </div>
        <div className="p-4  flex flex-col items-center">
          <img
            src={trendingMan}
            width={172}
            height={209}
            alt="Trending Man Illustration"
          />
          <h1 className="pt-2 pl-10 text-xl text-gray-700">Search</h1>
        </div>
      </motion.nav>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ transition: 'easeOut', delay: 1.5, duration: 0.5 }}
        className="pt-4 text-gray-600 font-bold text-lg"
      >
        Pretty much the right place for goofy trolls like you & I
      </motion.p>
    </div>
  );
}

export default App;
