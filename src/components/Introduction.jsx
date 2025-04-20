// function App() itu komponen utama di aplikasi ini, nama filenya App dan nama function juga App

// Functional Component
function Introduction(props) {
    console.log("parameter kiriman: ", props.name);
    return (
        <>
            <div>
                <h1>Introduction </h1>
                <p>Halo, namaku adalah : {props.name}</p>
            </div>
        </>
    )
}

export default Introduction
