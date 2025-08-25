document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || 'home';

  document.querySelectorAll('nav a, .footer-links a').forEach(link => link.classList.remove('active'));
  const activeLink = document.getElementById(page + '-link');
  if (activeLink) activeLink.classList.add('active');
  else document.getElementById('home-link').classList.add('active');

  const contentDiv = document.getElementById('content');
  loadPageWithTransition(page, contentDiv);
});

// Transición suave
function loadPageWithTransition(page, container) {
  container.style.opacity = '0';
  container.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    switch (page) {
      case 'updates': loadUpdatesPage(container); break;
      case 'compatibility': loadCompatibilityPage(container); break;
      case 'howto': loadHowToPage(container); break;
      case 'download': loadDownloadPage(container); break;
      case 'terms': loadTermsPage(container); break;
      default: loadHomePage(container); break;
    }
    requestAnimationFrame(() => container.style.opacity = '1');
  }, 300);
}

// Menú dinámico
document.querySelectorAll('nav a, .footer-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.id.replace('-link', '');
    const contentDiv = document.getElementById('content');

    const newUrl = page === 'home' ? 'index.html' : `index.html?page=${page}`;
    history.pushState({}, '', newUrl);

    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');

    loadPageWithTransition(page, contentDiv);
  });
});

// Soporte botones navegador
window.addEventListener('popstate', () => {
  const page = new URLSearchParams(window.location.search).get('page') || 'home';
  const contentDiv = document.getElementById('content');
  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
  const active = document.getElementById(page + '-link');
  if (active) active.classList.add('active');
  loadPageWithTransition(page, contentDiv);
});

// =======================
// CARGA: INICIO
// =======================
function loadHomePage(container) {
  container.innerHTML = `
<h1 class="page-title">Bienvenido a Crisutf TV+</h1>
<div class="welcome-grid">
  <div class="card feature-card">
    <div class="card-header">
      <span class="feature-icon">📺</span>
      <h2>¿Qué es Crisutf TV+?</h2>
    </div>
    <div class="card-content">
      <div class="feature-highlight">
        <p class="main-description"><strong>Crisutf TV+</strong> es una plataforma IPTV con canales de <strong>listas públicas</strong>, sin depender de señales de otros proveedores.</p>
      </div>
      <div class="feature-list">
        <div class="feature-item"><span class="check-icon">✅</span><span>Compatible con <strong>Smart TV</strong>, <strong>móvil</strong> y <strong>PC</strong></span></div>
        <div class="feature-item"><span class="check-icon">✅</span><span>Sin bloqueos de <strong>LaLiga</strong></span></div>
        <div class="feature-item"><span class="check-icon">✅</span><span>Fácil, rápido y sin complicaciones</span></div>
      </div>
    </div>
  </div>
  <div class="card action-card">
    <div class="card-header">
      <span class="feature-icon">🎬</span>
      <h2>¡Empieza a ver!</h2>
    </div>
    <div class="card-content">
      <p class="action-description">Accede directamente a tu plataforma con un solo clic.</p>
      <div class="info-box">
        <span class="info-icon">ℹ️</span>
        <p>Si tu mando no es tipo Remote Magic, el vídeo será a pantalla completa. Usa los números del <strong>2 al 99</strong> para cambiar de canal.</p>
      </div>
      <p class="note">Esto no afecta a usuarios de Android TV con la app.</p>
      <a href="/pages/iptv_access.html" class="cta-button"><span class="cta-icon">▶️</span><span class="cta-text">Empezar a ver</span></a>
    </div>
  </div>
  <div class="card features-card">
    <div class="card-header">
      <span class="feature-icon">⭐</span>
      <h2>Características principales</h2>
    </div>
    <div class="card-content">
      <div class="features-grid">
        <div class="feature-box"><span class="feature-box-icon">🇪🇸</span><span>Canales públicos de España</span></div>
        <div class="feature-box"><span class="feature-box-icon">📱</span><span>Interfaz adaptativa</span></div>
        <div class="feature-box"><span class="feature-box-icon">🔄</span><span>Actualizaciones frecuentes</span></div>
        <div class="feature-box"><span class="feature-box-icon">📲</span><span>Apps para todos los dispositivos</span></div>
      </div>
    </div>
  </div>
</div>`;
}

