import { motion } from "framer-motion";
import image1 from "../../../assets/images/ServiceSection/1.webp";
import image2 from "../../../assets/images/ServiceSection/2.webp";
import image3 from "../../../assets/images/ServiceSection/3.webp";
import image4 from "../../../assets/images/ServiceSection/4.webp";

export default function Services() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-black">
      <div className="relative flex py-50 service-sec bg-[url('./assets/images/ServiceSection/serviceSec.webp')] bg-cover bg-center text-center justify-center items-center flex-col">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            maxime praesentium temporibus eum ducimus porro vel rerum nesciunt
            ipsa distinctio. Doloremque, error ducimus. Velit nostrum quidem,
            distinctio ab inventore officia eligendi optio odio! Repellat
            perspiciatis, corrupti esse, eaque ipsa laborum consequuntur,
            molestiae amet porro a natus necessitatibus recusandae aspernatur
            doloremque!
          </motion.p>
        </div>
      </div>
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Service 1 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <p className="text-4xl font-bold text-orange-500 mb-2">01.</p>
              <h3 className="text-2xl font-semibold mb-4">
                Personal Fragrance Consultations
              </h3>
              <p className="text-gray-300">
                Choosing the right fragrance can be a deeply personal
                experience. Our team of knowledgeable fragrance experts is here
                to guide you through this process. Whether you’re looking for a
                signature scent, a gift for a loved one, or need assistance in
                exploring new fragrance families, our consultants will take the
                time to understand your preferences and suggest the perfect
                matches.
              </p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={image1}
                alt="Personal Fragrance Consultations"
                className="w-full h-auto rounded-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeInRight}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:flex-row-reverse"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="lg:w-1/2 sm:px-12 mb-6 lg:mb-0">
              <p className="text-4xl font-bold text-orange-500 mb-2">02.</p>
              <h3 className="text-2xl font-semibold mb-4">
                Custom Fragrance Creation
              </h3>
              <p className="text-gray-300">
                Experience the art of bespoke perfumery with our custom
                fragrance creation service. Work closely with our skilled
                perfumers to craft a scent that is uniquely yours. From
                selecting individual notes to blending them into a harmonious
                symphony, we'll help you bring your fragrance vision to life.
              </p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={image2}
                alt="Custom Fragrance Creation"
                className="w-full h-auto rounded-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeInLeft}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto px-6 lg:px-20">
          {/* Service 3 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <p className="text-4xl font-bold text-orange-500 mb-2">03.</p>
              <h3 className="text-2xl font-semibold mb-4">
                Personal Fragrance Consultations
              </h3>
              <p className="text-gray-300">
                Choosing the right fragrance can be a deeply personal
                experience. Our team of knowledgeable fragrance experts is here
                to guide you through this process. Whether you’re looking for a
                signature scent, a gift for a loved one, or need assistance in
                exploring new fragrance families, our consultants will take the
                time to understand your preferences and suggest the perfect
                matches.
              </p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={image3}
                alt="Personal Fragrance Consultations"
                className="w-full h-auto rounded-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeInRight}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:flex-row-reverse"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="lg:w-1/2 sm:px-12 mb-6 lg:mb-0">
              <p className="text-4xl font-bold text-orange-500 mb-2">04.</p>
              <h3 className="text-2xl font-semibold mb-4">
                Custom Fragrance Creation
              </h3>
              <p className="text-gray-300">
                Experience the art of bespoke perfumery with our custom
                fragrance creation service. Work closely with our skilled
                perfumers to craft a scent that is uniquely yours. From
                selecting individual notes to blending them into a harmonious
                symphony, we'll help you bring your fragrance vision to life.
              </p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={image4}
                alt="Custom Fragrance Creation"
                className="w-full h-auto rounded-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeInLeft}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
