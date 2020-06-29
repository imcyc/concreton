import Layout from '../components/layout';

function Home({ stars }) {
  return (
    <Layout title="Sobre Nosotros">
      <main>
        <h1 className="title">
          CONCRETON
        </h1>
        <p className="description">
          PROBLEMAS, CAUSAS Y SOLUCIONES
        </p>
      </main>
      <ul>
        {stars.map((post) => (
          <li>{post.norma}</li>
        ))}
      </ul>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://concreton.com.mx/api/api.php')
  const json = await res.json()
  return { stars: json.Numeros }
}

export default Home;
