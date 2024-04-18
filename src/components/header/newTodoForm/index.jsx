import React from 'react'
import { Field, Form, Formik } from 'formik';
import validationSchema from './validations'
import {useTodo} from '../../../contexts/TodoContext'
const NewTodoForm = () => {

  const {addTodo} = useTodo()

  return (
    <Formik
      initialValues={{
        text: '',
      }}
      onSubmit={async (values, bag) => {
        await new Promise((r) => setTimeout(r, 500))

        addTodo(values.text)
        // setTodos((prev) => [
        //   ...prev,
        //   {id: uuidv4(), text: values.text, completed: false}
        // ])
        bag.resetForm()
      }}
      validationSchema={validationSchema}
      >

      <Form>
        <label htmlFor="email">Email Address</label>
        <Field
          id="text"
          name="text"
          type="text"
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default NewTodoForm