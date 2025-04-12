import React, {useState} from 'react';
import {ControlledInput} from "@/app/formBuilder/ui/Input/ControlledInput";
import {Button} from "@/components/ui/button";

const ControlledPasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
        <ControlledInput {...props} type={showPassword ? 'text' : 'password'}/>
            <Button type="button" onClick={() => setShowPassword(p => !p)}>change visible password</Button>
        </>
    );
};

export default ControlledPasswordInput;