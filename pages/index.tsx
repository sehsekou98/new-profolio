import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header';
import  Hero  from '../components/Hero';
import  About  from '../components/About'
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';
import { fetchProjects } from '../utiles/fetchProjects';
import { fetchSocials } from '../utiles/fetchSocials';
import { fetchSkills } from '../utiles/fetchSkills';
import { fetchPageInfo } from '../utiles/fecthPageInfo';
import { fetchExperiences } from '../utiles/fetchExperiences';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';





type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
};


const Home = ({ pageInfo, experiences, skills, projects, socials}: Props) => {
  
  
  return (
    <div className='bg-black text-white h-screen snap-y 
    first-letter:snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/20
    scrollbar-thumb-blue-500/80'>
      <Head>
        <title>Sekou S Seh</title>
      </Head>
     <Header socials={socials} />

     {/*Hero */}
     <section id='hero' className='snap-start'>
      <Hero pageInfo={pageInfo} />
     </section>

     {/*About */}
    <section id='about' className='snap-center'>
      <About pageInfo={pageInfo} />
    </section>

     {/*Experience */}
     <section id='experience' className='snap-center'>
      <WorkExperience experiences={experiences} />
     </section>

     {/*Skills */}
     <section id='skills' className='snap-center'>
    <Skills skills={skills} />

     </section>
    
     {/*Projects */}

     <section id='projects' className='snap-start'>
      <Projects  projects={projects}/>
     </section>

     {/*Contact Me */}  
     <section id='contact' className='snap-start'>
      <Contact />
      </section>   
      <Link href='#hero'>
        <footer className='sticky botton-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale
            hover:grayscale-0 cursor-pointer'
        src='https://scontent.frba5-1.fna.fbcdn.net/v/t39.30808-6/306782578_3194160390847867_1664332251978162710_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1V8w9cwquX4AX-IwxrC&_nc_ht=scontent.frba5-1.fna&oh=00_AT_70_uDs8a1XIjw0L8ElML_vLuHZ1znc6i9JTYOWB1MJw&oe=633F7840'
   />
          </div>

        </footer>
      
      </Link>
    </div>
  );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  let pageInfo: PageInfo[] = undefined as any
  let experiences: Experience[]= undefined as any
  let skills: Skill[] = undefined as any
  let socials: Social[] = undefined as any
  let projects: Project[] = undefined as any

  try {
    pageInfo = await fetchPageInfo();
    experiences  = await fetchExperiences();
    skills  = await fetchSkills();
    socials  = await fetchSocials();
    projects = await fetchProjects();
    
  } catch (error) {
    console.log(error);
    
  }
  


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
  },
  revalidate: 10,
  };
};
   