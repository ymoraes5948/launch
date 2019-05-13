import React from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import * as Yup from "yup";

const initialData = {
  name: 'Yuri',
  address: { 'Conjunto Residencial 5' },
};

const schema = Yup.object().shape({
  name: Yup.string.required('Campo obrigatório'),
  address: Yup.object.shape({
    number: Yup.string().min(3, 'Número precisa 3 digitos').required('Campo obrigatório')
  })
})

function App() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
      <Input name="name" label="Nome:" />
      <br />

      <Scope path="addrress">
        <Input name="street" label="Rua:" />
        <br />
        <Input name="number" label="Rua:" />
        <br />
      </Scope>

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default App;
