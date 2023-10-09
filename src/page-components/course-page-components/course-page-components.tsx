import { CoursePageComponentProps } from './course-page-components.props'
import styles from "./course-page-components.module.css"
import { Heading, HhData, Tag } from '@/components';

const coursePageComponents = ({firstCategory,page,products}:CoursePageComponentProps):JSX.Element=> {
  console.log(page.hh);
  return (
    <div className={styles.wrapper}>
      {/*TITLE*/}
        <div className={styles.title}>
        <Heading tag='h1'>{page.title}</Heading>
        <div>Sort...</div>

        </div>
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
              {page.hh && <HhData  {...page.hh}/>}
    </div>
    )
}

export default coursePageComponents