import { Link } from "react-router-dom";
import Logo from "../../../../components/Logo";
import Heading from "../../components/Heading";

function SignIn() {
    return (
        <>
            <Logo className="inline-block mb-5 lg:mb-16" />
            <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
                <Heading>Welcome Back!</Heading>
            </div>
        </>
    );
}

export default SignIn;
