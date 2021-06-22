import classnames from 'classnames';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: IProps): JSX.Element {
  return (
    <div className={classnames('bg-white shadow-md p-8', className)}>
      {children}
    </div>
  );
}
