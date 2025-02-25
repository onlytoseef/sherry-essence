import { motion } from "framer-motion";
import image1 from "../../../assets/images/ServiceSection/1.webp";
import image2 from "../../../assets/images/ServiceSection/2.webp";
import image3 from "../../../assets/images/ServiceSection/3.webp";
import image4 from "../../../assets/images/ServiceSection/4.webp";

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <title>Our Services - Premium Fragrance Consultations</title>
      <meta
        name="description"
        content="Discover premium fragrance consultations and custom scent creation services. Find your perfect signature scent today."
      />
      <meta
        name="keywords"
        content="fragrance, perfume consultation, custom scents, luxury perfumes"
      />

      <section className="bg-black">
        <header className="relative flex py-50 service-sec bg-[url('./assets/images/ServiceSection/serviceSec.webp')] bg-cover bg-center text-center justify-center items-center flex-col">
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="container">
            <motion.h1
              className="text-white sm:text-5xl relative"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-white mx-auto py-12 font-extralight sm:w-[50vw] relative"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
              Elevate your senses with our personalized fragrance services. From
              expert consultations to bespoke perfume creation, we bring you
              luxury scents crafted just for you.
            </motion.p>
          </div>
        </header>

        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Service 1 */}
            <motion.article
              className="flex flex-col lg:flex-row items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <p className="text-4xl font-bold text-orange-500 mb-2">01.</p>
                <h2 className="text-2xl font-semibold mb-4">
                  Personal Fragrance Consultations
                </h2>
                <p className="text-gray-300">
                  Find your signature scent with the help of our expert
                  consultants. Whether you need a personal fragrance or a
                  special gift, we ensure a luxurious and memorable experience.
                </p>
              </div>
              <div className="lg:w-1/2">
                <motion.img
                  src={image1}
                  alt="Personal Fragrance Consultation Session"
                  className="w-full h-auto rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  loading="lazy"
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </motion.article>

            {/* Service 2 */}
            <motion.article
              className="flex flex-col lg:flex-row-reverse items-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="lg:w-1/2 sm:px-12 mb-6 lg:mb-0">
                <p className="text-4xl font-bold text-orange-500 mb-2">02.</p>
                <h2 className="text-2xl font-semibold mb-4">
                  Custom Fragrance Creation
                </h2>
                <p className="text-gray-300">
                  Design your own perfume with our custom fragrance service. Our
                  skilled perfumers blend scents that reflect your personality
                  and style.
                </p>
              </div>
              <div className="lg:w-1/2">
                <motion.img
                  src={image2}
                  alt="Custom Fragrance Creation Process"
                  className="w-full h-auto rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </motion.article>

            {/* Service 3 */}
            <motion.article
              className="flex flex-col lg:flex-row items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <p className="text-4xl font-bold text-orange-500 mb-2">03.</p>
                <h2 className="text-2xl font-semibold mb-4">
                  Luxury Perfume Workshops
                </h2>
                <p className="text-gray-300">
                  Join our luxury workshops and explore the art of perfumery.
                  Learn how to blend fragrances and create a scent that’s
                  uniquely yours.
                </p>
              </div>
              <div className="lg:w-1/2">
                <motion.img
                  src={image3}
                  alt="Luxury Perfume Workshop"
                  className="w-full h-auto rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </motion.article>

            {/* Service 4 */}
            <motion.article
              className="flex flex-col lg:flex-row-reverse items-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="lg:w-1/2 sm:px-12 mb-6 lg:mb-0">
                <p className="text-4xl font-bold text-orange-500 mb-2">04.</p>
                <h2 className="text-2xl font-semibold mb-4">
                  Exclusive Scent Collections
                </h2>
                <p className="text-gray-300">
                  Discover our exclusive scent collections, curated with rare
                  ingredients and expert craftsmanship for a one-of-a-kind
                  olfactory experience.
                </p>
              </div>
              <div className="lg:w-1/2">
                <motion.img
                  src={image4}
                  alt="Exclusive Scent Collection Bottles"
                  className="w-full h-auto rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </motion.article>
          </div>
        </section>
      </section>
    </>
  );
}
