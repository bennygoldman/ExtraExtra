import { Link } from "react-router-dom";
import { useState } from "react";
import { pubs as pubArray } from '../../data/constants';
import SourceList from "./SourceList";
import ArticleGrid from "./ArticleGrid";
import PageTitle from "../../components/ui/PageTitle";

export default function Home() {

    // useState for the activeSource - by default it is set to All Sources
    const [activeSource, setActiveSource] = useState(pubArray[0].id);


    return (

        <>
            <PageTitle
                as='hgroup'
                className={`flex flex-col w-full items-center`}>

                <h1 className={`italic text-center font-medium text-3xl ${`md:min-w-max md:text-5xl lg:text-6xl`}`}>NEWS RETURNS TO SOCIAL MEDIA</h1>
                <p className="font-headline min-w-0 max-w-max text-2xl font-medium md:text-4xl lg:text-4xl">Canadians rejoice
                    <span className="text-xs font-normal hover:underline">
                        <Link to='about'> See HEROES, Page A2</Link>
                    </span>
                </p>

            </PageTitle >

            <SourceList
                activeSource={activeSource}
                setActiveSource={setActiveSource}
            />
            <ArticleGrid
            // activeSource={activeSource}
            />
        </>

    );
}