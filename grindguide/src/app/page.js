"use client";

import Image from "next/image";
import { useState } from "react";

export default function Main() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedMartialArt, setSelectedMartialArt] = useState(null);
  const [selectedtrainingDays, setSelectedtrainingDays] = useState(null);

  const goalOptions = [
    { id: 1, label: "Bulk", icon: "💪🏼" },
    { id: 2, label: "Cut", icon: "🏃🏻‍♂️" },
  ];

  const martialArtOptions = [
    { id: 1, label: "Boxing", icon: "🥊" },
    { id: 2, label: "Karate", icon: "🥋" },
    { id: 3, label: "Muay Thai", icon: "🦵🏼"},
    { id: 4, label: "Jiu Jitsu", icon: "🥷🏼"}
  ];

  const trainingDaysOptions = [
    { id: 1, label: "4 days/week", icon: "4️⃣"},
    { id: 2, label: "6 days/week", icon: "6️⃣"}
  ]

  const renderQuestion = (questionText, options, selected, setSelected, top) => (
    <div style={{ position: "absolute", top }}>
      <p className="font-bold text-lg lg:text-2xl tracking-tight text-center">
        {questionText}
      </p>
      <div className="flex space-x-4 mt-4 justify-center">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`relative flex items-center justify-center w-80 h-20 rounded-2xl border-2 cursor-pointer 
            ${
              selected === option.id
                ? "border-blue-500 bg-blue-100 text-blue-700 font-bold"
                : "border-gray-300 bg-white text-gray-700"
            } transition-all duration-200 hover:scale-105`}
          >
            {selected === option.id && (
              <div className="absolute top-1 right-2 text-green-500 text-3xl">
                ✅
              </div>
            )}
            <span className="text-3xl">{option.icon}</span>
            <span className="ml-3">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

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

      {/* Question 1: Physique Goal */}
      {renderQuestion(
        "Enter your physique goal:",
        goalOptions,
        selectedGoal,
        setSelectedGoal,
        "115%"
      )}

      {/* Question 2: Martial Art */}
      {renderQuestion(
        "What additional martial art would you like to do?",
        martialArtOptions,
        selectedMartialArt,
        setSelectedMartialArt,
        "135%"
      )}

      {/* Question 3: Training Intensity */}
      {renderQuestion(
        "How many days in a week would you like to train/workout?",
        trainingDaysOptions,
        selectedtrainingDays,
        setSelectedtrainingDays,
        "155%"
      )}
    </main>
  );
}
