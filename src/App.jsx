import React, { useEffect, useRef, useState } from "react"; // Importa React y hooks necesarios (estado, refs, efectos)
import "./App.css"; // Importa estilos globales si los hubiera

// URL de iconos SVG para darle más estilo a los botones
const WhatsAppIcon = () => ( // Define componente de ícono de WhatsApp
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20"> {/* SVG del ícono */}
    <path d="M12.031 3c-4.321 0-7.834 3.513-7.834 7.834 0 1.579.48 3.111 1.397 4.453l-1.463 4.254 4.341-1.439c1.293.754 2.768 1.157 4.095 1.157l.004-.001c4.322 0 7.836-3.513 7.836-7.834s-3.514-7.835-7.836-7.835zm3.848 11.232c-.104.17-.414.475-.584.665-.17.189-.374.283-.585.283-.211 0-.419-.079-.623-.178-.711-.345-2.228-.813-3.668-3.398-.198-.363-.198-.564-.198-.755 0-.211.084-.33.193-.501.109-.17.218-.283.333-.472.115-.19.155-.378.234-.543.078-.166.04-.309-.018-.431-.058-.121-.585-1.411-.799-1.928-.204-.518-.414-.447-.585-.454-.17-.008-.378-.008-.585-.008-.211 0-.543.079-.824.394-.282.316-1.077 1.053-1.077 2.569 0 1.516 1.102 2.977 1.261 3.191.159.213 2.14 3.284 5.071 4.454.743.303 1.332.482 1.789.623.633.197 1.201.168 1.656.096.505-.078 1.643-.674 1.88-1.341.237-.667.237-1.24.162-1.34zm-.214-4.832c-.392-.387-.783-.755-1.189-1.132-.078-.076-.153-.153-.23-.23-.016-.016-.03-.031-.047-.047l-.004-.004z" /> {/* Trazo del ícono */}
  </svg>
); // Fin del componente WhatsAppIcon

const InstagramIcon = () => ( // Define componente de ícono de Instagram
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20"> {/* SVG del ícono */}
    <path d="M12 2c2.716 0 3.056.012 4.122.067 1.066.055 1.79.247 2.453.504.663.257 1.218.607 1.773 1.162.555.555.905 1.11 1.162 1.773.257.663.449 1.387.504 2.453.055 1.066.067 1.406.067 4.122s-.012 3.056-.067 4.122c-.055 1.066-.247 1.79-.504 2.453-.257.663-.607 1.218-1.162 1.773-.555.555-1.11 1.218-1.773 1.218-.663.257-1.387.449-2.453.504-1.066.055-1.406.067-4.122.067s-3.056-.012-4.122-.067c-1.066-.055-1.79-.247-2.453-.504-.663-.257-1.218-.607-1.773-1.162-.555-.555-.905-1.11-1.162-1.773-.257-.663-.449-1.387-.504-2.453-.055-1.066-.067-1.406-.067-4.122s.012-3.056.067-4.122c.055-1.066.247-1.79.504 2.453.257-.663.607-1.218 1.162-1.773.555-.555 1.11-.905 1.773-1.162.663-.257 1.387-.449 2.453-.504C8.944 2.012 9.284 2 12 2zm0 2.2c-2.617 0-2.91 0-3.935.053-1.025.053-1.636.236-2.091.411-.454.174-.823.398-1.233.808-.41.41-.634.779-.808 1.233-.175.455-.358 1.066-.411 2.091-.053 1.025-.053 1.318-.053 3.935s0 2.91.53 3.935c.053 1.025.236 1.636.411 2.091.174.454.398.823.808 1.233.41.41.779.634 1.233.808.455.175 1.066.358 2.091.411 1.025.053 1.318.053 3.935.053s2.91 0 3.935-.053c1.025-.053 1.636-.236 2.091-.411.454-.174.823-.398 1.233-.808.41-.41.634-.779.808-1.233-.175-.455-.358-1.066-.411-2.091-.053-1.025-.053-1.318-.053-3.935s0-2.91-.053-3.935c-.053-1.025-.236-1.636-.411-2.091-.174-.454-.398-.823-.808-1.233-.41-.41-.779-.634-1.233-.808-.455-.175-1.066-.358-2.091-.411-1.025-.053-1.318-.053-3.935-.053zM12 7.7a4.3 4.3 0 100 8.6 4.3 4.3 0 000-8.6zm0 2.2a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2zm6.2-2.5a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" /> {/* Trazo del ícono */}
  </svg>
); // Fin del componente InstagramIcon

