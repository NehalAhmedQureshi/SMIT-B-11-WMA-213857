import { useContext, useState } from 'react';
import { Input } from '@nextui-org/react';
import { Username } from '../context/Username';

function CustomInput({onchange}) {
     const [inputValue, setInputValue] = useState('');
     const [error, setError] = useState('');
     const {username , setUsername} = useContext(Username)

     // console.log(inputValue)

     const handleInputChange = (e) => {
          const value = e.target.value;

          // Regular expression to allow only lowercase letters, numbers, and special characters
          // const regex = /^[a-z0-9!#$%^&*()_+={}\[\]:;"'<>,.?/\\~-]*$/;
          const regex = /^[a-z0-9-_]*$/;

          if (regex.test(value)) {
               setInputValue(value);
               setUsername(value)
               setError('');
          } else {
               setError('Only lowercase letters(a-z), numbers(0-9), or special characters(-_) are allowed.');
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
                    id="username"
                    label="Username"
                    placeholder="Enter your username"
                    maxLength={15}
                    minLength={7}
               />
               {error && <p className="mt-2 text-red-600 font-semibold">{error}</p>}
          </div>
     );
}

export default CustomInput;
