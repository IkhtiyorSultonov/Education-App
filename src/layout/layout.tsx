import { FunctionComponent } from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';
import styles from './layout.module.css';
import { AppContextProvider, IAppContext } from '@/context/context';
import { ScrollUp } from '@/components';
import { Router, useRouter } from 'next/router';
import Seo from './seo/seo';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
			<ScrollUp/>
		</div>
	);
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		const router =useRouter()


		return (

			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				{router.asPath==='/'?<Seo>
				<Component {...props}/>
				</Seo>:
					<Layout>
					<Component {...props} />
				</Layout>
				}
			</AppContextProvider>
		);
	};
};

		
		
