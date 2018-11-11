import React from 'react'
import ReactDOM from 'react-dom'



const Otsikko = (props) => {

    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}


const Yhteensa = (props) => {
    let yhteensa = 0;
    props.osat.map(osa => yhteensa += osa.tehtavia)

    return (
        <div><p>yhteensä {yhteensa} tehtävää</p></div>
    )

}



const Sisalto = (props) => {


    return (
        props.osat.map(osa => <div><p>#{1 + props.osat.indexOf(osa)} {osa.nimi}: yhteensä {osa.tehtavia} tehtävää</p></div>)
    )
}


const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }



    return (
        <div>
            <Otsikko kurssi={kurssi} />
            {/* <Sisalto tehtavat={tehtavat} />
                <Yhteensa tehtavat={tehtavat} /> */}
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)