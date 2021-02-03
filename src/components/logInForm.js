import React,{useState} from 'react'

export default function LogInForm(props){

    
    //definimos los estados del componente
    const [name, setName]= useState(" ");
    const [email, setEmail]= useState(" ");
    

    //modificamos el esto phase del componente padre
    const handleSubmit = (e) => {
      e.preventDefault();
      props.onChangePhase(2) 
    }
    return(
        <div className="columns is-centered">
            <div className="column is-3">
                <div className="box">
                    <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-left">Nombre</label>
                        <div className="control">
                            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
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
                            <select value={props.category} onChange={(e)=>props.onChangeCategory(e.target.value)} required>
                                <option></option>
                                <option value="cine">Cine</option>
                                <option value="tecnologia">Tecnología</option>
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
