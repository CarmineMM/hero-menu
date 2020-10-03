# Hero Menu

Hero Menu, es un menu de navegación responsivo de fácil personalización y con el HTML adecuado para darle los estilos pertinentes.
Es totalmente adaptable a dispositivos mobiles, su funcionalidad se basa en Javascript pero median el CSS se puede alterar totalmente.

## Empezando

1\.  Agrega los archivos *CSS* y *JS* necesarios para funcionar.

```html
<link href="./dist/css/hero-menu.min.css" rel="stylesheet">
<script src="./dist/js/hero-menu.min.js"></script>
```


1.1\. (OPCIONAL) Agrega *CSS* de una **Skin** (---NO IMPLEMENTADO---)

```html
<link href="./dist/css/skin-1.css" rel="stylesheet">
```

2\. Escribe el HTML de tu menu, preferiblemente que sea la estructura recomendada.
```html
<nav id="hero-menu">
    <!--Logo-->
    <a href="#!">Logo</a>

    <!--Botón Responsive-->
     <button data-hero="button">
        <div>
            <span></span><span></span><span></span>
        </div>
    </button>

    <!--Menu-->
    <ul>
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Nosotros</a></li>
        <li>
            <a href="#!">Productos</a>
            <ul>
                <li><a href="#!">Prouducto 1</a></li>
                <li><a href="#!">Prouducto 2</a></li>
                <li>
                    <a href="#!">Prouducto 3</a>
                    <ul>
                        <li><a href="#!">Producto 3.1</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```


3\. Inicializa la función global **HeroMenu** disponible solo después de previamente incluir los archivos _JS_.
```javascript
HeroMenu('#hero-menu');
```

4\. (OPCIONAL) Opcionalmente puedes pasar un **Objeto** de configuración a la función **HeroMenu**.
```javascript
HeroMenu('#hero-menu', {
    breakpoint: 768,       // Delimita el tamaño mínimo de la pantalla para pasar a menu mobil
    subContainer: 'ul',    // Es el contenedor que contiene las opciones del menu, este es el que se oculta en dispositivo mobil
    contentAnchor: 'li',   // Es el contenedor de las anclas, de las opciones del menu
    clickOutOnClose: true, // Indica si el menu se cerrara si usuario hace click afuera del menu. Si es falso, el usuario se ve obligado a clicker el botón para cerrar 
    dropdownContent: '<i class="hero-menu-dropdown-icon"></i>', // Contenido por defecto del indicador de dropdown
});
```

5\. **LISTO!** el menu empezara a funcionar, solo queda darle estilos CSS a tu menu.



## Configuraciones Opcionales

A continuación conoce algunas de las configuraciones que puedan ayudarte en la personalización de tu diseño.

### Delimitar el Breakpoint

* Puedes configurar el tamaño mínimo que la pantalla debe tener para que el menu pase modo Mobile, dicho valor se expresa en **pixeles**, por defecto se tienen 768px.
* Internamente lo que hace el *Script* es alternar entre una clase ".mobile" en el contenedor padre del Hero Menu facilitando su personalización a travez de *CSS*
* Si deseas que tu menu siempre requiera ser desplegado, puede configurar un **Breakpoint** muy alto, y el *Script* nunca alternara la clase css ".mobile"
```javascript
HeroMenu('#hero-menu', {
    breakpoint: 99999,  // Configuracion para menu que rquieran siempre estar ocultos, y ser desplegados. 
});
```
* Puedes hacer todo lo contrario y hacer que el menu nunca alterne la clase css ".mobile" y este siempre este visible



### Establecer HTML personalizado para los contenedores

Por defecto el sub-contenedor se establece como un "**ul**" y el contenedor de las anclas como un "**li**", como se muestra en la siguiente estructura HTML recomendada:
```html
<nav id="hero-menu">
    <!--Logo-->
    <a href="#!">Logo</a>

    <!--Botón Responsive-->
     <button data-hero="button">
        <div>
            <span></span><span></span><span></span>
        </div>
    </button>

    <!--Menu-->
    <ul>
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Nosotros</a></li>
        <li><a href="#!">Productos</a></li>
        <li><a href="#!">Contacto</a></li>
    </ul>
</nav>
```

Si se desea personalizar los elementos, hay que indicarle al *Script* mediante el objeto de configuración que **Tags HTML** deseamos:
```javascript
HeroMenu('#hero-menu', {
    subContainer: 'nav',  // Es el contenedor que contiene las opciones del menu, este es el que se oculta en dispositivo mobil
    contentAnchor: 'div', // Es el contenedor de las anclas, de las opciones del menu
});
``` 
Si hacemos esto, nuestro HTML debe concordar con la configuración que estamos pasando:
```html
<div id="hero-menu">
    <!--Logo-->
    <a href="#!">Logo</a>

    <!--Botón Responsive-->
     <button data-hero="button">
        <div>
            <span></span><span></span><span></span>
        </div>
    </button>

    <!--Menu-->
    <nav>
        <div><a href="#!">Home</a></div>
        <div><a href="#!">Nosotros</a></div>
        <div><a href="#!">Productos</a></div>
        <div><a href="#!">Contacto</a></div>
    </nav>
</div>
```
Cualquier que sea la configuración es siempre **obligatorio** tener un **sub-contenedor** y un **contenedor de las anclas**.


### Menu Mobile distinto al menu de escritorio

En algunas ocaciones es necesario tener un menu mobile con opciones y configuracion totalmente distintos al menu de escritorio, para esos casos se le puede indicar cual sera el menu de escritorio y cual el de mobile,
mediante los atributos ***data-hero='mobile'*** y ***data-hero='desktop'*** agregados al HTML:
```html
<nav id="hero-menu">
    <!--Logo-->
    <a href="#!">Logo</a>

    <!--Botón Responsive-->
     <button data-hero="button">
        <div>
            <span></span><span></span><span></span>
        </div>
    </button>

    <!--Menu de Escritorio-->
    <ul data-hero="desktop">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Nosotros</a></li>
        <li>
            <a href="#!">Productos</a>
            <ul>
                <li><a href="#!">Prouducto 1</a></li>
                <li><a href="#!">Prouducto 2</a></li>
                <li>
                    <a href="#!">Prouducto 3</a>
                    <ul>
                        <li><a href="#!">Producto 3.1</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul> 

    <!--Menu Mobil-->
    <ul data-hero="mobile">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Nosotros</a></li>
        <li><a href="#!">Productos</a></li>   
    </ul>
</nav>
```


### Indicar si el menu tiene cierre inteligente

Indica si el menu se cerrara si usuario hace click afuera del menu. Si es falso, el usuario se ve obligado a clicker el botón para cerrar. En algunas ocasiones deseamos que el usuario deba dar click al botón para cerrar el menu.
```javascript
HeroMenu('#hero-menu', {
    clickOutOnClose: false, // Indica si el menu se cerrara si usuario hace click afuera del menu. Si es falso, el usuario se ve obligado a clicker el botón para cerrar 
});
```

### Establece un HTML personalizado para el indicador de los Dropdowns

Puedes establecer el contenido que tendrán los indicadores de los dropdowns, estos indican al usuario que es un desplegable, y también servirán de desplegar las opciones en el menu mobil
 ```javascript
 HeroMenu('#hero-menu', {
     dropdownContent: '<i class="fa fa-angle-down"></i>', // Contenido por defecto del indicador de dropdown
 });
 ```


## Copyright

Este proyecto nace con la necesidad de dejar los menus automático hechos en jQuery, es **MIT**.
Creado por: ***[Carmine Maggio](https://github.com/CarmineMM)*** 