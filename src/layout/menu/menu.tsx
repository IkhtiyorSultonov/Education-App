import { AppContext } from "@/context/context";
import { Children, useContext } from "react";
import styles from "./menu.module.css";
import cn from "classnames";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/constants";
import Link from "next/link";
import { IFirstlevelMenu, PageItem } from "@/interfaces/menu.interface";
import { motion } from "framer-motion";

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();
  const variants = {
    visible: {
      marginBottom: 20,
      Transition: {
        when: "beforeChildren",
        staggerChildren: "0.1",
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };
  const variantsChildren={
    visible:{
      opacity:1,
      height:30,
    },
    hidden:{
      opacity:0,
      height:0,
    },
  }
  const openSecondBlok = (category:string) => {
    setMenu &&
      setMenu(
        menu.map((c) => {
          if (c._id.secondCategory===category) {
            c.isOpened = !c.isOpened;
          }

          return c;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
      {firstLevelMenu.map(c => {
        
        return (
          
          <div key={c.route}>
            <>
              <Link href={`/${c.route}/${menu[0].pages[0]._id}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: c.id ===firstCategory,
                  })}
                >
                  {c.icon}
                  <span>{c.name}</span>
                </div>
              </Link>
              {c.id ===firstCategory || buildSecondLevel(c)}
            </>
          </div>
        );
      })}
    </>
    );
  };
  const buildSecondLevel = (menuItem: IFirstlevelMenu) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((q) => {
          if (q.pages.map((p) => p._id).includes(router.asPath.split("/")[2])) {
           q.isOpened==true 
          }

          return (
            <div key={q._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondBlok(q._id.secondCategory)}
              >
                {q._id.secondCategory}
              </div>

              <motion.div
                layout
                variants={variants}
                initial={q.isOpened?"visible" : "hidden"}
                animate={q.isOpened?"visible" : "hidden"}
              >
                {buildThirdLevel(q.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
           <Link
    
        href={`/${route}/${p._id}`}
        className={cn(styles.thirdlevel, {
          [styles.thirdLevelActive]: `/${route}/${p._id}` === router.asPath,
        })}
      >
        {p.title}
      </Link>
      </motion.div>
    ));
  };

  return (
    <div className={styles.menu}>
      <div>{buildFirstLevel()}</div>
    </div>
  );
};

export default Menu;
