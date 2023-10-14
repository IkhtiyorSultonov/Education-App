import { CoursePageComponentProps } from "./course-page-components.props";
import styles from "./course-page-components.module.css";
import { Advantages, Heading, HhData, Products, Sort, Tag, Text } from "@/components";
import { SortReducer } from "./course.reducer";
import { SortEnum } from "@/components/sort/sort.props";
import { useReducer } from "react";

const coursePageComponents = ({
  firstCategory,
  page,
  products,
}: CoursePageComponentProps): JSX.Element => {
  const [state, dispatch] = useReducer(SortReducer,{sort:SortEnum.Rating,products:products})
 const setSort=(sort:SortEnum)=>{
    dispatch({type:sort})
 }  

  
  return (
    <div className={styles.wrapper}>
      {/*TITLE*/}
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
       <Sort  sort={state.sort} setSort={setSort}/>
      </div>
      {/*PRODUCTS*/}
      <div>{state.products && state.products.map((c, idx) => <Products key={idx} product={c} />)}</div>
      {/*VACATIONS*/}
      <div className={styles.hhTitle}>
        <Heading tag="h2">Vacations- {page.category}</Heading>
        <Tag color="red" size="m">
          hh.uz
        </Tag>
      </div>
      {/*HHDATA*/}
      {page.hh && (
        <HhData
          count={0}
          juniorSalary={0}
          middleSalary={0}
          seniorSalary={0}
          {...page.hh}
        />
      )}
      {/*ADVANTAGES*/}
      {page.advantages && page.advantages.length && (
        <>
          <Heading tag="h2">Advantages</Heading>
          <Advantages
            advantages={page.advantages}
            title={""}
            description={""}
            id={""}
          />
        </>
      )}
      {/*DESCRIPTION*/}
      <Text>{page.description}</Text>
      {/*SKILLS*/}

      <Heading tag="h2">Skills</Heading>
      {page.tags.length &&
        page.tags.map((c) => (
          <Tag color="primary" key={c}>
            {c}
          </Tag>
        ))}
    </div>
  );
};

export default coursePageComponents;
