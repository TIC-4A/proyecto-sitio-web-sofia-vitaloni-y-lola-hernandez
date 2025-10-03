document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica de verificación de edad (copiada de tu script)
    let edadIngresada = prompt("ingrese su edad")
    if (edadIngresada < 18) {
        // Mejor práctica: no usar `close` aquí, sino redirigir o mostrar un mensaje.
        // Asumo que 'close' pretendía cerrar la ventana, que es un mal uso.
        // Si no se usa para algo crucial, lo dejo como estaba en tu código.
    } else {
        // Asumo que 'open' pretendía no hacer nada y dejar la página abierta.
    }

    // 2. Definición central de datos de los productos (RUTAS Y DESCRIPCIONES)
    const productsData = {
        'Bolsos': {
            title: 'Bolsos de Tendencia',
            imageSrc: 'ruta/a/bolsos.jpg', // <<-- ¡MODIFICAR ESTA RUTA!
            description: "Descubre la cartera que combina diseño sofisticado y funcionalidad perfecta. Confeccionada con materiales premium y acabados impecables, es lo suficientemente espaciosa para tu día a día, pero tan elegante que eleva cualquier look. ¡Lleva todo lo que necesitas con estilo y marca tendencia! ¡Imprescindible en tu colección!"
        },
        'Pashminas': {
            title: 'Pashminas de Lujo',
            imageSrc: 'ruta/a/pashmina.jpg', // <<-- ¡MODIFICAR ESTA RUTA!
            description: "Envuelve tu estilo con nuestra pashmina. Un accesorio lujosamente suave que te ofrece la calidez que necesitas con la elegancia que deseas. Perfecta para cualquier ocasión, ya sea para un toque de color, para complementar un outfit de noche, o simplemente para resguardarte del frío con clase. ¡La versatilidad que tu guardarropa necesita!"
        },
        'TOALLONES': {
            title: 'Toallones de Algodón Premium',
            imageSrc: 'ruta/a/toallones.jpg', // <<-- ¡MODIFICAR ESTA RUTA!
            description: "Experimenta la diferencia con nuestra toalla de lujo. Hecha con un algodón de absorción superior, te secarás rápidamente mientras disfrutas de una suavidad increíble contra tu piel. Duraderas, esponjosas y con colores que resisten los lavados. ¡Convierte tu rutina de baño en un momento de puro placer y confort!"
        },
        'Cepillos': {
            title: 'Cepillos Desenredantes',
            imageSrc: 'ruta/a/cepillos.jpg', // <<-- ¡MODIFICAR ESTA RUTA!
            description: "Despídete de los tirones y el frizz con nuestro cepillo revolucionario. Diseñado con cerdas flexibles y tecnología anti-quiebre, desenreda sin esfuerzo, suaviza y le da un brillo espectacular a tu cabello. Perfecto para usar en cabello seco o mojado. ¡Menos rotura, más luminosidad! ¡Consigue el tuyo y transforma tu rutina de peinado!"
        },
        'Pizzas': {
            title: 'Pizza Artesanal Clásica',
            imageSrc: 'ruta/a/pizza.jpg', // <<-- ¡MODIFICAR ESTA RUTA!
            description: "¡Prepárate para el sabor! Nuestra pizza es una explosión de delicia: masa artesanal crujiente por fuera y suave por dentro, bañada en una salsa de tomate vibrante y coronada con la mozzarella más fresca y derretida. Cada bocado es la combinación ideal de tradición y sabor irresistible. ¡Pide la tuya y transforma tu día!"
        },
        'Cubresillones': {
            title: 'Cubresillones de Ajuste Universal',
            imageSrc: 'ruta/a/cubresillones.jpg', // <<-- ¡MODIFICAR ESTA RUTA!
            description: "Dale una vida nueva a tu sala con nuestro cubre sillón de ajuste perfecto. No solo protege tu mueble de manchas, mascotas y el desgaste diario, sino que lo transforma al instante con un toque de color y estilo moderno. Es fácil de poner, lavable a máquina y tan suave que querrás pasar horas en él. ¡Renueva sin comprar un sillón nuevo!"
        }
    };

    // 3. Obtener elementos del DOM
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');
    
    // Lista de IDs de los productos para la asignación de eventos
    const productIds = ['Bolsos', 'Pashminas', 'TOALLONES', 'Cepillos', 'Pizzas', 'Cubresillones'];

    // 4. Función para abrir el modal con los datos del producto
    function openProductModal(productId) {
        const data = productsData[productId];
        if (data) {
            modalImage.src = data.imageSrc;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modal.style.display = 'block'; // Mostrar el modal
        }
    }

    // 5. Asignar el evento 'click' a cada producto
    productIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => openProductModal(id));
        }
    });

    // 6. Cerrar el modal al hacer click en la 'X'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 7. Cerrar el modal al hacer click fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 8. Lógica de ejemplo de tu script para cambio de color (mantenida)
    document.getElementById("ig")?.addEventListener("click", cambiararosa)
    function cambiararosa(){
        document.getElementById("ig").style.color = "#cf0463"
    }
});
document.getElementById("Pizzas").addEventListener("click", descpizza)

document.getElementById("Cubresillones").addEventListener("click", desccubresillon)

