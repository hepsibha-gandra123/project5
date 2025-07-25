import Header from './Header'
import Index from './Index'
import State from './state.jsx'
import React from "react";
export default function App(){
    return (
        <div>
            <Header/>
            <Index/>
            {/*<State/>*/}
        </div>
    )
}

// export default function App(){
//     function signUp(formData){
//         const email=formData.get("email")
//         const password=formData.get("password")
//         console.log(password)
//         console.log(email)
//     }
//     return(
//         <section>
//             <h1>Signup form</h1>
//             <form action={signUp}>
//                 <label htmlFor="email">Email:</label>
//                 <input id="email" type="email" name="email" placeholder="hepsi@gmail.com"/>
//                 <br/>
//
//                 <label htmlFor="password">Password:</label>
//                 <input id="password" type="password" name="password"/>
//                 <br/>
//                 <label htmlFor="description">Description:</label>
//                 <textarea id="description" name="description"
//                           defaultValue="This is a description">
//
//                 </textarea>
//                 <fieldset>
//                     <legend><label>Employment Status</label></legend>
//                     <label>
//                         <input type="radio" name="employmentStatus"value="unemployed"/>
//                         Unemployed
//                     </label>
//                     <label>
//                         <input type="radio" name="employmentStatus"value="part-time"/>
//                         part-time
//                     </label>
//                     <label>
//                         <input type="radio" name="employmentStatus"value="full-time"/>
//                         full-time
//                     </label>
//                 </fieldset>
//
//                 <fieldset>
//                     <legend><label>Dietary restrictions:</label></legend>
//                     <label>
//                         <input type="checkbox" name="dietaryrestrictions"value="kosher"/>
//                         kosher
//                     </label>
//                     <label>
//                         <input type="checkbox" name="dietaryrestrictions"value="vegan"/>
//                         vegan
//                     </label>
//                     <label>
//                         <input type="checkbox" name="dietaryrestrictions" defaultChecked={true}
//                                value="gluten-free"/>
//                         gluten-free
//                     </label>
//                 </fieldset>
//                 <button>Submit</button>
//             </form>
//         </section>
//     )
// }