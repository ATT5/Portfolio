import { github, external, react, next, taco, pokemon, space } from "../assets";
import { motion } from "framer-motion";
const projects = {
  taco: {
    title: "Taco Life",
    description:
      "Dynamic landing page for a restaurant, meticulously crafted with React and adorned with the sleek aesthetics of Tailwind CSS.",
    img: taco,
    github: "https://github.com/ATT5/Taco-life",
    demo: "https://imaginative-tiramisu-7e8560.netlify.app/",
    icon: react,
  },
  pokemon: {
    title: "AIP Pokemon Card Game",
    description:
      "Pokémon Memory Card Game meticulously crafted with React and styled using Tailwind CSS. This project leverages the Pokémon API to dynamically fetch and display Pokémon cards, creating an immersive gaming experience.",
    img: pokemon,
    github: "https://github.com/ATT5/pokemon-memory-game",
    demo: "https://thunderous-pothos-fcf66e.netlify.app/",
    icon: react,
  },
  space: {
    title: "Space Page",
    description:
      "A page designed to showcase the dynamic capabilities of this powerful React framework. Leveraging the server-side rendering and routing provided by Next.js.",
    img: space,
    github: "https://github.com/ATT5/frontMentor-space-page",
    demo: "https://deluxe-pudding-fa8549.netlify.app/",
    icon: next,
  },
};

function Projects() {
  return (
    <>
      {Object.values(projects).map((pj) => (
        <motion.article
          className="text-lightGray flex lg:justify-between items-center mx-7 py-7 font-space flex-col-reverse lg:flex-row border-b-[1px] border-gray-400"
          key={pj.title}
          initial={{ x: "100%" }}
          whileInView={{ x: ["-100%", "0%"] }}
          transition={{ duration: 0.8, ease: "easeIn", repeat: null }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2  ">
            <h3 className="text-4xl mb-5  text-lightGray font-extrabold">
              {pj.title}
            </h3>
            <p className="mb-5 leading-7 text-xl">{pj.description}</p>
            <img
              src={pj.icon}
              alt="icon"
              width={50}
              height={50}
              className="mb-5"
            />
            <ul className="flex gap-5">
              <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <a href={pj.github} target="_blank">
                  <img src={github} alt="github" width={50} height={50} />
                </a>
              </motion.li>
              <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <a href={pj.demo} target="_blank">
                  <img src={external} alt="link" width={50} height={50} />
                </a>
              </motion.li>
            </ul>
          </div>
          <img
            src={pj.img}
            alt={pj.title}
            className="w-[500px] h-96 rounded-2xl max-lg:mb-9 object-cover"
          />
        </motion.article>
      ))}
    </>
  );
}

export default Projects;
