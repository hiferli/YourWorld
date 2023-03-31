import { useState, useEffect } from "react"
import React from 'react'

import { Loader, FormField, Card } from '../Components'

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');

    return (
        <section className="max-w-7xl mx-auto ">
            <div className="font-extrabold text-[#22328] text-[32px]">
                <h1>The Community Showcase</h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI </p>
            </div>

            <div className="mt-16">
                <FormField></FormField>
            </div>
        </section>
    )
}

export default Home
