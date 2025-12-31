// "use client";

// export default function Navbar() {
//   return (
//     <nav
//       id="navbar"
//       className="fixed w-full z-50 transition-all duration-300 py-6 bg-white/90 backdrop-blur-md shadow-sm"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <div
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <div className="bg-indigo-600 p-2 rounded-lg">
//             <i data-lucide="home" className="w-6 h-6 text-white"></i>
//           </div>
//           <span className="text-2xl font-bold tracking-tight text-slate-900">
//             Elevate<span className="text-indigo-600">Spaces</span>
//           </span>
//         </div>

//         <div className="hidden lg:flex items-center gap-6">
//           <button
//             onClick={() => {
//               document
//                 .getElementById("try-it-free")
//                 ?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="text-slate-600 hover:text-indigo-600 font-medium"
//           >
//             Try Demo
//           </button>
//           <button
//             onClick={() => {
//                 document
//                   .getElementById("")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//             className="text-slate-600 hover:text-indigo-600 font-medium"
//           >
//             Services
//           </button>

//           <button
//             id="nav-projects"
//             // onClick={() => window.openModal('modal-projects')}
//             className="hidden text-slate-600 hover:text-indigo-600 font-medium flex items-center gap-1"
//           >
//             <i data-lucide="folder-open" className="w-4 h-4"></i> Projects
//           </button>

//           <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
//             <button
//             //   onClick={() => window.openModal('modal-listing-writer')}
//               className="text-indigo-600 font-bold flex items-center gap-1 text-sm hover:underline"
//             >
//               <i data-lucide="pen-tool" className="w-4 h-4"></i> Writer
//             </button>
//             <button
//             //   onclick="window.openModal('modal-roi')"
//               className="text-emerald-600 font-bold flex items-center gap-1 text-sm hover:underline"
//             >
//               <i data-lucide="trending-up" className="w-4 h-4"></i> ROI
//               Calculator
//             </button>
//           </div>

//           <button
//             // onclick="window.openModal('modal-team')"
//             className="text-slate-600 hover:text-indigo-600 font-medium flex items-center gap-1"
//           >
//             <i data-lucide="users" className="w-4 h-4"></i> Team
//           </button>

//           <button
//             // onclick="window.scrollToSection('pricing')"
//             className="text-slate-600 hover:text-indigo-600 font-medium"
//           >
//             Pricing
//           </button>

//           <button
//             id="nav-login"
//             // onclick="window.openModal('modal-login')"
//             className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full font-semibold shadow-lg text-sm transition-colors"
//           >
//             Log In
//           </button>
//         </div>
//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
//             className="text-slate-800 p-2"
//           >
//             <i data-lucide="menu" className="w-7 h-7"></i>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu  */}
//       {/* <div
//         id="mobile-menu"
//         className="hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t"
//       >
//         <button
//           onClick={() => window.scrollToSection('try-it-free')}
//           className="text-left text-lg"
//         >
//           Try Demo
//         </button>
//         <button
//           id="mobile-projects"
//           onclick="window.openModal('modal-projects')"
//           className="hidden text-left text-lg flex items-center gap-2"
//         >
//           <i data-lucide="folder-open" class="w-4 h-4"></i> Projects
//         </button>
//         <button
//           onclick="window.openModal('modal-listing-writer')"
//           className="text-left text-lg text-indigo-600 font-bold"
//         >
//           AI Writer
//         </button>
//         <button
//           onclick="window.openModal('modal-roi')"
//           className="text-left text-lg text-emerald-600 font-bold"
//         >
//           ROI Calculator
//         </button>
//         <button
//           onclick="window.openModal('modal-team')"
//           className="text-left text-lg"
//         >
//           Team
//         </button>
//         <button
//           onclick="window.scrollToSection('pricing')"
//           className="text-left text-lg"
//         >
//           Pricing
//         </button>
//         <button
//           id="mobile-login"
//           onclick="window.openModal('modal-login')"
//           className="bg-slate-900 text-white py-3 rounded-lg font-semibold"
//         >
//           Log In
//         </button>
//       </div> */}
//     </nav>
//   );
// }
