import React,{useState, useEffect} from 'react'

export default function LogInForm(){
    const [nombre, setNombre]= useState(" ");
    const [email, setEmail]= useState(" ");
    const [category, setCategory]= useState(" ");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(nombre)
      console.log(email)
      console.log(category)
    }
    return(
        <div className="columns is-centered">
        <div className="column is-3">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label has-text-left">Nombre</label>
                <div className="control">
                  <input className="input" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-left">Email</label>
                <div className="control">
                  <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-left">Selecciona una categoría</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select name="" id="" onChange={(e)=>setCategory(e.target.value)} required>
                      <option></option>
                      <option>Cine</option>
                      <option>Anime</option>
                      <option>Tecnología</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="is-fullwidth button is-primary" type="submit" value="Continuar"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
