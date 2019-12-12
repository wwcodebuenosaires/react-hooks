import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import StateHook from './components/useState';
import StateHookPractice from './components/useState/practice';
import StateHookPractice2 from './components/useState/practice2';
import StateHookClass from './components/useState/class';
import EffectHook from './components/useEffect';
import EffectHookConditional from './components/useEffect/conditional';
import EffectHookFetch from './components/useEffect/fetch';
import EffectHookTimer from './components/useEffect/timer';
import EffectHookTimerHooks from './components/useEffect/timer-hooks';
import EffectHookTimerAdvance from './components/useEffect/timer-advance';
import EffectHookTimerAdvanceHooks from './components/useEffect/timer-advance-hooks';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="useStateLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                useState
              </a>
              <div className="dropdown-menu" aria-labelledby="useStateLink">
                <Link className="nav-link" to="/useState">Ejemplo</Link>
                <Link className="nav-link" to="/useState/practice">Ejercicio</Link>
                <Link className="nav-link" to="/useState/practice2">Ejercicio v2</Link>
                <Link className="nav-link" to="/useState/class">Versión con Componente</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="useEffectLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                useEffect
              </a>
              <div className="dropdown-menu" aria-labelledby="useEffectLink">
                <Link className="nav-link" to="/useEffect">Ejemplo base</Link>
                <Link className="nav-link" to="/useEffect/conditional">Ejemplo condicional 1</Link>
                <Link className="nav-link" to="/useEffect/fetch">Ejemplo condicional: fetch </Link>
                <Link className="nav-link" to="/useEffect/timer">Ejercicio </Link>
                <Link className="nav-link" to="/useEffect/timer/practice">Ejercicio: resolución </Link>
                <Link className="nav-link" to="/useEffect/timerAdvance">Ejercicio Avanzado </Link>
                <Link className="nav-link" to="/useEffect/timerAdvance/practice">Ejercicio Avanzado: resolución </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="jumbotron text-center">
          <Switch>
            <Route exact path="/">
              <h1>Let's talk about Hooks</h1>
              <h2>Ejercicios para el workshop</h2>
              <iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" allowFullScreen></iframe>
            </Route>
            <Route exact path="/useState">
              <h1>Practicando usar el hook useState</h1>
              <h2>Armamos un contador</h2>
              <StateHook />
            </Route>
            <Route exact path="/useState/practice">
              <h1>Practicando usar el hook useState</h1>
              <h2>Armamos un contador que pueda sumar, restar y reiniciar</h2>
              <StateHookPractice />
            </Route>
            <Route exact path="/useState/practice2">
              <h1>Practicando usar el hook useState</h1>
              <h2>Armamos un contador que pueda sumar, restar y reiniciar</h2>
              <StateHookPractice2 />
            </Route>
            <Route exact path="/useState/class">
              <h1>Practicando usar el hook useState</h1>
              <h2>Armamos un contador: versión con React.Component</h2>
              <StateHookClass />
            </Route>
            <Route exact path="/useEffect">
              <h1>Practicando usar el hook useEffect</h1>
              <h2>Agregamos mensajes en consola al contador</h2>
              <EffectHook />
            </Route>
            <Route exact path="/useEffect/conditional">
              <h1>Practicando usar el hook useEffect</h1>
              <EffectHookConditional />
            </Route>
            <Route exact path="/useEffect/fetch">
              <h1>Practicando usar el hook useEffect</h1>
              <EffectHookFetch />
            </Route>
            <Route exact path="/useEffect/timer">
              <h1>Practicando usar el hook useEffect</h1>
              <h2>Armar este Timer con Hooks</h2>
              <EffectHookTimer />
            </Route>
            <Route exact path="/useEffect/timer/practice">
              <h1>Practicando usar el hook useEffect</h1>
              <h2>Armamos el Timer usando Hooks</h2>
              <EffectHookTimerHooks />
            </Route>
            <Route exact path="/useEffect/timerAdvance">
              <h1>Practicando usar el hook useEffect</h1>
              <h2>Armar el Timer usando Hooks y mostrar mensaje Game Over al llegar a 10</h2>
              <EffectHookTimerAdvance />
            </Route>
            <Route exact path="/useEffect/timerAdvance/practice">
              <h1>Practicando usar el hook useEffect</h1>
              <h2>Armar el Timer avanzado usando Hooks</h2>
              <EffectHookTimerAdvanceHooks />
            </Route>
          </Switch>
          </div>
      </React.Fragment>
    </Router>
  );
}
