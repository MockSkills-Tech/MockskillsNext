import { Box, Typography, Card, CardContent } from '@mui/material';
import ProgressBar from './ProgressBar';
import { FaBattleNet, FaBook, FaChalkboardTeacher, FaHandsHelping, FaUsers } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <div className="bg-transparent md:p-10 p-5 mt-16 items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className='dark:text-gray-400 text-gray-600'>
          <h2 className="text-4xl font-bold mb-6 dark:text-white text-gray-900">
            What's in <span className="text-gray-500">MockSkills?</span>
          </h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="text-xl"><FaBattleNet className="mr-3 text-orange-600" /></div>
              <div className='text-start'>
                <h3 className="font-bold text-lg">BattleGround</h3>
                <span className='text-sm'>
                Battleground is a platform designed to help you  enhance your problem-solving skills using  Data Structures and  Algorithms.
                </span>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-xl"><FaHandsHelping className="mr-3 text-orange-600" /></div>
              <div className='text-start'>
                <h3 className="font-bold text-lg">CollabZone</h3>
                <span className="text-sm">
                Join our vibrant community of GenZ coders to find your co-founder, CTO, and all the essential skills needed to launch and grow your startup.
                </span>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-xl"><FaUsers className="mr-3 text-purple-600" /></div>
              <div className='text-start'>
                <h3 className="font-bold text-xl">Partners</h3>
                <p className="text-sm">
                Practice interviews, Engage in conversations Challenge yourself with interactive coding games guided by AI to make learning fun and engaging.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-xl"><FaBook className="mr-3 text-blue-600" /></div>
              <div className='text-start'>
                <h3 className="font-bold text-lg">Courses</h3>
                <p className="text-sm">
                Explore all tailored courses for specific roles, companies, and skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" rounded-lg">
        <ProgressBar/>
        </div>
      </div>
    </div>
  );
}
