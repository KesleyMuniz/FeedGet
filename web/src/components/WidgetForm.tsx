import { CloseButton } from "./CloseButton";

import bugImageURL from '../images/bug.svg';
import ideaImageURL from '../images/idea.svg';
import thoughtImageURL from '../images/thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de nuvem de pensamento '
    }
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-8 w-full" >
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className=""

            >
              <img src={value.image.source} alt={value.image.alt}/>
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
      
      <footer className="text-xs text-neutral text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2">Rocketseat</a> 
      </footer>
    </div>
  )
}