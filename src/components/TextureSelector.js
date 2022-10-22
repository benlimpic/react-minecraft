import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
  cinderImg,
  cementImg,
  brickImg,
  fireImg,
  waterImg,
} from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
  cinder: cinderImg,
  cement: cementImg,
  brick: brickImg,
  fire: fireImg,
  water: waterImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log, cinder, cement, brick, fire, water } =
    useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
      cinder,
      cement,
      brick,
      fire,
      water,
    };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);

    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log, cinder, cement, brick, fire, water]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute centered texture-select">
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              key={k}
              src={src}
              alt={k}
              className={`${k === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    )
  );
};
