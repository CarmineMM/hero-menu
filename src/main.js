// Stylesheets
import './scss/main.scss'
import './scss/skins/_skin_1.scss'

window.HeroMenu = (el, configUser) => {

    let config = {
        // Configuraciones por defecto
        breakpoint: 768,       // Delimita el tamaño mínimo de la pantalla para pasar a menu mobil
        subContainer: 'ul',    // Es el contenedor que contiene las opciones del menu, este es el que se oculta en dispositivo mobil
        contentAnchor: 'li',   // Es el contenedor de las anclas, de las opciones del menu
        clickOutOnClose: true, // Indica si el menu se cerrara si usuario hace click afuera del menu. Si es falso, el usuario se ve obligado a clicker el botón para cerrar
        dropdownContent: '<i class="hero-menu-dropdown-icon"></i>', // Contenido por defecto del indicador de dropdown

        // Configuraciones del usuario
        ...configUser
    }

    let navbar
    // Intenta seleccionar el elemento pasado por el usuario
    try {
        navbar = document.querySelector(el)
    } catch (error) {
        console.error(`--------------------------\n\n\tImposible seleccionar el elemento: |--${el}--|\n\n--------------------------`)
        return false
    }


    /**
     * Agregara las clases oportunas a cada elemento del menu
     */
    try {
        // Clases al contenedor
        if ( !navbar.classList.contains('hero-menu-container') ) 
            navbar.classList.add('hero-menu-container')

        // Sub-contenedor
        navbar.querySelectorAll(config.subContainer).forEach((subContainer, index) => {

            // Sub-contenedores anidados, se les agrega un dropdown
            if ( index !== 0 ) {
                subContainer.classList.add('hero-menu-dropdown')
                if ( !subContainer.parentNode.classList.contains('hero-menu-container') ){
                    let span = document.createElement('span');
                    span.classList.add('hero-menu-dropdown-span')
                    span.innerHTML = config.dropdownContent
                    subContainer.parentNode.querySelector('a').appendChild(span)
                    subContainer.parentNode.classList.add('hero-menu-dropdown-button')
                }
            }else{
                // Primer sub-contenedor
                subContainer.classList.add('hero-menu-sub-container')
            }

            // Contenedor de las anclas
            subContainer.querySelectorAll(config.contentAnchor).forEach(contentAnchor => {
                contentAnchor.classList.add('hero-menu-content-anchor')
            })
        })

        // Si existe un menu especial para la parte responsive
        const mobileMenu = navbar.querySelector('[data-hero="mobile"]');
        if ( mobileMenu ) mobileMenu.className = 'hero-menu-sub-container'

    } catch (error) {
        console.error(`--------------------------\n\n\tHero menu require de:\n\t\t* Contenedor\n\t\t* Sub Contenedor\n\t\t* Content Anchor\n\tSi al menos uno no esta presente, se genera este error \n\n--------------------------`)
        return false    
    }


    /**
     * Soporte para todos los dropdowns
     */
    const dropdowns = document.querySelectorAll('.hero-menu-dropdown-button');
    const callDropdownAction = () => {
        closeAllDropdown()

        dropdowns.forEach(dropdown => {
            if ( window.innerWidth <= config.breakpoint ){
                let anchor = dropdown.querySelector('a');
                anchor.addEventListener('click', e => toggleDropdown(e))
                anchor.querySelector('.hero-menu-dropdown-span').addEventListener('click', e => toggleDropdown(e))
            }else {
                dropdown.addEventListener('mouseenter', e => openDropdown(e.target))
                dropdown.addEventListener('mouseleave', e => closeDropdown(e.target))
            }
        })
    }

    /**
     * Intercambia las clases para abrir u ocultar el dropdown
     *
     * @param e
     */
    const toggleDropdown = e => {
        e.stopPropagation()
        e.preventDefault()

        let find = e.target.parentNode;
        // Busca el elemento padre encargado de manejar la clase css para la apertura del dropdown
        do {
            if ( find.classList.contains('hero-menu-dropdown-button') ) {
                find.classList.contains('hero-menu-dropdown-open')
                    ? closeDropdown(find)
                    : openDropdown(find)

                find = false
            }else {
                find = find.parentNode
            }
        }while (find)
    }

    /**
     * Abrir o cerrar Dropdown
     * @param e
     */
    const openDropdown  = e => e.classList.add('hero-menu-dropdown-open')
    const closeDropdown = e => e.classList.remove('hero-menu-dropdown-open')


    /**
     * Cierra todos los modales
     */
    const closeAllDropdown = () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('hero-menu-dropdown-open')
        })
    }



    /**
     * Función ayudante para las clases de los botones
     *
     * @param buttons
     * @param action * add (agrega una clase) * * remove (remueve una clase) * * event (agrega un evento) *
     * @param valueOrEvent
     * @param func
     */
    const controlBtn = (buttons, action, valueOrEvent, func) => {
        buttons.forEach(btn => {
            if ( action === 'add' ){
                btn.classList.add(valueOrEvent)
            }
            else if (action === 'remove') {
                btn.classList.remove(valueOrEvent)
            }
            else if(action === 'event') {
                btn.addEventListener(valueOrEvent, func)
            }
        })
    }


    /**
     * Captura el Botón y estará disponible por el resto de la aplicación
     */
    let buttons;
    try {
        /**
         * Selecciona el/los botones que van alternar el menu responsivo
         * @type {NodeListOf<Element>}
         */
        buttons = document.querySelectorAll('[data-hero="button"]')
        controlBtn(buttons, 'add', 'hero-menu-button')
    }catch (error){
        console.error(`--------------------------\n\n\tHero menu:\n\t\tNo Pudo seleccionar botón para el menu \n\n--------------------------`)
        return false
    }



    /**
     * Función encarga del menu responsivo
     */
    const mobileClass = () => {
        if ( window.innerWidth <= config.breakpoint ){
            navbar.classList.add('mobile')
            navbar.classList.remove('open')
        }else {
            navbar.classList.remove('mobile', 'open')
        }
        callDropdownAction()
    }



    /**
     * Alterna eventos para el cierre automático
     * y las clases del menu
     *
     */
    const toggleClassNav = () => {
        if ( navbar.classList.contains('open') ){
            navbar.classList.remove('open')
            controlBtn(buttons, 'remove', 'open')

            if ( config.clickOutOnClose )
                document.removeEventListener('click', checkClickUser)
        }else{
            navbar.classList.add('open')
            controlBtn(buttons, 'add','open')

            if ( config.clickOutOnClose )
                document.addEventListener('click', checkClickUser)
        }
    }

    /**
     * Event del Botón
     */
    controlBtn(buttons, 'event', 'click', toggleClassNav)


    /**
     * Comprueba si el usuario esta haciendo click AFUERA del navbar
     * Comprueba también si esta haciendo click ADENTRO del navbar
     *
     * @param e
     * @returns {boolean}
     */
    const checkClickUser = e => {
        closeAllDropdown()
        const navbarElements = navbar.querySelectorAll('*')

        for (let i = 0; i < navbarElements.length; i++) {
            if(e.target === navbarElements[i])
                return true

            if ( i+1 === navbarElements.length )
                toggleClassNav()
        }
    }


    // Visualiza si se deben color las clases pertinentes
    window.addEventListener('resize', mobileClass)
    mobileClass() // Invoca la clase para colocar el mobile

    return el
}