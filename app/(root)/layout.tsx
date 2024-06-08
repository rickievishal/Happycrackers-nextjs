interface layoutProp{
    children:React.ReactNode;
}

const layout = ({children}):layoutProp => {
  return (
    <div>{children}</div>
  )
}

export default layout