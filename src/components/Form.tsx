import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, UserType } from "../helpers/userSchema";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });

  const printPayload = (data: UserType) => {
    fetch(
      `http://${process.env.REACT_APP_BE_HOST}:${process.env.REACT_APP_BE_PORT}/user`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(function () {
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit(printPayload)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && "border-danger"}`}
            {...register("name")}
          />
          {errors && errors.name ? (
            <p className="form-text text-danger">{errors.name.message}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" {...register("email")} />
          {errors && errors.email ? (
            <p className="form-text text-danger">{errors.email.message}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Is Admin?
          </label>
          <select
            className="form-select form-select-lg"
            {...register("isAdmin")}
            defaultValue={"no"}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!!Object.keys(errors).length && true}
        >
          Save
        </button>
      </form>
    </>
  );
}
