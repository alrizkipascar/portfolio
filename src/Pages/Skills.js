import Cards from "./component/Cards";

const Skills = ({ skills }) => {
  return (
    <div
      ref={skills}
      className="  items-center justify-center bg-zinc-900 w-full h-screen text-white px-16 py-20"
    >
      My Experience
      <div className="mx-auto w-3/4 lg:w-2/4  grid grid-cols-2 py-5 gap-6">
        <Cards.Skills className="grid"></Cards.Skills>
        <Cards.Skills className="grid"></Cards.Skills>
        <Cards.Skills className="grid"></Cards.Skills>
        <Cards.Skills className="grid"></Cards.Skills>
      </div>
    </div>
  );
};

export default Skills;