const FacebookIcon = () => ( // Define componente de ícono de Facebook
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20"> {/* SVG del ícono */}
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.24 6 14.07 6c1.32 0 2.45.1 2.79.14v2.45h-1.41c-1.33 0-1.61.64-1.61 1.59V12h3.33l-.53 3h-2.8V21.8C18.56 20.87 22 16.84 22 12z" /> {/* Trazo del ícono */}
  </svg>
); // Fin del componente FacebookIcon

const EmailIcon = () => ( // Define componente de ícono de Email
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20"> {/* SVG del ícono */}
    <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.8 2L12 11.2 3.8 6h16.4zM2 18V6l10 5.5L22 6v12H2z" /> {/* Trazo del ícono */}
  </svg>
); // Fin del componente EmailIcon

const WebIcon = () => ( // Define componente de ícono de Web
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20"> {/* SVG del ícono */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.65.09-1.28.26-1.87l2.84 2.84c-.01.03-.02.05-.03.08-1.54 1.76-2.5 3.99-2.57 6.31-.95-1.57-1.5-3.37-1.5-5.36zm14.86 4.95c-.32-1.3-.87-2.5-1.63-3.57l-2.73-2.73c.03.01.06.02.09.03 1.76 1.54 3.99 2.5 6.31 2.57 1.57.95 3.37 1.5 5.36 1.5 1.5-1.5 2.5-3.3 2.5-5.2s-1-3.7-2.5-5.2c-1.5-1.5-3.3-2.5-5.2-2.5s-3.7 1-5.2 2.5c-.75.76-1.3 1.66-1.63 2.65l-2.73-2.73c.1-.17.2-.34.31-.51L12 4.1c-1.07.61-2.07 1.34-2.97 2.19l3.52 3.52c.07.07.12.16.15.25l-.26.26c-.09.03-.18.06-.27.08-1.3.32-2.5.87-3.57 1.63L4.95 18.86c1.3.32 2.5.87 3.57 1.63l2.73 2.73c-.03-.01-.06-.02-.09-.03-1.76-1.54-3.99-2.5-6.31-2.57-1.57-.95-3.37-1.5-5.36-1.5-1.5-1.5-2.5-3.3-2.5-5.2z" /> {/* Trazo del ícono */}
  </svg>
); // Fin del componente WebIcon

// Hook utilitario: calcula spans de filas en grid para evitar huecos
function useMasonryGrid(containerRef, rowHeight = 8, gap = 16) { // Define hook para layout masonry basado en CSS Grid
  useEffect(() => { // Ejecuta tras montaje y cambios de dependencias
    const container = containerRef.current; // Obtiene el contenedor del grid
    if (!container) return; // Si no existe, sale sin hacer nada

    const recompute = () => { // Función que recalcula el span de cada item
      const items = container.querySelectorAll(".masonry-item"); // Selecciona ítems de la galería
      items.forEach((item) => { // Itera cada ítem
        const card = item.querySelector(".card"); // Obtiene la tarjeta interna
        if (!card) return; // Si no hay tarjeta, salta
        const totalHeight = card.getBoundingClientRect().height; // Mide altura real del contenido
        const rowSpan = Math.ceil((totalHeight + gap) / (rowHeight + (gap))); // Calcula cuántas filas debe abarcar
        item.style.gridRowEnd = `span ${rowSpan}`; // Aplica el span de filas para evitar huecos
      });
    }; // Fin de la función de recálculo

    const images = container.querySelectorAll("img"); // Obtiene todas las imágenes dentro del grid
    let loaded = 0; // Contador de imágenes cargadas
    const handleLoad = () => { // Manejador por cada carga de imagen
      loaded += 1; // Incrementa imágenes cargadas
      if (loaded >= images.length) recompute(); // Recalcula cuando todas cargan
    }; // Fin del manejador

    images.forEach((img) => { // Itera imágenes
      if (img.complete) return; // Si ya están completas, no escucha
      img.addEventListener("load", handleLoad); // Escucha evento load
      img.addEventListener("error", handleLoad); // Escucha error para no bloquear
    }); // Fin de la iteración de imágenes

    const ro = new ResizeObserver(recompute); // Observa cambios de tamaño del contenedor
    ro.observe(container); // Empieza a observar el contenedor
    window.addEventListener("resize", recompute); // Recalcula en resize de ventana
    recompute(); // Recalcula al iniciar

    return () => { // Limpieza al desmontar
      images.forEach((img) => { // Quita listeners de imágenes
        img.removeEventListener("load", handleLoad); // Remueve load
        img.removeEventListener("error", handleLoad); // Remueve error
      }); // Fin de remoción
      ro.disconnect(); // Detiene el ResizeObserver
      window.removeEventListener("resize", recompute); // Remueve listener de resize
    }; // Fin de cleanup
  }, [containerRef, rowHeight, gap]); // Dependencias del efecto
} // Fin de useMasonryGrid

