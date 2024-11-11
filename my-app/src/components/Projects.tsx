import { title } from 'process'
import Heading from './Heading';
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & Typescript based app for managing and organizing your tasks efficiently.",
        img: "/project_01.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title:"Countdown Timer",
      desc: "A Nextjs and Typescript powered website to track time with an interactive countdown feauture.",
      img: "/project_02.jpg",
      tags: ["Nextjs", "Node", "Typescript", "CSS"],
    },
    {
        id: 2,
        title: "Static Resume",
        desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project_05.jpg",
        tags: ["HTML", "CSS", "Node", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects

// {
//   id: 2,
//   title: "Weather Widget",
//   desc: "A Nextjs and Typescript based tool for fetching and displaying real-time weather data.",
//   img: "/project_03.jpg",
//   tags: ["Nextjs", "Node", "CSS","Typescript"],
// },
// {
//   id: 3,
//   title: "Currency Converter Project",
//   desc: "A simple HTML and Typescript powered toolfor converting currencies with real-time rates.",
//   img: "/project_04.jpg",
//   tags: ["React", "Node", "CSS", "Typescript"],
// },
// {
//   id: 5,
//   title: "Simple Calculator Project",
//   desc: "A basic HTML CSS and Typescript calculator for performing essential arithmetic operations.",
//   img: "/project_06.jpg",
//   tags: ["HTML", "Node", "CSS", "Typescript"],
// }

