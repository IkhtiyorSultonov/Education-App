import { CoursePageComponentProps } from "./course-page-components.props";
import styles from "./course-page-components.module.css";
import { Advantages, Heading, HhData, Products, Sort, Tag, Text } from "@/components";
import { SortReducer } from "./course.reducer";
import { SortEnum } from "@/components/sort/sort.props";
import { useEffect, useReducer } from "react";
import { AnimatePresence } from "framer-motion";

const coursePageComponents = ({
  firstCategory,
  page,
  products,
}: CoursePageComponentProps): JSX.Element => {
  const [state, dispatch] = useReducer(SortReducer,{sort:SortEnum.Rating,products:products})
 const setSort=(sort:SortEnum)=>{
    dispatch({type:sort})
 } 
useEffect(()=>{
  dispatch({type:'reset',intialState:products})
},[products])

 const spring= {
  type: "spring",
  stiffness: 500,
  damping: 10
};
const animations = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 1 },
};
  
  return (
    <div className={styles.wrapper}>
      {/*TITLE*/}
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
       <Sort  sort={state.sort} setSort={setSort}/>
      </div>
      {/*PRODUCTS*/}
      <AnimatePresence>{state.products && state.products.map((c, idx) => <Products layout {...animations} key={idx} transition={spring}  product={c} />)}</AnimatePresence>
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
