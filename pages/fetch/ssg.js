import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

function Ssg({data}) {
  
  console.log(data);
  const meals = data.meals;
  
  return (
    <div>
      <Head>
        <title>SSG Meals</title>
        <meta name="description" content="Meals SSG page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Canadian Meals SSG
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

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }

};

export default Ssg