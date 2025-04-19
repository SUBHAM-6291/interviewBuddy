import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

const Authlayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Authlayout;