// =======================
// CARGA: COMPATIBILIDAD
// =======================
function loadCompatibilityPage(container) {
  container.innerHTML = `
${/* Tu bloque HTML completo de compatibilidad va aquí */''}
<section class="channel-compatibility">
  
                    <h1 class="page-title">Compatibilidad de Canales</h1>

 
                    <div class="info-card">
                        <h2><i class="fas fa-info-circle"></i> Estado de los canales por dispositivo</h2>
                        <div class="info-content">
                            <p><i class="fas fa-server"></i> Los canales que usan <strong>HTTP</strong> solo funcionan desde la <strong>app</strong> (sección <em>Descargar</em>) en modo <strong>servidor + Python</strong>. Esto está pensado para <strong>Smart TVs</strong> sin Android TV conectadas a la misma <strong>red local</strong> que el PC servidor.</p>
                            <p><i class="fas fa-exclamation-triangle"></i> Algunos canales, como los de <strong>Rakuten TV</strong>, pueden fallar debido a bloqueos en el archivo <code>.m3u8</code> o restricciones del <strong>Firewall</strong>.</p>
                            <p><i class="fas fa-exclamation-triangle"></i>Como por ejemplo <strong>HIT TV</strong> que se detecta el server como pagina +18 (No se por que jajaja pero ya se soluciono) </p>
                            </div>
                        </div>
                        <div class="channels-summary">
                            <h3><i class="fas fa-tv"></i> Canales añadidos</h3>
                            <div class="channels-grid">
                                <div class="channel-count">
                                    <i class="fas fa-broadcast-tower"></i>
                                    <span>Crisutf: 1 canal</span>
                                    </div>
                                    <div class="channel-count">
                                        <i class="fas fa-flag"></i>
                                        <span>España: 73 canales</span>
                                        </div>
                                        <div class="channel-count">
                                            <i class="fas fa-flag"></i>
                                            <span>Rakuten TV: 14 canales</span>
                                            </div>
                                            <div class="channel-count">
                                                <i class="fas fa-flag"></i>
                                                <span>Samsung TV: 4 canales</span>
                                                </div>
                                                <div class="channel-count">
                                                    <i class="fas fa-flag"></i>
                                                    <span>Pluto TV: 13 canales</span>
                                                    </div>
                                                </div>                                                
                                            </div>
  
                                            <div class="compatibility-table">
                                                <table>
                                                    <thead>  
                                                        <tr>
                                                            <th>Canal</th>
                                                            <th><i class="fas fa-tv"></i> Smart TV</th> 
                                                            <th><i class="fas fa-globe"></i> Navegador web</th>
                                                            <th><i class="fas fa-server"></i> App (servidor local)</th>
                                                            <th><i class="fas fa-mobile-alt"></i> App</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Canal Crisutf</strong>
                                                                        </td>
                                                                            <td><span class="status-tag success">✓</span></td>
                                                                            <td><span class="status-tag success">✓</span></td>
                                                                            <td><span class="status-tag success">✓</span></td>
                                                                            <td><span class="status-tag success">✓</span></td>
                                                                        </tr>                                                                
                                                                        <td>
                                                                            <strong>Canales HTTPS ES </strong>
                                                                            <div class="channel-list">La 1, La 2, TeleMadrid, Canal Sur Andalucía, Aragón TV, À Punt TV, TRECE, BEIN SPORT EXTRA Ñ, RealMadrid TV, RTVE Cuéntame, etc...</div>
                                                                        </td>
                                                                        <td><span class="status-tag success">✓</span></td>
  
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
</tr>
<tr>
    <td>
        <strong>Canales HTTP ES </strong>
        <div class="channel-list">8madrid TV, AMC, Calle 13, La Sexta, Telecinco, HBO PLUS, EUROSPORT 1 y 2, National Geographic, Nickelodeon, Paramount.</div>
        </td>
        <td><span class="status-tag success">✓</span></td>
        <td><span class="status-tag error">✗</span></td>
        <td><span class="status-tag success">✓</span></td>
        <td><span class="status-tag success">✓</span></td>
        </tr>
        <tr>
            <td>
                <strong>Canales HTTPS ES Rakuten TV</strong>
                <div class="channel-list">Rakuten Action / Comedia / Cops / Crimenes / Estilo y Vida / Euronews / FIFA+ / Ideas en 5 min / LaLiga Inside / Nature Time / Peliculas Top / Viki / Vevo Pop Spain</div>
                </td>
                <td><span class="status-tag success">✓</span></td>
                <td><span class="status-tag success">✓</span></td>
                <td><span class="status-tag error">✗</span></td>
                <td><span class="status-tag success">✓</span></td>
                </tr>
                <tr>
  <td>
    <strong>Canales Samsung TV</strong>
    <div class="channel-list">Kanal D Drama, People are Awesome, The Pet Collective y Trace Sport Stars</div>
  </td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
</tr>
<tr>
  <td>
    <strong>Canales Pluto TV</strong>
    <div class="channel-list">BBC Drama, Cine Clasico, MTV Originals, Pluto Accion / Cocina / Kids Classics / Kids / Telenovelas</div>
  </td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
  <td><span class="status-tag success">✓</span></td>
</tr>

      </tbody>
    </table>
  </div>

  <div class="important-notes">
    <h3><i class="fas fa-clipboard-list"></i> Notas importantes</h3>
    <ul>
      <li><i class="fas fa-check-circle"></i> La mayoría de canales funcionan correctamente en todos los dispositivos.</li>
      <li><i class="fas fa-mobile-alt"></i> Para la mejor experiencia, recomendamos usar la aplicación oficial.</li>
      <li><i class="fas fa-lock"></i> Los canales HTTPS ofrecen mayor compatibilidad.</li>
    </ul>
  </div>

  <div class="restrictions-card">
    <h2><i class="fas fa-shield-alt"></i> Soporte técnico</h2>
    <div class="restrictions-content">
      <p><i class="fas fa-envelope"></i> Si tienes problemas, escríbeme a <a href="mailto:wtf.crisu@gmail.com">wtf.crisu@gmail.com</a>.</p>
    </div>
  </div>
`;
}

