import Header from "./components/header";
import Footer from "./components/footer";
import AchievementsShowcase from "./components/achievementsShowcase";
import MembersShowcase from "./components/membersShowcase";
import ProjectsShowcase from "./components/projectsShowcase";
import ContactForm from "./components/contact";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="space-y-8">
      <Header />
      <Main />
      <MembersShowcase />
      <ProjectsShowcase />
      <AchievementsShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
}
