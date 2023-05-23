import React, { FC } from 'react';

type Props = {
  textColor: string;
  children: any;
};

const Button: FC<Props> = props => {
  return (
    <>
      <span>This is the Addon</span>
      <button style={{ color: props.textColor }}>{props.children}</button>
    </>
  );
};

export default Button;
