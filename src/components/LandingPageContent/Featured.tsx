'use client';
import ProgressBar from './ProgressBar';
import { FaChalkboardTeacher } from 'react-icons/fa';

import { FaBattleNet, FaBook, FaHandsHelping, FaUsers } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <div className="bg-transparent md:p-10 p-5 mt-16 items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className='dark:text-gray-400 text-gray-600'>
          <h2 className="text-4xl font-bold mb-6 dark:text-white text-gray-900">
            What&apos;s in <span className="text-gray-500">MockSkills?</span>
          </h2>
          <div className="space-y-8">
            {/* BattleGround */}
            <div className="flex">
              <div className="text-start">
                <div className="flex items-center">
                  <div className="text-xl mr-3">
                    <FaBattleNet className="text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg">BattleGround</h3>
                </div>
                <div className="ml-8">
                  <span className="text-sm">
                    Battleground is a platform designed to help you enhance your problem-solving skills using Data Structures and Algorithms.
                  </span>
                </div>
              </div>
            </div>

            {/* CollabZone */}
            <div className="flex">
              <div className="text-start">
                <div className="flex items-center">
                  <div className="text-xl mr-3">
                    <FaHandsHelping className="text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg">CollabZone</h3>
                </div>
                <div className="ml-8">
                  <span className="text-sm">
                    Join our vibrant community of GenZ coders to find your co-founder, CTO, and all the essential skills needed to launch and grow your startup.
                  </span>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="flex">
              <div className="text-start">
                <div className="flex items-center">
                  <div className="text-xl mr-3">
                    <FaUsers className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg">Partners</h3>
                </div>
                <div className="ml-8">
                  <span className="text-sm">
                    Practice interviews, engage in conversations, and challenge yourself with interactive coding games guided by AI to make learning fun and engaging.
                  </span>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="flex">
              <div className="text-start">
                <div className="flex items-center">
                  <div className="text-xl mr-3">
                    <FaBook className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Courses</h3>
                </div>
                <div className="ml-8">
                  <span className="text-sm">
                    Explore all tailored courses for specific roles, companies, and skills.
                  </span>
                </div>
              </div>
            </div>

            {/* Coaching */}
            <div className="flex">
              <div className="text-start">
                <div className="flex items-center">
                  <div className="text-xl mr-3">
                    <FaChalkboardTeacher className="text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-lg">Coaching</h3>
                </div>
                <div className="ml-8">
                  <span className="text-sm">
                    Get personalized coaching to advance your skills in various tech domains, including mentorship from industry experts.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className=" rounded-lg">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}