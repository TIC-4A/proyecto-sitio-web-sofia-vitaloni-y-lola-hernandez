document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica de Validación de Edad
    const edadIngresada = parseInt(prompt("Ingrese su edad (solo números):"));

    if (isNaN(edadIngresada) || edadIngresada < 18) {
        alert("Debes ser mayor de 18 años para acceder.");
        window.close();
        return; 
    }

    // 2. Elementos del Modal
    const modal = document.getElementById('producto-modal');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalImagen = document.getElementById('modal-imagen');
    const botonCerrar = document.querySelector('.cerrar-modal');
    
    // Si el modal no existe en el HTML, el script se detiene para evitar errores.
    if (!modal || !modalDescripcion || !modalImagen || !botonCerrar) {
        console.error("Error: Faltan elementos clave del modal en el HTML. Asegúrese de haber agregado la estructura del modal.");
        return; 
    }

    // Función para abrir el modal con la descripción y la imagen
    function mostrarDescripcion(descripcion, imagenSrc) {
        modalDescripcion.textContent = descripcion;
        modalImagen.src = imagenSrc;
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = 'none';
    }

    // Eventos del Modal
    botonCerrar.addEventListener('click', cerrarModal);

    // Cierra el modal si el usuario hace clic fuera del contenido (en el fondo oscuro)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // 3. Función Universal de Manejo de Productos
    // Esta función recibe la descripción y el evento, y extrae la imagen del elemento clicado.
    function manejarProducto(descripcion, event) {
        // Usa event.currentTarget (el div con el ID) para buscar la imagen dentro
        const imagenElemento = event.currentTarget.querySelector('.product-image-container img');
        
        if (imagenElemento) {
            const imagenSrc = imagenElemento.src;
            mostrarDescripcion(descripcion, imagenSrc);
        } else {
            // Si la imagen no se encuentra, muestra la descripción sin imagen
            mostrarDescripcion(descripcion, '');
            console.error("No se pudo encontrar la imagen para este producto.");
        }
    }

    // 4. Definición de Descripciones
    const descripciones = {
        Bolsos: "Descubre la cartera que combina diseño sofisticado y funcionalidad perfecta. Confeccionada con materiales premium y acabados impecables, es lo suficientemente espaciosa para tu día a día, pero tan elegante que eleva cualquier look. ¡Lleva todo lo que necesitas con estilo y marca tendencia! ¡Imprescindible en tu colección!",
        Pashminas: "Envuelve tu estilo con nuestra pashmina. Un accesorio lujosamente suave que te ofrece la calidez que necesitas con la elegancia que deseas. Perfecta para cualquier ocasión, ya sea para un toque de color, para complementar un outfit de noche, o simplemente para resguardarte del frío con clase. ¡La versatilidad que tu guardarropa necesita!",
        TOALLONES: "Experimenta la diferencia con nuestra toalla de lujo. Hecha con un algodón de absorción superior, te secarás rápidamente mientras disfrutas de una suavidad increíble contra tu piel. Duraderas, esponjosas y con colores que resisten los lavados. ¡Convierte tu rutina de baño en un momento de puro placer y confort!",
        Cepillos: "Despídete de los tirones y el frizz con nuestro cepillo revolucionario. Diseñado con cerdas flexibles y tecnología anti-quiebre, desenreda sin esfuerzo, suaviza y le da un brillo espectacular a tu cabello. Perfecto para usar en cabello seco o mojado. ¡Menos rotura, más luminosidad! ¡Consigue el tuyo y transforma tu rutina de peinado!",
        Pizzas: "¡Prepárate para el sabor! Nuestra pizza es una explosión de delicia: masa artesanal crujiente por fuera y suave por dentro, bañada en una salsa de tomate vibrante y coronada con la mozzarella más fresca y derretida. Cada bocado es la combinación ideal de tradición y sabor irresistible. ¡Pide la tuya y transforma tu día!",
        Cubresillones: "Dale una vida nueva a tu sala con nuestro cubre sillón de ajuste perfecto. No solo protege tu mueble de manchas, mascotas y el desgaste diario, sino que lo transforma al instante con un toque de color y estilo moderno. Es fácil de poner, lavable a máquina y tan suave que querrás pasar horas en él. ¡Renueva sin comprar un sillón nuevo!"
    };

    // Función para cambiar color de Instagram
    function cambiarARosa() {
        document.getElementById("ig")?.style.color = "#cf0463";
    }

    // 5. Asignación de Eventos
    document.getElementById("ig")?.addEventListener("click", cambiarARosa);
    
    // Asignación de eventos usando la función universal y las descripciones
    document.getElementById("Bolsos")?.addEventListener("click", (e) => manejarProducto(descripciones.Bolsos, e));
    document.getElementById("Pashminas")?.addEventListener("click", (e) => manejarProducto(descripciones.Pashminas, e));
    document.getElementById("TOALLONES")?.addEventListener("click", (e) => manejarProducto(descripciones.TOALLONES, e));
    document.getElementById("Cepillos")?.addEventListener("click", (e) => manejarProducto(descripciones.Cepillos, e));
    document.getElementById("Pizzas")?.addEventListener("click", (e) => manejarProducto(descripciones.Pizzas, e));
    document.getElementById("Cubresillones")?.addEventListener("click", (e) => manejarProducto(descripciones.Cubresillones, e));
});
