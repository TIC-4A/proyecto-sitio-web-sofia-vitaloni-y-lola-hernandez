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

    // Evento para cerrar el modal al hacer clic en 'x'
    botonCerrar?.addEventListener('click', cerrarModal);

    // Evento para cerrar el modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // 3. Funciones de Producto (ahora llaman a mostrarDescripcion)
    function descCartera(e) {
        const descripcion = "Descubre la cartera que combina diseño sofisticado y funcionalidad perfecta. Confeccionada con materiales premium y acabados impecables, es lo suficientemente espaciosa para tu día a día, pero tan elegante que eleva cualquier look. ¡Lleva todo lo que necesitas con estilo y marca tendencia! ¡Imprescindible en tu colección!";
        const imagenSrc = e.currentTarget.querySelector('img').src;
        mostrarDescripcion(descripcion, imagenSrc);
    }

    function descPashmina(e) {
        const descripcion = "Envuelve tu estilo con nuestra pashmina. Un accesorio lujosamente suave que te ofrece la calidez que necesitas con la elegancia que deseas. Perfecta para cualquier ocasión, ya sea para un toque de color, para complementar un outfit de noche, o simplemente para resguardarte del frío con clase. ¡La versatilidad que tu guardarropa necesita!";
        const imagenSrc = e.currentTarget.querySelector('img').src;
        mostrarDescripcion(descripcion, imagenSrc);
    }

    function descToallas(e) {
        const descripcion = "Experimenta la diferencia con nuestra toalla de lujo. Hecha con un algodón de absorción superior, te secarás rápidamente mientras disfrutas de una suavidad increíble contra tu piel. Duraderas, esponjosas y con colores que resisten los lavados. ¡Convierte tu rutina de baño en un momento de puro placer y confort!";
        const imagenSrc = e.currentTarget.querySelector('img').src;
        mostrarDescripcion(descripcion, imagenSrc);
    }

    function descCepillos(e) {
        const descripcion = "Despídete de los tirones y el frizz con nuestro cepillo revolucionario. Diseñado con cerdas flexibles y tecnología anti-quiebre, desenreda sin esfuerzo, suaviza y le da un brillo espectacular a tu cabello. Perfecto para usar en cabello seco o mojado. ¡Menos rotura, más luminosidad! ¡Consigue el tuyo y transforma tu rutina de peinado!";
        const imagenSrc = e.currentTarget.querySelector('img').src;
        mostrarDescripcion(descripcion, imagenSrc);
    }

    function descPizza(e) {
        const descripcion = "¡Prepárate para el sabor! Nuestra pizza es una explosión de delicia: masa artesanal crujiente por fuera y suave por dentro, bañada en una salsa de tomate vibrante y coronada con la mozzarella más fresca y derretida. Cada bocado es la combinación ideal de tradición y sabor irresistible. ¡Pide la tuya y transforma tu día!";
        const imagenSrc = e.currentTarget.querySelector('img').src;
        mostrarDescripcion(descripcion, imagenSrc);
    }

    function descCubresillon(e) {
        const descripcion = "Dale una vida nueva a tu sala con nuestro cubre sillón de ajuste perfecto. No solo protege tu mueble de manchas, mascotas y el desgaste diario, sino que lo transforma al instante con un toque de color y estilo moderno. Es fácil de poner, lavable a máquina y tan suave que querrás pasar horas en él. ¡Renueva sin comprar un sillón nuevo!";
        const imagenSrc = e.currentTarget.querySelector('img').src;
        mostrarDescripcion(descripcion, imagenSrc);
    }

    // Función para cambiar color de Instagram
    function cambiarARosa() {
        document.getElementById("ig")?.style.color = "#cf0463";
    }

    // 4. Asignación de Eventos
    document.getElementById("ig")?.addEventListener("click", cambiarARosa);
    
    // Los eventos se asignan a los contenedores de producto para capturar la imagen.
    document.getElementById("Bolsos")?.addEventListener("click", descCartera);
    document.getElementById("Pashminas")?.addEventListener("click", descPashmina);
    document.getElementById("TOALLONES")?.addEventListener("click", descToallas);
    document.getElementById("Cepillos")?.addEventListener("click", descCepillos);
    document.getElementById("Pizzas")?.addEventListener("click", descPizza);
    document.getElementById("Cubresillones")?.addEventListener("click", descCubresillon);
});

document.getElementById("Pizzas").addEventListener("click", descpizza)

document.getElementById("Cubresillones").addEventListener("click", desccubresillon)

