import React from "react";
import storeImg from "../assets/pexels-shvetsa-4482900.jpg";

const About = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold mb-10">About Us</h1>
      <div className="flex justify-evenly">
        <div className=" basis-1/4">
          <img
            src={storeImg}
            alt="storeImg"
            className="object-cover rounded-md h-25"
          />
        </div>
        <div className="basis-1/2">
        <p className="mb-5 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam id
          veritatis ad numquam repudiandae. Dolor voluptatibus nihil minima
          consectetur adipisicing elit. Sint expedita reprehenderit doloremque
          quod dolores sapiente consequatur nostrum voluptatum at officiis velit qui.
          Adipisci vitae distinctio possimus incidunt dolorem expedita quis quas
          animi est doloremque.
        </p>
        <p className="text-lg">
          Tenetur voluptatibus iusto quo consectetur error neque, dolor, sit
          dignissimos ad excepturi rem explicabo. Voluptatum aut, similique
          reprehenderit quasi aliquam, quaerat ipsum, qui eos alias architecto
          minima.consequuntur aliquam eum pariatur natus dicta eaque, velit qui.
          Adipisci vitae distinctio possimus incidunt dolorem expedita quis quas
          animi est doloremque, dicta totam esse? Ut quibusdam fugiat impedit
          tenetur voluptatibus iusto quo consectetur error neque, dolor, sit
          dignissimos ad excepturi rem explicabo.
        </p>
        </div>
      </div>
    </>
  );
};
export default About;
