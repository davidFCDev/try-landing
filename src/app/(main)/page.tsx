import { Metadata } from "next";
import HomeTemplate from "../modules/home/template";

export const metadata: Metadata = {
  title: "Try Fitness",
  description: "Centros deportivos en Vigo.",
};

export default function Home() {
  return <HomeTemplate />;
}
