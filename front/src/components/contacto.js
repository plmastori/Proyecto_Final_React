import React, { useState } from "react";
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }

    return (
        <main className="holder contacto">
            <div>
            <br></br>
                <section className="page-section" id="contact" >
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">¿Cómo podemos ayudarte?</h2>
                        </div>

                        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">

                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    <div className="form-group">

                                        <input className="form-control" type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre *"
                                            data-sb-validations="required" />
                                        <div class="invalid-feedback" data-sb-feedback="name:">Se requiere un nombre</div>

                                    </div>
                                    <div className="form-group">

                                        <input className="form-control" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico *"
                                            data-sb-validations="required,email" />
                                        <div class="invalid-feedback" data-sb-feedback="email:required">Un correo eléctronico es
                                            requerido</div>
                                        <div class="invalid-feedback" data-sb-feedback="email:email">Correo Eléctrónico no válido
                                        </div>
                                    </div>
                                    <div className="form-group mb-md-0">

                                        <input className="form-control" type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono *"
                                            data-sb-validations="required" />
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">Un número de teléfono es
                                            requerido</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">

                                        <textarea className="form-control" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Tu mensaje *"
                                            data-sb-validations="required"></textarea>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">Un mensaje es requerido.
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="acciones"><input type="submit" class="btn btn-primary"  value="Enviar" /></div>


                        </form>

                    </div>
                </section>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
        </main>
    )
}

export default Contacto