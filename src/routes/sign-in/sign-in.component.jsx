import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

  return (
    <div>
        <h1>
        Sign In Page
        </h1>
        <button onClick={logGoogleUser}>Sıgn in google</button>
    </div>
  )
}

export default SignIn