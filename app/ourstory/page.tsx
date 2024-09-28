// const page = () => {
//   return <div>Hello</div>;
// };

// export default page;

import Image from "next/image";
export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#F4EAD5] text-[#4A4238]">
      <header className="bg-navy-blue p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl">UTE</div>
          <div className="space-x-4">
            <a href="#" className="text-white">
              MENU
            </a>
            <a href="#" className="text-white">
              MUSLI
            </a>
            <a href="#" className="text-white">
              REACH
            </a>
            <button className="bg-white text-navy-blue px-4 py-2 rounded">
              Order
            </button>
            <button className="bg-transparent text-white border border-white px-4 py-2 rounded">
              Join us
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-12 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">OUR STORY</h1>
          <p className="text-gray-600">Discover our ethos</p>
          <Image
            src="/images/food-plate.jpg"
            alt="Colorful food plate"
            width={800}
            height={400}
            className="mt-8 rounded-lg"
          />
        </section>

        <section className="mb-16">
          <div className="min-h-screen bg-cream">
            <header className="bg-navy-blue p-4">
              <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="text-white font-bold text-xl">EarthDosa</div>
                <div className="space-x-4">
                  <a href="#" className="text-white">
                    Home
                  </a>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </div>
              </nav>
            </header>

            <main className="max-w-4xl mx-auto mt-12 px-4">
              <section className="text-center mb-16">
                <h1 className="text-3xl font-bold mb-4">ABOUT US</h1>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-4">
                  Our Commitment to Health
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                    <p className="text-gray-700">
                      At EarthDosa, we believe in serving dishes that are not
                      only delicious but also nourish your body. Our menu is
                      centered around the use of millets, which are packed with
                      nutrients and are a sustainable crop. We are dedicated to
                      providing our customers with meals that support their
                      health and well-being.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/sustainable-kitchen.jpg"
                      alt="Healthy food plate"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-4">
                  Sustainability Initiatives
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                    <p className="text-gray-700">
                      EarthDosa is committed to reducing our environmental
                      footprint. We source our ingredients locally, use
                      eco-friendly packaging, and implement waste reduction
                      practices in our kitchen. Our goal is to not only provide
                      delicious food but also to promote sustainable practices
                      that benefit our planet.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/sustainable-kitchen.jpg"
                      alt="Sustainable kitchen practices"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-4">Order Online</h2>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                    <p className="text-gray-700">
                      Enjoy our delicious millet-based dishes from the comfort
                      of your home. Our online ordering system is easy to use,
                      ensuring you get your favorite meals delivered right to
                      your door. We offer a range of delivery options to suit
                      your needs.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/food-delivery.jpg"
                      alt="Food delivery"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </section>
      </main>

      <footer className="bg-navy-blue text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold">UTE</div>
          <div className="space-x-4">
            <a href="#" className="text-white">
              MENU
            </a>
            <a href="#" className="text-white">
              MUSLI
            </a>
            <a href="#" className="text-white">
              REACH
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
