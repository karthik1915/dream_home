import Header from "./components/header";
import Footer from "./components/footer";
import AchievementsShowcase from "./components/achievements";
import MembersShowcase from "./components/members";
import ProjectsShowcase from "./components/projectsShowcase";
import ContactForm from "./components/contact";
import Main from "./components/main";
import NavBar from "./components/navigation";

export default function Home() {
  return (
    <>
      <NavBar shouldHide />
      <div className="space-y-8">
        <Header />
        <Main />
        <MembersShowcase />
        <ProjectsShowcase />
        <AchievementsShowcase />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
