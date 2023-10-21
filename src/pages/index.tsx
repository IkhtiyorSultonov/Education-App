import { GetServerSideProps } from 'next';
import { HomePage } from '@/page-components';
import { withLayout } from '@/layout/layout';
import { MenuItem } from '@/interfaces/menu.interface';
import axios from 'axios';


const Index = (): JSX.Element => {
	return <HomePage />;	
};	

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const {data:menu}=await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}api/page-find`,{firstcategory:0})

	return {
		props: {
			menu,
		},
	};
};

interface HomePageProps {
	menu: MenuItem[];
}