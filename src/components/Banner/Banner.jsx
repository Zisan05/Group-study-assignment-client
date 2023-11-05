

const Banner = () => {
  return (
      <div>
          <div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/vs59zck/124513117-group-of-friends-studying-together-for-finals.jpg)'}}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold text-amber-300 hover:text-blue-300">When you share your knowledge it will increase!!</h1>
    <p className="mb-5 text-violet-400">Studying with group members is a great way to learn the syllabus more deeply & conceptually. Everyone has some unique talent and specific knowledge, in group study members can learn from each other. Students get an opportunity to take the advantages of other group members knowledge and talents.</p>
    <button className="btn bg-amber-300 font-bold">lets visit</button>
  </div>
</div>
</div>
      </div>
  );
};

export default Banner;