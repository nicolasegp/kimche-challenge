# Desafío para Software Engineers

- Nombre postulante: **Nicolás Giacaman**
- Link a la app en producción: https://kimchechallenge.pages.dev/

## Pregunta técnica

> La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario.
> **¿Qué propondrías para enfrentar el problema?**

---

**Respuesta:** Como backend y viendo que al ser una base de datos MySQL e incluir todas las tablas en la misma BDD se puede optimizar el almacenamiento de datos separando los datos en fragmentos entre las tablas, esto quiere decir que con el beneficio de las claves en los elementos se puede concatenar una query de datos pequeños para obtener un resultado completo, esto aunque se vea como un proceso mas grande tiende a mejorar el rendimiento al no saturar una tabla con datos que pueden estar repetidos.

a nivel de frontend lo ideal es evitar traer grande cantidad de datos, por lo cual se recomienda usar paginados para mejorar la experiencia del usuario evitando generar muchos elementos en el navegador, una opción actual es ir cargando información de forma progresiva e ir eliminando la que ya fue vista.

Desde un punto de vista de IT, lo ideal es usar un sistema de cache como ProxySQL que pueda generar una capa de almacenamiento donde guardar las consultas y permita a la aplicación acceder mas rápido.

Estos puntos de vista son tomados en cuenta por ser una BDD MySQL la cual trabaja con la velocidad del disco y no en memoria como otras BDD que se cargan en RAM para mejorar el rendimiento de consultas.

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](challenge/1.png)

![image2](challenge/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
