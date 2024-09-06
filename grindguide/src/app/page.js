import Image from "next/image";
import graph from "../public/Graph.jpeg"

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight md:-mb-4 text-center pt-5 text-balance">
      Personalized <span className = "bg-rose-600 px-2 -rotate-1 inline-block"><span className = "text-white">Athletic </span></span>Workout Plans
        <br/> to Keep You on Track
      </h1>

      <div className="font-medium absolute bottom-0 top-[30%]">
        <ul className="list-none">
          <li className="flex items-center text-lg"><span className="mr-2">💪🏼</span> Build Muscle </li>
          <li className="flex items-center text-lg"><span className="mr-2">🏋🏻‍♂️</span> To Build Strength</li>
          <li className="flex items-center text-lg"><span className="mr-2">🔋</span> To Build Power</li>
        </ul>
      </div>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight text-center absolute top-[50%]">
        Sick of Hitting a <span className="decoration-rose-600 underline underline-offset-4 decoration-dashed underline-offset-10">Fitness Plateau</span>  ?
      </h1>

      <div className="flex space-x-4 mt-8 absolute top-[60%]">
        <div className="bg-red-200 p-10 rounded-lg">
            <h1 className="text-2xl mb-2 text-center font-bold text-red-700">Random Youtube Bodybuilder</h1>
            <ul className="list-none text-left">
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Workouts aren't tailored to your specific needs</li>
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Un-Aesthetic Physique Syndroym</li>
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Different videos may have conflicting tips</li>
            </ul>
          </div>
          <div className="bg-green-200 p-10 rounded-lg">
            <h1 className="text-2xl mb-2 text-center font-bold text-green-700">GrindGuide</h1>
            <ul className="list-none text-left">
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Plans are customized to fit your unique goals</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Purposeful Weight lifting for specific needs</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Athletic & Asthetic Physique</li>
            </ul>
          </div>
      </div>

      <p className = "font-medium text-lg lg:text-xl tracking-tight md:-mb-4 text-center pt-5 text-balance absolute top-[95%]">
        In today's era, we are made to believe the <span className="bg-rose-600 px-2 -rotate-1 inline-block"><span className="text-white text-2xl lg:text-2xl">blocky and excessive</span></span> bodybuilder physique is the best for both asthetics and athletics, but that is far from truth, the best physique by far in terms of physical attraction and power/strength is the <span className="bg-lime-600 px-2 rotate-1 inline-block"><span className="text-white text-2xl lg:text-2xl">athletic physique</span></span>
      </p>

      <div className="flex justify-center items-center min-h-screen absolute top-[100%]">
      <Image
        src={graph} // Path to your image file
        alt="Description of the image"
        width={500} // Set the desired width
        height={300} // Set the desired height
        className="rounded-lg shadow-lg" // Tailwind CSS classes for styling
      />
    </div>
    </main>
  );
}
