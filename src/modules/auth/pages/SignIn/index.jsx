import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "@/modules/auth/schemas/SignInSchema.js";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import google from "@/assets/icons/google.svg";
import Heading from "@/components/Heading";
import InputField from "@/modules/auth/components/InputField";
import Label from "@/modules/auth/components/Label";
import Input from "@/modules/auth/components/Input";
import eyeOff from "@/assets/icons/eye-off.svg";
import eyeOn from "@/assets/icons/eye-on.svg";

function SignIn() {
    const {
        formState: { errors },
        handleSubmit,
        control,
    } = useForm({
        resolver: yupResolver(SignInSchema),
        mode: "onSubmit",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (values) => {
        console.log(values);
    };

    return (
        <>
            <Logo className="inline-block mb-5 lg:mb-16" />
            <div className="w-full max-w-[556px] bg-white dark:bg-dark-secondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto animate-fade-in">
                <Heading
                    type="h1"
                    className="mb-1 lg:mb-3 text-center lg:text-lg"
                >
                    Welcome Back!
                </Heading>

                <div className="flex items-center gap-x-1 justify-center text-xs mb-6 lg:mb-8 lg:text-sm ">
                    <p className="text-text3">Don't have an account?</p>
                    <Link
                        to="/sign-up"
                        className="text-primary font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </div>

                <Button variant="outline" className="gap-x-1 w-full mb-5 ">
                    <img src={google} alt="Google" />
                    <span>Sign in with google</span>
                </Button>

                <form action="" onSubmit={handleSubmit(handleSignIn)}>
                    <InputField name="email" errors={errors}>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            name="email"
                            control={control}
                            placeholder="example@gmail.com"
                        ></Input>
                    </InputField>
                    <InputField name="password" errors={errors}>
                        <Label htmlFor="password">Password *</Label>
                        <div className="relative">
                            <Input
                                className="pr-15"
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                control={control}
                                placeholder="Enter password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
                            >
                                {showPassword ? (
                                    <img src={eyeOn} alt="" />
                                ) : (
                                    <img src={eyeOff} alt="" />
                                )}
                            </span>
                        </div>
                    </InputField>
                    <InputField>
                        <Link
                            to="/"
                            className="text-primary text-sm font-medium hover:underline ml-auto"
                        >
                            Forgot password
                        </Link>
                    </InputField>

                    <Button variant="primary" className="w-full">
                        Sign in
                    </Button>
                </form>
            </div>
        </>
    );
}

export default SignIn;
