import { Form, FormGroup, Input, Label, Card, CardBody, Button } from "reactstrap";
import { useItemMutation } from "./hooks";
import { useHistory } from 'react-router-dom'
import { useEffect } from "react";

export default function NewItem({onNewItemCreated}) {
  const {mutate: createItem, isLoading, isDone} = useItemMutation()
  const history = useHistory()

  useEffect(() => {
    if (!isDone) return;
    onNewItemCreated?.()
    history.replace('/')
  }, [isDone, onNewItemCreated, history])
  return <Card>
    <CardBody>
    <Form onSubmit={(event) => {
      event.preventDefault();
      const form = event.target;
      const isValid = form.reportValidity()
      if (!isValid) return
      const formData = new FormData(form);
      const data = {}
      formData.forEach((value, key) => {
        data[key] = value
      })
      createItem(data)
      
    }}>
      <FormGroup>
        <Label for={"name"}>Name</Label>
        <Input id="name" name="name" type="text" placeholder="Ex: orange juice" required/>
      </FormGroup>
      <FormGroup>
        <Label for={"description"}>Description</Label>
        <Input id="description" name="description" type="text" placeholder="Ex: a fresh natural juice" required/>
      </FormGroup>
      <FormGroup>
        <Label for={"recipe"}>Recipe</Label>
        <Input id="recipe" name="recipe" type="text" required placeholder="Ex: 1 part of ice and 1 part of juice"/>
      </FormGroup>
      <FormGroup>
        <Label for={"serve"}>Serve</Label>
        <Input id="serve" name="serve" type="text" required placeholder="Ex: serve as cold for best taste"/>
      </FormGroup>
      <FormGroup tag={"fieldset"}>
        <legend>Kind of item?</legend>
        <FormGroup check>
          <Input id="snack" name="kind" type="radio" value="snacks" defaultChecked={true}/>
          {' '}
          <Label check for={"snack"}>Snack</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="drink" name="kind" type="radio" value="drinks"/>
          {' '}
          <Label check for={"drink"}>Drink</Label>
        </FormGroup>
      </FormGroup>
      <Button type="submit" disabled={isLoading}>Submit</Button>
    </Form>
    </CardBody>
    </Card>
}