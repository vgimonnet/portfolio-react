import { BACKEND, DATABASE, FRONTEND, OTHERS } from "../../data/aptitudes.data";
import { Techno } from "../../types/project.type";

type APTITUDE = {
  title: string;
  technos: Techno[];
  extraClasses: string;
};

const APTITUDES: APTITUDE[] = [
  {
    title: 'Backend',
    technos: BACKEND,
    extraClasses: 'md:mb-4 md:ml-4',
  },
  {
    title: 'Frontend',
    technos: FRONTEND,
    extraClasses: 'md:mb-4',
  },
  {
    title: 'Base de données',
    technos: DATABASE,
    extraClasses: 'md:ml-4',
  },
  {
    title: 'Autres',
    technos: OTHERS,
    extraClasses: '',
  }
]

const Aptitudes = () => {

  return (
    <section id="aptitudes" className="h-fit relative flex items-center flex-col my-20 pb-16">
      <h1 
        className="
          text-4xl lg:text-6xl font-bold relative pb-3
          before:content[''] before:absolute before:w-1/2 before:h-1 before:bottom-0 before:left-1/4 before:border before:border-white before:bg-white before:rounded"
      >Compétences</h1>

      <p className="mt-16">
        En complément des languages classiques du web que sont HTML / CSS / Javascript et PHP, voici les autres technologies et compétences que je maîtrise :
      </p>

      <div className="w-full flex flex-col gap-8 mt-8 justify-center md:flex-row md:flex-wrap z-back">
        {
          APTITUDES.map(({ title, technos, extraClasses }: APTITUDE, index: number) => {
            const classes = `border rounded-xl bg-gray-800 text-white px-4 py-6 flex flex-col items-center w-full gap-4 md:w-1/3 ${extraClasses}`;

            return (
              <div className={classes} key={index}>
                <p className="text-lg font-bold underline mb-4">{title}</p>
                <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 md:gap-12">
                  { technos.map(({ picture, name }: Techno, index: number) => {
                    return (
                      <li className="flex flex-col justify-center items-center" key={index}>
                        <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: picture}}></span>
                        <p>{name}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            );
          })
        }
      </div>

    </section>
  )
};

export default Aptitudes;