// import React from "react";
// import {
//   DeepLearning_Certificate,
//   JS_Certificate,
//   Google_Certificate,
//   KBA_Certificate,
//   Privacy_Certificate,
//   DEB,
// } from "../assets/images";

// const certificates = [
//   {
//     title: "Developer Essentials for Blockchain",
//     issuer: "Kerala Blockchain Academy",
//     image: DEB,
//     link: "#", // Replace with actual certificate link
//     short:
//       "Built foundational skills in React, Docker, MongoDB, Git, and dApp architecture.",
//   },
//   {
//     title: "Deep Learning (NPTEL)",
//     issuer: "NPTEL | IIT Faculty",
//     image: DeepLearning_Certificate,
//     link: "#",
//     short:
//       "Covered neural networks, CNNs, RNNs, and backpropagation. Scored 88%.",
//   },
//   {
//     title: "Privacy and Data Protection",
//     issuer: "NPTEL",
//     image: Privacy_Certificate,
//     link: "#",
//     short:
//       "Explored privacy laws, data protection frameworks, and digital ethics in depth.",
//   },
//   {
//     title: "Blockchain Foundation Program",
//     issuer: "Kerala Blockchain Academy",
//     image: KBA_Certificate,
//     link: "#",
//     short:
//       "Introduction to Ethereum, Hyperledger, smart contracts, and decentralized systems.",
//   },
//   {
//     title: "Google IT Support Professional Certificate",
//     issuer: "Google | Coursera",
//     image: Google_Certificate,
//     link: "#",
//     short:
//       "Completed 5-course program on networking, OS, system admin, and security.",
//   },
//   {
//     title: "JavaScript Algorithms and Data Structures",
//     issuer: "Coursera",
//     image: JS_Certificate,
//     link: "#",
//     short:
//       "Hands-on projects with ES6, recursion, OOP, and algorithm design patterns.",
//   },
// ];

// const Certificates = () => {
//   return (
//     <section id="certificates" className="py-16 px-6 bg-gray-50">
//       {/* Section Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-gray-800 mb-2">
//           Certifications
//         </h2>
//         <p className="text-gray-600 text-base max-w-2xl mx-auto">
//           A curated list of certifications showcasing my skills in development,
//           blockchain, deep learning, privacy, and IT fundamentals.
//         </p>
//       </div>

//       {/* Certificates Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {certificates.map((cert, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between"
//           >
//             <div>
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-full h-[140px] object-cover rounded-md mb-4"
//               />
//               <h3 className="text-lg font-semibold text-indigo-700">
//                 {cert.title}
//               </h3>
//               <p className="text-sm text-gray-600">{cert.issuer}</p>
//               <p className="text-sm text-gray-700 mt-2">{cert.short}</p>
//             </div>
//             {cert.link && cert.link !== "#" && (
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 text-sm text-indigo-600 hover:underline"
//               >
//                 View Certificate →
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certificates;
