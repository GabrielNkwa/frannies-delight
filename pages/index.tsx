import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CakeIcon, UtensilsCrossedIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <header className="bg-[#F9E4D4] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <CakeIcon className="h-8 w-8 text-[#D95204]" /> */}
            <Image
              src={'/images/logo.png'}
              alt="logo"
              width={50}
              height={440}
              className=" object-contain"
            />
            <span className="text-2xl font-bold text-[#D95204]">
              Frannie's Delights
            </span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-[#8C3503] hover:text-[#D95204]">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-[#8C3503] hover:text-[#D95204]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#8C3503] hover:text-[#D95204]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-[#8C3503] mb-6">
              Yummy Treats Only 😋
            </h1>
            <p className="text-xl text-[#594A42] mb-8">
              Discover our handcrafted pastries and delightful treats
            </p>
            {/* <Button className="bg-[#D95204] hover:bg-[#8C3503] text-white">
              View Our Menu
            </Button> */}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8C3503] mb-12">
              Featured Delights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chin Chin',
                  price: '',
                  image: '/images/chinchin.jpg',
                },
                {
                  name: 'Samosa',
                  price: '',
                  image: '/images/samosa2.jpg',
                },
                {
                  name: 'Spring Rolls',
                  price: '',
                  image: '/images/springroll.jpg',
                },
                {
                  name: 'Corn Dogs',
                  price: '',
                  image: '/images/corn-dogs2.jpg',
                },
                {
                  name: 'Milky Puffs',
                  price: '',
                  image: '/images/milky-puffs2.jpg',
                },
                {
                  name: 'Spicy Chicken',
                  price: '',
                  image: '/images/spicy-chicken.jpg',
                },
                {
                  name: 'Spicy meat',
                  price: '',
                  image: '/images/Spicy-meat.jpg',
                },
                {
                  name: 'Puff Puff',
                  price: '',
                  image: '/images/puffpuff.jpg',
                },
                {
                  name: 'Samosa Springroll Combo',
                  price: '',
                  image: '/images/samosa-springroll-combo.jpg',
                },

                {
                  name: 'Spicy Turkey',
                  price: '',
                  image: '/images/turkey.jpg',
                },
                {
                  name: 'Chicken and Chips',
                  price: '',
                  image: '/images/Chicken-and-chips1.jpg',
                },
                {
                  name: 'Zobo Drink',
                  price: '',
                  image: '/images/zobo-drink-2.jpg',
                },
              ].map((pastry, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={pastry.image}
                    alt={pastry.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-[#8C3503]">
                      {pastry.name}
                    </h3>
                    <p className="text-[#D95204]">{pastry.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8C3503] mb-12">
              Platters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Platter 1',
                  price: '',
                  image: '/images/platter2.jpg',
                },
                {
                  name: 'Platter 2',
                  price: '',
                  image: '/images/platter.jpg',
                },
                {
                  name: 'Platter 3',
                  price: '',
                  image: '/images/platter3.jpg',
                },
                {
                  name: 'Platter 4',
                  price: '',
                  image: '/images/platter4.jpg',
                },
              ].map((pastry, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={pastry.image}
                    alt={pastry.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-[#8C3503]">
                      {pastry.name}
                    </h3>
                    <p className="text-[#D95204]">{pastry.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8C3503] mb-12">
              Packages
            </h2>
            <div className=" border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              {[
                {
                  image: '/images/Valentines.jpg',
                },
              ].map((pastry, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={pastry.image}
                    alt={'valentines'}
                    width={600}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-[#8C3503]"></h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9E4D4]">
          <div className="container mx-auto px-4 text-center" id="about">
            <h2 className="text-3xl font-bold text-[#8C3503] mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <CakeIcon className="h-12 w-12 text-[#D95204] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#8C3503] mb-2">
                  Freshly Baked
                </h3>
                <p className="text-[#594A42]">
                  Our pastries are baked fresh daily for the best quality and
                  taste.
                </p>
              </div>
              <div>
                <UtensilsCrossedIcon className="h-12 w-12 text-[#D95204] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#8C3503] mb-2">
                  Artisanal Craftsmanship
                </h3>
                <p className="text-[#594A42]">
                  Each pastry is handcrafted with care by our expert bakers.
                </p>
              </div>
              <div>
                <PhoneIcon className="h-12 w-12 text-[#D95204] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#8C3503] mb-2">
                  Custom Orders
                </h3>
                <p className="text-[#594A42]">
                  We take special orders for events and celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#8C3503] text-white py-8">
        <div className="container mx-auto px-4" id="contact">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Frannie's Delights</h4>
              <p>Awka, Anambra State Nigeria</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Hours</h4>
              <p>Mon-Sat: 9am - 6pm</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p>Phone: 08139289154</p>
              <p>Instagram: frannys_delight</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Frannie's Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
