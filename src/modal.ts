export type FeaturesProps ={
    id:number;
    feature:string;
    img:any;
}

export type PointsProps = {
    id:number;
    title:string;
    description:string;
    img:any;
}
export type TestimonialProps = {
    id:number;
    name:string;
    description:string;
    designation:any;
}

export interface FAQ {
    id:number;
    question: string;
    answer: string;
}