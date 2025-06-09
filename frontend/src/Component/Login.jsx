
//sign up form

// import { useState, useEffect } from "react";
// import {auth} from "../config/firebase";
// import {createUserWithEmailAndPassword} from 'firebase/auth';

// function Login(){
    
//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

// const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth,email,password)
//       // navigate or show success
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//     return(
// <form onSubmit={handleSubmit}>
//       <input
//         type="email" value={email}
//         onChange={e => setEmail(e.target.value)} required
//         placeholder="Email"
//       />
//       <input
//         type="password" value={password}
//         onChange={e => setPassword(e.target.value)} required
//         placeholder="Password"
//       />
//       <button type="submit">Log in</button>
//       {error && <p style={{color:'red'}}>{error}</p>}
//     </form>
//   );
    
// }
// export default Login;