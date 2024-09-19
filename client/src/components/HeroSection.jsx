import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section 
      className="bg-cover bg-center h-80 flex flex-col" 
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1699891730669-2d15cf3a5979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D)` }}
    >
      <Navbar />
      <div className="text-white ml-8 flex flex-col px-8 my-auto">
        <h1 className="text-4xl font-bold">Innovators' Summit 2024</h1>
        <p className="mt-2 text-lg">Organized by Indian Institute of Information Technology, SriCity</p>
        <p className="mt-1 text-lg">Dates: September 23-27, 2024</p>
      </div>
    </section>
  );
}
