import React from "react";
import user1 from "/user1.webp";
import user2 from "/user2.webp";
import user3 from "/user3.webp";
import { FaLinkedin } from "react-icons/fa";
const Team = () => {
  const team = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO and Founder",
      image: user1,
      text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      id: 2,
      name: "Micheal Brown",
      position: "Senior SEO Specialist",
      image: user2,
      text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      id: 3,
      name: "Brian Williams",
      position: "Social Media Specialist",
      image: user3,
      text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      id: 2,
      name: "Micheal Brown",
      position: "Senior SEO Specialist",
      image: user2,
      text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      id: 1,
      name: "John Smith",
      position: "CEO and Founder",
      image: user1,
      text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      id: 3,
      name: "Brian Williams",
      position: "Social Media Specialist",
      image: user3,
      text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
  ];
  return (
    <div className="container mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 mb-12">
        <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md ">
          Team
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs text-black">
            Meet the skilled and experienced team behind our{" "}
            <br className="hidden lg:block" /> successful digital marketing
            strategies
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.id + member.name}
            className="flex flex-col rounded-3xl border border-black border-b-3 w-full px-6 py-8 bg-white relative"
          >
            <div className="absolute top-6 right-6">
              <div className="p-2 rounded-full bg-black">
                <FaLinkedin className="w-6 h-6 text-primary" />
              </div>
            </div>{" "}
            <div className="flex flex-row items-end gap-4 mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20  object-cover"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-black">{member.position}</p>
              </div>
            </div>
            <div className="border-t border-black pt-4">
              <p className="text-xs text-black leading-relaxed">
                {member.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
