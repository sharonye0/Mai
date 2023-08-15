import { useNav } from "../../hooks/useNav";
import classes from "../../styles/sectionStyles/Home.module.css"

import header from "../../assets/images/header.svg";
import logo from "../../assets/images/logo.svg";
import i18next from "i18next";


function HomeSection() {
  const homeRef = useNav();

  return (
    <section ref={homeRef} id="home" className={classes.home}>
      <img src={header} alt="background" className={classes.background}/>
      <div className={classes.contentWrapper}>
        <div data-aos="fade-right" data-aos-duration="3000" className={classes.logo}>
          <img src={logo} alt="logo" className={classes.navbarLogo} />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className={classes.titleAndParagraph}>
          <h1>{i18next.t("title")}</h1>
          <p className={classes.secondaryTitle}> لتمكين الفتيات في مجال التكنولوجيا </p>
          <p className={classes.programInfo}>
            هو برنامج تدريبي يهدف إلى تمكين الفتيات في الفئة العمرية من 8 إلى 14 سنة من استخدام التكنولوجيا بشكل صحيح وزيادة وعيهن في مجال التكنولوجيا، وتشجيعهن على الاستكشاف والابتكار وبناء مستقبل واعد في مجالات العلوم والتكنولوجيا. يتم تمويل البرنامج من السيد خالد الخالدي وتنفيذه بواسطة مركز IoT KIDS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
