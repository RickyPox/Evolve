import Head from 'next/head'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import WhoWeAre from '../components/WhoWeAre'
import Services from '../components/OurServices'
import PreviousProjects from '../components/PreviousProjects'
import Team from '../components/Team'
import Carousel from '../components/Carousel'
export default function Home(){

  return (
    <div className='pb-[200px]'>
        <Head>
          <title>Evolve</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        {/* Elipses */}
        {/*  <div className='w-full h-full relative overflow-hidden'>  
        <img src='RedElipse.png' className='absolute right-0 z-0'></img>
        <img src='PurpleElipse.png' className='absolute z-0 dark:opacity-50'></img>
        <img src='GreenElipse.png' className='absolute right-0 top-[1500px] z-0'></img>
        <img src='BlueElipse.png' className='absolute left-0 -bottom-[1000px] z-0'></img>
         </div> */}
        <Nav></Nav>
        <Intro></Intro>
        <WhoWeAre></WhoWeAre>
        <Carousel></Carousel>
        <Services></Services>
         {/* <PreviousProjects></PreviousProjects> */}
        {/* <Team></Team> */}
        
    </div>
  )
}