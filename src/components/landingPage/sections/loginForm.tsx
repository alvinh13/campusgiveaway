'use client';
import React, { useState, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UiModal from '@/components/ui/uiModal';
import RegistrationForm from './registrationForm';
import { POST } from '@/utils/api';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/loader';

type Values = {
  email: string;
  password: string;
};

const initialValues: Values = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, 'too small to be true'),
});

const LoginForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { authDetails, setAuthDetails } = useAuth();
  const router = useRouter();

  const handleSubmit = (values: Values) => {
    setLoading(true);
    POST('user/login', values)
      .then((res: any) => {
        console.log('res', res);
        if (res.status == 200) {
          setAuthDetails({
            name: res.data.user.name,
            email: res.data.user.email,
            role: res.data.user.type,
            token: res.data.token,
          });
          router.push('/user/dashboard');
        } else {
          console.log('res', res);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(values);
  };

  const handleRegistrationForm = () => {
    setIsModalOpen(true);
  };

  console.log('authDetails', authDetails);

  return (
    <div className='max-w-md min-w-80 mx-auto mt-8 p-6 bg-gradient-to-bl to-violet-50 from-indigo-50 rounded-lg shadow-md'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className=''>
            <h2 className='text-3xl font-bold text-center mb-6 text-indigo-600'>
              Login
            </h2>

            <div className='mb-4 md:w-80'>
              <label
                htmlFor='email'
                className='block text-indigo-700 text-sm font-semibold mb-2'
              >
                Email
              </label>
              <Field
                type='text'
                id='email'
                name='email'
                className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300'
              />
              <div className='h-6 mt-1'>
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm '
                />
              </div>
            </div>

            <div className='mb-6 md:w-80'>
              <label
                htmlFor='password'
                className='block text-indigo-700 text-sm font-semibold mb-2'
              >
                Password
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300'
              />
              <div className='h-6 mt-1'>
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
            </div>
            {loading ? (
              <Loader padding='py-0' />
            ) : (
              <button
                type='submit'
                disabled={!isValid}
                className={`w-full ${
                  !isValid
                    ? 'bg-indigo-200'
                    : 'bg-indigo-400 hover:bg-indigo-500'
                } text-white p-3 rounded  focus:outline-none transition duration-300`}
              >
                Log In
              </button>
            )}
          </Form>
        )}
      </Formik>
      <div className='flex gap-4 pt-4 px-4 items-center justify-center'>
        <div className='text-sm text-indigo-600'>New Employee?</div>
        <button
          className=' drop-shadow-lg text-indigo-800 font-semibold'
          onClick={handleRegistrationForm}
        >
          Register
        </button>
      </div>
      <UiModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title='Registration Form'
      >
        <RegistrationForm setCloseModal={setIsModalOpen} />
      </UiModal>
    </div>
  );
};

export default LoginForm;
