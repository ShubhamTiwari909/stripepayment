import { useForm } from '@mantine/form';
import { useState } from 'react';
import useStore from '../store';
const Signup = () => {
  const [message, setMessage] = useState("hidden");
  const setData = useStore(state => state.setData)

  const toggleMessage = () => {
    setMessage("block")
    setTimeout(() => {
      setMessage("hidden")
    }, 3000);
  }
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <div data-theme="synthwave" className="relative flex flex-col justify-center py-4">
      <p className={`text-center text-semibold text-2xl text-green-600 mb-3 ${message}`}>Signup completed, you can go to login tab now</p>
      <div className="w-80 lg:w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Signup</h1>
        <form className="space-y-4" onSubmit={form.onSubmit((values) => {
          if(Object.keys(values).length !== 0){
            setData(values)
            toggleMessage()
            form.reset()
          }
          })}>
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" className="w-full input input-bordered"  {...form.getInputProps('name')} />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input type="text" placeholder="Email Address" className="w-full input input-bordered"  {...form.getInputProps('email')} />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered"  {...form.getInputProps('password')} />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered"  {...form.getInputProps('confirmPassword')} />
          </div>
          <div>
            <input type='submit' className="btn btn-block" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup