import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <div className="relative md:h-[50vh] flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('./assets/images/welcomeSection/welcome.webp')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
        <motion.h1
          className="md:text-5xl text-[#A1522B] font-bold z-10 overflow-hidden"
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Welcome to ShaRlix
        </motion.h1>
        <motion.p
          className="md:w-[60vw] md:py-5 text-white font-extralight z-10"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          impedit corrupti consequuntur voluptas eos distinctio? Labore,
          nostrum. Reiciendis sit voluptas temporibus. Blanditiis eaque ipsa quo
          cupiditate veniam quia rerum libero suscipit temporibus officiis unde
          consequatur, at quaerat sequi. Laboriosam rerum facere sapiente ex
          alias. Beatae repellat fugiat quam libero. Libero quisquam error eius
          nemo iure expedita magni iste pariatur! Harum cupiditate perspiciatis
          ratione maiores commodi distinctio vitae dolorem amet ipsam error
          facilis, sequi fugit! Exercitationem quasi nesciunt molestias in qui
          magnam porro molestiae accusamus cupiditate? Reprehenderit quas
          impedit cumque velit, quos minus voluptate fuga excepturi rerum optio
          praesentium? Dolore repellendus cum necessitatibus optio non
          aspernatur placeat earum delectus, ad fugit? Est odit tempora impedit,
          culpa ipsa et voluptatibus ipsum quo!
        </motion.p>
      </div>
    </div>
  );
}
