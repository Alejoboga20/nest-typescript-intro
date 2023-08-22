import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { age, name, isDeveloper } from './basics/01-types';
import { pokemonIds } from './basics/02-objects';
import { charmander } from './basics/03-classes';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      Name from variable: ${name}<br />
      Age from variable: ${age}<br />
      Is developer from variable: ${isDeveloper}<br />
    </div>
    <div>
    PokemonIds: ${pokemonIds.join(' ')}
    </div>
    <div>
    ${JSON.stringify(charmander, null, 2)}
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
