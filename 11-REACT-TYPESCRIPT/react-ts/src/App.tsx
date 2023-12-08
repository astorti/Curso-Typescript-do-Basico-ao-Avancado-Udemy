import React, {createContext} from 'react';

//04 - IMPORTAÇÃO COMPONENTE
import FirstComponent from "./components/firstComponent"

// 05- DESTRUCTURING PROPS
import SecondComponent from './components/secondComponent';
import Destructuring, {Category} from './components/Destructuring';

// 06 - USESTATE
import State from './components/State';

// 09 - CONTEXT
import Context from './components/Context';

// 07 - TYPE
type textOrNull = string | null

// 08 - CONTEXT
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  //01- VARIÁVEIS
  const name: string = "Harry";
  const age: number = 30;
  const isWorking: boolean = true;

  //02 - FUNÇÕES
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  // 07 - TYPE
  const myText: textOrNull = "Exemplo TYPE"
  let mySecondText: textOrNull = null
  mySecondText = "Segundo exemplo Type"

  // 08 - CONTEXT
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <h1>React-Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Post sobre Typescript e Javascript"
        commentQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Post sobre Python"
        commentQty={5}
        tags={["Python"]}
        category={Category.P}
      />
      <State />
      {myText &&
        <p>{myText}</p>
      }
      {mySecondText &&
        <p>{mySecondText}</p>
      }
      <Context/>
    </AppContext.Provider>
  );
}

export default App;
