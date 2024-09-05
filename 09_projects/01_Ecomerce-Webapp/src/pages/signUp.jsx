export default function SignUp(){
     
     return(
          <div className="signUpMain">
               <h1>SignUp</h1>
               <form className="signUpForm">
                    <input type="email" maxLength={25} className="userEmail" required/>
                    <input type="password" minLength={7} maxLength={25} className="userEmail" required/>
                    <button type="submit">Submit</button>
               </form>
          </div>
     )
}