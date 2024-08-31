import React from "react";

const page = ({ params }) => {
  const details = data.find((detail) => detail.id == params.id);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="border-2 border-pink-500 p-5 m-5 rounded-none">
        <h1>details {params.id}</h1>
        <h1>Name : {details.name}</h1>
        <h1>profession : {details.profession}</h1>
        <h1>hobbies : {details.hobbies}</h1>
        <h1>about_profession: : {details.about_profession}</h1>
      </div>
    </div>
  );
};
const data = [
  {
    id: 1,
    name: "Alice Johnson",
    profession: "Graphic Designer",
    hobbies: ["painting", "photography", "hiking"],
    about_profession:
      "Alice creates visual content to communicate messages. Her work involves designing layouts, logos, and visual elements for digital and print media.",
  },
  {
    id: 2,
    name: "Bob Smith",
    profession: "Software Engineer",
    hobbies: ["coding", "gaming", "reading"],
    about_profession:
      "Bob develops and maintains software applications and systems. He writes code, tests software, and collaborates with other engineers to build robust solutions.",
  },
  {
    id: 3,
    name: "Carol Williams",
    profession: "Marketing Manager",
    hobbies: ["traveling", "cooking", "blogging"],
    about_profession:
      "Carol plans and executes marketing strategies to promote products and services. She oversees campaigns, analyzes market trends, and works to enhance brand awareness.",
  },
  {
    id: 4,
    name: "David Brown",
    profession: "Architect",
    hobbies: ["drawing", "model building", "reading historical novels"],
    about_profession:
      "David designs buildings and structures. His role involves creating blueprints, ensuring compliance with regulations, and working with clients to meet their needs.",
  },
  {
    id: 5,
    name: "Emma Davis",
    profession: "Content Writer",
    hobbies: ["writing fiction", "podcasting", "exploring new cultures"],
    about_profession:
      "Emma creates written content for various platforms, including websites, blogs, and social media. She focuses on engaging storytelling and clear communication.",
  },
  {
    id: 6,
    name: "Frank Miller",
    profession: "Data Scientist",
    hobbies: ["playing chess", "analyzing data", "running"],
    about_profession:
      "Frank analyzes complex data to help organizations make informed decisions. His work involves statistical analysis, machine learning, and data visualization.",
  },
  {
    id: 7,
    name: "Grace Lee",
    profession: "Fashion Designer",
    hobbies: ["sewing", "attending fashion shows", "exploring new trends"],
    about_profession:
      "Grace designs clothing and accessories, focusing on aesthetics, functionality, and market trends. She creates collections that reflect current fashion and individual style.",
  },
  {
    id: 8,
    name: "Hank Wilson",
    profession: "Chef",
    hobbies: [
      "experimenting with recipes",
      "food photography",
      "traveling for culinary experiences",
    ],
    about_profession:
      "Hank prepares and cooks meals, often specializing in particular cuisines. His role includes menu planning, ingredient selection, and maintaining high standards of food quality.",
  },
  {
    id: 9,
    name: "Ivy Martinez",
    profession: "Financial Analyst",
    hobbies: ["investing", "reading financial news", "playing golf"],
    about_profession:
      "Ivy evaluates financial data and provides investment recommendations. She conducts market research, analyzes financial trends, and assists with financial planning.",
  },
  {
    id: 10,
    name: "Jack Taylor",
    profession: "UX/UI Designer",
    hobbies: ["user research", "sketching", "playing video games"],
    about_profession:
      "Jack designs user interfaces and enhances user experiences for digital products. He focuses on usability, visual design, and creating intuitive, user-friendly applications.",
  },
];
export default page;
