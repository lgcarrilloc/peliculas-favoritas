# Taller 2: Ejercicio de Listas en React

## Estudiante

Luis Gustavo Carrillo Chávez

## Opción seleccionada

Opción 3: Ejemplo de listas trabajado en clases.

## Descripción del proyecto

Para este taller desarrollé una aplicación llamada **Mis Películas Favoritas** utilizando React.

La aplicación muestra una lista de películas y permite agregar nuevas películas mediante un cuadro de texto. También es posible marcar una película como favorita haciendo clic sobre ella y eliminar películas de la lista cuando ya no sean necesarias.

## Funcionamiento

La lista de películas se almacena en un estado utilizando `useState`.

Para mostrar los elementos se utiliza el método `map()`, que recorre el arreglo y genera dinámicamente cada película en pantalla.

Además, la aplicación incluye:

- Agregar nuevas películas.
- Marcar películas favoritas con una estrella ⭐.
- Eliminar películas con un botón 🗑️.
- Mostrar la cantidad total de películas registradas.
- Diseño responsivo para computadoras y dispositivos móviles.

## Cambios y mejoras realizadas

Durante el desarrollo se realizaron varias mejoras:

### Versión inicial

- Creación del proyecto con Vite.
- Mostrar el título principal.
- Mostrar una lista simple de películas.

### Mejoras posteriores

- Creación del componente `Pelicula`.
- Uso de props para enviar el título de cada película.
- Implementación de `useState`.
- Marcar películas favoritas.
- Agregar películas mediante un input controlado.
- Mostrar la lista utilizando `map()`.
- Incorporar contador de películas.
- Agregar botón para eliminar películas.
- Mejorar la apariencia visual con CSS.
- Adaptar el diseño para dispositivos móviles.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/lgcarrilloc/peliculas-favoritas.git
