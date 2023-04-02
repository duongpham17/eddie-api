import styles from './Style2.module.scss';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  selected?: boolean,
  background?: "light" | "dark" | "main",
  border?: "light" | "dark",
  pointer?: boolean,
};

const Container = ({children, background, border, pointer,...props}: Props) => {
  return (
    <div className={`${styles.container} ${styles[`background-${background}`]} ${styles[`border-${border}`]} ${pointer && styles.pointer}`} {...props}>
      {children}
    </div>
  )
}

export default Container