// =======================
// CARGA: CÓMO FUNCIONA
// =======================
function loadHowToPage(container) {
  container.innerHTML = `
${/* Aquí va tu contenido exacto de la sección Cómo funciona */''}
<h1 class="page-title">Controles Crisutf TV+</h1>

                <div class="instructions-grid">
                    <div class="card device-card">
                        <div class="card-header">
                            <span class="device-icon">📺</span>
                            <h2>Smart TV (Web solo)</h2>
                        </div>
                        <div class="card-content">
                            <div class="shortcut-list">
                                <div class="shortcut-item">
                                    <span class="key-combo">2 veces apretando 1</span>
                                    <span class="key-action">Activar vídeo completo</span>
                                </div>
                                <div class="shortcut-item">
                                    <span class="key-combo">OK</span>
                                    <span class="key-action">Pantalla completa (mandos Magic)</span>
                                </div>
                                <div class="shortcut-item">
                                    <span class="key-combo">2-9</span>
                                    <span class="key-action">Cambio rápido de canal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card device-card">
                        <div class="card-header">
                            <span class="device-icon">💻</span>
                            <h2>PC / Laptop</h2>
                        </div>
                        <div class="card-content">
                            <div class="shortcut-list">
                                <div class="shortcut-item">
                                    <span class="key-combo">Apretando F 2 Veces</span>
                                    <span class="key-action">Activar vídeo completo</span>
                                </div>
                                <div class="shortcut-item">
                                    <span class="key-combo">1-9</span>
                                    <span class="key-action">Cambio rápido de canal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card device-card">
                        <div class="card-header">
                            <span class="device-icon">📱</span>
                            <h2>Móvil / Tablet</h2>
                        </div>
                        <div class="card-content">
                            <div class="shortcut-list">
                                <div class="shortcut-item">
                                    <span class="key-combo">Tocar video</span>
                                    <span class="key-action">Pantalla completa</span>
                                </div>
                                <div class="shortcut-item">
                                    <span class="key-combo">⬅️ Dar atras</span>
                                    <span class="key-action">Salir de pantalla completa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                   
`;
}

// =======================
// CARGA: DESCARGAR
// =======================
function loadDownloadPage(container) {
  container.innerHTML = `
<h1 class="page-title">Descargar Crisutf TV+</h1>
<div class="card">
  <div style="margin-top: 30px;">
    <h1>📥 Descargar App</h1>
    <p>Ya está disponible la app para TV (Android TV Sys), Móvil/Tablet, PC y en modo servidor local. Selecciona tu versión preferida:</p>
    <div class="download-grid">
      <a href="download/Crisutf.TV-Mobile.apk" class="download-btn"><span class="download-icon">📱</span><span class="download-text"><strong>Android (Móvil)</strong><small>Para teléfonos y tablets</small></span></a>
      <a href="download/Crisutf.TV-TV.apk" class="download-btn"><span class="download-icon">📺</span><span class="download-text"><strong>Android TV</strong><small>Para Smart TV y TV Box</small></span></a>
      <a href="https://drive.google.com/file/d/15DtlCrPpfsVACk9GyDZalDcyZ0W4QIp3/view" class="download-btn"><span class="download-icon">💻</span><span class="download-text"><strong>Windows (PC)</strong><small>Para computadoras</small></span></a>
      <a href="download/Crisutf.TV-ServerLocal.exe" class="download-btn"><span class="download-icon">🖥️</span><span class="download-text"><strong>Modo Servidor <h5>(Fuera de soporte)</h5></strong><small>Para uso en red local</small></span></a>
    </div>
  </div>
</div>`;
}

