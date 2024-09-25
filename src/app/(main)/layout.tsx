import Footer from "../modules/layout/footer";
import NavBar from "../modules/layout/navbar";

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
