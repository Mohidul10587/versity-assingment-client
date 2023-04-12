import { sendEmailVerification } from 'firebase/auth';
import React from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import url from '../../components/url';


const SignUp = () => {



    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    const [updateProfile, updateError] = useUpdateProfile(auth);

  

   

    if (loading ) return <div className='flex justify-center items-center h-screen'> <p>Loading...</p>
    </div>
    let firebaseError;
    if (error || updateError ) {
        firebaseError = <small className='text-red-500'>{error?.message || updateError?.message}</small>
    }
    if (user) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          alert(`An verification email has sent for verify to ${user?.user.email}`)
        });
        navigate('/');
    }
    const onSubmit = async data => {
        fetch(`${url}/createUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    }
    return (
        <div className='flex justify-center items-center pt-24 min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-blue-600 shadow-xl border-[1px] border-blue-500">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input

                                type="text"
                                placeholder="Name"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'This is required field'
                                    }

                                })} />

                            <label className="label">

                                {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}

                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input

                                type="email"
                                placeholder="Email"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'This is required field'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'This is wrong email'
                                    }
                                })} />

                            <label className="label">

                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input

                                type="password"
                                placeholder="password"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'This is password required field'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters'
                                    }
                                })} />

                            <label className="label">

                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
                            </label>

                        </div>
                        {firebaseError}
                        <button
                            type="submit"
                            className="btn btn-outline w-full hover:bg-blue-700">Submit</button>


                    </form>
                    <small>Already have an account ?<Link className='text-blue-700 ml-4' to='/logIn'>Go to Login</Link></small>

                  





                </div>
            </div>
        </div>
    )
}

export default SignUp