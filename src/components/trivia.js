import React,{useState} from 'react'

//importamos la data
import Data from '../data/trivia.json'


export default function Trivia(props){
    let arrayNumQuestion = [];
    let numQuestion;
    let question;
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(aleatorio(0, 20));
    const [select, setSelect] = useState(false);
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    // definimos estados para el componente question y asi poder modificar el boton de forma individual


    if(props.category === "cine"){
        question = Data.cine
    }else if(props.category === "tecnologia"){
        question = Data.tegnologia
    }
    
    function aleatorio(minimo, maximo){
        return Math.floor(Math.random() * ((maximo+minimo)-minimo)+minimo)

    }

    function handleAnswer(e){
        if(!select){
            if(e.target.value === question[num].respuestaCorrecta){
                e.target.classList.add('is-success');
                setGood(good + 1);
            }else{
                e.target.classList.add('is-danger');
                setBad(bad + 1)
            }
            setSelect(true)
        }else{
            alert("Ya respondiste esta pregunta")
        }
    }

    function nextQuestion(){
        setNum(aleatorio(0,20))
        if (count === 20){
            setCount(1)
        }else{
            setCount(count + 1)
            console.log(arrayNumQuestion)
        }
        document.getElementById('question1').classList = 'button is-fullwidth is-uppercase';
        document.getElementById('question2').classList = 'button is-fullwidth is-uppercase';
        document.getElementById('question3').classList = 'button is-fullwidth is-uppercase';
        document.getElementById('question4').classList = 'button is-fullwidth is-uppercase';
        document.getElementById('question5').classList = 'button is-fullwidth is-uppercase';
        setSelect(false)
    }


    return(
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-offset-x is-5 box">
                        <p className="has-text-centered has-text-primary">{count + " de " + question.length}</p>
                        <h1 className="is-uppercase has-text-centered my-5 has-text-weight-bold">{question[num].pregunta}</h1>
                        <div className="my-3">
                            <button id="question1" className="button is-fullwidth is-uppercase" value={question[num].respuestas[0]} onClick={handleAnswer}>{question[num].respuestas[0]}</button>
                        </div>
                        <div className="my-3">
                            <button id="question2" className="button is-fullwidth is-uppercase" value={question[num].respuestas[1]} onClick={handleAnswer}>{question[num].respuestas[1]}</button>
                        </div>
                        <div className="my-3">
                            <button id="question3" className="button is-fullwidth is-uppercase" value={question[num].respuestas[2]} onClick={handleAnswer}>{question[num].respuestas[2]}</button>
                        </div>
                        <div className="my-3">
                            <button id="question4" className="button is-fullwidth is-uppercase" value={question[num].respuestas[3]} onClick={handleAnswer}>{question[num].respuestas[3]}</button>
                        </div>
                        <div className="my-3">
                            <button id="question5" className="button is-fullwidth is-uppercase" value={question[num].respuestas[4]} onClick={handleAnswer}>{question[num].respuestas[4]}</button>
                        </div>
                        <div className="my-3">
                            <button className="button is-fullwidth is-uppercase has-text-weight-bold is-primary" onClick={nextQuestion}>Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}