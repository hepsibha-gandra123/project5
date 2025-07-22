// import Header from './Header'
// import Index from './Index'
// import State from './state.jsx'
// import React from "react";
// export default function App(){
//     return (
//         <div>
//             <Header/>
//             <Index/>
//             {/*<State/>*/}
//         </div>
//     )
// }

export default function App(){
    function signUp(formData){
        const email=formData.get("email")
        const password=formData.get("password")
        console.log(password)
        console.log(email)
    }
    return(
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="hepsi@gmail.com"/>
                <br/>

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password"/>
                <br/>

                <button>Submit</button>
            </form>
        </section>
    )
}