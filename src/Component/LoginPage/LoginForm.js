import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpForm(props) {
  const {handleFormInput,handleFormSubmit} = props;
  return (
    <Form onSubmit={handleFormSubmit}>
        <h3 className='text-light text-center'>Register info</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Label className="text-light">Name</Form.Label>
        <Form.Control onChange={handleFormInput} type="text" name="name" required placeholder="Enter Username" />


        <Form.Label className="text-light">Present Address</Form.Label>
        <Form.Control onChange={handleFormInput} type="text" name="pAddress" required placeholder="Present Address" />
        
        <Form.Label className="text-light">Permanent Address </Form.Label>
        <Form.Control onChange={handleFormInput} type="text" name="prddress" required placeholder="Permanent Address" />
        <Form.Label className="text-light">Phone Number </Form.Label>
        <Form.Control onChange={handleFormInput} type="text" name="prddress" required placeholder="Phone Number" />


        <Form.Label className="text-light">Email address</Form.Label>
        <Form.Control onChange={handleFormInput} type="email" name="email" required placeholder="Enter email" />
        <Form.Text className="text-light">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-light">Password</Form.Label>
        <Form.Control  onChange={handleFormInput} type="password" name="password" required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="text-light" type="checkbox" label=" I Agree Terms And Condition" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUpForm;