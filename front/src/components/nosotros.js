
import React, { Component } from "react";
import about1 from "../img/about/1.jpg";
import about2 from "../img/about/2.jpg";
import about3 from "../img/about/3.jpg";

const Nosotros = () => {
    return (
        <div className="fondo">
            <section class="page-section" id="nosotros">
                <div class="container">
                    <div class="container">
                        <div class="text-center">
                            <br></br>
                            <h4 class="section-subheading text-muted">VIAJAR es un portal web dedicado a la comercialización de
                                Servicios Turísticos en Argentina y el Mundo. El mismo se encuentra registrado desde hace varios
                                años y estando habilitados por el Ministerio de Turismo de la Nación con el nombre de Babel
                                Empresa de Viajes y Turismo bajo el Legajo Nº 15.667.
                                Nuestros clientes están respaldados por un sólido grupo humano, distribuidos en las distintas
                                sucursales y franquicias de Babel Viajes que se encuentran dentro de nuestro pais. Todo nuestro
                                personal trabaja dia a dia para la correcta prestación de los servicios turísticos ofrecidos,
                                atendiendo a la premisa PRECIO = CALIDAD asegurando de esta manera la plena satisfacción de
                                nuestros clientes.
                                Promovemos un alto grado de especializacion lo cual nos permite brindar un servicio de
                                excelencia potenciando una de nuestras ventajas comparativas, el ser una de las Agencias de
                                Viajes con mayor cantidad de sucursales operativas en el pais.</h4>
                        </div>
                        <ul class="timeline">
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={about1}
                                    alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">Valores</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">La empresa se basa en la honestidad, el respeto mutuo, el trabajo
                                            en equipo, la responsabilidad, el profesionalismo, la transparencia en las acciones,
                                            el compromiso, el crecimiento, la innovación constante y la importancia de nuestros
                                            clientes para la vitalidad de la empresa.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={about2}
                                    alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">Misión</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">La empresa brinda una asistencia profesional a todos aquellos que
                                            necesiten un servicio de viaje. El esfuerzo está centrado en brindar respuestas
                                            rápidas, precisas y eficientes, buscando satisfacer a nuestros clientes con nuestro
                                            servicio, asesoramiento, compromiso, precio, solución de posibles inconvenientes
                                            (antes, durante ó después de cada viaje). Damos un servicio a medida, tanto para
                                            empresas, como para pasajeros individuales, ya sea viajen por placer o negocios.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={about3}
                                    alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">Visión</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">Promover el crecimiento sustentable de la organización, basado en
                                            la innovación permanente tanto en la prestación de los servicios, el acercamiento a
                                            los clientes, la calidad de la información brindada, el asesoramiento adecuado para
                                            cada necesidad.
                                            Lograr una organización flexible a los cambios que el mercado requiere, anticipar
                                            las tendencias para generar propuestas diferenciadoras y variadas.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <h4> Se
                                        <br />
                                        Parte
                                        <br />
                                        de Nuestra Historia!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Nosotros