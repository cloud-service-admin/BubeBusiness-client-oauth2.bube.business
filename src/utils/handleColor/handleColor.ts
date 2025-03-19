import { useState } from 'react';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'cyan',
  'magenta',
  'brown',
  'silver',
  'gold',
  'lime',
  'teal',
  'navy',
  'indigo',
  'maroon',
  'olive',
  'coral',
  'tan',
  'azure',
  'aquamarine',
  'lavender',
  'bisque',
  'crimson',
  'fuchsia',
  'peru',
  'plum',
  'salmon',
  'sienna',
  'thistle',
  'violet',
  'wheat',
  'khaki',
  'orchid',
  'skyblue',
  'lightgreen',
  'darkred',
  'midnightblue',
  'darkorange',
  'darkorchid',
  'darkgoldenrod',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
];

let colorIndex = 0;

const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getColor = (): string => {
  const color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Lặp lại chỉ mục nếu đã đi đến cuối danh sách màu
  return color;
};

const useGetColor = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const getNextColor = (): string => {
    const color = colors[colorIndex];
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    return color;
  };

  return getNextColor;
};

const handleColor = { getRandomColor, getColor, useGetColor };

export default handleColor;
