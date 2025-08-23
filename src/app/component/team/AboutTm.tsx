'use client';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const points = [
  'Far curiosity incommode now led smallness allowance.',
  'Favour bed assure son things yet.',
  'She consisted consulted elsewhere happiness.',
  'Disposing household any old the.',
  'Widow downs you new shade drift hopes small.',
  'Interested discretion estimating on stimulated.',
];

export default function AboutTm() {
  return (
    <div className="bg-white px-4 md:px-0 max-w-7xl mx-auto">
      <div className="space-y-10">
        {/* Main Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Stats */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full">📄</div>
              <div>
                <h2 className="text-3xl font-extrabold">18+</h2>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full">🏆</div>
              <div>
                <h2 className="text-3xl font-extrabold">12M</h2>
                <p className="text-sm text-gray-500">Successful Projects</p>
              </div>
            </div>
          </div>

          {/* Circle Graphic */}
          <div className="flex justify-center relative">
            <div
              className="absolute md:w-72 md:h-72 w-56 h-56 border-[30px] border-yellow-400 rounded-full z-10 -mt-4 ml-3"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 0% 40%)',
                transform: 'rotate(190deg)',
              }}
            />
            <div className="md:w-64 md:h-64 w-56 h-56 bg-gray-600 rounded-full relative z-0 ml-4 overflow-hidden">
              <Image
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm01MTktbS0wMV8xLWwxazFqajl6LmpwZw.jpg"
                alt="Profile Picture"
                width={256}
                height={256}
                className="rounded-full object-cover"
                priority
                unoptimized   // ← bypass optimizer; fixes the error immediately
              />
            </div>
          </div>

          {/* Profile Info */}
          <div>
            <h2 className="text-2xl font-bold">Thomas Walkar</h2>
            <p className="text-orange-500 font-semibold">Engineer Solutions</p>
            <p className="mt-4 text-sm text-gray-500">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex space-x-4 mt-4 text-blue-600 text-sm font-medium">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linked In</a>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center border-2 border-blue-600 rounded-full py-4 px-6 space-x-4">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <PhoneIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone No:</p>
              <p className="text-sm font-medium">01234 525 407 - 01234 525 407</p>
            </div>
          </div>
          <div className="flex items-center border-2 border-blue-600 rounded-full py-4 px-6 space-x-4">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Address:</p>
              <p className="text-sm font-medium">12/7 new town, 245x Town 1214, USA</p>
            </div>
          </div>
          <div className="flex items-center border-2 border-blue-600 rounded-full py-4 px-6 space-x-4">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <EnvelopeIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Address:</p>
              <p className="text-sm font-medium">username@domainname.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">About Me</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure anim id est laborum nisi ut aliquip ex ea commodo consequat.
            Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labip exaeco oris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum nisi ut aliquip ex ea commosi ut aliquip
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            aliquip ex ea commodo consequat. Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco labip exaeco oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum nisi ut aliquip ex ea commosi ut
            aliquip
          </p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-gray-600 mt-1" />
                <span className="text-sm text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