// =======================
// CARGA: ACTUALIZACIONES
// =======================
function loadUpdatesPage(container) {
  container.innerHTML = `
<h1 class="page-title">Actualizaciones y Cambios</h1>

                <div class="card" id="updates-container">
                    <div class="card-content">
                        <div class="updates-list">
                            <!-- Las actualizaciones se cargarán desde el JSON -->
                        </div>
                    </div>
                </div>
`;

  // Cargar actualizaciones desde el archivo JSON
  fetch('assets/data/updates.json')
    .then(response => response.json())
    .then(data => {
      const updatesContainer = document.querySelector('.updates-list');
      
      // Limpiar el contenedor
      updatesContainer.innerHTML = '';
      
      // Recorrer las actualizaciones y crear elementos HTML
      data.updates.forEach(update => {
        const updateItem = document.createElement('div');
        updateItem.className = 'update-item';
        
        updateItem.innerHTML = `
          <div class="update-date">${update.date}</div>
          <h3 class="update-title">${update.title}</h3>
          <p>${update.description}</p>
        `;
        
        updatesContainer.appendChild(updateItem);
      });
    })
    .catch(error => {
      console.error('Error al cargar las actualizaciones:', error);
      document.querySelector('#updates-container').innerHTML = `
        <div class="card-content">
          <p>Error al cargar las actualizaciones. Por favor, intenta de nuevo más tarde.</p>
        </div>
      `;
    });
}


// =======================
// CARGA: TÉRMINOS Y CONDICIONES
// =======================
function loadTermsPage(container) {
  container.innerHTML = `
<h1 class="page-title">Términos y Condiciones</h1>

<div class="card terms-card">
    <div class="terms-section">
        <h2>1. Introducción</h2>
        <p>Bienvenido a Crisutf TV+. Este proyecto comenzó como una iniciativa personal y pública creada por Crisu, con el objetivo de experimentar, aprender y compartir durante el verano. El servicio se ofrece sin fines de lucro y sin intención comercial.</p>
        <p>Al acceder a Crisutf TV+, aceptas estos términos y condiciones. Si no estás de acuerdo, por favor no utilices el servicio.</p>
    </div>
    
    <div class="terms-section">
        <h2>2. Origen de los contenidos</h2>
        <p>Todos los canales disponibles en Crisutf TV+ provienen de repositorios públicos en GitHub y otras fuentes abiertas de Internet. El creador no es propietario ni responsable del contenido transmitido.</p>
        <p>Este proyecto demuestra cómo los recursos públicos pueden ser reutilizados de manera creativa, pero no tiene control sobre la estabilidad o legalidad de los canales enlazados.</p>
    </div>
    
    <div class="terms-section">
        <h2>3. Descargo de responsabilidad</h2>
        <p>Crisutf TV+ se ofrece "tal cual" y "según disponibilidad". El creador no garantiza que:</p>
        <ul>
            <li>Los canales funcionen de manera continua o sin interrupciones.</li>
            <li>Los enlaces permanezcan activos o actualizados.</li>
            <li>El servicio esté libre de errores, virus u otros problemas técnicos.</li>
        </ul>
        <p>Si alguna marca, canal o empresa considera inapropiada la inclusión de su señal, puede solicitar su eliminación y se respetará sin inconvenientes.</p>
    </div>
    
    <div class="terms-section">
        <h2>4. Seguridad de las aplicaciones</h2>
        <p>Las versiones de Crisutf TV+ que puedan distribuirse en formato APK, EXE o cualquier otro tipo de archivo ejecutable no contienen virus, spyware ni software malicioso. Son simples empaquetados creados con herramientas comunes como WinRAR para facilitar la instalación.</p>
        <p>El objetivo es garantizar que los usuarios puedan usar la aplicación sin riesgos ocultos en sus dispositivos.</p>
    </div>
    
    <div class="terms-section">
        <h2>5. Limitación de responsabilidad</h2>
        <p>El creador de Crisutf TV+ no se hace responsable de los contenidos de terceros ni de posibles reclamos legales relacionados con los canales enlazados. Cada usuario es responsable de cómo utiliza el servicio.</p>
    </div>
    
    <div class="terms-section">
        <h2>6. Privacidad</h2>
        <p>Esta aplicación no recopila, almacena ni vende información personal de los usuarios. Todo el contenido se muestra directamente a través de código HTML y recursos públicos.</p>
    </div>
    
    <div class="terms-section">
        <h2>7. Modificaciones</h2>
        <p>Estos términos pueden ser actualizados en cualquier momento sin previo aviso. Al seguir utilizando el servicio, aceptas la versión vigente en ese momento.</p>
    </div>
    
    <div class="terms-section">
        <h2>8. Ley aplicable</h2>
        <p>Estos términos se interpretan bajo principios generales de uso de contenidos públicos en Internet. El creador no busca infringir derechos y está dispuesto a colaborar en caso de reclamos legítimos.</p>
    </div>
</div>


</div>
`;
}
