"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

export default function AboutMePage() {
  let facts: string[] = [
    "The highest point on earth is Mt. Everest",
    "The lowest point on earth is the Mariana Trench",
    "Slothes poop once a week",
    "Octopuses have 3 hearts",
    "The oldest living animal is a 192 year old tortoise name Jonathan",
  ];
  const [fact, setFact] = useState("");

  return (
    <div className="flexcontainer">
      <strong className="text-5xl">About Me</strong>
      <br />
      <Button
        className="bg-rose-300 text-2xl"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>
      <p>{fact}</p>
      <br />
      <br />
      <div>
        <b>Poker</b>
        <img
          alt="Could Not Load"
          height="250"
          src="https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="250"
        />
        <p>I enjoy playing poker with my friends.</p>
        <a href="https://www.britannica.com/topic/poker-card-game">
          Rules/History
        </a>
        <br />
      </div>
      <div>
        <b>Golden State Warriors</b>
        <img
          alt="Could Not Load"
          height="250"
          src="https://tse2.mm.bing.net/th/id/OIP.kCZWSm-xJcCi0l7-KKu2FgHaJQ?rs=1&pid=ImgDetMain"
          width="250"
        />
        <p>
          I used to live in San Fransico and watch every single Warriors game.
          My favorite player is Steph Curry.
        </p>
        <a href="https://www.nba.com/warriors/">nba.com</a>
        <br />
      </div>
      <div>
        <b>Spikeball</b>
        <img
          alt="Could Not Load"
          height="250"
          src="https://images.squarespace-cdn.com/content/5346a846e4b0101b157468cf/1431452656257-BET1YOW0YFMC7VRN7RVJ/?format=1000w&content-type=image%2Fjpeg"
          width="250"
        />
        <p>I love playing spikeball with my friends in the Summer.</p>
        <a href="https://anderson.edu/uploads/campus-life/spikeball.pdf">
          Rules
        </a>
        <br />
      </div>
      <div>
        <b>UFC</b>
        <img
          alt="Could Not Load"
          height="250"
          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/12/12/16392907045251.jpg"
          width="250"
        />
        <p>
          I recently started watching UFC and have become a big fan of the
          sport.
        </p>
        <a href="https://www.usatoday.com/story/sports/ufc/2025/04/10/ufc-314-alexander-volkanovski-diego-lopes-odds/82991033007/">
          Upcoming Fight Card Prediction
        </a>
        <br />
      </div>
      <div>
        <b>Snowboarding</b>
        <img
          alt="Could Not Load"
          height="250"
          src="https://www.superiorwallpapers.com/download/beautiful-winter-sports-snowboard-time-5120x2880.jpg"
          width="250"
        />
        <p>
          I started snowboarding 2 years ago and it was alot of fun. I am pretty
          terrible at it though.
        </p>
        <a href="https://en.wikipedia.org/wiki/Snowboarding?scrlybrkr=b7467372">
          Wiki
        </a>
        <br />
      </div>
    </div>
  );
}
