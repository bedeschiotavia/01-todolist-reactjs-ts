import styles from './Input.module.css'

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className={styles.container}
      placeholder="What should we do?"
      {...rest}
    />
  )
}