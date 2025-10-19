import { useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/modules/auth/schemas/SignUpSchema.js";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import google from "@/assets/icons/google.svg";
import Heading from "@/components/Heading";
import InputField from "@/modules/auth/components/InputField";
import Label from "@/modules/auth/components/Label";
import Input from "@/modules/auth/components/Input";
import Checkbox from "@/components/Checkbox";
import eyeOff from "@/assets/icons/eye-off.svg";
import eyeOn from "@/assets/icons/eye-on.svg";

function SignUp() {
    const {
        formState: { errors },
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            terms: false,
        },
        resolver: yupResolver(SignUpSchema),
        mode: "onSubmit",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (values) => {
        console.log(values);
    };

    return (
        <>
            <Logo className="inline-block mb-5 lg:mb-16" />
            <div className="w-full max-w-[556px] bg-white dark:bg-dark-secondary rounded-xl px-5 py-8 sm:px-16 lg:py-12 mx-auto animate-fade-in">
                <Heading
                    as="h1"
                    variant="h1"
                    className="mb-1 lg:mb-3 text-center lg:text-xl"
                >
                    Sign Up
                </Heading>

                <div className="flex items-center gap-x-1 justify-center text-xs mb-6 lg:mb-8 lg:text-sm ">
                    <p className="text-text3">Already have an account?</p>
                    <Link
                        to="/sign-in"
                        className="text-primary font-medium hover:underline"
                    >
                        Sign in
                    </Link>
                </div>

                <Button variant="outline" className="gap-x-1 w-full mb-5 ">
                    <img src={google} alt="Google" />
                    <span>Sign in with google</span>
                </Button>

                <p className="text-xs mb-4 lg:text-sm lg:mb-8 text-text2 dark:text-white text-center">
                    Or sign up with email
                </p>

                <form action="" onSubmit={handleSubmit(handleSignUp)}>
                    <InputField name="name" errors={errors}>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            control={control}
                            placeholder="John Doe"
                        ></Input>
                    </InputField>
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
                                placeholder="Create a password"
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

                    <Controller
                        name="terms"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                checked={field.value}
                                onChange={field.onChange}
                                className="mb-8 lg:mb-5"
                            >
                                <p className="text-xs lg:text-sm text-text2 dark:text-text3">
                                    I agree to the{" "}
                                    <span className="underline text-secondary">
                                        Teams of Use
                                    </span>{" "}
                                    and have read and understand the{" "}
                                    <span className="underline text-secondary">
                                        Privacy policy.
                                    </span>
                                </p>
                            </Checkbox>
                        )}
                    />
                    {errors.terms && (
                        <p className="text-red-500 text-sm -mt-3 mb-5">
                            {errors.terms.message}
                        </p>
                    )}

                    <Button variant="primary" className="w-full">
                        Create my account
                    </Button>
                </form>
            </div>
        </>
    );
}

export default SignUp;
