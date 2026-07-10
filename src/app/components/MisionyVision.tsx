
export default function FilosofiaEmpresarial() {
    const mision:string="Proveer soluciones de software a medida, desarrollo móvil, web y sistemas de facturación de alta calidad. Nos comprometemos a entregar tecnología con arquitectura de vanguardia, respaldada por un servicio de asesoría y soporte excepcional, asegurando que cada cliente alcance sus objetivos de digitalización y escale su negocio con éxito.";
    const vision:string="Convertirnos en la primera opción tecnológica para empresas que buscan no solo proveedores, sino aliados de confianza a largo plazo. Visualizamos un futuro donde Equinox sea sinónimo de calidad global, innovación y soporte incondicional en el panorama tecnológico."

    return (
        <section id="filosofia" className="mv-section">
            <div className="grid-bg opacity-30" />

            <div className="mv-container">
                {/* Un solo título principal para toda la sección */}
                <div className="mv-header">
                    <span className="mv-eyebrow">Filosofía</span>
                    <h2 className="mv-title">Rumbo y <em>Compromiso</em></h2>
                </div>

                {/* Contenedor en cuadrícula (Grid) para ponerlas lado a lado */}
                <div className="mv-grid">

                    {/* Bloque de Misión */}
                    <div className="mv-card">
                        <h3>Nuestra <em>Misión</em></h3>
                        <p>{mision}</p>
                    </div>

                    {/* Bloque de Visión */}
                    <div className="mv-card">
                        <h3>Nuestra <em>Visión</em></h3>
                        <p>{vision}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}


