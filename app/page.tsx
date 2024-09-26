// import Head from "next/head";
// import Image from "next/image";
// import farmer from "./farmer.jpg";
// import dosa from "./dosa.png";
// import Link from "next/link";
// import GoogleMapsLink from "./components/googleAddressLink";
// export default function Home() {
//   return (
//     <div className="h-screen bg-[#F5F3EC] grid grid-rows-4">
//       <div className="flex justify-around pt-10 pb-5 row-span-1">
//         <h1 className="font-extrabold font-Riffic text-3xl text-[#4f772d]">MILLET DOSA</h1>
//         <div className="flex gap-x-5">
//           <Link href="/menu"
//             className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-non"
//           >
//             MENU
//           </Link>
//           <Link href="/menu"
//             className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-non"
//           >
//             OUR STORY
//           </Link>
//           <Link href="/menu"
//             className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-non"
//           >
//             CONTACT US
//           </Link>
//           {/* <Link href="/menu"
//             className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-non"
//           >
//             MENU
//           </Link> */}
//         </div>
//       </div>
//         <div className="flex align-middle pt-10 row-span-3 flex-col gap-y-3">
//         {/* <div className=" h-10">
//           <Image src={farmer} alt="farmer" layout='fill' className="rounded-full"/>
//           </div> */}
//           <p className="font-semibold font-Riffic text-5xl tracking-wider leading-tight self-center text-center">DISCOVER OUR <br/>WHOLESOME MILLET</p>
//           <p className="font-Riffic  tracking-wider leading-tight self-center text-center text-[#B17457]">Visit us at: b/s, Manisha housing society, No 6 Avani Terrace, Vasna Rd, Akota, Vadodara, Gujarat 390007</p>
//           <GoogleMapsLink address="b/s, Manisha housing society, No 6 Avani Terrace, Vasna Rd, Akota, Vadodara, Gujarat 390007">
//           <button className="inline-flex h-12 rounded-full animate-shimmer items-center justify-center border border-[#4f772d] bg-[#4f772d] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//           Click here to navigate to us 
//         </button>
//           </GoogleMapsLink>
//         </div>
//     </div>
//   );
// }


import Head from "next/head";
import Image from "next/image";
import farmer from "./farmer.jpg";
import dosa from "./dosa.png";
import Link from "next/link";
import GoogleMapsLink from "./components/googleAddressLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4EAD5] text-[#4A4238]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center py-8">
          <h1 className="font-bold font-['Cormorant_Garamond'] text-4xl text-[#8B4513]">
            MILLET DOSA
          </h1>
          <nav className="flex gap-x-6">
            {["MENU", "OUR STORY", "CONTACT US"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="font-['Montserrat'] font-medium text-sm hover:text-[#8B4513] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </header>
        <main className="text-center py-16">
          <h2 className="font-['Cormorant_Garamond'] font-bold text-6xl mb-6 leading-tight">
            DISCOVER OUR<br />WHOLESOME MILLET
          </h2>
          <p className="font-['Montserrat'] text-lg mb-8 text-[#6B5B4B]">
            Visit us at: b/s, Manisha housing society, No 6 Avani Terrace,<br />
            Vasna Rd, Akota, Vadodara, Gujarat 390007
          </p>
          <GoogleMapsLink address="b/s, Manisha housing society, No 6 Avani Terrace, Vasna Rd, Akota, Vadodara, Gujarat 390007">
            <button className="bg-[#8B4513] text-[#F4EAD5] font-['Montserrat'] font-semibold py-3 px-8 rounded-full hover:bg-[#6B5B4B] transition-colors">
              Navigate to Us
            </button>
          </GoogleMapsLink>
        </main>
      </div>
    </div>
  );
}