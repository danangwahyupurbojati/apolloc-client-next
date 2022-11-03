import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

export default function Csr() {
    const [meals, setMeals] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const fetchData = async () => { 
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
        const result = await data.json();
        setMeals(result.meals);
        setLoading(false);
    }

    console.log(meals);
    
    useEffect(() => {
      fetchData();
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!meals) return <p>No meals data</p>

  return (
    <div>
      <Head>
        <title>CSR Meals</title>
        <meta name="description" content="Meals CSR page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Canadian Meals CSR
        </h1>

        <Link href="/fetch">
            Back
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            { 
                meals.map(r => (
                    <div style={{ margin: '16px' }} key={r.idMeal}>
                        <Image
                            src={r.strMealThumb}
                            alt="meals picture"
                            width={200}
                            height={200}
                        />
                        <h2>{r.strMeal}</h2>
                    </div>
                ))
            }
        </div>
      </main>

      
    </div>
  )
}