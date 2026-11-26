import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  email: z.email("Enter a valid email address."),
});

export default function SignupForm() {
  const [joined, setJoined] = useState("");
  const form = useForm({
    defaultValues: { email: "" },
    validators: { onSubmit: schema },
    onSubmit: ({ value }) => setJoined(value.email),
  });

  if (joined)
    return (
      <p className="max-w-md text-center text-slate-600">
        Thanks, {joined} is on the list.
      </p>
    );

  return (
    <form
      noValidate
      className="flex w-full max-w-sm flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
    >
      <form.Field name="email">
        {(field) => (
          <label className="flex flex-col gap-1 text-sm font-medium">
            Email
            <input
              type="email"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal"
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors[0] && (
              <span role="alert" className="font-normal text-red-600">
                {field.state.meta.errors[0].message}
              </span>
            )}
          </label>
        )}
      </form.Field>
      <button
        type="submit"
        className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
      >
        Sign up
      </button>
    </form>
  );
}
