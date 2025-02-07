import { Blogs } from "../components/Blogs"
import { Brand } from "../components/Brand"
import { Cards } from "../components/Cards"
import { Faq } from "../components/Faq"
import { Focus } from "../components/Focus"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Integration } from "../components/Integration"
import { Points } from "../components/Points"
import { Table } from "../components/Table"
import { Testimonial } from "../components/Testimonial"
import { Track } from "../components/Track"

export const Home = () =>{
    return(
        <>
        <Hero/>
        <Brand/>
        <Track/>
        <Points/>
        <Integration/>
        <Cards/>
        <Focus/>
        <Brand/>
        <Testimonial/>
        <Table/>
        <Blogs/>
        <Faq/>


        <Footer/>
        </>
    )
}