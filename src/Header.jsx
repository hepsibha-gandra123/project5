import chefClaude from './assets/chef.png'

export default function Header(){
    return (
        <header>
            <img src={chefClaude}/>
            <h1>Chef Claude</h1>
        </header>
    )
}