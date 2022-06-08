# React - Toti

## Usar React CDN

No header adicionar os enlaces do [React CDN](https://es.reactjs.org/docs/cdn-links.html)

```
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

e do [Babel](https://babeljs.io/setup#installation)

```
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Criar um `<script type="text/babel">` no final do `body` e dentro ja podem escrever React

```
 <script type="text/babel">
      const MeuComponente = () => {
        return (
          <div>
            <h1>Hola mundo</h1>
          </div>
        );
      };
      const root = ReactDOM.createRoot(document.querySelector("#root"));
      root.render(<MeuComponente />);
    </script>
```

## Usar React npx

executar con diretorio desejado `npx create-react-app <nome-do-repositorio>`

## Aprende React

- [React: Documentação Oficial (BR)](https://pt-br.reactjs.org/tutorial/tutorial.html)
- [React: Documentación Oficial (ESP)](https://es.reactjs.org/tutorial/tutorial.html)
- [React: Official Documentation (ENG)](https://reactjs.org/tutorial/tutorial.html)

### Cursos em video

#### Portugues

- [Curso de React Para Completos Iniciantes - De graça - 2 horas aprx.](https://youtu.be/ErjWNvP6mko)
- [Curso de React - De graça - 10 horas aprox](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO)
- [Curso de React - Pago - 54 horas aprox - Melhor puntuação](https://www.udemy.com/course/react-redux-pt/)

#### Español

- [Curso React.js - Gratis - 37 horas aprx.](https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk)
- [Reactjs, Curso Práctico para Principiantes (React 16) - Gratis - 3 horas aprox](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO)
- [React: De cero a experto ( Hooks y MERN ) - Pago - 49 horas aprox - Mejor Puntuacion](https://www.udemy.com/course/react-cero-experto/)

#### English

- [ReactJS Tutorial for Beginners - Free - 13 horas aprx.](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)
- [Full Modern React Tutorial - Free - 3 horas aprox](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
- [React: De cero a experto ( Hooks y MERN ) - Paid - 49 horas aprox ](https://www.udemy.com/course/build-web-apps-with-react-firebase/)

## Homework semana 1
- Opção 1: Criar um aplicativo de Curriculo [exemplo](https://ginnerzapata.github.io/cv-builder/)
- Opção 2: Criar uma lista todo: [exemplo](https://rojaslabs.github.io/minimal-todo-list/)
