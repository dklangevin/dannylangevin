import React from 'react';
import sunset_hills from '../images/sunset_hills.jpg';
import imageStyle from '../App.css';
import { Dimensions } from 'react';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function HomepageImage() {
  	const w = getWindowDimensions().width;
	return (
		<img src={sunset_hills} style={{width: w}} resizeMode='contain' alt='Sunset Hills'/>
	);
}

export default HomepageImage;
