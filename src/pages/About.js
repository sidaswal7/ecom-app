import React from "react";
import storeImg from "../assets/pexels-shvetsa-4482900.jpg";

const About = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold mb-10">About Us</h1>
      <div className="flex justify-evenly">
        <div className="w-30 h-30 basis-1/4">
          <img
            src={storeImg}
            alt="storeImg"
            className="object-cover rounded-md"
          />
        </div>
        <p className="basis-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam id
          veritatis ad numquam repudiandae. Dolor voluptatibus nihil minima
          fugit, quidem enim quisquam eius ipsam eligendi dolores aspernatur!
          Necessitatibus, voluptates quod! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sint expedita reprehenderit doloremque
          quod dolores sapiente consequatur nostrum voluptatum at officiis ab
          omnis consequuntur aliquam eum pariatur natus dicta eaque, velit qui.
          Adipisci vitae distinctio possimus incidunt dolorem expedita quis quas
          animi est doloremque, dicta totam esse? Ut quibusdam fugiat impedit
          tenetur voluptatibus iusto quo consectetur error neque, dolor, sit
          dignissimos ad excepturi rem explicabo. Voluptatum aut, similique
          reprehenderit quasi aliquam, quaerat ipsum, qui eos alias architecto
          vel rem deserunt maxime velit quia animi neque debitis quas totam hic
          nihil officiis harum sed! Nesciunt aliquam ratione eveniet quod
          minima.consequuntur aliquam eum pariatur natus dicta eaque, velit qui.
          Adipisci vitae distinctio possimus incidunt dolorem expedita quis quas
          animi est doloremque, dicta totam esse? Ut quibusdam fugiat impedit
          tenetur voluptatibus iusto quo consectetur error neque, dolor, sit
          dignissimos ad excepturi rem explicabo.
        </p>
      </div>
    </>
  );
};
export default About;
