"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Pro Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.",
    img: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=", // Replace with your actual image
  },
  {
    title: "Unique Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.",
    img: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
  },
  {
    title: "Future Proof",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.",
    img: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
  },
  {
    title: "Pixel Perfect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.",
    img: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
  },
];



export default function Fetucher() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-2xl rounded-lg p-6 text-center border hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                whileHover={{ scale: 1.2, rotate: 0 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={feature.img}
                  alt={feature.title}
                  className="mx-auto mb-4 w-26 h-26 rounded-full shadow-lg"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {feature.description}
                </p>
                <motion.a
                  href="#"
                  className="bg-blue-900 text-white px-5 py-2 rounded-md inline-block hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Read More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}