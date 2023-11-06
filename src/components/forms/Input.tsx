import type { InputHTMLAttributes } from "react";

import React from 'react';

type Props = { label: string } & InputHTMLAttributes<HTMLInputElement>;
type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => (
  <div className="relative h-11 w-full min-w-[200px] my-3">
    <input
      ref={ref}
      {...props}
      className="peer h-full w-full border-b border-blue-gray-100 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      {props.label}
    </label>
  </div>
));

Input.displayName = 'Fancy Input';

export default Input;
