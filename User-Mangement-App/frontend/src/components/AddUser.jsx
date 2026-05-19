import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  // form submit
  const onUserCreate = async (newUser) => {
    setLoading(true);

    try {
      // make HTTP POST request
      let res = await fetch(
        "https://assignments-2-393j.onrender.com/user-api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (res.status === 201) {
        // navigate to users list
        navigate("/userlist");
      } else {
        throw new Error("Error occurred while creating user");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-orange-400 text-3xl">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-400 text-3xl">
        {error.message}
      </p>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl text-gray-600">
        Add New User
      </h1>

      {/* Create user form */}
      <form
        onSubmit={handleSubmit(onUserCreate)}
        className="max-w-96 mx-auto mt-10"
      >
        <input
          type="text"
          {...register("name")}
          className="mb-5 border w-full text-2xl"
          placeholder="Name"
        />

        <input
          type="email"
          {...register("email")}
          className="mb-5 border w-full text-2xl"
          placeholder="Email"
        />

        <input
          type="date"
          {...register("dateOfBirth")}
          className="mb-5 border w-full text-2xl"
        />

        <input
          type="number"
          {...register("mobileNumber")}
          className="mb-5 border w-full text-2xl"
          placeholder="Mobile number"
        />

        <button
          type="submit"
          className="text-2xl bg-lime-400 text-lime-50 px-8 py-4"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;