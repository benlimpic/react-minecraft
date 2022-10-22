import { NearestFilter, TextureLoader,  RepeatWrapping  } from "three";

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
	waterImg
} from "./images";

const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const cinderTexture = new TextureLoader().load(cinderImg);
const cementTexture = new TextureLoader().load(cementImg);
const brickTexture = new TextureLoader().load(brickImg);
const fireTexture = new TextureLoader().load(fireImg);
const waterTexture = new TextureLoader().load(waterImg);

dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
cinderTexture.magFilter = NearestFilter
cementTexture.magFilter = NearestFilter
brickTexture.magFilter = NearestFilter
fireTexture.magFilter = NearestFilter
waterTexture.magFilter = NearestFilter

groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;


export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
  cinderTexture,
  cementTexture,
  brickTexture,
  fireTexture,
  waterTexture,
};
