import React, { useState } from "react";
import { motion } from "framer-motion";

const storiesData = [
  {
    id: 1,
    title: "From Trainee to Teacher: Grace’s Bakery Journey",
    category: "Lovin' Oven Initiative",
    image: "https://picsum.photos/seed/story1/600/400",
    excerpt: "Grace joined our bakery program with a dream. Today, she not only runs her own small business but also mentors new trainees, passing on the skills and confidence she gained.",
    author: "Grace, Program Graduate",
  },
  {
    id: 2,
    title: "A Community United for Education",
    category: "Community",
    image: "https://picsum.photos/seed/story2/600/400",
    excerpt: "When the local school needed repairs, our volunteers and partners came together. This is the story of how collective action rebuilt more than just walls—it rebuilt hope.",
    author: "Orange Hat Team",
  },
  {
    id: 3,
    title: "Finding a Voice Through Mentorship",
    category: "Mentorship",
    image: "https://picsum.photos/seed/story3/600/400",
    excerpt: "Zainab was shy and withdrawn before meeting her mentor. Through weekly sessions, she found the confidence to speak up, lead, and inspire her peers.",
    author: "Zainab, Mentee",
  },
  {
    id: 4,
    title: "Holiday Adventures: Learning Through Play",
    category: "Childcare & Learning",
    image: "https://picsum.photos/seed/story4/600/400",
    excerpt: "The annual Holiday Orange Hat program is more than just fun and games. It’s a place where children discover new talents, build friendships, and create lasting memories.",
    author: "Aisha, Participant",
  },
    {
    id: 5,
    title: "The Power of a Safe Home",
    category: "Mentorship",
    image: "https://picsum.photos/seed/story5/600/400",
    excerpt: "For many young women, our Rooted House is the first safe place they've known. It's a sanctuary for healing, growth, and learning essential life skills.",
    author: "Ruth, Resident",
  },
    {
    id: 6,
    title: "Baking Bread, Building Futures",
    category: "Lovin' Oven Initiative",
    image: "https://picsum.photos/seed/story6/600/400",
    excerpt: "The Lovin' Oven is not just about recipes; it's about empowering women with the skills to provide for their families and become community leaders.",
    author: "Mary, Trainee",
  },
];

const categories = ["All", "Lovin' Oven Initiative", "Mentorship", "Community", "Childcare & Learning"];

const StoriesPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories = activeCategory === "All"
    ? storiesData
    : storiesData.filter(story => story.category === activeCategory);

  return (
    <main className="pt-[90px] bg-white text-gray-800">
      {/* Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Stories of Hope & Transformation
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover the lives being changed through community, love, and education.
        </p>
      </section>

      {/* Filters and Stories Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-orangeHat text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 3) * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden group flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-orangeHat mb-2">{story.category}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                <p className="text-xs text-gray-500 italic mb-4">By {story.author}</p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-greenHat font-medium hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-orangeHat text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Your experience could inspire others. If Orange Hat has impacted your life, we would love to hear from you.
        </p>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
          className="bg-white text-orangeHat px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default StoriesPage;
