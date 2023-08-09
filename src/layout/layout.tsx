import { Component, FunctionComponent } from "react"
import { Footer, Header, Sidebar } from "."
import { LayoutProps } from "./layout.props"
import styles from "./layout.module.css"
<<<<<<< HEAD
=======
import { AppContextProvider, IAppContext } from "@/context/context"
>>>>>>> 19b2343 (Context provider)

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

<<<<<<< HEAD
export const withLayout=<T extends Record<string,unknown>> (Component:FunctionComponent<T>)=>{
  return function withLayoutComponent(props:T):JSX.Element {
    console.log(props);
    
    return (
      <Layout>
          <Component {...props}/>
=======
export const withLayout=<T extends Record<string,unknown> & IAppContext> (Component:FunctionComponent<T>)=>{
  return function withLayoutComponent(props:T):JSX.Element {
   
    
    return (
      <Layout>
        <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Component {...props}/>
        </AppContextProvider>
        
>>>>>>> 19b2343 (Context provider)
      </Layout>
    )
  }
}