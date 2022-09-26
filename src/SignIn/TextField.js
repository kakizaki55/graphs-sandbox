import { TextField } from '@aws-amplify/ui-react';
import React from 'react';

const DefaultTextFieldExample = () => (
  <TextField
    label="Name"
    placeholder="Galadriel"
    descriptiveText="Please enter valid name"
  />
);

export default DefaultTextFieldExample;
