import type { IconType } from 'react-icons';
import {
  SiAngular,
  SiCypress,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiJest,
  SiMantine,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactivex,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export type Tech = { name: string; Icon: IconType; color: string };

/** Ordered list used by the tech marquee. */
export const techLogos: Tech[] = [
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'Node', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', Icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'RxJS', Icon: SiReactivex, color: '#B7178C' },
  { name: 'Tanstack Query', Icon: SiReactquery, color: '#FF4154' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Cypress', Icon: SiCypress, color: '#69D3A7' },
  { name: 'JEST', Icon: SiJest, color: '#C21325' },
  { name: 'Shadcn', Icon: SiShadcnui, color: '#000000' },
  { name: 'Mantine', Icon: SiMantine, color: '#339AF0' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
];
