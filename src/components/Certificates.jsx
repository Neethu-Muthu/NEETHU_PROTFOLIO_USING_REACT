import React from "react";
import {
  DeepLearning_Certificate,
  JS_Certificate,
  Google_Certificate,
  KBA_Certificate,
  Privacy_Certificate
} from "../assets/images";

const Certificates = () => {
  return (
    <div id="certificates" className="my-36 max-xl:my-20">
      <h1 className="text-5xl font-bold mb-8 text-center">Certificates</h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={DeepLearning_Certificate} alt="Deep Learning" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              Deep Learning - NPTEL Certification
            </h1>
            <p className="text-gray-700 text-sm">
              This specialization provides a comprehensive introduction to deep learning, covering topics such as neural networks, convolutional networks, and sequence models.
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={Privacy_Certificate} alt="Privacy and Data Protection" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              Privacy and Data Protection - NPTEL Certification
            </h1>
            <p className="text-gray-700 text-sm">
              This certification covers the principles and practices of privacy and data protection, ensuring compliance with legal and regulatory requirements.
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={KBA_Certificate} alt="KBA Certification" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              KBA Certification
            </h1>
            <p className="text-gray-700 text-sm">
              Learn the basics of blockchain technology, including decentralization, smart contracts, and cryptocurrencies. Ideal for beginners and professionals, this course covers key concepts, Ethereum, Hyperledger, and blockchain applications beyond crypto.
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={Google_Certificate} alt="Google Cloud" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              Google IT Support Certification
            </h1>
            <p className="text-gray-700 text-sm">
              This Entry-level IT support professional with the Google IT Support Professional Certificate. Completed an eight-month program covering troubleshooting, customer service, networking, operating systems, system administration, and security, with hands-on labs. Seeking a full-time IT role.
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={JS_Certificate} alt="JavaScript Algorithms and Data Structures" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              JavaScript Algorithms and Data Structures
            </h1>
            <p className="text-gray-700 text-sm">
              This certification teaches JavaScript basics like variables, arrays, objects, functions, DOM manipulation, and advanced topics such as OOP, functional programming, algorithms, local storage, and API usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
