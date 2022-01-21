import { useState } from 'react'

export const GreetingWithFunction = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [method, setMethod] = useState('')


    const handleForm = form => {
        setName(form.name.value)
        setEmail(form.email.value)
        setMethod(form.contact_method.value)
    }

    return (
        <>
            <h2>Eksempel på useState Hook med submit function:</h2>

            <div className='formwrapper'>
                <p>Skriv dit navn i feltet og tryk Send</p> <br />
                <form method="POST">
                        <div>
                            <label htmlFor='name'>Navn: </label>
                            <input type="text" name="name" id="name"></input>
                        </div>

                        <div>
                            <label htmlFor='email'>Email: </label>
                            <input type="email" name="email" id="email"></input>
                        </div>
            {/*Skal muligvis flyttes*/}
            <div>
                <ul>
                    <li>Fulde navn: {name}</li>
                    <li>Email: {email}</li>
                    <li>Kontaktmetode: {method}</li>
                </ul>
            </div>

                        <div>
                            <h3>Vælg kontaktmetode: </h3>

                            <label htmlFor='method_email'>Email</label>
                            <input type="radio" name="contact_method" id="method_email" value="Email" defaultChecked /><br />

                            <label htmlFor="method_phone">Telefon</label>
                            <input type="radio" name="contact_method" id="method_phone" value="Telefon" /> 
                        </div> <br />
                        <div>
                            <button type="button" onClick={e => handleForm(e.target.form)}>Send</button>
                            <button type="reset">Nulstil</button>
                        </div>
                </form>
            </div>
        </>
    )
}