export default function App() { // Exporta el componente principal de la aplicación
  const [modalSrc, setModalSrc] = useState(""); // Estado para la imagen del modal
  const gridRef = useRef(null); // Ref para el contenedor de la galería
  useMasonryGrid(gridRef, 8, 16); // Aplica el hook de masonry grid con filas de 8px y gap 16px

  // Combinamos todas las fotos en un solo arreglo de objetos con sus descripciones
  const allPhotos = [ // Arreglo con las fotos y metadatos
    { src: "/imagenes/novios.jpeg", title: "Princesa", desc: "Mesa principal y sesiones de fotos" }, // Foto 1
    { src: "/imagenes/novios1.jpeg", title: "Princesa", desc: "Elegancia en el altar" }, // Foto 2
    { src: "/imagenes/sillon10.jpeg", title: "Princesa", desc: "Detalles impecables" }, // Foto 3
    { src: "/imagenes/Sillon1.jpg", title: "Princesa", desc: "Un trono para los novios" }, // Foto 4
    { src: "/imagenes/Sillonr3.jpg", title: "Rectangular", desc: "Versátil y moderno" }, // Foto 5
    { src: "/imagenes/Sillonr1.jpg", title: "Rectangular", desc: "Comodidad para el living" }, // Foto 6
    { src: "/imagenes/sillon3a.jpeg", title: "3 Cuerpos Marco Dorado", desc: "Ideal para fotos familiares" }, // Foto 7
    { src: "/imagenes/sillon3b.jpeg", title: "3 Cuerpos Marco Dorado", desc: "Ambientes cálidos" }, // Foto 8
    { src: "/imagenes/sillon3c.jpeg", title: "3 Cuerpos Marco Blanco", desc: "Tapizado en blanco" }, // Foto 9
    { src: "/imagenes/sillon3d.jpeg", title: "3 Cuerpos Marco Blanco", desc: "Líneas clásicas" }, // Foto 10
    { src: "/imagenes/candelabro.jpeg", title: "Candelabro (disponible)", desc: "Iluminación de ensueño" }, // Foto 11
    { src: "/imagenes/living.png", title: "Living Completo", desc: "Rincones de relax" }, // Foto 12
  ]; // Fin del arreglo de fotos

  const testimonials = [ // Arreglo de testimonios
    { // Testimonio 1
      quote: "¡Los sillones fueron el toque perfecto para mi fiesta de 15! Elegantes y súper cómodos.", // Cita
      author: "Ana G. (Cumpleaños de 15)", // Autor
    }, // Fin testimonio 1
    { // Testimonio 2
      quote: "Excelente servicio y calidad. Hicieron que nuestra boda brillara, super recomendables!", // Cita
      author: "Martín y Sofía (Boda)", // Autor
    }, // Fin testimonio 2
    { // Testimonio 3
      quote: "Profesionalismo de principio a fin. Montaje impecable y atención al detalle. ¡Servicio de primera!", // Cita
      author: "EventoPlus (Organizadores)", // Autor
    }, // Fin testimonio 3
  ]; // Fin del arreglo de testimonios

  const openModal = (src) => setModalSrc(src); // Abre el modal asignando la ruta de la imagen
  const closeModal = () => setModalSrc(""); // Cierra el modal limpiando la ruta

  // Manejo de errores para cargar imágenes (útil para la compatibilidad de formatos)
  const fallback = (e) => { // Función de fallback para imágenes con error
    const s = e.currentTarget.src.toLowerCase(); // Normaliza la URL a minúscula
    if (s.endsWith(".jpg")) { // Si termina en .jpg
      e.currentTarget.src = s.replace(/\.jpg$/i, ".jpeg"); // Cambia a .jpeg
    } else if (s.endsWith(".jpeg")) { // Si termina en .jpeg
      e.currentTarget.src = s.replace(/\.jpeg$/i, ".png"); // Cambia a .png
    } else { // Si no hay alternativa
      e.currentTarget.style.opacity = 0.5; // Baja opacidad como fallback visual
      e.currentTarget.style.background = 'linear-gradient(45deg, #ddd, #eee)'; // Pone fondo degradado
    }
  }; // Fin de fallback

  return ( // Render del componente
    <> {/* Fragmento React para agrupar nodos */}
      <style>{` /* Estilos embebidos — se añaden pastel y títulos 3D */
        :root{ /* Variables de color para consistencia visual */
          --color-bg-primary: #F9F7F3;
          --color-bg-secondary: #EBE0D0;
          --color-gold: #B8860B;
          --color-rose: #A87680;
          --color-card: #FFFFFF;
          --color-text-dark: #333333;
          --color-text-muted: #6B7280;
          --color-facebook: #3B5998;
          /* Nuevas variables para fondo pastel y títulos 3D */
          --bg1: #fff7fb; /* pastel rosa muy suave */
          --bg2: #fff0e8; /* pastel durazno muy suave */
          --bg3: #f3f9ff; /* pastel celeste suave */
          --bg4: #f8ffe8; /* pastel verde muy claro */
          --violet-dark: #340f61ff; /* violeta oscuro */
          --violet-shadow: #320b66ff; /* sombra profunda 3D */
        }
        *{box-sizing:border-box} /* Asegura box-sizing consistente */
        body{ /* Estilos base del body con fondo pastel multicapas */
          margin:0;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          background:
            radial-gradient(1200px 600px at 12% 8%, rgba(255, 230, 200, 0.35), transparent 12%),
            radial-gradient(900px 500px at 85% 10%, rgba(197, 232, 255, 0.35), transparent 18%),
            radial-gradient(700px 400px at 10% 85%, rgba(221, 255, 210, 0.28), transparent 22%),
            linear-gradient(135deg, var(--bg1), var(--bg2) 45%, var(--bg3) 75%, var(--bg4));
          color: var(--color-text-dark);
        }
        .container{ /* Contenedor max ancho */
          max-width:1100px;
          margin:0 auto;
          padding: 24px 18px;
        }
        .hero{ /* Encabezado superior (se deja igual visualmente) */
          display:flex;
          gap:30px;
          align-items:flex-start;
          background:var(--color-card);
          padding:24px;
          border-radius:16px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
          justify-content:space-between;
          flex-wrap:wrap;
          border-left: 6px solid var(--color-gold);
        }
        .kicker{ /* Chip superior */
          background:var(--color-rose);
          color: var(--color-card);
          padding:8px 16px;
          border-radius:999px;
          font-weight:600;
          display: inline-block;
          letter-spacing: 0.05em;
        }
        .title{ /* Título principal */
          font-size:clamp(24px,4vw,38px);
          font-weight:900;
          color: var(--color-gold);
          margin:10px 0 6px;
          line-height: 1.1;
        }
        /* Títulos secundarios en 3D violeta oscuro */
        h2, h3{
          color: var(--violet-dark);
          letter-spacing: 0.5px;
          text-shadow:
            0.5px 0.5px 0 var(--violet-shadow),
            1px 1px 0 var(--violet-shadow),
            1.5px 1.5px 0 rgba(87, 76, 76, 0.12),
            3px 3px 8px rgba(74, 30, 127, 0.25);
          transform: translateZ(0);
        }
        .lead{ /* Texto introductorio */
          color:var(--color-text-muted);
          margin-top:6px;
          max-width:700px;
        }
        .hero-actions{ /* Contenedor de CTAs */
          display:flex;
          gap:16px;
          margin-top:20px;
          flex-wrap:wrap;
        }
        .btn{ /* Botón base */
          display:inline-flex;
          gap:8px;
          align-items:center;
          padding:12px 20px;
          border-radius:10px;
          border:0;
          cursor:pointer;
          font-weight:600;
          text-decoration:none;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .btn:hover{ /* Hover botón */
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .btn-whatsapp{ background:#25D366; color:#fff; } /* Botón WhatsApp */
        .btn-ig{ /* Botón Instagram con degradado */
          background:linear-gradient(45deg, #F56040, #F77737, #C13584, #833AB4, #5851DB);
          color:#fff;
        }
        .btn-facebook{ background:var(--color-facebook); color:#fff; } /* Botón Facebook */
        .btn-secondary { /* Botón secundario */
          background-color: var(--color-bg-secondary);
          color: var(--color-text-dark);
          border: 1px solid var(--color-bg-secondary);
        }
        .logo-box{ /* Caja del logo */
          width:280px;
          min-width: 250px;
          display:flex;
          flex-direction:column;
          gap:10px;
          align-items:center;
          text-align: center;
        }
        .logo-box img{ /* Imagen del logo */
          width:200px;
          height:200px;
          object-fit:cover;
          border-radius:50%;
          box-shadow:0 8px 20px rgba(0,0,0,0.1);
          border: 4px solid var(--color-gold);
          transition: transform 0.3s;
        }
        .logo-box img:hover { transform: scale(1.05); } /* Hover del logo */

        /* GALERÍA INFERIOR (NUEVO LAYOUT: CSS GRID + DENSE + ROW SPAN) */
        .masonry-gallery{ /* Contenedor grid que elimina huecos en parte baja */
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 8px;
          grid-auto-flow: dense;
          gap: 16px;
          margin-top: 24px;
        }
        .masonry-item{ /* Ítems que span filas dinámicamente */
          width: 100%;
          /* grid-row-end se setea vía JS para cada tarjeta */
        }
        .card{ /* Tarjeta visual de imagen + texto */
          background:var(--color-card);
          padding:12px;
          border-radius:12px;
          box-shadow:0 6px 15px rgba(0,0,0,0.05);
          overflow:hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.2s;
          border: 1px solid #f1ece5;
        }
        .card:hover{ /* Efecto hover de elevación */
          transform: translateY(-4px);
          box-shadow:0 12px 25px rgba(0,0,0,0.1);
          border-color: var(--color-bg-secondary);
        }
        .card img{ /* Imágenes responsivas */
          width:100%;
          height: auto;
          object-fit:cover;
          border-radius:8px;
          display:block;
          transition: opacity 0.3s, transform 0.3s;
          will-change: transform;
        }
        .card h4 { /* Título de la tarjeta */
          margin: 10px 0 4px;
          color: var(--color-text-dark);
          font-weight: 700;
        }
        .card p { /* Descripción de la tarjeta */
          color: var(--color-text-muted);
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        /* Layout de contenido y aside se mantiene */
        .grid-2{
          display:grid;
          grid-template-columns:1fr 300px;
          gap:24px;
          margin-top:30px;
          align-items: flex-start;
        }
        .feature-box { /* Caja de features */
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 10px;
        }
        .feature{ /* Item de feature */
          background: var(--color-card);
          padding:14px;
          border-radius:10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          border-left: 4px solid var(--color-rose);
          transition: background-color 0.2s;
          flex: 1 1 calc(50% - 12px);
          min-width: 250px;
        }
        .feature:hover { background-color: #fffaf7; } /* Hover feature */
        .feature strong { color: var(--color-text-dark); } /* Título feature */
        .feature div { color: var(--color-text-muted); font-size: 0.9rem; } /* Texto feature */

        /* Aside de contacto */
        .contact-box {
            background: var(--color-card);
            padding: 16px;
            border-radius: 14px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.05);
            border: 1px solid var(--color-bg-secondary);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .contact-box .btn {
            width: 100%;
            justify-content: center;
            padding: 10px 15px;
            font-size: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .contact-box .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .contact-title {
            color: var(--color-gold);
            font-weight: 800;
            margin: 0 0 15px 0;
            border-bottom: 2px solid var(--color-bg-secondary);
            padding-bottom: 8px;
        }
        .contact-info-list { list-style: none; padding: 0; margin: 0; } /* Lista contacto */
        .contact-info-item {
            display: flex; align-items: center; gap: 10px; padding: 6px 0;
            color: var(--color-text-dark); font-size: 0.95rem;
        }
        .contact-info-item a { color: var(--color-text-muted); text-decoration: none; transition: color 0.2s; } /* Link contacto */
        .contact-info-item a:hover { color: var(--color-gold); } /* Hover link */
        .contact-info-item svg { color: var(--color-rose); flex-shrink: 0; } /* Ícono contacto */
        .qr-section { margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--color-bg-secondary); text-align: center; } /* Sección QR */
        .qr-section img {
            width: 120px; height: 120px; border-radius: 8px; display: block; margin: 10px auto;
            border: 3px solid var(--color-gold); box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .qr-section div { color: var(--color-text-muted); font-size: 0.85rem; } /* Texto QR */

        /* Testimonios */
        .testimonials { margin-top: 30px; } /* Sección testimonios */
        .testimonial-card {
            background: var(--color-card); padding: 20px; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.05);
            margin-bottom: 15px; border-left: 5px solid var(--color-gold);
        }
        .testimonial-card blockquote { margin: 0 0 10px 0; font-style: italic; color: var(--color-text-dark); line-height: 1.5; } /* Cita */
        .testimonial-card cite { display: block; text-align: right; font-weight: 600; color: var(--color-rose); font-size: 0.9rem; } /* Autor */

        /* Modal de imagen */
        .modal{
          position:fixed; inset:0; display:flex; align-items:center; justify-content:center;
          background:rgba(0,0,0,0.85); visibility:hidden; opacity:0; transition:opacity .2s; z-index: 100;
        }
        .modal.open{ visibility:visible; opacity:1; } /* Estado abierto modal */
        .modal img{
          max-width:95%; max-height:85%; border-radius:12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); cursor: pointer;
        }
        footer{ margin-top:40px; text-align:center; padding-bottom: 20px; color:var(--color-text-muted); font-size: 0.9rem; } /* Footer */

        /* Responsivo */
        @media(max-width:900px){
          .hero{flex-direction:column;align-items:center; text-align: center;}
          .hero-content { align-items: center; }
          .hero-actions{justify-content: center;}
          .logo-box img{width:160px;height:160px;}
          .grid-2{grid-template-columns:1fr;}
          .feature { flex: 1 1 100%; }
          .contact-box { margin-top: 24px; }
        }
        @media (max-width: 900px) {
          .masonry-gallery{ grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .masonry-gallery{ grid-template-columns: 1fr; }
        }
      `}</style> {/* Fin de estilos embebidos */}

      {/* JSON-LD para SEO local (sin tocar la mitad superior visual) */}
      <script type="application/ld+json" // Inserta datos estructurados para SEO
        dangerouslySetInnerHTML={{ // Usa seteado peligroso para JSON puro
          __html: JSON.stringify({ // Convierte objeto a JSON
            "@context": "https://schema.org", // Contexto de schema.org
            "@type": "LocalBusiness", // Tipo de negocio
            name: "Sillones para Eventos", // Nombre del negocio
            image: "https://www.sillonesparaeventos.com.ar/imagenes/logosillon5.jpg", // Imagen de marca
            url: "https://www.sillonesparaeventos.com.ar", // URL del sitio
            telephone: "+54 9 291 419 7144", // Teléfono de contacto
            address: { "@type": "PostalAddress", addressLocality: "Bahía Blanca", addressRegion: "Buenos Aires", addressCountry: "AR" }, // Dirección
            sameAs: [ // Redes sociales
              "https://instagram.com/sillones.para.eventos",
              "https://www.facebook.com/profile.php?id=61566701043152"
            ], // Fin de sameAs
            priceRange: "$$", // Rango de precio
            areaServed: "Argentina" // Área de servicio
          }) // Fin de JSON.stringify
        }} // Fin de dangerouslySetInnerHTML
      /> {/* Fin del script JSON-LD */}

      <div className="container"> {/* Contenedor principal centrado */}
        <header className="hero" role="banner"> {/* Encabezado accesible de la página */}
          <div style={{ flex: 1, minWidth: 260 }} className="hero-content"> {/* Columna de texto principal del hero */}
            <div className="kicker">Alquiler · Bahía Blanca</div> {/* Chip ubicacion/servicio */}
            <h1 className="title">Alquiler de Sillones de Lujo para Eventos</h1> {/* Título SEO H1 */}
            <h2 style={{ marginTop: 8, fontWeight: 700, fontSize: '1.2rem' }}>Sillones Princesas, Presidenciales y de 3 Cuerpos</h2> {/* Subtítulo H2 (ahora con estilo 3D global) */}
            <p className="lead">Sumamos <strong>glamour</strong> y <strong>comodidad</strong> a tu cumple de 15, casamiento y sesion de fotos. Alquilamos sillones presidenciales, coloniales y de 3 cuerpos en Bahía Blanca, Cerri y Punta Alta. Ofrecemos traslado, montaje y retiro; también enviamos sillones embalados a localidades cercanas mediante comisionistas. <strong>Elegi los sillones que mas te gusten y contactanos!</strong></p> {/* Texto descriptivo con negritas semánticas */}
            <div className="hero-actions"> {/* Contenedor de CTAs */}
              <a className="btn btn-whatsapp" href="https://wa.me/5492914197144" target="_blank" rel="noreferrer"> {/* CTA WhatsApp */}
                <WhatsAppIcon /> {/* Ícono WhatsApp */}
                Reservar por WhatsApp {/* Texto del botón */}
              </a> {/* Fin CTA WhatsApp */}
              <a className="btn btn-ig" href="https://instagram.com/sillones.para.eventos" target="_blank" rel="noreferrer"> {/* CTA Instagram */}
                <InstagramIcon /> {/* Ícono Instagram */}
                Ver Instagram {/* Texto del botón */}
              </a> {/* Fin CTA Instagram */}
              <a className="btn btn-facebook" href="https://www.facebook.com/profile.php?id=61566701043152" target="_blank" rel="noreferrer"> {/* CTA Facebook */}
                <FacebookIcon /> {/* Ícono Facebook */}
                Ver Facebook {/* Texto del botón */}
              </a> {/* Fin CTA Facebook */}
              <a className="btn btn-secondary" href="#galeria">Ver galería completa</a> {/* Enlace a galería */}
            </div> {/* Fin hero-actions */}
          </div> {/* Fin columna texto hero */}

          <div className="logo-box" aria-hidden> {/* Caja del logo (decorativa) */}
            <img
              src="/imagenes/logosillon5.jpg" // Ruta del logo
              alt="Logo Sillones Princesas" // Texto alternativo para accesibilidad/SEO
              onError={(e) => (e.currentTarget.src = '/imagenes/logosillon5.png')} // Fallback a PNG si falla JPG
              loading="lazy" // Carga diferida para rendimiento
            /> {/* Imagen del logo */}
            <div style={{ width: '100%', background: 'var(--color-bg-primary)', padding: 10, borderRadius: 8, textAlign: 'center', border: '2px solid var(--color-bg-secondary)' }}> {/* Caja informativa */}
              <strong style={{ color: 'var(--color-gold)' }}>Servicio Premium por día</strong> {/* Destacado */}
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Consulta fechas disponibles y tarifas</div> {/* Texto auxiliar */}
            </div> {/* Fin caja informativa */}
          </div> {/* Fin logo-box */}
        </header> {/* Fin header */}

        <section id="galeria"> {/* Sección de galería (mitad inferior) */}
          <h2 style={{ margin: '30px 0 15px', color: 'var(--color-text-dark)' }}>Galería — Colección Exclusiva</h2> {/* Título de galería (recibe 3D) */}

          {/* NUEVO: Contenedor Grid Masonry para eliminar huecos en la parte baja */}
          <div className="masonry-gallery" ref={gridRef} aria-label="Galería de sillones y ambientaciones"> {/* Grid que usa spans dinámicos */}
            {allPhotos.map((photo, i) => ( // Itera todas las fotos
              <div className="masonry-item" key={i}> {/* Ítem individual del grid */}
                <div className="card" onClick={() => openModal(photo.src)} role="button" aria-label={`Ampliar ${photo.title}`}> {/* Tarjeta clickeable */}
                  <img
                    src={photo.src} // Ruta de la imagen
                    alt={`Sillón ${photo.title} — ${photo.desc}`} // Alt descriptivo para SEO
                    onError={fallback} // Fallback de formatos
                    loading="lazy" // Lazy load
                    decoding="async" // Decodificación asíncrona para performance
                  /> {/* Imagen de la tarjeta */}
                  <h4>{photo.title}</h4> {/* Título de la tarjeta */}
                  <p>{photo.desc}</p> {/* Descripción de la tarjeta */}
                </div> {/* Fin card */}
              </div> // Fin masonry-item
            ))} {/* Fin map de fotos */}

            {/* Ítem informativo sin imagen para mantener flujo y sin huecos */}
            <div className="masonry-item"> {/* Ítem de próximos lanzamientos */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> {/* Tarjeta centrada */}
                <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '8px', textAlign: 'center' }}>Proximamente Puffs y Mesas</div> {/* Título del teaser */}
                <div style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>Nuevas adiciones a nuestro catálogo. ¡Pronto más opciones para tu living de eventos!</div> {/* Texto del teaser */}
              </div> {/* Fin card teaser */}
            </div> {/* Fin ítem teaser */}
          </div> {/* Fin masonry-gallery */}
        </section> {/* Fin sección galería */}

        <div className="grid-2"> {/* Layout de contenido principal + aside */}
          <main> {/* Contenido principal */}
            {/* SERVICIOS INCLUIDOS — se mantiene estructura, sin huecos por ser grid flexible */}
            <section style={{ marginTop: 18 }}> {/* Sección servicios */}
              <h3>Servicios incluidos</h3> {/* Título servicios (recibe 3D) */}

              <div className="feature-box"> {/* Contenedor características */}
                <div className="feature"> {/* Item característica */}
                  <strong>Traslado y Logística</strong> {/* Título característica */}
                  <div style={{ color: 'var(--color-text-muted)' }}> {/* Texto */}
                    Coordinamos la entrega y retiro en el salón de eventos. {/* Descripción */}
                  </div> {/* Fin texto */}
                </div> {/* Fin feature */}

                <div className="feature"> {/* Item característica */}
                  <strong>Montaje Profesional</strong> {/* Título característica */}
                  <div style={{ color: 'var(--color-text-muted)' }}> {/* Texto */}
                    Colocamos los sillones con el cuidado que requiere tu decoración. {/* Descripción */}
                  </div> {/* Fin texto */}
                </div> {/* Fin feature */}

                <div className="feature"> {/* Item característica */}
                  <strong>Higiene Garantizada</strong> {/* Título característica */}
                  <div style={{ color: 'var(--color-text-muted)' }}> {/* Texto */}
                    Limpieza y sanitización profesional después de cada evento. {/* Descripción */}
                  </div> {/* Fin texto */}
                </div> {/* Fin feature */}

                <div className="feature"> {/* Item característica */}
                  <strong>Asesoramiento</strong> {/* Título característica */}
                  <div style={{ color: 'var(--color-text-muted)' }}> {/* Texto */}
                    Te ayudamos a elegir el sillón ideal para tu temática. {/* Descripción */}
                  </div> {/* Fin texto */}
                </div> {/* Fin feature */}
              </div> {/* Fin contenedor características */}
            </section> {/* Fin sección servicios */}

            {/* TESTIMONIOS */}
            <section className="testimonials"> {/* Sección testimonios */}
              <h3 style={{ marginTop: 30 }}>Opiniones de nuestros Clientes</h3> {/* Título testimonios (recibe 3D) */}
              {testimonials.map((t, i) => ( // Itera testimonios
                <div className="testimonial-card" key={i}> {/* Tarjeta de testimonio */}
                  <blockquote>"{t.quote}"</blockquote> {/* Cita textual */}
                  <cite>{t.author}</cite> {/* Autor de la cita */}
                </div> // Fin tarjeta testimonio
              ))} {/* Fin map de testimonios */}
            </section> {/* Fin sección testimonios */}
          </main> {/* Fin main */}

          <aside> {/* Barra lateral con contacto */}
            <div className="contact-box"> {/* Caja de contacto estilizada */}
              <h4 className="contact-title">¡Contáctanos!</h4> {/* Título de contacto */}

              <a className="btn btn-whatsapp" href="https://wa.me/5492914197144" target="_blank" rel="noreferrer"> {/* Enlace WhatsApp */}
                <WhatsAppIcon /> {/* Ícono */}
                WhatsApp: +54 9 291 4 197144 {/* Texto */}
              </a> {/* Fin enlace WhatsApp */}

              <a className="btn btn-ig" href="https://instagram.com/sillones.para.eventos" target="_blank" rel="noreferrer"> {/* Enlace Instagram */}
                <InstagramIcon /> {/* Ícono */}
                Instagram: @sillones.para.eventos {/* Texto */}
              </a> {/* Fin enlace Instagram */}

              <a className="btn btn-facebook" href="https://www.facebook.com/profile.php?id=61566701043152" target="_blank" rel="noreferrer"> {/* Enlace Facebook */}
                <FacebookIcon /> {/* Ícono */}
                Facebook: Sillones para eventos {/* Texto */}
              </a> {/* Fin enlace Facebook */}

              <ul className="contact-info-list" style={{ marginTop: '10px' }}> {/* Lista de info */}
                <li className="contact-info-item"> {/* Item email */}
                  <EmailIcon /> {/* Ícono email */}
                  <a href="mailto:sillones.para.eventos@gmail.com">sillones.para.eventos@gmail.com</a> {/* Link mailto */}
                </li> {/* Fin item email */}
                <li className="contact-info-item"> {/* Item web */}
                  <WebIcon /> {/* Ícono web */}
                  <a href="http://www.sillonesparaeventos.com.ar" target="_blank" rel="noreferrer">www.sillonesparaeventos.com.ar</a> {/* Link web */}
                </li> {/* Fin item web */}
              </ul> {/* Fin lista contacto */}

              <div className="qr-section"> {/* Sección QR */}
                <h4 style={{ margin: '0 0 10px 0', fontWeight: 600, color: 'var(--color-text-dark)' }}>Escanea nuestro Instagram</h4> {/* Título QR */}
                <img src="/imagenes/QR.png" alt="Código QR de Instagram" onError={fallback} loading="lazy" /> {/* Imagen QR con fallback */}
                <div>@sillones.para.eventos</div> {/* Usuario IG */}
              </div> {/* Fin sección QR */}
            </div> {/* Fin contact-box */}
          </aside> {/* Fin aside */}
        </div> {/* Fin grid-2 */}
      </div> {/* Fin container */}

      {/* Modal de imagen (clic para cerrar) */}
      <div className={`modal ${modalSrc ? "open" : ""}`} onClick={closeModal} role="dialog" aria-modal="true" aria-label="Vista ampliada de imagen"> {/* Contenedor modal */}
        {modalSrc && ( // Render condicional si hay imagen
          <img src={modalSrc} alt="Imagen ampliada" loading="lazy" /> // Imagen ampliada con lazy
        )} {/* Fin condicional */}
      </div> {/* Fin modal */}
    </> // Fin fragmento
  ); // Fin del return
} // Fin componente App