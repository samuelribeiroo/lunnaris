export interface WrapperProps {
  children: React.ReactNode
  className?: string
}

export type ContainerChildrenProps = {
  children?: React.ReactNode
  delay?: number
  reverse?: boolean,
  className?: string
}