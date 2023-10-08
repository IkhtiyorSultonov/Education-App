import { CoursePageComponentProps } from './course-page-components.props'
import styles from "./course-page-components.module.css"
import { Heading, Tag } from '@/components';

const coursePageComponents = ({firstCategory,page,products}:CoursePageComponentProps):JSX.Element=> {
  console.log(page);
  return (
    <div className={styles.wrapper}>
      {/*TITLE*/}
        <Heading tag='h1'>{page.title}</Heading>
        <div>Sort...</div>

           {/*PRODUCTS*/}
           <div>PRODUCTS</div>
            {/*VACATIONS*/}
            <div className={styles.hhTitle}>
              <Heading tag='h2'>Vacations- {page.category}</Heading>
              <Tag color='red' size='m'>
                hh.uz
              </Tag>
            </div>
              {/*HHDATA*/}
              <div>HHDATA</div>
    </div>
    )
}

export default coursePageComponents