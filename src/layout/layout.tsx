import { Component, FunctionComponent } from "react"
import { Footer, Header, Sidebar } from "."
import { LayoutProps } from "./layout.props"
import styles from "./layout.module.css"

const Layout = ({children}:LayoutProps):JSX.Element => {
  return(
  <div className={styles.wrapper}>
    <Header className={styles.header}/>
     <Sidebar className={styles.sidebar}/>
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer}/>
  </div>
  )
}

export const withLayout=<T extends Record<string,unknown>> (Component:FunctionComponent<T>)=>{
  return function withLayoutComponent(props:T):JSX.Element {
    console.log(props);
    
    return (
      <Layout>
          <Component {...props}/>
      </Layout>
    )
  }
}