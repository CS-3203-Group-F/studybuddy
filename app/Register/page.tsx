"use client";
import styles from "../Login/Login.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Here you can handle form submission
  };

  return (
    <div
      style={{
        background:
          "var(--CalPal-Gradient, linear-gradient(253deg, #FFF 0.52%, #FCFBE8 33.85%, #E8FEFF 99.99%))",
      }}
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <div
        style={{ gridTemplateColumns: "1fr 2fr" }}
        className="grid rounded-2xl shadow-md overflow-clip"
      >
        <RegisterWelcomePanel />
        <div className="flex py-16 items-center justify-center bg-white">
          <div className="flex flex-col justify-end items-center gap-16 w-3/5">
            <CalPalLogo />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8 self-stretch"
            >
              {step === 1 && (
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-start items-start gap-2 self-stretch">
                      <label
                        htmlFor="firstName"
                        className="text-stone-900 text-2xl font-semibold tracking-tighter"
                      >
                        First Name
                      </label>
                      <input
                        className="p-4 rounded-lg border border-gray-300 self-stretch"
                        placeholder="Enter your first name"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 self-stretch">
                      <label
                        htmlFor="lastName"
                        className="text-stone-900 text-2xl font-semibold tracking-tighter"
                      >
                        Last Name
                      </label>
                      <input
                        className="p-4 rounded-lg border border-gray-300 self-stretch"
                        placeholder="Enter your last name"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 self-stretch">
                      <label
                        htmlFor="email"
                        className="text-stone-900 text-2xl font-semibold tracking-tighter"
                      >
                        Email
                      </label>
                      <input
                        className="p-4 rounded-lg border border-gray-300 self-stretch"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hover:bg-gray-700 p-2 bg-gray-800 rounded-lg flex-col justify-center items-center flex text-white text-lg"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-start items-start gap-2 self-stretch">
                      <label
                        htmlFor="username"
                        className="text-stone-900 text-2xl font-semibold tracking-tighter"
                      >
                        Username
                      </label>
                      <input
                        className="p-4 rounded-lg border border-gray-300 self-stretch"
                        placeholder="Enter your username"
                        {...register("username", {
                          required: "Username is required",
                        })}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-sm">
                          {errors.username.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 self-stretch">
                      <label
                        htmlFor="password"
                        className="text-stone-900 text-2xl font-semibold tracking-tighter"
                      >
                        Password
                      </label>
                      <div className="relative w-full">
                        <input
                          className="p-4 rounded-lg border border-gray-300 self-stretch w-full pr-10"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          {showPassword ? (
                            <svg
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4.5C7.306 4.5 3.326 7.2 1.639 12c1.687 4.8 5.667 7.5 10.361 7.5s8.674-2.7 10.361-7.5C20.674 7.2 16.694 4.5 12 4.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4.5C7.306 4.5 3.326 7.2 1.639 12c1.687 4.8 5.667 7.5 10.361 7.5s8.674-2.7 10.361-7.5C20.674 7.2 16.694 4.5 12 4.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM3 3l18 18"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 self-stretch">
                      <label
                        htmlFor="confirmPassword"
                        className="text-stone-900 text-2xl font-semibold tracking-tighter"
                      >
                        Confirm Password
                      </label>
                      <div className="relative w-full">
                        <input
                          className="p-4 rounded-lg border border-gray-300 self-stretch w-full pr-10"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          {...register("confirmPassword", {
                            required: "Confirm password is required",
                          })}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          {showPassword ? (
                            <svg
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4.5C7.306 4.5 3.326 7.2 1.639 12c1.687 4.8 5.667 7.5 10.361 7.5s8.674-2.7 10.361-7.5C20.674 7.2 16.694 4.5 12 4.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM3 3l18 18"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4.5C7.306 4.5 3.326 7.2 1.639 12c1.687 4.8 5.667 7.5 10.361 7.5s8.674-2.7 10.361-7.5C20.674 7.2 16.694 4.5 12 4.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM3 3l18 18"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="hover:bg-gray-700 p-2 bg-gray-800 rounded-lg flex-col justify-center items-center flex text-white text-lg"
                  >
                    Sign up
                  </button>
                </>
              )}
            </form>
            <div className="flex-row justify-center items-center inline-flex">
              <p className="text-center text-neutral-900 text-xl font-semibold">
                Already have an account?&nbsp;
              </p>
              <Link
                href="../Login"
                className="hover:underline text-center text-xl font-semibold text-blue-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CalPalLogo() {
  return (
    <div className="flex flex-row gap-2 items-center">
      {/* <span>
  <ViewList />
</span> */}
      <span className={styles.textCalPal}>CalPal</span>
    </div>
  );
}

function RegisterWelcomePanel() {
  return (
    <div className="flex justify-end items-center self-stretch py-6 px-16 border-r border-gray-200 bg-white">
      <div className="hover:gap-4 transition-all flex flex-col items-start gap-0">
        <span className={styles.textWelcome}>Getting</span>
        <span className={`${styles.textBack} ml-20`}>Started</span>
      </div>
    </div>
  );
}

export default Register;
