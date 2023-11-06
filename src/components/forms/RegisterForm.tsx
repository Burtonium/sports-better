import type { RegisterSchema } from "~/validation/auth";

import React from "react";
import { useRouter } from "next/router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { api } from "~/utils/api";
import Input from "./Input";

const RegisterForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const mutation = api.auth.register.useMutation({
    onError: (e) => setErrorMessage(e.message),
    onSuccess: () => router.push("/login"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>();

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    setErrorMessage(undefined);
    await mutation.mutateAsync(data)
      .catch(() => { /* do nothing */ });
  };

  return (
    <div className="radius flex flex-col items-center gap-2 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 bg-slate-900 p-8 rounded-lg">
        {errorMessage && (
          <p className="text-center text-red-600">{errorMessage}</p>
        )}
        <Input
          label="Username"
          className="rounded border py-1 px-4"
          type="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-center text-red-600">This field is required</p>
        )}
        <Input
          label="Password"
          className="rounded border py-1 px-4"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-center text-red-600">This field is required</p>
        )}
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
