import styles from '@/styles/components/checkboxButton.module.scss'

const CheckboxButton = ({ label = 'label', isChecked = false }) => {
  // TODO: create 2 vertions (button | box)
  return (
    <div className={`${styles.checkbox} ${isChecked && styles.selected}`}>{label}</div>
  )
}

export default CheckboxButton
