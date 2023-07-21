import React from "react";
import "./Main.css";
import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main() {
  return (
    <main>
      <HornedBeast
        title="Red Dragon"
        imageUrl="https://e0.pxfuel.com/wallpapers/159/1015/desktop-wallpaper-horned-beast-horned-fantasy-beast-rock.jpg"
        description="A horney Red Dragon on the hunt."
      />
      <HornedBeast
        title="Damainaru"
        imageUrl="https://en.cf-vanguard.com/wordpress/wp-content/uploads/unit_story_017_900.png"
        description="Damainaru was thought of as a mighty predator that prowled the forest."
      />
    </main>
  );
}
