import {Link} from 'react-router-dom'
import { Button, Card, CardBody, CardTitle } from 'reactstrap'
export default function NotFound() {
  return <section>
    <Card>
      <CardBody>
        <CardTitle>
        The page does NOT exist
        </CardTitle>
        <Link to={'/'}><Button>Go home</Button></Link>
      </CardBody>
    </Card>
  </section>
}