import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { POST } from '@/utils/api';

interface Values {
  name: string;
  email: string;
  password: string;
}

const initialValues: Values = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

type RegistrationFormProps = {
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  setCloseModal,
}) => {
  const handleSubmit = (values: Values) => {
    POST('user/register', values).then((res: any) => {
      if (res.status == 200) {
        setCloseModal(false);
      }
      console.log('res', res);
    });
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className='max-w-md min-w-80 mx-auto text-gray-600'>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block  text-sm font-semibold mb-2'
              >
                Name
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300'
              />
              <div className='h-3 mt-1'>
                <ErrorMessage
                  name='name'
                  component='div'
                  className='text-red-500 text-sm '
                />
              </div>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block  text-sm font-semibold mb-2'
              >
                Email
              </label>
              <Field
                type='text'
                id='email'
                name='email'
                className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300'
              />
              <div className='h-3 mt-1'>
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm '
                />
              </div>
            </div>

            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block  text-sm font-semibold mb-2'
              >
                Password
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300'
              />
              <div className='h-3 mt-1'>
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={!isValid}
              className={`w-full ${
                !isValid ? 'bg-indigo-200' : 'bg-indigo-400 hover:bg-indigo-500'
              } text-white p-3 rounded  focus:outline-none transition duration-300`}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div className='h-8 text-red-400 p-2'>
        <div>There was an error. please try again later</div>
      </div>
    </div>
  );
};

export default RegistrationForm;
