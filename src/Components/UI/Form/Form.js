import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = () => {

  const styles = {
    marginRight: '10px'
  }

  return (
    <React.Fragment>
      <h5 style={{textAlign: 'center'}}>Please fill out the form below and I'll get back to you as soon as possible!</h5>
      <form action="https://formspree.io/dennis.nathan@gmail.com" method="POST" id="contactForm">
        <TextField
            style={styles}
            id="name"
            name="name"
            label="Name"
            margin="normal"
          />
          <TextField
              id="email"
              name="email"
              label="Email"
              margin="normal"
            />
          <TextField
              id="message"
              name="message"
              label="Message"
              fullWidth
              margin="normal"
            />
          <Button variant="contained" color="primary" type="submit">Send</Button>
        </form>
      </React.Fragment>
  )

}

export default Form;
