import { useState } from 'react';
import { Input } from '@nextui-org/react';

function CustomInput() {
     const [inputValue, setInputValue] = useState('');
     const [error, setError] = useState('');

     const handleInputChange = (e) => {
          const value = e.target.value;

          // Regular expression to allow only lowercase letters, numbers, and special characters
          const regex = /^[a-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\~-]*$/;

          if (regex.test(value)) {
               setInputValue(value);
               setError('');
          } else {
               setError('Only lowercase letters, numbers, or special characters are allowed.');
          }
     };

     return (
          <div className="flex flex-col items-start w-full">
               <Input
                    labelPlaceholder="Enter lowercase letters, numbers, or special characters"
                    value={inputValue}
                    onChange={handleInputChange}
                    status={error ? 'error' : 'default'}
                    size="md"
                    id="password"
                    label="Username"
                    placeholder="Enter your username"
               />
               {error && <p color="error" className="mt-2">{error}</p>}
          </div>
     );
}

export default CustomInput;
