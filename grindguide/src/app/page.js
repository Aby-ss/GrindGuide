import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight md:-mb-4 text-center pt-5 text-balance">
        <span className = "bg-rose-600 px-2 -rotate-1 inline-block"><span className = "text-white">Personalized Workout Plans</span></span>
        <br/> to Keep You on Track
      </h1>

      <p className="font-bold text-2xl text-center w-[650px] text-[20px] leading-[24px] absolute top-[28%]">
        Your Ultimate Fitness Companion: <span className = "underline decoration-rose-600 decoration-dashed underline-offset-4 text-2xl lg:text-2xl">Work Smarter, Not Harder</span>
      </p>
      
      <button className="bg-blue-800 text-white font-semibold py-4 px-20 rounded-md mt-4 absolute top-[35%] transition-transform duration-300 hover:scale-105 hover:rotate-3" style={{ borderRadius: '10px' }}>
        <a href="/new">Start Reflection</a>
      </button>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight text-center absolute top-[50%]">
        Tired of <span className="bg-rose-600 px-2 rotate-1 inline-block"><span className="text-white">Bad Workout</span></span> progress ?
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
    </main>
  );
}
