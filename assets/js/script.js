document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || 'home';

  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
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
      default: loadHomePage(container); break;
    }
    requestAnimationFrame(() => container.style.opacity = '1');
  }, 300);
}

// Menú dinámico
document.querySelectorAll('nav a').forEach(link => {
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
        <p>Si tu mando no es tipo Remote Magic, el vídeo será a pantalla completa. Usa los números del <strong>2 al 89</strong> para cambiar de canal.</p>
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
                                        <span>España: 54 canales</span>
                                        </div>
                                        <div class="channel-count">
                                            <i class="fas fa-flag"></i>
                                            <span>Rakuten TV: 13 canales</span>
                                            </div>
                                            <div class="channel-count">
                                                <i class="fas fa-flag"></i>
                                                <span>Samsung TV: 4 canales</span>
                                                </div>
                                                <div class="channel-count">
                                                    <i class="fas fa-flag"></i>
                                                    <span>Pluto TV: 8 canales</span>
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
      <li><i class="fas fa-check-circle"></i> En Smart TVs con navegador de fábrica, casi todos los canales funcionan, excepto algunos Rakuten TV al abrir URL directa del servidor.</li>
      <li><i class="fas fa-exclamation-circle"></i> Las limitaciones HTTP afectan solo al navegador web en Smart TVs al abrir ciertos canales desde el servidor.</li>
      <li><i class="fas fa-mobile-alt"></i> La próxima app nativa eliminará estas restricciones, pero <strong>solo si se usa la app</strong>, no el navegador.</li>
      <li><i class="fas fa-lock"></i> Canales con <strong>HTTPS</strong> (RTVE, Real Madrid TV, etc.) funcionan en todos los dispositivos, pero son pocos.</li>
    </ul>
  </div>

  <div class="restrictions-card">
    <h2><i class="fas fa-shield-alt"></i> Proveedores con restricciones</h2>
    <div class="restrictions-content">
      <p><i class="fas fa-futbol"></i> Algunos proveedores bloquean canales HTTP durante eventos deportivos (no incluye LaLiga).</p>
      <p><i class="fas fa-envelope"></i> Si tienes problemas, escríbeme a <a href="mailto:wtf.crisu@gmail.com">wtf.crisu@gmail.com</a>.</p>
      <p><i class="fas fa-info-circle"></i> Nota: en Android TV u otros sistemas que no sean Smart TV, canales con URL mixta no funcionan en Chrome sin activar servidor.</p>
      <p><i class="fas fa-exclamation-triangle"></i> Rakuten TV no funciona en la app con modo servidor.</p>
      <p><i class="fas fa-tools"></i> Próximamente se hará mantenimiento.</p>
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
<h1 class="page-title">Cómo funciona Crisutf TV+</h1>

                <div class="instructions-grid">
                    <div class="card device-card">
                        <div class="card-header">
                            <span class="device-icon">📺</span>
                            <h2>Smart TV</h2>
                        </div>
                        <div class="card-content">
                            <div class="shortcut-list">
                                <div class="shortcut-item">
                                    <span class="key-combo">0 + 0</span>
                                    <span class="key-action">Activar vídeo completo</span>
                                </div>
                                <div class="shortcut-item">
                                    <span class="key-combo">OK</span>
                                    <span class="key-action">Pantalla completa (mandos Magic)</span>
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
                                    <span class="key-combo">F + F</span>
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

                    <div class="card info-card">
                        <div class="card-header">
                            <span class="info-icon">ℹ️</span>
                            <h2>Sobre los canales</h2>
                        </div>
                        <div class="card-content">
                            <p>Todos los canales provienen de <strong>listas públicas</strong> y funcionan <strong>24/7</strong>. Los canales HTTPS (RTVE, Real Madrid TV) son compatibles con todos los dispositivos.</p>
                        </div>
                    </div>

                    <div class="card troubleshoot-card">
                        <div class="card-header">
                            <span class="info-icon">🔧</span>
                            <h2>Solución de problemas</h2>
                        </div>
                        <div class="card-content">
                            <div class="problem-list">
                                <div class="problem-item">
                                    <h4>🚫 No reproduce</h4>
                                    <p>Canal HTTP: Usa Smart TV o la app descargable</p>
                                </div>
                                <div class="problem-item">
                                    <h4>⏳ Buffering</h4>
                                    <p>Revisa tu conexión o reduce la calidad</p>
                                </div>
                                <div class="problem-item">
                                    <h4>⌛ Tardanza con los canales "Español"</h4>
                                    <p>Espera un poco porque esos canales tardan en conectar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card support-card">
                        <div class="card-header">
                            <span class="info-icon">📝</span>
                            <h2>Notas importantes</h2>
                        </div>
                        <div class="card-content">
                            <p>Algunos proveedores pueden bloquear canales HTTP durante eventos deportivos. Para soporte técnico, contacta: <strong>wtf.crisu@gmail.com</strong></p>
                            <p class="note">En Android TV, usa la app para canales con URL mixta</p>
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
      <a href="download/Crisutf.TV-PC.exe" class="download-btn"><span class="download-icon">💻</span><span class="download-text"><strong>Windows (PC)</strong><small>Para computadoras</small></span></a>
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
${/* Es el mismo contenido de compatibilidad, si quieres lo duplico o personalizo */''}
<h1 class="page-title">Actualizaciones y Cambios</h1>

                <div class="card">

                    <div class="update-item">
                        <div class="update-date">03/07/2025</div>
                        <h3 class="update-title">Mantenimiento y reconstrucción de la base del sitio web</h3>
                        <p>Del 03/07 a las 18:57 al 10/07 a las 21:00 (hora ES).</p>
                    </div>

                    <div class="update-item">
                        <div class="update-date">01/07/2025</div>
                        <h3 class="update-title">Nuevos cales</h3>
                        <p>AXN, Discovery, Iberalia, MTV, Somos, TCM</p>
                    </div>

                    <div class="update-item">
                        <div class="update-date">01/07/2025</div>
                        <h3 class="update-title">Nuevos cales</h3>
                        <p>AXN, Discovery, Iberalia, MTV, Somos, TCM</p>
                    </div>

                    <div class="update-item">
                        <div class="update-date">30/06/2025</div>
                        <h3 class="update-title">Mini mantenimiento en las paginas</h3>
                        <p>La pagina funcionara pero se estara modificando</p>
                    </div>


                    <div class="update-item">
                        <div class="update-date">30/06/2025</div>
                        <h3 class="update-title">Revison para coreccion para la APP de Android TV</h3>
                        <p>La APP de Android TV esta un poco inestable</p>
                    </div>


                    <div class="update-item">
                        <div class="update-date">30/06/2025</div>
                        <h3 class="update-title">Nuevos canales</h3>
                        <p>Aragón TV, À Punt TV, BBC Drama, BEIN SPORT EXTRA Ñ, Calle 13 Pluto TV (Cine Clasico, MTV Originals, Accion, Cocina, Kids y el Classics y Telenvelas), El País, Esport3, ETB2, Rakuten TV (Euronews), EUROSPORT 1 y 2, HBO Plus, HBO Plus, La Mega Mundial, National Geographic, Negocios, RNE para todos, SKY SPORTS & LaLiga y WWE (Sin sonido)</p>
                    </div>

<div class="update-item">
    <div class="update-date">27/06/2025</div>
    <h3 class="update-title">APP oficial para PC</h3>
    <p>Lanzada la app para PC. Ya no se necesita Python.</p>
</div>

<div class="update-item">
    <div class="update-date">26/06/2025</div>
    <h3 class="update-title">Mantenimiento</h3>
    <p>Del 26/06 a las 22:00 al 28/06 a las 22:00 (hora ES).</p>
</div>

<div class="update-item">
    <div class="update-date">22/06/2025</div>
    <h3 class="update-title">Mantenimiento</h3>
    <p>Del 22/06 a las 22:41 al 23/06 a las 22:00 (hora ES).</p>
</div>

<div class="update-item">
    <div class="update-date">22/06/2025</div>
    <h3 class="update-title">APP para móvil y TV</h3>
    <p>Lanzada la app para Android, tablet y Smart TV.</p>
</div>

<div class="update-item">
    <div class="update-date">22/06/2025</div>
    <h3 class="update-title">Canal A3Series</h3>
    <p>Nuevo canal añadido.</p>
</div>

<div class="update-item">
    <div class="update-date">20/06/2025</div>
    <h3 class="update-title">Mantenimiento + nuevo diseño</h3>
    <p>Mantenimiento con cambios en la paleta de colores.</p>
</div>

<div class="update-item">
    <div class="update-date">18/06/2025</div>
    <h3 class="update-title">Rakuten TV</h3>
    <p>Añadidos 4 canales nuevos. Total: 12.</p>
</div>

<div class="update-item">
    <div class="update-date">18/06/2025</div>
    <h3 class="update-title">Mantenimiento técnico</h3>
    <p>Desde las 00:20 hasta las 16:00 (hora ES).</p>
</div>

<div class="update-item">
    <div class="update-date">06/06/2025</div>
    <h3 class="update-title">Nuevos canales</h3>
    <p>8madrid TV, AMC, BabyTV, FIFA+, HIT TV, y más.</p>
</div>

<div class="update-item">
    <div class="update-date">31/05/2025</div>
    <h3 class="update-title">Actualización grande</h3>
    <p>Nuevo diseño e importantes mejoras.</p>
</div>

<div class="update-item">
    <div class="update-date">24/04/2025</div>
    <h3 class="update-title">Canales rumanos</h3>
    <p>Añadidos canales de Rumanía. (Se ocultaron por ahora para futuras actualizaciones)</p>
</div>

<div class="update-item">
    <div class="update-date">17/04/2025</div>
    <h3 class="update-title">Canales españoles</h3>
    <p>Se añadieron canales de España.</p>
</div>

<div class="update-item">
    <div class="update-date">15/04/2025</div>
    <h3 class="update-title">Inicio del proyecto</h3>
    <p>Lanzamiento de Crisutf TV+.</p>
</div>

</div>
`;
}
