import { motion } from "framer-motion";
import storeImage from "../../../assets/images/AboutSection/perfumeStore.webp";

export default function About() {
  return (
    <>
      {/* SEO Metadata using React 19 Features */}
      <title>About Us - Premium Perfume Store</title>
      <meta
        name="description"
        content="Discover our story and what makes our perfume collection unique. We craft high-quality scents inspired by culture and nature."
      />
      <meta
        name="keywords"
        content="Perfume, Fragrances, Luxury Scents, Premium Perfume Store"
      />
      <meta property="og:title" content="About Us - Premium Perfume Store" />
      <meta
        property="og:description"
        content="Explore our high-quality, locally inspired perfumes made with the finest ingredients."
      />
      <meta
        property="og:image"
        content="/assets/images/AboutSection/perfumeStore.webp"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Us - Premium Perfume Store" />
      <meta
        name="twitter:description"
        content="Discover our uniquely crafted perfumes made with the highest quality ingredients."
      />
      <meta
        name="twitter:image"
        content="/assets/images/AboutSection/perfumeStore.webp"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sharalix Perfume Store",
          url: "https://yourwebsite.com/about",
          logo: "/assets/images/logo.webp",
          description:
            "Discover high-quality, locally inspired perfumes crafted with the finest ingredients.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+123456789",
            contactType: "customer service",
          },
        })}
      </script>

      {/* Hero Section */}
      <div className="relative md:h-[80vh] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/images/AboutSection/Madrid.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
          <motion.h1
            className="md:text-5xl text-white font-bold z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="md:w-[60vw] md:py-5 text-white font-extralight z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            We specialize in crafting high-quality, locally inspired perfumes
            using the finest ingredients. Our fragrances tell unique stories
            from around the world.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col story-sec py-15 bg-black justify-center items-center">
        <motion.h1
          className="container text-5xl text-[#AB572D] story-sec mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h1>
        <motion.p
          className="sm:w-[60vw] font-extralight p-5 text-white text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Inspired by diverse cultures, our perfumes are crafted with care,
          ensuring a luxurious experience for fragrance lovers worldwide.
        </motion.p>
      </div>

      {/* Store Image Section */}
      <div className="store-img">
        <img
          src={storeImage}
          className="w-full"
          alt="Perfume store showcasing our premium collection"
        />
      </div>

      {/* Unique Selling Points */}
      <section className="bg-black card-sec text-white py-16 px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-semibold text-orange-500 mb-8"
        >
          What Makes Us Unique
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Locally Inspired",
              text: "Our perfumes reflect the cultural heritage and landscapes of different regions, creating unique and memorable scents.",
            },
            {
              title: "High-Quality Ingredients",
              text: "We source only the finest materials, ensuring long-lasting fragrances that stand out in quality and authenticity.",
            },
            {
              title: "Personalized Experience",
              text: "Our experts help you find the perfect scent that matches your personality and style, making each purchase special.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
